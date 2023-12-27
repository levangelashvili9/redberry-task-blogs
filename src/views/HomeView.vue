<script setup lang="ts">
import HomeHero from '@/components/home/HomeHero.vue'
import BlogsFilter from '@/components/home/BlogsFilter.vue'
import BlogsList from '@/components/home/BlogsList.vue'

import { useAuthStore } from '@/stores/auth'
const authStore = useAuthStore()
</script>

<template>
  <main class="bg-page-color min-h-screen pt-16 pb-20">
    <HomeHero />
    <BlogsFilter />
    <BlogsList v-if="authStore.isLoggedIn" />
  </main>
</template>
