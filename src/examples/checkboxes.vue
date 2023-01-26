<script setup lang="ts">
import { computed, ref } from 'vue';
const firstCheckbox = ref(false)
const secondCheckbox = ref(false)
const thirdCheckbox = ref(false)
const secondClass = computed(() => {
  if (secondCheckbox.value) {
    return ['bg-blue-500']
  }
  else {
    return ['bg-red-600']
  }
})
</script>

<template>
  <div class="bg-stone-800 text-white flex flex-col justify-center items-center min-h-screen">
    <div class="flex flex-col w-fit transition-all">
      <div>
        <input type="checkbox" name="first" id="first" v-model="firstCheckbox">
        <label for="first"> First Checkbox</label>
      </div>
      <div>
        <input type="checkbox" name="Second" id="Second" v-model="secondCheckbox">
        <label for="Second"> Second Checkbox</label>
      </div>
      <div>
        <input type="checkbox" name="Third" id="Third" v-model="thirdCheckbox">
        <label for="Third"> Third Checkbox</label>
      </div>
      <div :class="[firstCheckbox === true ? 'bg-green-500' : ' bg-red-500', 'transition-colors']">
        First Checkbox: {{ firstCheckbox }}
      </div>
      <div :class="secondClass" class="transition-colors">Second Checkbox: {{ secondCheckbox }}</div>
      <div :class="{ 'bg-amber-500': thirdCheckbox, 'bg-red-800': !thirdCheckbox }">Third Checkbox: {{ thirdCheckbox }}
      </div>
    </div>
  </div>
</template>

<style scoped>
</style>