<script setup lang="ts">
type IProps = {
  color?: string
}

defineProps<IProps>()
</script>

<template>
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M7.75732 16.2426L16.2426 7.75736"
      :stroke="color || '#1A1A1F'"
      stroke-width="1.5"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M16.2426 16.2426L7.75732 7.75736"
      :stroke="color || '#1A1A1F'"
      stroke-width="1.5"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </svg>
</template>
