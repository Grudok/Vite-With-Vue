<script setup lang="ts">
import {ref, watch, watchEffect} from "vue"

const searchTerm = ref("");

const emit = defineEmits<{
    (e:"searchTermChanged", searchTerm: string): void;
}>();

watchEffect(() =>{
    emit("searchTermChanged", searchTerm.value)
})

</script>



<template>
<nav class="bg-gradient-to-l from-slate-600 to-stone-700 w-full flex flex-row items-center p-4 gap-4 mb-2">
    <img class="w-24" src="https://www.brewdog.com/assets/shared/icons/shield.svg">
    <h2 class="text-white">PunkAPI-Explorer</h2>
    <input class="rounded-md p-2" type="text" placeholder="search" v-model="searchTerm">
</nav>
</template>