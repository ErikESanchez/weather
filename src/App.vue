<template>
  <button @click="getWeatherData">What Up</button>
  <button @click="bruh"></button>
</template>

<script lang="ts">
// Todo: Figure out how to use vuex later
// import { createStore } from "vuex";
import axios from "axios";
// import apikey from "./apikey";
const weatherURL = "http://api.weatherapi.com/v1/forecast.json";

export default {
  name: "App",
  methods: {
    async getWeatherData() {
      console.log("bruh");
      return await axios
        .get(weatherURL, {
          params: {
            key: "d56a149322664e6eb25114019200311",
            q: "Dallas",
            days: 5
          },
        })
        .then((res) => {
          console.log(res);
        });
    },
  },
};
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
