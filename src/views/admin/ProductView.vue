<script lang="ts" setup>
import { useRouter } from 'vue-router'
import HeaderSection from '@/components/admin/HeaderSection.vue'

const router = useRouter()

const products = [
  {
    id: 1,
    name: 'Shirup Morzan',
    category: 'food',
    price: 9.2,
    image:
      'https://images.tokopedia.net/img/cache/200-square/VqbcmM/2023/10/11/c822cd32-3608-46bc-8d25-db89d376a240.jpg'
  },
  {
    id: 2,
    name: 'Shirup Morzan',
    category: 'food',
    price: 2.0,
    image:
      'https://img.freepik.com/free-photo/bottles-cosmetics_23-2147670182.jpg?t=st=1722391673~exp=1722395273~hmac=f21206a71a589025908518cce4e5361dc9cb8e5484a8672ea80ddb27bb35d7db&w=1380'
  }
]
</script>

<template>
  <HeaderSection title="Products" subtitle="Manage it well and get money" />
  <a-button
    type="primary"
    size="large"
    class="flex items-center gap-1"
    @click="() => router.push('/products/add')"
  >
    <template #icon>
      <div class="i-mdi:plus text-xl" />
    </template>
    Add New Product
  </a-button>
  <div class="mt-8 grid grid-cols-5 gap-3">
    <a-card
      v-for="product in products"
      :key="product.id"
      class="hover:cursor-pointer"
      @click="() => router.push(`/products/${product.id}`)"
    >
      <img :src="product.image" alt="product" class="w-full rounded-md" />
      <p class="mb-1 text-xl">{{ product.name }}</p>
      <span class="text-gray-500">{{ `$${product.price}` }}</span>
    </a-card>
  </div>
</template>
