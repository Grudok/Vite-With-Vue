<script setup lang="ts">
import { ref } from 'vue';
const data = ref({
  name: 'Max',
  geb: '',
  adresse: '',
  farbe: 'Blau',
  agrees: false,
  interessen: [] as string[]
})
const interessen = ref([
  'Coding',
  'Filme/Serien',
  'Zocken',
  'Bouldern',
  'Skifahren',
  'Schlafen'
])
</script>

<template>
  <div class="bg-stone-800 text-white flex flex-col items-center min-h-screen min-w-max">
    <div class="flex flex-col w-fit justify-between space-y-2">
      <h1 class="mb-4 text-xl">Anmeldeformular:</h1>
      <div class="flex justify-between items-center">
        <label class="mr-4" for="name">Name:</label>
        <input v-model="data.name" type="text" placeholder="Name" class="bg-stone-900 p-2 rounded-lg h-8">
      </div>
      <div class="flex  justify-between">
        <label class="mr-4" for="name">Geburtsdatum:</label>
        <input v-model="data.geb" type="text" placeholder="Geburtsdatum" class="bg-stone-900 p-2 rounded-lg h-8">
      </div>
      <div class="flex  justify-between">
        <label class="mr-4" for="name">Adresse:</label>
        <input v-model="data.adresse" type="text" placeholder="Adresse" class="bg-stone-900 p-2 rounded-lg h-8">
      </div>
      <div class="flex justify-between">
        <label class="mr-4" for="farbe">Lieblingsfarbe:</label>
        <select class="bg-stone-900 p-2 rounded-lg" v-model="data.farbe" name="farbe" id="">
          <option value="Rot">Rot</option>
          <option value="Grün">Grün</option>
          <option value="Blau">Blau</option>
        </select>
      </div>
      <div class="flex flex-col space-x-2">
        <h3>Interessen:</h3>
        <div v-for="interesse in interessen" class="grid grid-cols-2">
          <input class="w-4  justify-self-end" type="checkbox" :name="interesse" :value="interesse"
            v-model="data.interessen">
          <label class="mx-2" for="agree">{{ interesse }}</label>
        </div>
      </div>
      <div class="flex space-x-2">
        <input type="checkbox" name="agrees" id="agrees" v-model="data.agrees">
        <label class="" for="agree">I agree to the Terms of service!</label>
      </div>
    </div>

    <div class="p-6 w-[500px]">
      <p>{{ data }}</p>
    </div>
  </div>
</template>

<style scoped>
</style>
