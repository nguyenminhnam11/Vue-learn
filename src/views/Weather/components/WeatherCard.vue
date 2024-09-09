<template>
  <main class="weather-card">
    <div class="weather-card-wrapper">
      <div class="card-item" :class="place.current.is_day === 1 ? 'bg-day': 'bg-night'" v-for="(place, index) in places" :key="index">
        <div class="location">
          <span class="material-symbols-outlined"> location_on </span>
          <h2>{{ place.location.name }}</h2>
        </div>
        <div class="temperature">
          <img :src="place.current.condition.icon" alt="" width="100" />
          <h1 class="temp-c">{{ Math.round(place.current.temp_c) }}&deg;C</h1>
          <p class="desc">{{ place.current.condition.text }}</p>
        </div>
        <div v-for="(day, index) in place.forecast.forecastday" :key="index">
          <WeatherForecastDay :day="day" />
        </div>
        <div class="remove-card-btn">
          <span @click="removePlace(place.location.name)" class="material-symbols-outlined">delete</span>
        </div>
      </div>
    </div>
  </main>
</template>

<script setup>
import WeatherForecastDay from "@/views/Weather/components/WeatherForecastDay.vue";
defineProps({
  place: Object,
  places: Array,
});
const emit = defineEmits(['delete-place'])

const removePlace = (placeName) => {
  emit('delete-place', placeName)
}

</script>

<style lang="scss" scoped>
.weather-card {
  width: 100%;

  .weather-card-wrapper {
    width: 80%;
    margin: 30px auto;
    display: grid;
    grid-template-columns: repeat(auto-fit, 350px);
    gap: 30px;
    justify-content: center;

    .card-item {
      border-radius: 10px;
      background-color: var(--dark-alt);
      padding: 20px;
      padding-bottom: 60px;
      color: var(--light);
      position: relative;

      .location {
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 5px;
      }

      .temperature {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        gap: 10px;
        margin-bottom: 20px;

        .temp-c {
          font-size: 3rem;
        }

        .desc {
          font-size: 1.2rem;
        }
      }

      .remove-card-btn {
        position: absolute;
        bottom: 20px;
        right: 20px;
        cursor: pointer;
      }
    }
  }

  .bg-day {
    background-color: #8ec5fcdb;
    background-image: linear-gradient(62deg, #8ec5fc 0%, #dfc1fac2 100%);
  }
  .bg-night {
    background-color: #07223d;
    background-image: linear-gradient(62deg, #0a2a4a 0%, #270845 100%);
  }
}
</style>
