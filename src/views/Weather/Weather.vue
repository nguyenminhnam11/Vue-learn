<script setup>
import SearchInput from "@/views/Weather/components/SearchInput.vue"
import WeatherCard from "@/views/Weather/components/WeatherCard.vue"
import { ref } from "vue"
const savedPlaces = localStorage.getItem('listWeather')
const places = ref(savedPlaces ? JSON.parse(savedPlaces) : [])


const addPlace = (data) => {
  const exists = places.value.some((place) => place.location.name === data.location.name)
  if (!exists) {
    places.value.push(data)
    localStorage.setItem('listWeather', JSON.stringify(places.value))
  } else {
    alert(`${data.location.name} has existed`)
  }
}

const deletePlace = (name) => {
  places.value = places.value.filter(p => p.location.name !== name)
  localStorage.setItem('listWeather', JSON.stringify(places.value))
}
</script>

<template>
  <main class="weather-app">
    <h1>Weather App</h1>
    <div class="today-date">
      {{
        new Date().toLocaleDateString("en-us", {
          weekday: "long",
          year: "numeric",
          month: "long",
          day: "numeric",
        })
      }}
    </div>

    <SearchInput @place-data="addPlace" />

    <WeatherCard :place="place" :places="places"@delete-place="deletePlace"/>
    
  </main>
</template>

<style lang="scss">
.weather-app {
  padding-top: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #2a2f4a;

  h1 {
    color: var(--light);
  }
  .today-date {
    margin-top: 10px;
    color: var(--light);
  }
}
</style>
