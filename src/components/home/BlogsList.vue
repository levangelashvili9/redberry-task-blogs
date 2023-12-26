<script setup lang="ts">
import IconArrowUpRight from '../icons/IconArrowUpRight.vue'
import { useBlogStore } from '@/stores/blog'

const blogStore = useBlogStore()
blogStore.fetchBlogs()
</script>

<template>
  <div class="px-20 flex flex-wrap justify-center gap-8">
    <div class="max-w-[25.5rem]" v-for="blog in blogStore.getBlogs" :key="blog.id">
      <img :src="blog.image" :alt="blog.title" class="mb-6" />
      <div class="flex flex-col gap-4">
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
        <p class="text-[#404049] text-base">{{ blog.description }}</p>
        <div class="flex cursor-pointer">
          <h4 class="text-[#5D37F3] text-sm font-medium">სრულად ნახვა</h4>
          <IconArrowUpRight />
        </div>
      </div>
    </div>
  </div>
</template>
