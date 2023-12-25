<script setup lang="ts">
import useFetchBlogs from '@/composables/useFetchBlogs'
import IconArrowUpRight from '../icons/IconArrowUpRight.vue'
// import BlogsListItem from '@/components/home/BlogsListItem.vue'

const { blogs } = useFetchBlogs()
</script>

<template>
  <div class="px-20 grid grid-cols-4 gap-x-8 gap-y-14">
    <div class="w-[25.5rem] place-self-center" v-for="blog in blogs" :key="blog.id">
      <img :src="blog.image" :alt="blog.title" class="mb-6" />
      <div class="flex flex-col gap-4">
        <div>
          <h4 class="text-primary text-base font-medium mb-2">{{ blog.author }}</h4>
          <p class="text-secondary text-sm">{{ blog.publish_date }}</p>
        </div>
        <h3 class="text-primary text-xl font-medium">{{ blog.title }}</h3>
        <ul class="grid grid-cols-2 gap-x-3 gap-y-2 w-full">
          <li
            v-for="category in blog.categories"
            :key="category.id"
            class="rounded-[1.875rem] h-7 text-xs font-medium flex justify-center items-center cursor-pointer truncate hover:opacity-70"
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
