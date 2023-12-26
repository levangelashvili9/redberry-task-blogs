import { defineStore } from 'pinia'
import axiosInstance from '@/plugins/axios'
import type { ICategories } from '@/composables/useFetchCategories'
import { useFiltersStore } from './filters'

type State = {
  blogs: {
    id: number
    title: string
    description: string
    image: string
    publish_date: string
    categories: ICategories
    author: string
  }[]
}

export const useBlogStore = defineStore({
  id: 'blog',
  state: (): State => ({
    blogs: []
  }),
  getters: {
    getBlogs(state) {
      const filtersStore = useFiltersStore()
      return state.blogs.filter((blog) =>
        filtersStore.filters.every((filter) =>
          blog.categories.some((category) => category.title === filter)
        )
      )
    }
  },
  actions: {
    async fetchBlogs() {
      try {
        const res = await axiosInstance.get(`/blogs`)
        this.blogs = res.data.data
      } catch (err) {
        return
      }
    }
  }
})
