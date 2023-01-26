<script setup lang="ts">
import { computed, ref } from 'vue';
const km = ref(0)
const celsius = ref(0)
const decimals = ref(4)
const miles = computed(() => {
  return km.value / 1.609
})
const milesRounded = computed(() => {
  return miles.value.toFixed(decimals.value)
})
</script>

<template>
  <div class="bg-stone-800 text-white flex flex-col justify-center items-center min-h-screen">
    <div class="flex flex-col w-fit">
      <div class="flex flex-wrap  justify-between items-center mb-4">
        <input class="bg-stone-900 p-2 rounded-lg w-16" type="number" v-model="km">
        <label for="km" class="px-1">km</label>
        <span class="mr-auto">»</span>
        <div class="px-1">Miles: {{ milesRounded }}</div>
      </div>
      <div class="flex flex-wrap justify-between items-center ">
        <input class="bg-stone-900 p-2 rounded-lg w-16" type="number" v-model="celsius">
        <label for="km" class="px-1">°C</label>
        <span class="mr-auto">»</span>
        <div class="px-1">Fahrenheit: {{ ((celsius * 9 / 5) + 32).toFixed(2) }}</div>
      </div>
    </div>
  </div>
</template>

<style scoped>
</style>