<script setup lang="ts">
import { useField } from 'vee-validate'

type IProps = {
  name: string
  label: string
  placeholder?: string
}

const props = defineProps<IProps>()

const { value, errors, meta, handleChange } = useField(() => props.name)
</script>

<template>
  <div>
    <label :for="name" class="text-primary font-medium text-sm">{{ label }}</label>
    <input
      v-model="value"
      :name="name"
      :id="name"
      :placeholder="placeholder"
      @change="handleChange"
      class="w-full h-11 px-[1rem] border-2 border-border-inactive rounded-xl mt-[0.375rem] mb-2 focus:outline-focus-color"
      :class="[
        !meta.valid && meta.dirty && 'border-error-color bg-[#FAF2F3]',
        meta.valid && meta.dirty && 'border-validated-color bg-[#F8FFF8]'
      ]"
    />
    <div class="text-secondary text-xs flex flex-col gap-1">
      <p
        :class="[
          errors.some((error) => error === 'მინიმუმ 4 სიმბოლო') && 'text-error-color',
          !errors.some((error) => error === 'მინიმუმ 4 სიმბოლო') &&
            meta.dirty &&
            'text-validated-color'
        ]"
      >
        • მინიმუმ 4 სიმბოლო
      </p>
      <p
        :class="[
          errors.some((error) => error === 'მინიმუმ ორი სიტყვა') && 'text-error-color',
          !errors.some((error) => error === 'მინიმუმ ორი სიტყვა') &&
            meta.dirty &&
            'text-validated-color'
        ]"
      >
        • მინიმუმ ორი სიტყვა
      </p>
      <p
        :class="[
          errors.some((error) => error === 'მხოლოდ ქართული სიმბოლოები') && 'text-error-color',
          !errors.some((error) => error === 'მხოლოდ ქართული სიმბოლოები') &&
            meta.dirty &&
            'text-validated-color'
        ]"
      >
        • მხოლოდ ქართული სიმბოლოები
      </p>
    </div>
  </div>
</template>
