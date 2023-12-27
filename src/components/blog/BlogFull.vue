<script setup lang="ts">
import { storeToRefs } from 'pinia'
import { useBlogStore } from '@/stores/blog'
import { useRoute } from 'vue-router'
import BlogCard from '@/components/shared/BlogCard.vue'

const route = useRoute()
const blogStore = useBlogStore()

blogStore.fetchSingleBlog(route.params.id)
const { blog } = storeToRefs(blogStore)
</script>

<template>
  <BlogCard v-if="blog" :blog="blog" full />
</template>
