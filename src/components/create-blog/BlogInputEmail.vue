<script setup lang="ts">
import { useField } from 'vee-validate'
import IconError from '@/components/icons/IconError.vue'
import { useFormStore } from '@/stores/form'
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
  formStore.saveFormState({ ...formStore.formValues, email: newValue })
})

onMounted(() => {
  setValue(formStore.formValues.email)
})
</script>

<template>
  <div class="w-[18rem]">
    <label
      :for="name"
      class="text-primary font-medium text-sm"
      @click="console.log(meta.valid, meta.dirty)"
      >{{ label }}</label
    >
    <input
      v-model="value"
      :name="name"
      :id="name"
      :placeholder="placeholder"
      @change="handleChange"
      class="w-full h-11 px-[1rem] border-2 border-border-inactive rounded-xl mt-[0.375rem] focus:outline-focus-color"
      :class="[
        !meta.valid && meta.dirty && 'border-error-color bg-[#FAF2F3]',
        meta.valid && meta.dirty && 'border-validated-color bg-[#F8FFF8]'
      ]"
    />
    <div class="text-secondary text-xs flex flex-col gap-1">
      <div class="mt-1 h-5">
        <div v-show="!meta.valid && meta.dirty" class="flex gap-1 items-center">
          <IconError />
          <p class="text-error-color text-xs">{{ errors[0] }}</p>
        </div>
      </div>
    </div>
  </div>
</template>
