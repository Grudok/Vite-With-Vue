<script setup lang="ts">
import { ref } from 'vue';


const km = ref(0)
const temp = ref(0)

</script>

<template>
  <div class="bg-gray-800 text-white flex justify-center items-center min-h-screen">
    <div class="flex justify-center items-center">
      <input class="p-2 rounded-md w-16 text-black" type="number" v-model="km">
      <label for="km" class="px-1">km</label>
      <span>--></span>
      <div class="p-5">Miles:{{ Math.round(km / 1.609 * 100) / 100 }}</div>
    </div>
    <div class="flex justify-center items-center">
      <input class="p-2 rounded-md w-16 text-black" type="number" v-model="temp">
      <label for="temp" class="px-1">temp</label>
      <span>--></span>
      <div class="p-5">Farenheit:{{ Math.round(temp * 9/5) + 32}}</div>
    </div>
  </div>
</template>

<style scoped>

</style>
