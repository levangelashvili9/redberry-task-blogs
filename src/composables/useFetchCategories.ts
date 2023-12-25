import axiosInstance from '@/plugins/axios'
import { ref } from 'vue'

export type ICategories = {
  id: number
  title: string
  text_color: string
  background_color: string
}[]

const useFetchCategories = () => {
  const categories = ref<ICategories>([])

  const fetchCategories = async () => {
    try {
      const res = await axiosInstance.get(`/categories`)
      categories.value = res.data.data
    } catch (err) {
      return
    }
  }

  fetchCategories()

  return { categories }
}

export default useFetchCategories
