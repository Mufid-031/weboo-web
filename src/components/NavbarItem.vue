<script setup>
import { ref } from 'vue'
const menus = ref([
  {
    item: 'Home',
    link: '#'
  },
  {
    item: 'Jobs',
    link: '#'
  },
  {
    item: 'Add Job',
    link: '#'
  }
])
</script>

<template>
  <nav class="flex justify-around items-center h-16 bg-green-600 border-b-2 border-slate-100">
    <h2 class="text-xl font-bold font-sans text-slate-200">Logo</h2>
    <ul class="flex justify-evenly items-center text-slate-200 font-sans text-lg lg:w-1/3">
      <li v-for="(menu, index) in menus" :key="index" class="p-2 rounded-lg hover:bg-green-700 transition-all duration-300">
        <a href="#">
          {{ menu.item }}
        </a>
      </li>
    </ul>
  </nav>
</template>