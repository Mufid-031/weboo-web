<script setup>
import { defineProps } from 'vue'

defineProps({
    title: {
        type: String,
        default: "Become a Vue Developer",
    },
    subtitle: {
        type: String,
        default: "Fine the Vue job that fits your skills and needs",
    }
})
</script>

<template>
  <main class="flex flex-col justify-center items-center gap-3 h-48 bg-green-600">
    <h1 class="text-3xl font-bold text-slate-200">{{ title }}</h1>
    <p class="text-md text-slate-200">{{ subtitle }}</p>
  </main>
</template>
