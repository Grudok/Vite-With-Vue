<script setup lang="ts">
import { ref, computed, onMounted, watch } from "vue"
const calculation: any = ref(0);

let debounceTimeout: number | null = null
watch(calculation, async (newCalculation) => {
  if (debounceTimeout != null) { clearTimeout(debounceTimeout) }

  debounceTimeout = setTimeout(async () => {
    const query = new URLSearchParams([["expr", calculation.value]])
    const response = await fetch("http://api.mathjs.org/v4/?" + query.toString())

    calculation.value = await response.text();

    debounceTimeout = null
  }, 3400)
}, { immediate: true })


</script>
<template>
  <div class="bg-gray-800 text-white flex justify-center items-center min-h-screen">
    <div class="flex flex-col w-fit">
      <div id="result">
        <p> {{ calculation || '0'}} </p>
      </div>
      <input class="w-full h-12 border border-black text-black" type="string" v-model="calculation.value">
      <div>
        <div class="grid grid-cols-6 gap-2 pt-3 bg-slate-600 px-5 py-5">
          <button @click="calculation = String(calculation + 3.14)" class="btn">π</button>
          <button class="btn">x!</button>
          <button @click="calculation = String(calculation + '(')" class="btn">(</button>
          <button @click="calculation = String(calculation + ')')" class="btn">)</button>
          <button class="btn">%</button>
          <button @click="calculation = 0" class="btn">AC</button>
          <button class="btn">e</button>
          <button class="btn">ln</button>
          <button @click="calculation = String(calculation + 7)" class="btnNumber">7</button>
          <button @click="calculation = String(calculation + 8)" class="btnNumber">8</button>
          <button @click="calculation = String(calculation + 9)" class="btnNumber">9</button>
          <button @click="calculation = String(calculation + '/')" class="btn">/</button>
          <button class="btn">sin</button>
          <button class="btn">log</button>
          <button @click="calculation = String(calculation + 4)" class="btnNumber">4</button>
          <button @click="calculation = String(calculation + 5)" class="btnNumber">5</button>
          <button @click="calculation = String(calculation + 6)" class="btnNumber">6</button>
          <button @click="calculation = String(calculation + '*')" class="btn">x</button>
          <button class="btn">cos</button>
          <button class="btn">√</button>
          <button @click="calculation = String(calculation + 1)" class="btnNumber">1</button>
          <button @click="calculation = String(calculation + 2)" class="btnNumber">2</button>
          <button @click="calculation = String(calculation + 3)" class="btnNumber">3</button>
          <button @click="calculation = String(calculation + '-')" class="btn">-</button>
          <button class="btn">tan</button>
          <button class="btn">x²</button>
          <button @click="calculation = String(calculation + 0)" class="btnNumber">0</button>
          <button @click="calculation = String(calculation + '.')" class="btnNumber">.</button>
          <button @click="" class="btnEquals">=</button>
          <button @click="calculation = String(calculation + '+')" class="btn">+</button>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>
