<script setup>
import Hero from '@/components/HeroSection.vue'
import HomeCards from '@/components/HomeCards.vue'
import AnimesCards from '@/components/AnimesCards.vue'
import NavbarItem from '@/components/NavbarItem.vue';
</script>

<template>
  <NavbarItem />
  <Hero />
  <HomeCards />
  <AnimesCards :limit="4" :showButton="true" />
</template>
