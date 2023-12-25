import { ref } from 'vue'
import { useAuthStore } from '@/stores/auth' // Import your auth store

const useSubmitLogin = () => {
  const invalidCredentials = ref(false)
  const authStore = useAuthStore()

  const login = async (values: any) => {
    const success = await authStore.getUser(values)

    if (success) {
      invalidCredentials.value = false
    } else {
      invalidCredentials.value = true
    }
  }

  return {
    invalidCredentials,
    login
  }
}

export default useSubmitLogin
