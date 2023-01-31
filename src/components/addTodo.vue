<script setup lang="ts">
import { computed, ref, watch, onMounted } from 'vue';
import { TodoItems } from '../interfaces/TodoItems';
import { v4 as uuidv4 } from 'uuid';

const newTodo = ref('');
const todos = ref<TodoItems[]>([]);
const completed = ref(false);

function addToDo() {
    todos.value.push({
        id: uuidv4(),
        title: newTodo.value,
        completed: false
    });
    newTodo.value = '';
    saveTodos();
}

function saveTodos() {
    localStorage.setItem('todos', JSON.stringify(todos.value));
}

loadTodos();
function loadTodos() {
    const savedTodos = localStorage.getItem('todos');
    if (savedTodos) {
        todos.value = JSON.parse(savedTodos);
    }
}

function removeAllTodo() {
    todos.value = [];
    saveTodos();
}

function removeTodo() {
    todos.value = todos.value.filter(todo => todo.id !== todo.id);
    saveTodos();
}

function completedTodo() {
    todos.value = todos.value.filter(todo => todo.completed === true);
    saveTodos();
}

</script>
<template>
    <form class="px-4 py-4" @submit.prevent="addToDo">
        <label class="py-4 px-2 gap-2 uppercase text-white underline" for="newTodo">New Todo</label>
        <input class="rounded-md gap-2 px-2 py-2" v-model="newTodo" type="text" name="newTodo"
            placeholder="add todo..." />
        <button class="border rounded-sm bg-cyan-500 py-2 px-2 gap-2 hover:bg-cyan-700">Add +</button>
        <button class="border rounded-sm bg-red-200 py-42 px-2 hover:bg-red-700"
                @click="removeAllTodo()">Clear All Todos</button>
    </form>
    <ul>
        <li class="bg-stone-300 mt-5 p-5 rounded-xl shadow-lg text-black" v-for="todo in todos" :key="todo.id">{{todo.title}}
            <button class="border rounded-sm bg-red-200 py-2 px-2 gap-12 hover:bg-red-700"
                @click="removeTodo()">X</button>
            <button  @click="completedTodo()" class="border rounded-sm bg-green-200 py-2 px-2 gap-12 hover:bg-green-700"></button>
        </li>
    </ul>
</template>

<style scoped>

</style>