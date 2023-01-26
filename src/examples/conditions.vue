<script setup lang="ts">
import { ref } from 'vue';
const mood = ref(9)
</script>

<template>
  <div v-if="mood < 5"> 😭 </div>
  <div v-else-if="mood < 8"> 😐 </div>
  <div v-else>😃</div>
</template>

<style scoped>
</style>