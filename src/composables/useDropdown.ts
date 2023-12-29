import type { ICategory } from '@/types'
import { ref } from 'vue'

const useDropdown = (categories: ICategory[], value: any) => {
  const isOpen = ref(false)
  const currentCategories = ref<string[]>([])

  const toggleIsOpen = () => {
    isOpen.value = !isOpen.value
  }

  const addCategory = (category: string) => {
    if (currentCategories.value.includes(category)) {
      currentCategories.value = currentCategories.value.filter((filter) => filter !== category)
    } else {
      currentCategories.value.push(category)
    }
    value.value = currentCategories.value
  }

  return { isOpen, toggleIsOpen, addCategory, currentCategories }
}

export default useDropdown
