import { defineStore } from 'pinia'
import axiosInstance from '@/plugins/axios'
import { useFiltersStore } from './filters'
import type { IBlog } from '@/types'
import { useRoute } from 'vue-router'

type State = {
  blogsList: IBlog[]
  blog: IBlog | undefined
}

export const useBlogStore = defineStore({
  id: 'blog',
  state: (): State => ({
    blogsList: [],
    blog: undefined
  }),
  getters: {
    getBlogs(state) {
      const filtersStore = useFiltersStore()
      return state.blogsList.filter((blog) =>
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
        this.blogsList = res.data.data
      } catch (err) {
        return
      }
    },
    async fetchSingleBlog() {
      const route = useRoute()
      try {
        const res = await axiosInstance.get(`/blogs/${route.params.id}`)
        this.blog = res.data
      } catch (err) {
        return
      }
    }
  }
})
