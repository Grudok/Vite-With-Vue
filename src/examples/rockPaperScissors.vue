<script lang="ts">
import { Ref, ref } from 'vue'

let userPick = ref<string>()
let computerPick = ref<string>()
const text = ref<string>()
const wins = ref(0)
const draws = ref(0)
const losses = ref(0)

const choices: {
	'rock': {
		'rock': 'draw',
		'paper': 'loss',
		'scissors': 'win'
	},
	'paper': {
		'rock': 'win',
		'paper': 'draw',
		'scissors': 'loss'
	},
	'scissors': {
		'rock': 'loss',
		'paper': 'win',
		'scissors': 'draw'
	}
}

function play(pick: Ref<string>) {
	userPick = pick

	const picks = ['rock', 'paper', 'scissors']
	const random = Math.floor(Math.random() * picks.length)
	computerPick.value = choices[random]

	const outcome = choices[userPick.value][computerPick.value]

	if (outcome === 'win') {
		wins.value++
		text.value = 'You win!'
	} else if (outcome === 'loss') {
		losses.value++
		text.value = 'You Lose!'
	} else {
		draws.value++
		text.value = 'It\'s a draw'
	}
}
</script>



<template></template>

<style>

</style>