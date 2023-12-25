import axiosInstance from '@/plugins/axios'
import { defineStore } from 'pinia'

export const useAuthStore = defineStore({
  id: 'auth',
  state: () => ({
    isLoggedIn: false
  }),
  actions: {
    async getUser(payload: { email: string }) {
      try {
        await axiosInstance.post(`/login`, payload)
        this.isLoggedIn = true
        return true
      } catch (err) {
        return
      }
    }
  },
  persist: true
})
