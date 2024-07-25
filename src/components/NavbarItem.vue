<script>
import { RouterLink, useRoute } from 'vue-router'

export default {
  components: {
    RouterLink
  },
  data() {
    return {
      logo: 'Weboo',
      menus: [
        {
          item: 'Home',
          link: '/'
        },
        {
          item: 'Animes',
          link: '/animes/page/1' || this.$route.params.pageID
        },
        {
          item: 'Add Anime',
          link: '/anime/add'
        }
      ],
      route: useRoute(),
    }
  },
  props: {
    ...RouterLink.props,
    currentSearchValue: String
  },
  methods: {
    isActiveLink(routePath) {
      return this.$route.path === routePath
    },

    updateSearchValue() {
      this.$emit('update:currentSearchValue', this.searchValue)
    }
  },
  emits: ['update:currentSearchValue'],
  watch: {
    searchValue(newValue) {
      this.searchValue = newValue
    }
  }
}
</script>

<template>
  <nav class="flex justify-between items-center h-16 px-10 bg-blue-400 border-b-2 border-slate-100">
    <h2 class="text-xl font-bold font-sans text-slate-200">
      <i class="pi pi-bullseye mr-1"></i>
      <RouterLink to="/"> {{ logo }} </RouterLink>
    </h2>
    <ul class="flex justify-evenly items-center gap-3 text-slate-200 font-sans text-lg">
      <li>
        <input
          class="px-2 py-1 rounded-lg text-slate-700"
          type="text"
          name="search"
          id="search"
          placeholder="Search"
          v-model="searchValue"
          @input="updateSearchValue()"
        />
      </li>
      <li
        v-for="(menu, index) in menus"
        :key="index"
        :class="[
          isActiveLink(menu.link) ? 'bg-blue-500' : 'hover:bg-blue-500',
          'p-2',
          'rounded-lg',
          'transition-all duration-300'
        ]"
      >
        <RouterLink :to="menu.link">
          {{ menu.item }}
        </RouterLink>
      </li>
    </ul>
  </nav>
</template>
