import axiosInstance from '@/plugins/axios'
import type { ICategories } from '@/composables/useFetchCategories'
import { ref } from 'vue'

type IBlogs = {
  id: 1
  title: string
  description: string
  image: string
  publish_date: string
  categories: ICategories
  author: string
}[]

const useFetchBlogs = () => {
  const blogs = ref<IBlogs>([])

  const fetchBlogs = async () => {
    try {
      const res = await axiosInstance.get(`/blogs`)
      blogs.value = res.data.data
    } catch (err) {
      return
    }
  }

  fetchBlogs()

  return { blogs }
}

export default useFetchBlogs
