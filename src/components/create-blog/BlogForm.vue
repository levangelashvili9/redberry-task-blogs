<script setup lang="ts">
import { useForm } from 'vee-validate'
import { toTypedSchema } from '@vee-validate/zod'
import { ref } from 'vue'

import type { IBlogForm } from '@/types'
import { blogFormValidations } from '@/validations/blogFormValidations'
import useFetchCategories from '@/composables/useFetchCategories'

import BaseButton from '@/components/ui/BaseButton.vue'
import BlogInputImage from '@/components/create-blog/BlogInputImage.vue'
import BlogInputDescription from './BlogInputDescription.vue'
import BlogInputAuthor from './BlogInputAuthor.vue'
import BlogInputTitle from './BlogInputTitle.vue'
import BlogInputDate from './BlogInputDate.vue'
import BlogInputCategories from './BlogInputCategories.vue'
import BlogInputEmail from './BlogInputEmail.vue'
import axiosInstance from '@/plugins/axios'
import SuccessDialog from '../shared/SuccessDialog.vue'
import BaseModal from '../ui/BaseModal.vue'
import { useRouter } from 'vue-router'
import useModal from '@/composables/useModal'

const { handleSubmit, meta } = useForm<IBlogForm>({
  validationSchema: toTypedSchema(blogFormValidations)
})

const { categories } = useFetchCategories()
const router = useRouter()
const { isModalActive, openModal, closeModal } = useModal()

const onSubmit = handleSubmit(async (values, { resetForm }) => {
  const res = await axiosInstance.post('/blogs', values)
  openModal()
  console.log(res)
  resetForm()
})
</script>

<template>
  <form @submit="onSubmit">
    <div class="mb-10 flex flex-col gap-6">
      <BlogInputImage />
      <div class="grid grid-cols-2 gap-6">
        <BlogInputAuthor name="author" label="ავტორი *" placeholder="შეიყვანეთ ავტორი" />
        <BlogInputTitle name="title" label="სათაური *" placeholder="შეიყვანეთ სათაური" />
      </div>
      <BlogInputDescription name="description" label="აღწერა *" placeholder="შეიყვანეთ აღწერა" />
      <div class="grid grid-cols-2 gap-6">
        <BlogInputDate name="publish_date" label="გამოქვეყნების თარიღი *" />
        <BlogInputCategories name="categories" label="კატეგორია" :categories="categories" />
      </div>
      <BlogInputEmail name="email" label="ელ-ფოსტა" placeholder="Example@redberry.ge" />
    </div>
    <div class="flex justify-end">
      <div class="w-[18rem]">
        <BaseButton variant="primary" :disabled="!meta.valid">Submit</BaseButton>
      </div>
    </div>
    <BaseModal :isModalActive="isModalActive" @close-modal="closeModal">
      <SuccessDialog
        buttonMessage="მთავარ გვერდზე დაბრუნება"
        @click="router.push('/')"
        @close-modal="closeModal"
      />
    </BaseModal>
  </form>
</template>
