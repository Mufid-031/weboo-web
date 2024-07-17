<script setup>
import { ref, defineProps } from 'vue'
import Jobs from '@/jobs.json'
import JobCard from '@/components/JobCard.vue'

const jobs = ref(Jobs)
defineProps({
  limit: Number,
  showButton: {
    type: Boolean,
    default: false
  }
})
</script>

<template>
  <section class="bg-slate-300 pb-10">
    <h1 class="text-center text-2xl font-bold text-green-600 mt-3 mb-8 pt-5">Browse Jobs</h1>
    <div class="flex justify-center flex-wrap gap-4">
      <JobCard v-for="job in jobs.slice(0, limit || jobs.length)" :key="job.id" :job="job" />
    </div>
  </section>
  <button
    v-if="showButton"
    class="text-white bg-slate-600 font-bold py-2 px-6 rounded mx-auto block my-5"
  >
    <a href="/jobs"> View More </a>
  </button>
</template>
