<script setup lang="ts">
import { useField } from 'vee-validate'
import IconArrowDown from '@/components/icons/IconArrowDown.vue'
import type { ICategory } from '@/types'
import IconCross from '@/components/icons/IconCross.vue'
import BaseCategory from '@/components/ui/BaseCategory.vue'
import useDropDown from '@/composables/useDropdown'
import { computed } from 'vue'

type IProps = {
  name: string
  label: string
  categories: ICategory[]
}

const props = defineProps<IProps>()

const { value, meta } = useField(() => props.name)

const { isOpen, toggleIsOpen, addCategory, currentCategories } = useDropDown(
  props.categories,
  value
)

const chosenCategories = computed(() => {
  const filtered = props.categories.filter((category) =>
    currentCategories.value.some((currentCategory) => category.title === currentCategory)
  )
  return filtered
})
</script>

<template>
  <div class="h-[4.5rem] flex flex-col justify-between">
    <p
      class="text-primary font-medium text-sm"
      @click="console.log(chosenCategories, currentCategories)"
    >
      {{ label }}
    </p>
    <div
      @click="toggleIsOpen"
      class="w-full h-11 px-3 flex justify-between items-center border-2 border-border-inactive rounded-xl cursor-pointer relative focus:outline-focus-color"
      :class="[
        !meta.valid && meta.dirty && 'border-error-color',
        meta.valid && meta.dirty && 'border-validated-color'
      ]"
    >
      <div class="flex gap-2 w-[90%] overflow-hidden">
        <BaseCategory
          @click.stop
          @click="addCategory(category.title)"
          v-for="category in chosenCategories"
          :key="category.id"
          :category="category"
        >
          <IconCross color="white" class="w-5 h-5 ml-1" />
        </BaseCategory>
      </div>
      <IconArrowDown />
      <div
        v-show="isOpen"
        @click.stop
        class="absolute bottom-[-320px] left-0 w-full p-4 bg-slate-200 rounded-xl flex justify-center flex-wrap place-items-start gap-1"
      >
        <BaseCategory
          @click="addCategory(category.title)"
          v-for="category in categories"
          :key="category.id"
          :category="category"
          :class="{ 'border-black': currentCategories.includes(category.title) }"
        />
      </div>
    </div>
  </div>
</template>
