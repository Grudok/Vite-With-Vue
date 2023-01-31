<script setup lang="ts">
import { ref } from 'vue'
import { TodoItems } from "../interfaces/TodoItems";
import AddTodo from './addTodo.vue';

const todos = ref<TodoItems[]>([]);

</script>

<template>
      <div class="flex flex-col space-y-2">
      <h1 class="text-3xl text-center font-bold mb-3 uppercase underline text-yellow-50">My Todo-List</h1>
    <AddTodo/>
      </div>
</template>

<style scoped>

</style>