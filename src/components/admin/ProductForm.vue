<script setup lang="ts">
import { reactive, toRef } from 'vue'

interface FormProps {
  name: string
  price: string
  category: string
  description: string
}

interface FormImageProps {
  id: number
  src: string
}

const props = defineProps<{ data?: FormProps; images?: FormImageProps[] }>()

const { data } = toRef(props).value

const formState = reactive<FormProps>({
  name: data?.name || '',
  price: data?.price || '',
  category: data?.category || '',
  description: data?.description || ''
})
</script>

<template>
  <div class="flex gap-5">
    <a-card class="w-full">
      <a-form layout="vertical">
        <div class="flex gap-5">
          <a-form-item label="Name" class="w-full">
            <a-input v-model:value="formState.name" />
          </a-form-item>
          <a-form-item label="Price" class="w-full">
            <a-input v-model:value="formState.price" />
          </a-form-item>
        </div>
        <a-form-item label="Select">
          <a-select v-model:value="formState.category" placeholder="Please select a category">
            <a-select-option value="china">Food</a-select-option>
            <a-select-option value="usa">Tools</a-select-option>
          </a-select>
        </a-form-item>
        <a-form-item label="Description">
          <a-textarea v-model:value="formState.description" />
        </a-form-item>
        <a-button type="primary" size="large" class="w-full">Update Product</a-button>
      </a-form>
    </a-card>
    <a-card class="w-full h-full">
      <p class="mt-0 text-lg">Product Images</p>
      <div class="flex gap-5 mt-5">
        <div :v-if="images?.length" v-for="image in images" :key="image.id" class="relative">
          <img :src="image.src" alt="product" class="w-32 h-32 rounded-lg" />
          <div class="absolute -top-2 -right-2 bg-white rounded-full hover:cursor-pointer">
            <div class="i-mdi:close-circle text-3xl text-red-500" />
          </div>
        </div>
        <a-form-item>
          <a-form-item name="dragger" no-style>
            <a-upload-dragger>
              <div class="flex flex-col justify-center items-center w-32 h-23">
                <div class="i-mdi:cloud-upload-outline text-4xl text-gray-500" />
                <p class="text-xs text-gray-500 mt-2 mb-0">Upload</p>
              </div>
            </a-upload-dragger>
          </a-form-item>
        </a-form-item>
      </div>
      <a-button :disabled="!images?.length" type="primary" size="large" class="w-full mt-5"
        >Save Photo</a-button
      >
    </a-card>
  </div>
</template>
