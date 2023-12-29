<script setup lang="ts">
import { useField } from 'vee-validate'

type IProps = {
  name: string
  label: string
}

const props = defineProps<IProps>()

const { value, meta, handleChange } = useField(() => props.name)
</script>

<template>
  <div class="h-[4.5rem] flex flex-col justify-between">
    <label :for="name" class="text-primary font-medium text-sm">{{ label }}</label>
    <input
      v-model="value"
      :name="name"
      :id="name"
      type="date"
      @change="handleChange"
      class="w-full h-11 px-[1rem] border-2 border-border-inactive rounded-xl focus:outline-focus-color"
      :class="[
        !meta.valid && meta.dirty && 'border-error-color bg-[#FAF2F3]',
        meta.valid && meta.dirty && 'border-validated-color bg-[#F8FFF8]'
      ]"
    />
  </div>
</template>
