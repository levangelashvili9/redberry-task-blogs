import type { IBlogForm } from '@/types'
import { defineStore } from 'pinia'

type State = {
  formValues: IBlogForm
}

export const useFormStore = defineStore({
  id: 'form',
  state: (): State => ({
    formValues: {
      image: undefined,
      author: undefined,
      title: undefined,
      description: undefined,
      publish_date: undefined,
      categories: [],
      email: undefined
    }
  }),
  actions: {
    saveFormState(payload: any) {
      this.formValues = payload
    }
  },
  persist: true
})
