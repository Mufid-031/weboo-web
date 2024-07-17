<script setup>
import Card from './CardItem.vue'
</script>

<template>
  <section class="mt-10 mx-5 flex justify-center flex-wrap gap-4">
    <Card />
    <Card
      title="For Employers"
      subtitle="List your job to find the perfect developer for the role"
      bgColorCard="bg-green-200"
      bgColorButton="bg-green-500"
    />
  </section>
</template>
