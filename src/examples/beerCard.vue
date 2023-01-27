<script setup lang="ts">
import type { punkAPIResponse } from '../interfaces';


defineProps<{
    craftBeer: punkAPIResponse;
}>();

</script>

<template>
<div class="flex p-6 gap-8 w-full bg-gradient-to-l from-slate-600 to-stone-700 rounded-md">
    <img class="w-28 bg-slate-100 p-2" v-if="craftBeer.image_url" :src="craftBeer.image_url" :alt="craftBeer.name">
    <div class="text-white">
        <h2 class="text-2xl">{{ craftBeer.name }}</h2>
        <p class="mb-6">{{ craftBeer.tagline }}</p>
        <p class="mb-2">{{ craftBeer.description }}</p>
        <p class="mb-2">{{ craftBeer.brewers_tips }}</p>
        <p class="mb-2">{{ craftBeer.abv + "%"}}</p>
        <p class="pl-4" v-for="food in craftBeer.food_pairing">{{ food }}</p>
    </div>
</div>
</template>
<style scoped></style>