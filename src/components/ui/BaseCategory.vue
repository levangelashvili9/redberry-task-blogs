<script setup lang="ts">
import type { ICategory } from '@/types'

type IProps = {
  category: ICategory
}

defineProps<IProps>()
</script>

<template>
  <div
    class="rounded-[1.875rem] w-fit shrink-0 h-8 px-4 flex justify-center items-center cursor-pointer truncate border hover:opacity-70"
    :style="{
      backgroundColor: category.background_color,
      color: category.text_color
    }"
  >
    <p class="text-sm font-medium">{{ category.title }}</p>
    <slot />
  </div>
</template>
