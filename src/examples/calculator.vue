<script setup lang="ts">
import { ref, watch } from "vue";
const expression = ref("");
const result = ref("0");
let debounceTimeout: number | null = null;
watch(expression, () => {
	if (debounceTimeout != null) {
		clearTimeout(debounceTimeout);
	}
	// set result to 0 and return from the watch function when expression is empty
	if (expression.value === "") {
		result.value = "0";
		return;
	}
	debounceTimeout = setTimeout(async () => {
		const query = new URLSearchParams([["expr", expression.value]]);
		const response = await fetch("http://api.mathjs.org/v4/?" + query.toString());
		let data = await response.text();
		result.value = data;
		debounceTimeout = null;
	}, 1000);
});
</script>

<template>
	<div class="dark:bg-stone-800 dark:text-white flex flex-col items-center min-h-screen min-w-max">
		<div class="flex flex-col w-fit justify-between space-y-2 p-10">
			<div class="grid grid-cols-6 justify-items-center place-items-center gap-2 p-4 rounded-sm border-2 border-stone-900">
				<p class="col-span-6 justify-self-end text-sm"><span>= </span>{{ result }}</p>
				<input
					v-model="expression"
					type="text"
					placeholder="ⅇ = ⅀n=0∞ 1n!"
					class="border border-stone-900 dark:bg-stone-900 p-2 rounded-sm w-full text-right col-span-6"
				/>
				<button @click="expression += 'pi'" class="">π</button>
				<button @click="expression += '!'" class="">x!</button>
				<button @click="expression += '('" class="">(</button>
				<button @click="expression += ')'" class="">)</button>
				<button @click="expression += '%'" class="">%</button>
				<button @click="expression = ''" class="">AC</button>
				<button @click="expression += 'e'" class="">e</button>
				<button @click="expression += 'log('" class="">ln</button>
				<button @click="expression += '7'" class="bg-stone-200 hover:bg-stone-300 dark:bg-neutral-700 dark:hover:bg-neutral-600">7</button>
				<button @click="expression += '8'" class="bg-stone-200 hover:bg-stone-300 dark:bg-neutral-700 dark:hover:bg-neutral-600">8</button>
				<button @click="expression += '9'" class="bg-stone-200 hover:bg-stone-300 dark:bg-neutral-700 dark:hover:bg-neutral-600">9</button>
				<button @click="expression += '/'" class="">/</button>
				<button @click="expression += 'sin('" class="">sin</button>
				<button @click="expression += 'log('" class="">log</button>
				<button @click="expression += '4'" class="bg-stone-200 hover:bg-stone-300 dark:bg-neutral-700 dark:hover:bg-neutral-600">4</button>
				<button @click="expression += '5'" class="bg-stone-200 hover:bg-stone-300 dark:bg-neutral-700 dark:hover:bg-neutral-600">5</button>
				<button @click="expression += '6'" class="bg-stone-200 hover:bg-stone-300 dark:bg-neutral-700 dark:hover:bg-neutral-600">6</button>
				<button @click="expression += '*'" class="">*</button>
				<button @click="expression += 'cos'" class="">cos</button>
				<button @click="expression += 'sqrt('" class="">√</button>
				<button @click="expression += '1'" class="bg-stone-200 hover:bg-stone-300 dark:bg-neutral-700 dark:hover:bg-neutral-600">1</button>
				<button @click="expression += '2'" class="bg-stone-200 hover:bg-stone-300 dark:bg-neutral-700 dark:hover:bg-neutral-600">2</button>
				<button @click="expression += '3'" class="bg-stone-200 hover:bg-stone-300 dark:bg-neutral-700 dark:hover:bg-neutral-600">3</button>
				<button @click="expression += '-'" class="">-</button>
				<button @click="expression += 'tan('" class="">tan</button>
				<button @click="expression += '^'" class="">xⁿ</button>
				<button @click="expression += '0'" class="bg-stone-200 hover:bg-stone-300 dark:bg-neutral-700 dark:hover:bg-neutral-600">0</button>
				<button @click="expression += '.'" class="bg-stone-200 hover:bg-stone-300 dark:bg-neutral-700 dark:hover:bg-neutral-600">.</button>
				<button @click="expression = result" class="bg-blue-500 text-white hover:bg-blue-400 dark:bg-blue-700 dark:hover:bg-blue-600">=</button>
				<button @click="expression += '+'" class="">+</button>
			</div>
		</div>
	</div>
</template>

<style>
button {
	@apply bg-stone-300 hover:bg-stone-400 dark:bg-stone-900 w-12 h-8 dark:hover:bg-stone-700 rounded-sm;
}
</style>