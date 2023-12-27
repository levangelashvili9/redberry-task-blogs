import { ref, onMounted, onUnmounted, computed } from 'vue'

const useCarousel = (carousel: any, blogsLength: number) => {
  const visibleCarouselWidth = ref(0)
  const fullCarouselWidth = ref(blogsLength * 440)
  const position = ref(0)

  const availableSpace = computed(() => {
    return fullCarouselWidth.value - visibleCarouselWidth.value
  })

  const prevSlide = () => {
    if (position.value + 440 < 0) {
      position.value += 440
    } else {
      position.value = 0
    }
  }

  const nextSlide = () => {
    if (Math.abs(position.value) + 440 <= availableSpace.value) {
      position.value -= 440
    } else {
      position.value = -availableSpace.value
    }
  }

  const handler = () => {
    visibleCarouselWidth.value = carousel.value.offsetWidth
  }

  onMounted(() => {
    visibleCarouselWidth.value = carousel.value.offsetWidth
    window.addEventListener('resize', handler)
  })
  onUnmounted(() => window.removeEventListener('resize', handler))

  return { position, prevSlide, nextSlide }
}

export default useCarousel
