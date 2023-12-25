<script setup lang="ts">
import useFetchCategories from '@/composables/useFetchCategories'

const { categories } = useFetchCategories()
</script>

<template>
  <div class="flex justify-center mb-16">
    <div class="grid grid-cols-5 gap-6 w-[80rem]">
      <div
        v-for="category in categories"
        :key="category.id"
        class="rounded-[1.875rem] min-h-10 px-4 flex justify-center items-center cursor-pointer hover:opacity-70"
        :style="{
          backgroundColor: category.background_color,
          color: category.text_color
        }"
      >
        <p class="text-sm font-medium">{{ category.title }}</p>
      </div>
    </div>
  </div>
</template>
