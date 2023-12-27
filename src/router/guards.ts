import { useAuthStore } from '@/stores/auth'

const isAuthenticated = () => {
  const authStore = useAuthStore()

  if (!authStore.isLoggedIn) {
    return '/'
  }
}

export default isAuthenticated
