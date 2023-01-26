<script setup lang="ts">
import { ref , watch, computed} from 'vue';
import { punkapiResponse } from "../interfaces/beer.interface"
const beerList = ref<punkapiResponse[]>([])

let debounceTimeout: number | null = null
const filterName = ref("")
const filterABV = ref("")
const food = ref("")

watch([filterName, filterABV, food], async ([newFilterName, newFilterABV, newFood]) =>{
  if(debounceTimeout != null) {clearTimeout(debounceTimeout)}

  debounceTimeout = setTimeout(async () => {
    let query = ""
    if(newFilterName != "" || newFilterABV != ""  || newFood != null){
      query = "?"
      query += newFilterName ? `beer_name=${newFilterName}` : ""
      query += newFilterABV ? `abv=${newFilterABV}` : ""
      query += newFood ? `&food=${newFood}` : ""      
    }

    const response = await fetch("https://api.punkapi.com/v2/beers/" + query)
    const json: punkapiResponse[] = await response.json()

    beerList.value = json
    console.log(json)
    debounceTimeout = null
  }, 500)
}, {immediate: true})

const AddPriceToBeerList = computed(() => {
  return beerList.value.map(beer => {
    beer.price = 3
    beer.deposit = 0.29
    beer.price_ingredients = (beer.ingredients.malt.length * 0.2) + (beer.ingredients.hops.length * 0.2)
    beer.price = beer.price + beer.price_ingredients
    return beer
  })
})



</script>
<template>
  <div class="bg-gray-800 text-white flex justify-center items-center min-h-screen">
    <div class="flex flex-col w-fit">
      <div class="flex items-center space-x-4">
        <div class="text-3xl mb-4 h-8">Beers</div>
        <input class="bg-black" type="text" v-model="filterName">
        <input class="bg-black" type="number" v-model="filterABV">
        <input class="bg-black" type="text" v-model="food">
      </div>
      <template v-for="beer in beerList" :key="beer.id">
        <template v-for="beer in AddPriceToBeerList" :key="beer.price"></template>
        <div class="bg-gray-400 mb-2 p-4 flex items-center rounded-md text-black">
          <img class="w-4" v-if="beer.image_url != null" :src="beer.image_url" :alt="`Image of ${beer.name}`">
          <div class="px-4">
            <span>{{ beer.id }}</span>
            {{ beer.name }}
            <p class="text-xs max-w-d">{{ beer.brewers_tips }}</p>
            <p class="text-xs max-w-d"> ABV/Alcohol: {{ beer.abv }} %</p>
            <p class="text-xs max-w-d"> Price: {{ beer.price }} €</p>
          </div>
        </div>
      </template>
    </div>
  </div>
</template>

<style scoped>

</style> 
