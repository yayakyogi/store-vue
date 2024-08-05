<script setup lang="ts">
import HeaderSection from '@/components/admin/HeaderSection.vue'
import { reactive } from 'vue'

interface FormProps {
  storeName: string
  category: string
  openStore: boolean
}

const formState = reactive<FormProps>({
  storeName: '',
  category: '',
  openStore: false
})
</script>

<template>
  <HeaderSection title="Store Settings" subtitle="Make store that profitable" />
  <a-card class="w-1/2">
    <a-form layout="vertical">
      <a-form-item label="Name" class="w-full">
        <a-input v-model:value="formState.storeName" />
      </a-form-item>
      <a-form-item label="Select Category">
        <a-select v-model:value="formState.category" placeholder="Please select a category">
          <a-select-option value="china">Food</a-select-option>
          <a-select-option value="usa">Tools</a-select-option>
        </a-select>
      </a-form-item>
      <a-form-item label="Apakah saat ini toko anda buka?">
        <a-radio-group v-model:value="formState.openStore">
          <a-radio :value="true">Buka</a-radio>
          <a-radio :value="false">Sementara tutup</a-radio>
        </a-radio-group>
      </a-form-item>
      <div class="flex justify-end">
        <a-button type="primary" size="large">Save Now</a-button>
      </div>
    </a-form>
  </a-card>
</template>
