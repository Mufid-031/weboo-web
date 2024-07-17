<script setup>
import Hero from '@/components/HeroSection.vue'
import HomeCards from '@/components/HomeCards.vue'
import JobsCards from '@/components/JobsCards.vue'
</script>

<template>
  <Hero />
  <HomeCards />
  <JobsCards :limit="6" :showButton="false" />
</template>