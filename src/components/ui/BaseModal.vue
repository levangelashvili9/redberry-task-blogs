<script setup lang="ts">
// import BaseButton from '@/components/ui/BaseButton.vue'
import IconCross from '@/components/icons/IconCross.vue'

type IProps = {
  isModalActive: boolean
}

defineProps<IProps>()
defineEmits(['close-modal'])
</script>

<template>
  <teleport to="body">
    <div
      v-if="isModalActive"
      @click="$emit('close-modal')"
      class="fixed bg-black/30 h-screen w-full top-0 left-0 flex justify-center items-center"
    >
      <div
        class="bg-white w-[30rem] px-6 py-10 flex flex-col items-center gap-6 relative"
        @click.stop
      >
        <IconCross class="absolute top-5 right-5 cursor-pointer" @click="$emit('close-modal')" />
        <slot />
        <!-- <BaseButton variant="primary">შესვლა</BaseButton> -->
      </div>
    </div>
  </teleport>
</template>
