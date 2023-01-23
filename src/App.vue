<script setup lang="ts">
import { ref } from 'vue';


const km = ref(0)

</script>

<template>
  <div class="bg-gray-800 text-white flex justify-center items-center min-h-screen">
    <input class="p-2 rounded-md w-16 text-black" type="number" v-model="km">
    <span>--></span>
    <div class="p-5">Miles:{{ Math.round(km / 1.609 * 100) / 100 }}</div>
  </div>
</template>

<style scoped>

</style>
