<script setup lang="ts">
import TodoList from './components/todoList.vue'
import todoItem from './components/todoItem.vue';

</script>

<template>
    <div class="flex items-center justify-center bg-gradient-to-l from-slate-600 to-stone-700 h-screen">
        <div class="bg-gray-600 border px-4 my-4 py-4">
            <TodoList />
            <todoItem></todoItem>
        </div>
    </div>
</template>

<style></style>