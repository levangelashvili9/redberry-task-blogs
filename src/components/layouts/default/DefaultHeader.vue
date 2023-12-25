<script setup lang="ts">
import { useAuthStore } from '@/stores/auth'
import { useRouter } from 'vue-router'

import BaseButton from '@/components/ui/BaseButton.vue'
import BaseModal from '@/components/ui/BaseModal.vue'
import IconRedberry from '@/components/icons/IconRedberry.vue'

import useModal from '@/composables/useModal'
import LoginForm from '@/components/shared/LoginForm.vue'
import SuccessDialog from '@/components/shared/SuccessDialog.vue'

const { isModalActive, openModal, closeModal } = useModal()
const authStore = useAuthStore()
const router = useRouter()

const navigateToForm = () => {
  router.push('/form/createBlog')
}
</script>

<template>
  <div class="h-20 flex justify-between items-center px-[4.75rem]">
    <IconRedberry />
    <BaseButton v-if="authStore.isLoggedIn" variant="secondary" @click="navigateToForm"
      >დაამატე ბლოგი</BaseButton
    >
    <BaseButton v-else variant="secondary" @click="openModal">შესვლა</BaseButton>
    <BaseModal :isModalActive="isModalActive" @close-modal="closeModal">
      <LoginForm v-if="!authStore.isLoggedIn" />
      <SuccessDialog v-else buttonMessage="კარგი" @close-modal="closeModal" />
    </BaseModal>
  </div>
</template>
