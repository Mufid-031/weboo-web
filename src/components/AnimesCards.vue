<script>
import AnimesCard from '@/components/AnimesCard.vue'
import PulseLoader from 'vue-spinner/src/PulseLoader.vue'
import { useRoute, RouterLink } from 'vue-router'
import { usePaginationStore } from '@/stores/pagination.js'
import { useAnimesStore } from '@/stores/animes'

export default {
  setup() {
    const paginationStore = usePaginationStore()
    const animesStore = useAnimesStore()

    return { paginationStore, animesStore }
  },
  components: {
    AnimesCard,
    PulseLoader,
    RouterLink
  },
  data() {
    return {
      route: useRoute(),
      pageID: this.$route.params.pageID,
      updateShowButton: this.showButton,
      updateIsLoading: this.isLoading,
      updateLimit: this.limit
    }
  },
  props: {
    ...RouterLink.props,
    limit: {
      type: Number,
      default: 20
    },
    showButton: {
      type: Boolean,
      default: false
    },
    isLoading: {
      type: Boolean,
      default: false
    },
    searchValue: String
  },
  methods: {
    showMore() {
      this.updateShowButton = false
      this.updateIsLoading = true
      if (this.updateIsLoading) {
        setTimeout(() => {
          this.updateLimit += 4
          this.updateIsLoading = false
        }, 2000)
      }
    },
  },
  beforeMount() {
    this.animesStore.offset = (this.pageID - 1) * 20
  },
  mounted() {
    this.animesStore.getAnimes()
  },
  watch: {
    '$route.params.pageID'(newPageID) {
      if (this.pageID < newPageID) {
        const offset = (newPageID - this.pageID) * 20
        this.pageID = newPageID
        this.animesStore.offset += offset
      } else {
        const offset = (this.pageID - newPageID) * 20
        this.pageID = newPageID
        this.animesStore.offset -= offset
      }
      this.animesStore.getAnimes()
    },
    searchValue() {
      this.animesStore.getAnimesBySearch(this.searchValue)
    }
  }
}
</script>

<template>
  <section class="bg-blue-100 pb-10">
    <h1 v-if="!animesStore.isLoading" class="text-center text-4xl font-bold text-blue-400 mb-8 pt-5">
      Recent Updated
    </h1>
    <div v-if="animesStore.isLoading" class="flex justify-center items-center h-[85vh]">
      <PulseLoader color="#3b82f6" />
    </div>
    <div v-else class="flex justify-center flex-wrap gap-4">
      <AnimesCard
        v-for="anime in animesStore.animesState.slice(0, updateLimit || animesStore.animesState.length)"
        :key="anime.id"
        :anime="anime"
      />
    </div>
  </section>
  <section v-if="updateIsLoading" class="flex justify-center my-5 gap-2">
    <PulseLoader color="#3b82f6" />
  </section>
  <button
    v-if="updateShowButton"
    class="text-white bg-slate-600 font-bold py-2 px-6 rounded mx-auto block my-5"
    @click="showMore()"
  >
    View More
  </button>

  <section
    v-if="
      route.path === '/animes/page/0' ||
      (route.path === `/animes/page/${route.params.pageID}` && !animesStore.isLoading)
    "
    class="flex justify-center my-5 gap-2"
  >
    <div
      v-for="(item, index) in paginationStore.paginationState"
      :key="index"
      :class="route.params.pageID == item.page ? 'bg-blue-700' : 'bg-slate-600'"
      class="px-3 py-1 rounded-md text-slate-100 cursor-pointer"
    >
      <RouterLink @click="paginationStore.paginationUpdate(index, item.page)" :to="`/animes/page/${item.page}`">{{
        item.page
      }}</RouterLink>
    </div>
  </section>
</template>
