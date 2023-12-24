<script setup lang="ts">
import { useForm } from 'vee-validate'
import { toTypedSchema } from '@vee-validate/zod'
import { z } from 'zod'

import BaseButton from '@/components/ui/BaseButton.vue'

type ILoginForm = {
  email: string
}

const { handleSubmit, errors, defineField } = useForm<ILoginForm>({
  validationSchema: toTypedSchema(
    z.object({
      email: z.string().min(1).email()
    })
  )
})

const [email, emailAttrs] = defineField('email')

const onSubmit = handleSubmit((values) => {
  console.log(values)
})
</script>

<template>
  <form @submit="onSubmit" class="w-full">
    <div>
      <input
        v-model="email"
        v-bind="emailAttrs"
        name="email"
        class="w-full h-11 px-[0.875rem] border border-border-inactive rounded-xl"
      />
      <div>{{ errors.email }}</div>
    </div>
    <BaseButton variant="primary">შესვლა</BaseButton>
  </form>
</template>
