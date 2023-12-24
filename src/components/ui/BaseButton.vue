<script setup lang="ts">
import { computed } from 'vue'
import { cva } from 'class-variance-authority'

type IProps = {
  variant: 'primary' | 'secondary'
  disabled?: boolean
}

const props = defineProps<IProps>()

const buttonClass = computed(() => {
  return cva(
    'inline-flex items-center justify-center bg-[#5D37F3] text-white text-sm min-h-10 px-5 py-[0.625rem] font-medium rounded-lg hover:bg-blue-500',
    {
      variants: {
        variant: {
          primary: ' w-full',
          secondary: 'px-5'
        },
        disabled: {
          true: '!bg-gray-100 !text-gray-400 cursor-not-allowed'
        }
      }
    }
  )({
    variant: props.variant,
    disabled: props.disabled
  })
})
</script>

<template>
  <button :class="buttonClass">
    <slot />
  </button>
</template>
