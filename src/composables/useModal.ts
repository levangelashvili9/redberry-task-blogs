import { ref } from 'vue'

function useModal() {
  const isModalActive = ref<boolean>(false)

  const openModal = () => {
    isModalActive.value = true
    document.body.style.overflow = 'hidden'
  }

  const closeModal = () => {
    isModalActive.value = false
    document.body.style.overflow = 'auto'
  }

  return {
    isModalActive,
    openModal,
    closeModal
  }
}

export default useModal
