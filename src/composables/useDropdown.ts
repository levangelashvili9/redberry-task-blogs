import { ref } from 'vue'

const useDropdown = () => {
  const isOpen = ref(false)

  const toggleIsOpen = () => {
    isOpen.value = !isOpen.value
  }

  return { isOpen, toggleIsOpen }
}

export default useDropdown
