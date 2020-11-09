<template>
  <div class="card text-center">
    <div class="card-header">
      <ul class="nav nav-tabs card-header-tabs nav-fill">
        <li class="nav-item">
          <a class="nav-link active" href="#">Current Weather</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Forecast</a>
        </li>
        <li class="nav-item">
          <a
            class="nav-link disabled"
            href="#"
            tabindex="-1"
            aria-disabled="true"
            >Disabled</a
          >
        </li>
      </ul>
    </div>
    <div class="card-header">
      {{ location.name }}, {{ location.region }},
      {{ location.country }}
    </div>
    <div class="card-body">
      <h5 class="card-title">
        Current Temperature {{ currentWeather.currentTemp }} °F
      </h5>
      <h5>Wind: {{currentWeather.wind}} <i class="fas fa-wind"></i></h5>
      <p class="card-text">
        With supporting text below as a natural lead-in to additional content.
      </p>
    </div>
    <div class="card-footer text-muted">{{ location.localtime }}</div>
  </div>
</template>

<script lang="ts">
// Todo: Figure out how to use vuex later
// import { createStore } from "vuex";
import axios from "axios";
import apikey from "./apikey";
// ? If I remove the ts it gives me an error rendering 
const weatherURL = "http://api.weatherapi.com/v1/";

export default {
  name: "App",
  data: () => ({
    // Todo: Figure out how to typecast data property
    forecast: {},
    location: {},
    currentWeather: {},
  }),
  mounted(){
    this.getCurrentWeather()
  },
  methods: {
    async getCurrentWeather() {
      console.log("bruh");
      return await axios
        .get(weatherURL + "current.json", {
          params: {
            key: apikey,
            q: "Dallas",
            days: 5,
          },
        })
        .then((res) => {
          console.log(res);
          this.currentWeather = {
            currentTemp: res.data.current.temp_f,
            wind: res.data.current.wind_mph
          };
          this.location = {
            country: res.data.location.country,
            region: res.data.location.region,
            // *Name is city
            name: res.data.location.name,
            localtime: res.data.location.localtime,
          };
        });
    },
  },
};

// interface Forecast {
//   country: string;
// }
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
