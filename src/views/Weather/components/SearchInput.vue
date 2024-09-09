<template>
  <div class="search-input">
    <form>
      <span class="material-symbols-outlined"> search </span>
      <input
        type="text"
        placeholder="Search by City, Country"
        v-model="searchTerm.query"
        @input="handleSearch"
      />
    </form>
  </div>
  <div class="search-suggestion">
    <div class="search-item" v-if="searchTerm.result !== null">
      <div class="result" v-for="place in searchTerm.result" :key="place.id">
        <button @click="getWeather(place.id)">
          {{ place.name }}, {{ place.region ? place.region + "," : "" }}
          {{ place.country }}
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { reactive } from "vue";

const emit = defineEmits(['place-data'])

const searchTerm = reactive({
  query: "",
  timeout: null,
  result: null,
});

const handleSearch = () => {
  clearTimeout(searchTerm.timeout);
  searchTerm.timeout = setTimeout(async () => {
    if (searchTerm.query !== "") {
      const res = await fetch(
        `http://api.weatherapi.com/v1/search.json?key=4a81adcc30de4dbc820153525240509&q=${searchTerm.query}`
      );
      const data = await res.json();
      searchTerm.result = data;
    } else {
      searchTerm.result = null;
    }
  }, 400);
};

const getWeather = async (id) => {
    const res = await fetch(`http://api.weatherapi.com/v1/forecast.json?key=4a81adcc30de4dbc820153525240509&q=id:${id}&days=3&aqi=no&alerts=no`)

    const data = await res.json()
    emit('place-data', data)

    searchTerm.query = ''
    searchTerm.result = null
}
</script>

<style lang="scss" scoped>
.search-input {
  margin-top: 30px;
  width: 600px;
  display: flex;
}

.search-suggestion {
  margin-top: 3px;
  width: 600px;
  position: absolute;
  top: 163px;
  z-index: 99;
  .search-item {
    border-radius: 8px;

    .result {
      float: right;
      width: 555px;
      padding: 15px 10px;
      background-color: var(--primary);

      button {
        color: var(--dark-alt);
        font-size: 1rem;

        &:hover {
          color: var(--light);
        }
      }
    }
  }
}

form {
  width: 100%;
  display: flex;
  align-items: center;
  border: 2px solid var(--primary);
  border-radius: 8px;
  color: var(--light);

  input {
    height: 100%;
    padding: 0 10px;
    font-size: 1rem;
    width: 100%;
    border: none;
    background-color: transparent;
    outline-color: var(--primary);
    border-radius: 0 8px 8px 0;
    color: var(--light);
  }

  span {
    padding: 10px;
    border: 1px solid black;
    border: none;
  }
}
</style>
