<script setup lang="ts">
import { ref } from 'vue';

const categories = ref([
  {
    title: 'Gadgets',
    icon: '/images/icons/gadgets.svg',
  },
  {
    title: 'Furniture',
    icon: '/images/icons/furniture.svg',
  },
  {
    title: 'Make up',
    icon: '/images/icons/make-up.svg',
  },
  {
    title: 'Sneaker',
    icon: '/images/icons/sneaker.svg',
  },
  {
    title: 'Tools',
    icon: '/images/icons/tools.svg'
  },
  {
    title: 'Baby',
    icon: '/images/icons/baby.svg'
  }
])
</script>

<template>
  <p class="title-section">Trend Categories</p>
  <div class="grid grid-cols-6 gap-5">
    <div v-for="category in categories" :key="category.title">
      <a-card :bordered="false" class="card-category">
        <img :src="category.icon" />
        <span>{{ category.title }}</span>
      </a-card>
    </div>
  </div>
</template>

<style lang="less">
.card-category {
  background-color: @grey-color-2;
  cursor: pointer;
  display: flex;
  flex-direction: column;

  .ant-card-body {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 5px;
  }
}
</style>
