<script setup lang="ts">
import { useRouter } from 'vue-router'
import IconArrowLeft from '@/components/icons/IconArrowLeft.vue'
import BlogFull from '@/components/blog/BlogFull.vue'

const router = useRouter()
</script>

<template>
  <div class="bg-page-color min-h-screen pt-10 pb-20 flex flex-col items-center relative">
    <IconArrowLeft
      class="absolute left-[4.75rem] top-10 cursor-pointer"
      @click="router.push('/')"
    />
    <BlogFull />
  </div>
</template>
