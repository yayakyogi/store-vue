<script setup lang="ts">
import CategorySection from '@/components/CategorySection.vue'
import ProductSection, { type ProductProps } from '@/components/ProductSection.vue'

const products: ProductProps[] = [
  {
    title: 'Product 1',
    image: 'https://images.tokopedia.net/img/cache/200-square/VqbcmM/2023/10/11/c822cd32-3608-46bc-8d25-db89d376a240.jpg',
    price: 2000
  },
  {
    title: 'Product 1',
    image: 'https://images.tokopedia.net/img/cache/200-square/VqbcmM/2023/10/11/c822cd32-3608-46bc-8d25-db89d376a240.jpg',
    price: 2000
  },
  {
    title: 'Product 1',
    image: 'https://images.tokopedia.net/img/cache/200-square/VqbcmM/2023/10/11/c822cd32-3608-46bc-8d25-db89d376a240.jpg',
    price: 2000
  },
  {
    title: 'Product 1',
    image: 'https://images.tokopedia.net/img/cache/200-square/VqbcmM/2023/10/11/c822cd32-3608-46bc-8d25-db89d376a240.jpg',
    price: 2000
  },
  {
    title: 'Product 1',
    image: 'https://images.tokopedia.net/img/cache/200-square/VqbcmM/2023/10/11/c822cd32-3608-46bc-8d25-db89d376a240.jpg',
    price: 2000
  },
  {
    title: 'Product 1',
    image: 'https://images.tokopedia.net/img/cache/200-square/VqbcmM/2023/10/11/c822cd32-3608-46bc-8d25-db89d376a240.jpg',
    price: 2000
  },
]
</script>

<template>
  <div class="banner">
    <img src="/images/banner/banner.jpg" class="w-full" />
  </div>
  <CategorySection />
  <ProductSection :data="products" />
</template>

<style lang="less">
.container {
  .banner {
    overflow: hidden;
    border-radius: 8px;
  }
}
</style>

<!-- <script lang="ts">
  export default {
    name: 'HomeView',
    created() {
      document.title = 'Home - Store'
    }
  }
</script> -->