<script lang="ts">
import { defineComponent, type PropType } from 'vue'
import CategorySkeleton from './skeleton/CategorySkeleton.vue';

export default defineComponent({
  props: {
    categories: Array as PropType<string[]>,
    loading: Boolean
  },
  components: {
    CategorySkeleton
  }
})
</script>

<template>
  <p class="title-section">Trend Categories</p>
  <CategorySkeleton v-if="loading" />
  
  <div v-if="!loading" class="grid grid-cols-8 gap-5">
    <div v-for="category in categories" :key="category">
      <a-card :bordered="false" class="card-category">
        <img :src="`/images/icons/${category}.svg`" />
        <span>{{ category }}</span>
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
    gap: 10px;
    padding: 5px;
    
    span {
      text-transform: capitalize;
    }
  }
}
</style>
