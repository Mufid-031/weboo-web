<script setup>
import { defineProps } from 'vue'

defineProps({
  job: Object
})
</script>

<template>
  <div class="p-5 rounded-lg bg-white w-[90%] md:w-[25%]">
    <p class="text-sm">{{ job.type }}</p>
    <h1 class="text-lg font-bold">{{ job.title }}</h1>
    <p class="text-sm mt-5">{{ job.description }}</p>
    <p class="text-sm text-green-500 mt-3">{{ job.salary }} / Year</p>
    <div class="flex justify-between">
      <p class="text-sm text-green-500">{{ job.location }}</p>
      <button class="text-white bg-green-500 font-bold p-2 rounded">
        <a :href="'/job' + job.id"> Read More </a>
      </button>
    </div>
  </div>
</template>
