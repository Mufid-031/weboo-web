<script>
import { useRoute, RouterLink } from 'vue-router'
import PulseLoader from 'vue-spinner/src/PulseLoader.vue'
import NavbarItem from '@/components/NavbarItem.vue'
import { useAnimeStore } from '@/stores/anime'

export default {
  setup() {
    const animeStore = useAnimeStore()

    return { animeStore }
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
      <div class="h-[150px] rounded-md py-6 px-3 bg-white mb-4 shadow-lg">
        <p class="text-md mb-2">{{ item.type }}</p>
        <p class="text-2xl text-blue-500 font-bold mb-3">{{ item.attributes.canonicalTitle }}</p>
        <p><i class="pi pi-star-fill text-yellow-300"></i> {{ item.attributes.averageRating }}</p>
      </div>
      <div class="rounded-md py-6 px-3 bg-white mb-4 shadow-lg">
        <p class="text-lg text-blue-500 font-bold mb-3">Synopsis</p>
        <p class="text-md mb-3">{{ item.attributes.synopsis }}</p>
        <div class="flex gap-2">
          <p class="text-sm text-slate-100 bg-blue-700 px-2 py-1 rounded-md">
            {{ item.attributes.showType }}
          </p>
          <p class="text-sm text-slate-100 bg-blue-700 px-2 py-1 rounded-md">
            {{ item.attributes.status === 'finished' ? 'Finished' : 'Ongoing' }}
          </p>
        </div>
      </div>
      <div class="rounded-md py-6 px-3 bg-white mb-4 shadow-lg">
        <p class="text-lg text-blue-500 font-bold mb-3">Episodes</p>
        <div class="flex flex-wrap gap-2" v-if="item.attributes.episodeCount > 0">
          <p
            class="text-sm text-slate-100 bg-slate-600 px-2 py-1 rounded-md"
            v-for="episode in item.attributes.episodeCount"
            :key="episode"
          >
            <RouterLink :to="`/animes/anime/${item.id}/episodes/${episode}`">
              {{ episode }}
            </RouterLink>
          </p>
        </div>
        <p v-else class="text-sm text-blue-700 px-2 py-1 rounded-md">N/A</p>
      </div>
    </div>
    <div class="w-[90%] md:w-[30%] order-1 md:order-2">
      <div class="rounded-md py-6 px-3 bg-white mb-4 shadow-lg">
        <img :src="item.attributes.posterImage.original" alt="" />
      </div>
    </div>
  </section>
</template>
