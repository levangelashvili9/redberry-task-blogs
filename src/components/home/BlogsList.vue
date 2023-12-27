<script setup lang="ts">
import BlogCard from '@/components/shared/BlogCard.vue'
import { useBlogStore } from '@/stores/blog'

const blogStore = useBlogStore()

blogStore.fetchBlogs()
</script>

<template>
  <div class="px-20 flex flex-wrap justify-start gap-x-8 gap-y-14">
    <BlogCard v-for="blog in blogStore.getBlogs" :key="blog.id" :blog="blog" />
  </div>
</template>
