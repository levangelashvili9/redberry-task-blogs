<script setup lang="ts">
import { storeToRefs } from 'pinia'
import { useBlogStore } from '@/stores/blog'
import BlogCard from '@/components/shared/BlogCard.vue'

const blogStore = useBlogStore()

await blogStore.fetchSingleBlog()
const { blog } = storeToRefs(blogStore)
</script>

<template>
  <div class="mb-24">
    <BlogCard v-if="blog" :blog="blog" full />
  </div>
</template>
