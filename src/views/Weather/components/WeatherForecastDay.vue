<template>
  <div class="weather-forecast-day-wrapper">
    <table class="weather-table">
      <tbody>
        <tr>
          <!-- day of the week -->
          <td class="col-1">
            {{
              new Date(day.date).toLocaleDateString("en-us", {
                weekday: "long",
              })
            }}
          </td>

          <!-- icon -->
          <td class="col-2">
            <img :src="day.day.condition.icon" alt="icon" width="30" />
          </td>

          <!-- high/low temp -->
          <td class="col-3">
            {{ Math.round(day.day.maxtemp_c) }} /
            {{ Math.round(day.day.mintemp_c) }}
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script setup>
defineProps({
  day: Object,
});
</script>

<style lang="scss" scoped>
.weather-forecast-day-wrapper {
  display: flex;
  width: 100%;
  justify-content: space-between;

  .weather-table {
    width: 100%;
    .col-1 {
      width: 100px;
    }

    .col-2 {
      width: 100%;
      display: flex;
      justify-content: center;
    }
    .col-3 {
      width: 100px;
      text-align: right;
    }
  }
}
</style>
