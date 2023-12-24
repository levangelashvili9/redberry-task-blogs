<script setup lang="ts">
import { useForm } from 'vee-validate'
import { toTypedSchema } from '@vee-validate/zod'
import { z } from 'zod'
import { useAuthStore } from '@/stores/auth'
import BaseButton from '@/components/ui/BaseButton.vue'

type ILoginForm = {
  email: string
}

const { handleSubmit, errors, defineField } = useForm<ILoginForm>({
  validationSchema: toTypedSchema(
    z.object({
      email: z.string().min(1).endsWith('@redberry.ge')
    })
  )
})

const authStore = useAuthStore()

const [email, emailAttrs] = defineField('email')

const onSubmit = handleSubmit((values) => {
  authStore.getUser(values)
})
</script>

<template>
  <form @submit="onSubmit" class="w-full">
    <div class="mb-6">
      <label for="email" class="text-primary font-medium text-sm">ელ-ფოსტა</label>
      <input
        v-model="email"
        v-bind="emailAttrs"
        name="email"
        id="email"
        placeholder="Example@redberry.ge"
        class="w-full h-11 px-[1rem] py-3 border border-border-inactive rounded-xl mt-[0.375rem]"
      />
      <div>{{ errors.email }}</div>
    </div>
    <BaseButton variant="primary">შესვლა</BaseButton>
  </form>
</template>
