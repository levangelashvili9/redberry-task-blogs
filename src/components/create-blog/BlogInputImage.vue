<script setup lang="ts">
import IconFileUpload from '@/components/icons/IconFileUpload.vue'
import { useField } from 'vee-validate'
import { ref } from 'vue'
import IconCross from '@/components/icons/IconCross.vue'
import IconImage from '@/components/icons/IconImage.vue'

const active = ref(false)
const dropZoneFile = ref<any>(null)

const toggleActive = () => {
  active.value = !active.value
}

const onFileSelect = () => {
  //@ts-ignore
  dropZoneFile.value = document.querySelector('#image').files[0]
  value.value = dropZoneFile.value
}

const onDrop = (event: any) => {
  dropZoneFile.value = event.dataTransfer.files[0]
  value.value = dropZoneFile.value
}

const handleDelete = () => {
  dropZoneFile.value = null
  value.value = null
}

const { value } = useField(() => 'image')
</script>

<template>
  <div>
    <span class="text-primary font-medium text-sm">ატვირთეთ ფოტო</span>
    <div
      v-if="dropZoneFile"
      class="w-full h-14 flex items-center bg-[#F2F2FA] mt-[0.375rem] px-4 rounded-xl relative"
    >
      <IconImage class="mr-2" />
      <p>{{ dropZoneFile?.name }}</p>
      <IconCross class="absolute right-2 top-[50%-25%] cursor-pointer" @click="handleDelete" />
    </div>
    <label
      v-else
      for="image"
      @dragenter.prevent="toggleActive"
      @dragleave.prevent="toggleActive"
      @dragover.prevent
      @drag.prevent="toggleActive"
      @drop.prevent="onDrop"
      :class="{ 'bg-[#F1EFFB]': active }"
      class="w-full h-[11.25rem] mt-[0.375rem] flex flex-col justify-center items-center bg-[#F4F3FF] rounded-xl border border-[#85858D] border-dashed cursor-pointer hover:bg-[#F1EFFB]"
    >
      <IconFileUpload class="mb-6" />
      <span class="text-primary text-sm"
        >ჩააგდეთ ფაილი აქ ან <span class="font-medium underline">აირჩიეთ ფაილი</span></span
      >
      <input
        type="file"
        class="hidden"
        id="image"
        @change="onFileSelect"
        accept=".png, .jpg, .jpeg, image/png, image/jpeg"
      />
    </label>
  </div>
</template>
