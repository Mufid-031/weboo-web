<script>
import NavbarItem from '@/components/NavbarItem.vue'
import PulseLoader from 'vue-spinner/src/PulseLoader.vue'
import { useRoute, RouterLink } from 'vue-router'
import { useAnimeStore } from '@/stores/anime'

export default {
  setup() {
    const animeStore = useAnimeStore()

    return {
      animeStore
    }
  },
  components: {
    NavbarItem,
    RouterLink,
    PulseLoader
  },
  data() {
    return {
      route: useRoute(),
      animeID: this.$route.params.id
    }
  },
  props: {
    ...RouterLink.props
  },
  mounted() {
    this.animeStore.getAnime(this.animeID)
  }
}
</script>

<template>
  <NavbarItem />
  <section v-if="animeStore.isLoading" class="flex justify-center items-center h-screen">
    <PulseLoader color="#3b82f6" />
  </section>
  <section
    v-else
    v-for="item in animeStore.animeState"
    :key="item.id"
    class="flex flex-col items-center py-5 bg-blue-100 gap-3 md:flex-row md:justify-center md:items-start"
  >
    <div class="w-[90%] md:w-[60%] order-2 md:order-1">
      <div class="h-[500px] rounded-md py-6 px-3 bg-white mb-4 shadow-lg">
        <div
          class="h-[450px] rounded-md py-6 px-3 bg-slate-600 mb-4 flex justify-center items-center"
        >
          <i class="pi pi-play-circle text-5xl cursor-pointer hover:text-blue-400"></i>
        </div>
      </div>
      <div class="h-[140px] rounded-md py-6 px-3 bg-white mb-4 shadow-lg">
        <p class="text-lg text-blue-500 font-bold mb-3">Episode</p>
        <div class="flex gap-2 flex-wrap">
          <p
            v-for="episode in item.attributes.episodeCount"
            :key="episode"
            :class="route.params.ep == episode ? 'bg-blue-700' : 'bg-slate-600'"
            class="text-sm text-slate-100 px-2 py-1 rounded-md"
          >
            <RouterLink :to="`/animes/anime/${item.id}/episodes/${episode}`">
              {{ episode }}
            </RouterLink>
          </p>
        </div>
      </div>
    </div>
    <div class="w-[90%] md:w-[30%] order-1 md:order-2">
      <div class="rounded-md py-6 px-3 bg-white mb-4 shadow-lg">
        <img :src="item.attributes.posterImage.original" alt="" />
      </div>
    </div>
  </section>
</template>
