import { ref, onMounted, onUnmounted, computed, watch } from 'vue'
import { useBlogStore } from '@/stores/blog'

const useCarousel = (carousel: any) => {
  const blogStore = useBlogStore()
  const blogsLength = ref(blogStore.similarBlogs.length)

  const visibleCarouselWidth = ref(0)
  const position = ref(0)

  watch(
    () => blogStore.similarBlogs,
    () => {
      blogsLength.value = blogStore.similarBlogs.length
    }
  )

  const availableSpace = computed(() => {
    const available = blogsLength.value * 440 - visibleCarouselWidth.value // full carousel width - visible width = available space for sliding
    return available > 0 ? available : 0 // return available space if its greater than 0, otherwise, return 0
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
