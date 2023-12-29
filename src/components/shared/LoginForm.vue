<script setup lang="ts">
import { useForm } from 'vee-validate'
import { toTypedSchema } from '@vee-validate/zod'
import { z } from 'zod'

import BaseButton from '@/components/ui/BaseButton.vue'
import IconError from '@/components/icons/IconError.vue'
import useSubmitLogin from '@/composables/useSubmitLogin'
import { computed } from 'vue'

type ILoginForm = {
  email: string
}

const { handleSubmit, errors, defineField, resetForm } = useForm<ILoginForm>({
  validationSchema: toTypedSchema(
    z.object({
      email: z
        .string()
        .endsWith('@redberry.ge', { message: 'მეილი უნდა მთავრდებოდეს @redberry.ge-ით' })
        .refine(
          (value) => {
            return value.length !== 12
          },
          {
            message: 'გთხოვთ შეიყვანოთ ვალიდური ელ-ფოსტა'
          }
        )
    })
  )
})

const [email, emailAttrs] = defineField('email')
const { invalidCredentials, login } = useSubmitLogin()

const onSubmit = handleSubmit(async (values) => {
  await login(values)
  resetForm()
})

const emailOrSubmitError = computed(() => {
  return errors.value.email || (invalidCredentials.value && !email.value && 'ელ-ფოსტა არ მოიძებნა')
})
</script>

<template>
  <div class="w-full flex flex-col items-center gap-6">
    <h3 class="text-2xl font-bold text-primary">შესვლა</h3>
    <form @submit="onSubmit" class="w-full">
      <div class="mb-3">
        <label for="email" class="text-primary font-medium text-sm">ელ-ფოსტა</label>
        <input
          v-model="email"
          v-bind="emailAttrs"
          name="email"
          id="email"
          placeholder="Example@redberry.ge"
          class="w-full h-11 px-[1rem] py-3 border border-border-inactive rounded-xl mt-[0.375rem]"
        />
        <div class="mt-1 h-5">
          <div v-show="emailOrSubmitError" class="flex gap-1 items-center">
            <IconError />
            <p class="text-error-color text-xs">{{ emailOrSubmitError }}</p>
          </div>
        </div>
      </div>
      <BaseButton variant="primary">შესვლა</BaseButton>
    </form>
  </div>
</template>
