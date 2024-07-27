import axios from 'axios'
import { defineStore } from 'pinia'

export const useAnimeStore = defineStore('anime', {
  state: () => ({
    animeState: {},
    isLoading: true
  }),
  getters: {
    length: (state) => state.animeState.length
  },
  actions: {
    async getAnime(animeID) {
      this.isLoading = true
      try {
        const response = await axios
          .get(`https://kitsu.io/api/edge/anime?filter[id]=${animeID}`)
          .then((res) => res.data)
        this.animeState = response.data
      } catch (error) {
        console.error('Error fetching animes:', error)
      } finally {
        this.isLoading = false
      }
    }
  }
})
