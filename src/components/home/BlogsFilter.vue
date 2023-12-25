<script setup lang="ts">
import useFetchCategories from '@/composables/useFetchCategories'
import { useFiltersStore } from '@/stores/filters'

const { categories } = useFetchCategories()
const filtersStore = useFiltersStore()
</script>

<template>
  <div class="flex justify-center mb-16">
    <div class="flex justify-center flex-wrap place-items-start gap-6 w-[80rem]">
      <div
        v-for="category in categories"
        :key="category.id"
        @click="filtersStore.toggleFilter(category.title)"
        class="rounded-[1.875rem] w-fit min-h-10 px-4 flex justify-center items-center cursor-pointer truncate border-2 hover:opacity-70"
        :class="{ 'border-black': filtersStore.filters.includes(category.title) }"
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
