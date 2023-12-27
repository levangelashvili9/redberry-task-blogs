<script setup lang="ts">
import { ref } from 'vue'
import useCarousel from '@/composables/useCarousel'

const carousel = ref(null)
const { position, prevSlide, nextSlide } = useCarousel(carousel, 6)
</script>

<template>
  <div class="w-full overflow-hidden" ref="carousel">
    <div class="mb-10 flex justify-between items-center">
      <h2 class="text-primary text-3xl font-bold" @click="console.log(position)">
        მსგავსი სტატიები
      </h2>
      <div class="flex gap-6">
        <button @click="prevSlide">Prev</button>
        <button @click="nextSlide">Next</button>
      </div>
    </div>
    <div
      class="flex gap-8 transition-all duration-300"
      :style="{ transform: `translateX(${position}px)` }"
    >
      <slot />
    </div>
  </div>
</template>
