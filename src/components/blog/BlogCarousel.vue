<script setup lang="ts">
import BaseCarousel from '@/components/ui/BaseCarousel.vue'
import BlogCard from '@/components/shared/BlogCard.vue'

import { useBlogStore } from '@/stores/blog'

const blogStore = useBlogStore()

blogStore.fetchBlogs()
</script>

<template>
  <BaseCarousel>
    <div v-for="blog in blogStore.similarBlogs" :key="blog.id">
      <BlogCard :blog="blog" />
    </div>
  </BaseCarousel>
</template>
