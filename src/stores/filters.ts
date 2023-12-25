import { defineStore } from 'pinia'

type State = {
  filters: string[]
}

export const useFiltersStore = defineStore({
  id: 'filters',
  state: (): State => ({
    filters: []
  }),
  actions: {
    toggleFilter(payload: string) {
      if (this.filters.includes(payload)) {
        this.filters = this.filters.filter((filter) => filter !== payload)
      } else {
        this.filters.push(payload)
      }
    }
  },
  persist: true
})
