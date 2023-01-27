<script setup lang="ts">
import {computed} from 'vue';

const props = defineProps<{
    placeholder?: string
    label?: string
    modelValue?: string
}>();

const emit = defineEmits<{
    (e:"update: modelValue", value: string): void
}>();

const value = computed({
    get() {
        return props.modelValue || "";
    },
    set(value: string) {
        emit("update: modelValue", value)
    },
});
</script>


<template>
<label v-if="label" :for="label">{{ label }}</label>
<input :name="label" :placeholder="placeholder" class="rounded-md p-2 border-4 border-black" type="text" v-model="value">
</template>