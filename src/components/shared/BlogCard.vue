<script setup lang="ts">
import { useRouter } from 'vue-router'
import type { IBlog } from '@/types'
import IconArrowUpRight from '../icons/IconArrowUpRight.vue'

type IProps = {
  blog: IBlog
  full?: boolean
}

const router = useRouter()

const viewMore = (id: number) => {
  router.push(`/blogs/${id}`)
}

defineProps<IProps>()
</script>

<template>
  <div :class="[full ? 'max-w-[45rem]' : 'max-w-[25.5rem]']">
    <div class="h-[20.5rem] overflow-hidden rounded-xl" :class="[full ? 'mb-10' : 'mb-6']">
      <img :src="blog.image" :alt="blog.title" class="w-full h-full object-cover" />
    </div>
    <h4 class="mb-2 text-primary text-base font-medium">{{ blog.author }}</h4>
    <div class="flex text-secondary text-sm" :class="[full ? 'mb-6' : 'mb-4']">
      <p>
        {{ blog.publish_date }} <span v-if="full">• {{ blog.email }}</span>
      </p>
    </div>
    <h3
      class="text-primary font-bold"
      :class="[full ? 'mb-6 text-3xl' : 'mb-4 line-clamp-2 text-xl h-14']"
    >
      {{ blog.title }}
    </h3>
    <ul class="flex flex-wrap place-items-start w-full gap-3" :class="[full ? 'mb-10' : 'mb-4']">
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
    <p class="text-[#404049] text-base" :class="[full || 'line-clamp-2']">
      {{ blog.description }}
    </p>
    <div v-if="!full" class="cursor-pointer relative" @click="viewMore(blog.id)">
      <h4 class="mt-4 text-[#5D37F3] text-sm font-medium">სრულად ნახვა</h4>
      <IconArrowUpRight class="absolute top-0 left-28" />
    </div>
  </div>
</template>
