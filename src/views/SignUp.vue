<script setup lang="ts">
import { reactive } from 'vue'

interface FormState {
  name: string
  email: string
  address: string
  password: string
  openStore: boolean
  storeName?: string
  storeCategory?: string
}

const formState = reactive<FormState>({
  name: '',
  email: '',
  address: '',
  password: '',
  openStore: false,
  storeName: '',
  storeCategory: ''
})
</script>

<template>
  <div class="w-full max-w-100 mx-auto">
    <h2>Memulai untuk jual beli dengan cara terbaru</h2>

    <a-flex gap="middle" class="mb-6">
      <a-form :model="formState" name="basic" auotocomplete="off" layout="vertical" class="w-full">
        <!-- Full Name -->
        <a-form-item label="Full Name" name="name">
          <a-input v-model:value="formState.name" />
        </a-form-item>

        <!-- Email -->
        <a-form-item label="Email" name="email">
          <a-input v-model:value="formState.email" />
        </a-form-item>
        
        <!-- Address -->
        <a-form-item label="Address" name="address">
          <a-input v-model:value="formState.address" />
        </a-form-item>

        <!-- Password -->
        <a-form-item label="Password" name="password">
          <a-input v-model:value="formState.password" type="password" />
        </a-form-item>

        <a-form-item label="Store">
          <p class="mt-0">Apakah anda juga ingin membuka toko?</p>
          <a-radio-group v-model:value="formState.openStore">
            <a-radio value="true">Iya Boleh</a-radio>
            <a-radio value="false">Enggak dulu deh</a-radio>
          </a-radio-group>
        </a-form-item>

        <a-form-item label="Nama Toko">
          <a-input v-model:value="formState.storeName" />
        </a-form-item>

        <a-form-item label="Category">
          <a-select v-model:value="formState.storeCategory">
            <a-select-option value="retail">Retail</a-select-option>
            <a-select-option value="kelontong">Kelontong</a-select-option>
          </a-select>
        </a-form-item>

        <a-form-item>
          <a-button class="mt-4 w-full" size="large" type="primary" html-type="submit">
            Sign Up Now
          </a-button>
          <a-button class="mt-4 w-full" size="large">
            Back to Login
          </a-button>
        </a-form-item>
      </a-form>
    </a-flex>
  </div>
</template>

<style lang="less">
.signup-container {
  display: 'flex';
  justify-content: 'center';
  align-items: 'center';
}
</style>
