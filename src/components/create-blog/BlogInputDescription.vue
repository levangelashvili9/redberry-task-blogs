<script setup lang="ts">
import { useField } from 'vee-validate'

type IProps = {
  name: string
  label: string
  placeholder?: string
}

const props = defineProps<IProps>()

const { value, meta, handleChange } = useField(() => props.name)
</script>

<template>
  <div>
    <label :for="name" class="text-primary font-medium text-sm">{{ label }}</label>
    <!-- @vue-ignore -->
    <textarea
      v-model="value"
      :name="name"
      :id="name"
      :placeholder="placeholder"
      @change="handleChange"
      class="w-full h-[7.75rem] px-[1rem] py-3 border border-border-inactive rounded-xl mt-[0.375rem] resize-none focus:outline-focus-color"
      :class="[
        !meta.valid && meta.dirty && 'border-error-color bg-[#FAF2F3]',
        meta.valid && meta.dirty && 'border-validated-color bg-[#F8FFF8]'
      ]"
    />
    <div class="text-secondary text-xs flex flex-col gap-1">
      <p
        :class="[
          !meta.valid && meta.dirty && 'text-error-color',
          meta.valid && 'text-validated-color'
        ]"
      >
        • მინიმუმ 2 სიმბოლო
      </p>
    </div>
  </div>
</template>
