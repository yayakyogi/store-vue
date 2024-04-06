<script setup lang="ts">
import BreadcrumbSection, { type BreadcrumbProps } from '@/components/BreadcrumbSection.vue'

const breadcrumbs: BreadcrumbProps[] = [
  {
    name: 'cart',
    title: 'cart'
  }
]

const carts = [
  {
    id: '1',
    image: 'https://picsum.photos/1000',
    name: 'sofa ternyaman',
    seller: 'yogi',
    price: 4000000
  },
  {
    id: '2',
    image: 'https://picsum.photos/1001',
    name: 'kursi kantor',
    seller: 'taka',
    price: 350000
  },
  {
    id: '3',
    image: 'https://picsum.photos/1002',
    name: 'kipas angin',
    seller: 'bentar',
    price: 120000
  }
]
</script>

<template>
  <BreadcrumbSection :breadcrumbs="breadcrumbs" className="mt-8 mb-5" />

  <a-row class="gap-5 mb-2">
    <a-col :span="2" class="col">
      <p class="title">Image</p>
    </a-col>
    <a-col flex="2" class="col">
      <p class="title">Name & Seller</p>
    </a-col>
    <a-col flex="1" class="col">
      <p class="title">Price</p>
    </a-col>
    <a-col :span="2" class="col">
      <p class="title">Action</p>
    </a-col>
  </a-row>
  <a-row v-for="(cart, index) in carts" :key="cart.id" class="mb-6 gap-5">
    <a-col :span="2">
      <a-avatar :src="cart.image" :size="90" shape="square" />
    </a-col>
    <a-col flex="2" class="col">
      <span class="title">{{ cart.name }}</span>
      <span class="subtitle">by {{ cart.seller }}</span>
    </a-col>
    <a-col flex="1" class="col">
      <span class="text-lg">Rp {{ cart.price }}</span>
    </a-col>
    <a-col :span="2" class="col">
      <a-button type="primary" danger size="large" class="w-auto flex justify-center items-center gap-1">
        Remove
        </a-button>
    </a-col>

    <a-divider v-if="index === (carts.length - 1)" />
  </a-row>
</template>

<style lang="less">
.col {
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 4px;

  .title {
    text-transform: capitalize;
    color: @black-color;
    font-size: 20px;
  }

  .subtitle {
    color: @grey-color;
  }
}
</style>

<!-- <script lang="ts">
export default {
  name: 'CartView',
  created() {
    document.title = `${this.$route.params.product} - Store`
  }
}
</script> -->
