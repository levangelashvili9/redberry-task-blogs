import axiosInstance from '@/plugins/axios'
import { defineStore } from 'pinia'

export const useAuthStore = defineStore({
  id: 'auth',
  state: () => ({
    isLoggedIn: false
  }),
  actions: {
    async getUser(payload: { email: string }) {
      const res = await axiosInstance.post(`/login`, payload)
      if (res.status === 204) {
        this.isLoggedIn = true
      }
    }
  }
})
