<script setup lang="ts">
import { useRouter } from 'vue-router'
import IconArrowLeft from '@/components/icons/IconArrowLeft.vue'
import BlogInfo from '@/components/blog/BlogInfo.vue'
import BlogCarousel from '@/components/blog/BlogCarousel.vue'
import BlogViewSkeleton from '@/components/blog/BlogViewSkeleton.vue'

const router = useRouter()
</script>

<template>
  <Suspense>
    <div
      class="bg-page-color min-h-screen pt-10 pb-20 px-[4.75rem] flex flex-col items-center relative"
    >
      <IconArrowLeft
        background="white"
        stroke="#1A1A1F"
        class="absolute left-[4.75rem] top-10 cursor-pointer"
        @click="router.push('/')"
      />
      <BlogInfo />
      <BlogCarousel />
    </div>
    <template #fallback>
      <BlogViewSkeleton />
    </template>
  </Suspense>
</template>
