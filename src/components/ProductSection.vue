<script setup lang="ts">
export interface ProductProps {
  image: string; title: string; price: number;
}

defineProps<{data:ProductProps[] }>()
</script>

<template>
  <p class="title-section">New Products</p>
  
  <div class="grid grid-cols-4 gap-5">
    <a-card hoverable class="card-product" v-for="product in data" :key="product.title">
      <template #cover>
        <img alt="example" :src="product.image" />
      </template>
      <a-card-meta :title="product.title">
        <template #description>
          <span class="price">Rp {{product.price}}</span>
        </template>
      </a-card-meta>
    </a-card>
  </div>
</template>

<style lang="less">
.card-product {
  width: 100%;

  .ant-card-meta-title {
    font-size: 18px;
    font-weight: 400;
  }

  .price {
    color: @orange-color;
    font-weight: 600;
    font-size: 18px;
  }
}
</style>