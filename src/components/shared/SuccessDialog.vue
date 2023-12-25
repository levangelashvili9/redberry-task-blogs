<script setup lang="ts">
import IconTickVue from '@/components/icons/IconTick.vue'
import BaseButton from '@/components/ui/BaseButton.vue'

type Props = {
  buttonMessage: string
}

defineProps<Props>()
defineEmits(['close-modal'])
</script>

<template>
  <div class="flex flex-col items-center pt-6">
    <IconTickVue class="mb-4" />
    <h3 class="text-xl font-bold text-primary mb-12">წარმატებული ავტორიზაცია</h3>
    <BaseButton variant="primary" @click="$emit('close-modal')">{{ buttonMessage }}</BaseButton>
  </div>
</template>
