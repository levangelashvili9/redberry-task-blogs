import { ref } from 'vue'
import axiosInstance from '@/plugins/axios'
import type { ICategory } from '@/types'

const useFetchCategories = () => {
  const categories = ref<ICategory[]>([])

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
