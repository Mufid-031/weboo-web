<script>
import { RouterLink } from 'vue-router'
export default {
  components: {
    RouterLink
  },
  props: {
    ...RouterLink.props,
    anime: Object
  },
}
</script>

<template>
  <div class="p-5 rounded-lg bg-white sm:w-[40%] md:w-[30%] lg:w-[20%] shadow-lg">
    <img
      class="w-full h-[350px] object-cover mb-3"
      :src="anime.attributes.posterImage.original"
      alt="Anime Poster"
    />
    <p class="text-sm">{{ anime.type }}</p>
    <h1 class="text-lg font-bold">{{ anime.attributes.canonicalTitle }}</h1>
    <p class="text-sm text-blue-400 mt-3 mb-5 border-b-2">
      <i class="pi pi-star-fill text-yellow-300"></i>
      {{ anime.attributes.averageRating || 'N/A' }}
    </p>
    <div class="flex justify-between">
      <p class="text-sm text-red-900">
        {{ anime.attributes.status === 'finished' ? 'Finished' : 'Ongoing' }}
      </p>
      <button class="text-white bg-blue-400 font-bold p-2 rounded">
        <RouterLink :to="'/animes/anime/' + anime.id"> Wath Now </RouterLink>
      </button>
    </div>
  </div>
</template>
