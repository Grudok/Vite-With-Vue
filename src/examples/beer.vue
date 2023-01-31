<script setup lang="ts">
import { onMounted, ref, watchEffect } from 'vue';
import beerCard from '../examples/beerCard.vue';
import navBar from '../examples/navBar.vue';
import axios from 'axios';
import type { punkAPIResponse } from '../interfaces/index';

const craftBeers = ref<punkAPIResponse[]>([]);
const filter = ref({
  food: "",
  search: "",
})

watchEffect(async () => {
  const querry = new URLSearchParams()
  if (filter.value.search != '') {
    querry.append("beer_name", filter.value.search)
  }
  if (filter.value.food != '') {
    querry.append("food", filter.value.food)
  }
  const axiosResponse = await axios.get<punkAPIResponse[]>("https://api.punkapi.com/v2/beers?" + querry.toString());
  craftBeers.value = axiosResponse.data
});

</script>

<template>
  <navBar @searchTermChanged="(value) => (filter.search = value)"
    @foodPairingChanged="(value) => (filter.food = value)" />
  <div class="flex flex-col space-y-2">
    <beerCard v-for="craftBeer in craftBeers" :craftBeer="craftBeer" />
  </div>
</template>

<style scoped></style>