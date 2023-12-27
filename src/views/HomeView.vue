<script setup lang="ts">
import HomeHero from '@/components/home/HomeHero.vue'
import BlogsFilter from '@/components/home/BlogsFilter.vue'
import BlogsList from '@/components/home/BlogsList.vue'
</script>

<template>
  <main class="bg-page-color min-h-screen pt-16 pb-20">
    <HomeHero />
    <BlogsFilter />
    <BlogsList />
  </main>
</template>
