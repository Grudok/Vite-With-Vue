<script setup lang="ts">
import { onMounted, ref } from 'vue';
import beerCard from './components/beerCard.vue';
import navBar from './components/navBar.vue';
import axios from 'axios';
import {punkAPIResponse} from './interfaces/index';

const craftBeers = ref<punkAPIResponse[]>([]);


onMounted(async() => {
  const axiosResponse = await axios.get<punkAPIResponse[]>("https://api.punkapi.com/v2/beers")

  craftBeers.value = axiosResponse.data
});

async function updateCraftBeers(searchTerm:string) {
  const querry = new URLSearchParams([["beer_name", searchTerm]])

  const axiosResponse = await axios.get<punkAPIResponse[]>("https://api.punkapi.com/v2/beers?" + querry.toString());

  craftBeers.value = axiosResponse.data
}

</script>

<template>
  <navBar @searchTermChanged="updateCraftBeers"/>
  <div class="flex flex-col space-y-2">
    <beerCard v-for="craftBeer in craftBeers" :craftBeer="craftBeer"/>
  </div>
</template>

<style></style>
