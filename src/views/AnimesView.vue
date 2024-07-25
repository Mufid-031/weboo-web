<script>
import NavbarItem from '@/components/NavbarItem.vue';
import AnimesCards from '@/components/AnimesCards.vue'

export default {
  components: {
    NavbarItem,
    AnimesCards
  },
  data() {
    return {
      searchValue: ''
    }
  },


}
</script>

<template>
  <NavbarItem @update:currentSearchValue="searchValue = $event" v-model="searchValue" />
  <AnimesCards :searchValue="searchValue" :showButton="false" />
</template>
