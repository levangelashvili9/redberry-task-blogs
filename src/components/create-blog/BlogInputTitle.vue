<script setup lang="ts">
import { useFormStore } from '@/stores/form'
import { useField } from 'vee-validate'
import { onMounted, watch } from 'vue'

type IProps = {
  name: string
  label: string
  placeholder?: string
}

const props = defineProps<IProps>()

const { value, errors, meta, handleChange, setValue } = useField(() => props.name)
const formStore = useFormStore()

watch(value, (newValue) => {
  formStore.saveFormState({ ...formStore.formValues, title: newValue })
})

onMounted(() => {
  setValue(formStore.formValues.title)
})
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
    </div>
  </div>
</template>
