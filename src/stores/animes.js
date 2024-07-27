import axios from 'axios'
import { defineStore } from 'pinia'

export const useAnimesStore = defineStore('animes', {
  state: () => ({
    animesState: [],
    isLoading: true,
    offset: 0,
    name: 'animes'
  }),
  getters: {
    length: (state) => state.animesState.length
  },
  actions: {
    async getAnimes() {
      this.isLoading = true
      try {
        const response = await axios
          .get(`https://kitsu.io/api/edge/anime?filter[status]=current&page[limit]=20&page[offset]=${this.offset}`).then((res) => res.data)
        this.animesState = response.data
      } catch (error) {
        console.error('Error fetching animes:', error)
      } finally {
        this.isLoading = false
      }
    },
    async getAnimesBySearch(searchValue) {
      this.isLoading = true
      try {
        const response = await axios.get(
          `https://kitsu.io/api/edge/anime?filter[text]=${searchValue}&page[limit]=20&page[offset]=${this.offset}`
        ).then((res) => res.data)
        this.animesState = response.data
      } catch (error) {
        console.error('Error fetching animes:', error)
      } finally {
        this.isLoading = false
      }
    }
  }
})
