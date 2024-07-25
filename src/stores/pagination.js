import { defineStore } from 'pinia'
import { useRoute } from 'vue-router'

export const usePaginationStore = defineStore('pagination', {
  state: () => ({
    paginationState: [{ page: 1 }, { page: 2 }, { page: 3 }, { page: 4 }, { page: 5 }],
    route: useRoute(),
    name: 'page'
  }),
  getters: {
    length: (state) => state.pagination.length
  },
  actions: {
    paginationUpdate(indx, page) {
      if (page !== 1 && page !== 2) {
        if (indx === 0) {
          this.paginationState.pop()
          this.paginationState.pop()
          this.paginationState.unshift({ page: page - 1 })
          this.paginationState.unshift({ page: page - 2 })
        } else if (indx === 1) {
          this.paginationState.pop()
          this.paginationState.unshift({ page: page - 2 })
        } else if (indx === 3) {
          this.paginationState.shift()
          this.paginationState.push({ page: page + 2 })
        } else if (indx === 4) {
          this.paginationState.shift()
          this.paginationState.shift()
          this.paginationState.push({ page: page + 1 })
          this.paginationState.push({ page: page + 2 })
        }
      } else {
        return
      }
    },
  }
})
