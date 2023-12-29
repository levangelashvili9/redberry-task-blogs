<script setup lang="ts">
// import BaseInput from '@/components/ui/BaseInput.vue'
import BlogForm from '@/components/create-blog/BlogForm.vue'
import IconArrowLeft from '@/components/icons/IconArrowLeft.vue'
import { useRouter } from 'vue-router'

const router = useRouter()
</script>

<template>
  <main class="bg-[#FBFAFF] min-h-screen pt-16 pb-32 flex justify-center relative">
    <IconArrowLeft
      background="#E4E3EB"
      stroke="#1A1A1F"
      class="absolute left-[4.75rem] top-10 cursor-pointer"
      @click="router.push('/')"
    />
    <div class="w-[37.5rem] flex flex-col">
      <h2 class="text-primary text-[2rem] font-bold mb-10">ბლოგის დამატება</h2>
      <BlogForm />
    </div>
  </main>
</template>
