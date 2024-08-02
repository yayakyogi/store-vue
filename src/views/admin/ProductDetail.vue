<script setup lang="ts">
import HeaderSection from '@/components/admin/HeaderSection.vue'
import type ProductFormVue from '@/components/admin/ProductForm.vue'
import { reactive } from 'vue'

interface FormProps {
  name: string
  price: string
  category: string
  description: string
}

const formState = reactive<FormProps>({
  name: 'Shirup Marzan',
  price: '$7',
  category: 'Food',
  description: 'lorem ipsum'
})

const images = [
  {
    id: 1,
    src: 'https://images.tokopedia.net/img/cache/200-square/VqbcmM/2023/10/11/c822cd32-3608-46bc-8d25-db89d376a240.jpg'
  },
  {
    id: 2,
    src: 'https://img.freepik.com/free-photo/bottles-cosmetics_23-2147670182.jpg?t=st=1722391673~exp=1722395273~hmac=f21206a71a589025908518cce4e5361dc9cb8e5484a8672ea80ddb27bb35d7db&w=1380'
  }
]
</script>

<template>
  <HeaderSection title="Shirup Marzan" subtitle="Product Detail" />
  <ProductForm :data="formState" :images="images" />
</template>
