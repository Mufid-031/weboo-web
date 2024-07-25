<script>
import Card from './CardItem.vue'

export default {
  components: {
    Card
  },
  data() {
    return {
      title: 'Genres List',
      subtitle: 'List of Top Animes on MyAnimeList',
      bgColorCard: 'bg-blue-500',
      bgColorButton: 'bg-slate-400',
      buttonText: 'View More',
      circleColor: 'bg-slate-300'
    }
  },
}
</script>

<template>
  <section class="mt-10 mb-3 mx-5 flex justify-center flex-wrap gap-4">
    <Card />
    <Card :value="{ title, subtitle, bgColorCard, bgColorButton, buttonText, circleColor }" />
  </section>
</template>
