<script setup lang="ts">
import { ref } from 'vue'
import useCarousel from '@/composables/useCarousel'
import IconArrowLeft from '../icons/IconArrowLeft.vue'
import IconArrowRight from '../icons/IconArrowRight.vue'

const carousel = ref(null)
const { position, prevSlide, nextSlide, disabledNext } = useCarousel(carousel)
</script>

<template>
  <div class="w-full overflow-hidden" ref="carousel">
    <div class="mb-10 flex justify-between items-center">
      <h2 class="text-primary text-3xl font-bold">მსგავსი სტატიები</h2>
      <div class="flex gap-6">
        <IconArrowLeft
          @click="prevSlide"
          :background="position === 0 ? '#E4E3EB' : '#5D37F3'"
          stroke="white"
          class="cursor-pointer"
        />
        <IconArrowRight
          @click="nextSlide"
          :background="disabledNext ? '#E4E3EB' : '#5D37F3'"
          stroke="white"
          class="cursor-pointer"
        />
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
