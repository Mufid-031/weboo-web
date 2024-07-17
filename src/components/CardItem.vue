<script setup>
import { defineProps } from 'vue'

defineProps({
    title: {
        type: String,
        default: "For Developers",
    },
    subtitle: {
        type: String,
        default: "Browse our vue jobs and start your carrer today",
    },
    buttonText: {
        type: String,
        default: "Browse Jobs",
    },
    bgColorCard: {
        type: String,
        default: "bg-slate-200",
    },
    bgColorButton: {
        type: String,
        default: "bg-black",
    }
})
</script>

<template>
    <div :class="bgColorCard" class="p-5 rounded-lg mb-3 w-[95%] md:w-[45%]">
        <h1 class="text-2xl font-bold mb-1">{{ title }}</h1>
        <p class="text-sm mb-5">{{ subtitle }}</p>
        <button :class="bgColorButton" class="text-white font-bold p-2 rounded">{{ buttonText }}</button>
    </div>
</template>