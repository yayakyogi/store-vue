<script setup lang="ts">
import { useRouter } from 'vue-router';
import ProductSkeleton from './skeleton/ProductSkeleton.vue';

const router = useRouter();

export interface ProductProps {
  id: number
  image: string
  title: string
  price: number
  category: string
  rating: {
    rate: number
  }
}

defineProps<{ data: ProductProps[]; loading: boolean }>()
</script>

<template>
  <p class="title-section">New Products</p>

  <div v-if="!loading" class="grid grid-cols-6 gap-5">
    <div class="card-product" v-for="product in data" :key="product.id" @click="() => {
      router.push(`/product/${product.id}`)
    }">
      <div class="image-section">
        <img alt="example" :src="product.image" />
      </div>
      <div class="description-section">
        <span class="title">{{ product.title }}</span>
        <span class="category">{{ product.category }}</span>
        <div class="flex justify-start items-center gap-2">
          <a-rate v-model:value="product.rating.rate" class="text-sm text-amber" allow-half disabled />
          <span class="text-xs">{{ `(${product.rating.rate})` }}</span>
        </div>
        <span class="text-lg">{{ `$${product.price}` }}</span>
      </div>
    </div>
  </div>

  <ProductSkeleton v-if="loading" />
</template>

<style lang="less">
.card-product {
  padding: 10px;
  border: 2px solid #e5e5e5;
  border-radius: 10px;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  gap: 10px;
  transition: 0.3s all ease-in-out;

  &:hover {
    border-color: @primary-color;
  }

  .image-section {
    overflow: hidden;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 200px;

    img {
      object-fit: cover !important;
      height: initial;
      max-width: 100%;
      max-height: 100%;
    }
  }

  .description-section {
    display: flex;
    flex-direction: column;
    gap: 8px;

    .title {
      font-size: 13px;
      margin: 0;
      line-height: 120%;
      display: -webkit-box;
      -webkit-box-orient: vertical;
      overflow: hidden;
      text-overflow: ellipsis;
      -webkit-line-clamp: 2;
      line-clamp: 2;
    }

    .category {
      font-size: 12px;
      color: @grey-color;
    }
  }

  .ant-card-meta-title {
    font-size: 12px;
    font-weight: 400;
  }

  .price {
    color: @orange-color;
    font-weight: 600;
    // font-size: 18px;
  }
}
</style>
