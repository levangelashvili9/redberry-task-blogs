<script setup lang="ts">
import { storeToRefs } from 'pinia'
import { useBlogStore } from '@/stores/blog'
import { useRoute } from 'vue-router'

const route = useRoute()
const blogStore = useBlogStore()

blogStore.fetchSingleBlog(route.params.id)
const { blog } = storeToRefs(blogStore)
</script>

<template>
  <div class="bg-page-color min-h-screen pt-10 flex flex-col items-center">
    <div class="w-[45rem] flex flex-col gap-10" v-if="blog">
      <div class="h-[20.5rem] overflow-hidden rounded-xl">
        <img :src="blog.image" :alt="blog.title" class="w-full h-full object-cover" />
      </div>
      <div class="flex flex-col gap-6">
        <div>
          <h4 class="text-primary text-base font-medium mb-2">{{ blog.author }}</h4>
          <p class="text-secondary text-sm">{{ blog.publish_date }}</p>
        </div>
        <h3 class="text-primary text-xl font-medium">{{ blog.title }}</h3>
        <ul class="flex flex-wrap place-items-start w-full gap-3">
          <li
            v-for="category in blog.categories"
            :key="category.id"
            class="w-fit rounded-[1.875rem] h-7 p-3 text-xs font-medium flex justify-center items-center cursor-pointer truncate hover:opacity-70"
            :style="{
              backgroundColor: category.background_color,
              color: category.text_color
            }"
          >
            {{ category.title }}
          </li>
        </ul>
      </div>
      <p class="text-[#404049] text-base">{{ blog.description }}</p>
    </div>
  </div>
</template>
