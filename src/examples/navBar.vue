<script setup lang="ts">
import { ref, watchEffect } from "vue"
import searchBar from "./searchBar.vue";

const searchTerm = ref("");

const emit = defineEmits<{
    (e: "searchTermChanged", searchTerm: string): void;
    (e: "foodPairingChanged", value: string): void;
}>();

watchEffect(() => {
    emit("searchTermChanged", searchTerm.value);
})
</script>

<template>
    <nav class="bg-gradient-to-l from-slate-600 to-stone-700 w-full flex flex-row items-center p-4 gap-4 mb-2">
        <img class="w-24" src="https://www.brewdog.com/assets/shared/icons/shield.svg" alt="Brewdog Logo">
        <h2 class="text-white">PunkAPI-Explorer</h2>
        <searchBar label="Search" placeholder="Search for Name" v-model="searchTerm" />
        <searchBar label="Food" placeholder="Search for Food Pairings" @update:modelValue="(value: any) => $emit('foodPairingChanged', value)"></searchBar>
    </nav>
</template>
<style scoped></style>