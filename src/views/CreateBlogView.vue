<script setup lang="ts">
// import BaseInput from '@/components/ui/BaseInput.vue'
import BlogForm from '@/components/create-blog/BlogForm.vue'
</script>

<template>
  <main class="bg-[#FBFAFF] min-h-screen pt-16 pb-32 flex justify-center">
    <div class="w-[37.5rem] flex flex-col">
      <h2 class="text-primary text-[2rem] font-bold mb-10">ბლოგის დამატება</h2>
      <BlogForm />
    </div>
  </main>
</template>
