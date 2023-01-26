<script setup lang="ts">
import { punkAPIResponse } from '../interfaces';


defineProps<{
    craftBeer: punkAPIResponse
}>();

</script>

<template>
<div class="flex p-6 gap-8 w-full bg-gradient-to-l from-slate-600 to-stone-700 rounded-md">
    <img class="w-16 bg-slate-100 p-2" v-if="craftBeer.image_url" :src="craftBeer.image_url" :alt="craftBeer.name">
    <div class="text-white">
        <h2 class="text-2xl">{{ craftBeer.name }}</h2>
        <p class="mb-6">{{ craftBeer.tagline }}</p>
        <p>{{ craftBeer.description }}</p>
        <p>{{ craftBeer.brewers_tips }}</p>
        <p>{{ craftBeer.abv }}</p>
    </div>
</div>
</template>

<style scoped>

</style>