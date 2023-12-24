<script setup lang="ts">
import { useForm } from 'vee-validate'
import { toTypedSchema } from '@vee-validate/zod'
import { z } from 'zod'
import BaseButton from '../ui/BaseButton.vue'

type IBlogForm = {
  author: string
  title: string
  description: string
}

const { handleSubmit, defineField } = useForm<IBlogForm>({
  validationSchema: toTypedSchema(
    z.object({
      author: z
        .string()
        .min(4, { message: 'მინიმუმ 4 სიმბოლო' })
        .refine(
          (value) => {
            const words = value.trim().split(' ')
            return words.length >= 2
          },
          {
            message: 'მინიმუმ 2 სიტყვა'
          }
        ),
      title: z.string().min(2),
      description: z.string().min(2)
    })
  )
})

const [author, authorAttrs] = defineField('author')
const [title, titleAttrs] = defineField('title')
const [description, descriptionAttrs] = defineField('description')

const onSubmit = handleSubmit((values) => {
  console.log(values)
})
</script>

<template>
  <form @submit="onSubmit">
    <div class="mb-10 flex flex-col gap-6">
      <div class="grid grid-cols-2 gap-6">
        <div>
          <label for="author" class="text-primary font-medium text-sm">ავტორი *</label>
          <input
            v-model="author"
            v-bind="authorAttrs"
            name="author"
            id="author"
            placeholder="შეიყვანეთ ავტორი"
            class="w-full h-11 px-[1rem] border border-border-inactive rounded-xl mt-[0.375rem] mb-2"
          />
          <div class="text-secondary text-xs flex flex-col gap-1">
            <p>• მინიმუმ 4 სიმბოლო</p>
            <p>• მინიმუმ ორი სიტყვა</p>
            <p>• მხოლოდ ქართული სიმბოლოები</p>
          </div>
        </div>
        <div>
          <label for="title" class="text-primary font-medium text-sm">სათაური *</label>
          <input
            v-model="title"
            v-bind="titleAttrs"
            name="title"
            id="title"
            placeholder="შეიყვანეთ სათაური"
            class="w-full h-11 px-[1rem] py-3 border border-border-inactive rounded-xl mt-[0.375rem] mb-2"
          />
          <div class="text-secondary text-xs">
            <p>მინიმუმ 2 სიმბოლო</p>
          </div>
        </div>
      </div>
      <div>
        <label for="description" class="text-primary font-medium text-sm">აღწერა *</label>
        <textarea
          v-model="description"
          v-bind="descriptionAttrs"
          name="description"
          id="description"
          placeholder="შეიყვანეთ სათაური"
          class="w-full h-[7.75rem] px-[1rem] py-3 border border-border-inactive rounded-xl mt-[0.375rem] mb-2 resize-none"
        />
        <div class="text-secondary text-xs">
          <p>მინიმუმ 2 სიმბოლო</p>
        </div>
      </div>
      <div class="grid grid-cols-2 gap-6">
        <div>
          <label for="author" class="text-primary font-medium text-sm"
            >გამოქვეყნების თარიღი *</label
          >
          <input
            v-model="author"
            v-bind="authorAttrs"
            name="author"
            id="author"
            placeholder="შეიყვანეთ ავტორი"
            class="w-full h-11 px-[1rem] border border-border-inactive rounded-xl mt-[0.375rem] mb-2"
          />
        </div>
        <div>
          <label for="title" class="text-primary font-medium text-sm">კატეგორია *</label>
          <input
            v-model="title"
            v-bind="titleAttrs"
            name="title"
            id="title"
            placeholder="შეიყვანეთ სათაური"
            class="w-full h-11 px-[1rem] py-3 border border-border-inactive rounded-xl mt-[0.375rem] mb-2"
          />
        </div>
      </div>
    </div>
    <BaseButton variant="primary">Submit</BaseButton>
  </form>
</template>
