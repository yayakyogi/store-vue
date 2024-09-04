<script lang="ts">
import CategorySection from '@/components/CategorySection.vue'
import ProductSection from '@/components/ProductSection.vue'
import { notification } from 'ant-design-vue'

const openNotification = (title: string, message: string) => {
  notification.error({
    message: `${title}`,
    description: `${message}`
  })
}

export default {
  components: {
    CategorySection,
    ProductSection
  },

  data() {
    return {
      products: [],
      categories: [],
      loadingProducts: true,
      loadingCategories: true
    }
  },

  methods: {
    // to open notification when any error on request API
    open(title: string, error: string) {
      this.loadingProducts = false
      this.loadingCategories = false

      openNotification(title, error)
    },

    async getCategories() {
      try {
        const res = await fetch('https://fakestoreapi.com/products/categories')
        this.categories = await res.json()
        this.loadingCategories = false
      } catch (error: any) {
        this.open('Get Categories', error.message)
      }
    },

    async getProducts() {
      try {
        const res = await fetch('https://fakestoreapi.com/products?limit=18')
        this.products = await res.json()
        this.loadingProducts = false
      } catch (error: any) {
        this.open('Get Products', error.message)
      }
    }
  },

  created() {
    this.getCategories()
    this.getProducts()
  }
}
</script>

<template>
  <div class="banner">
    <img src="/images/banner/banner.jpg" />
  </div>
  <CategorySection :categories="categories" :loading="loadingCategories" />
  <ProductSection :data="products" :loading="loadingProducts" />
</template>

<style lang="less">
.banner {
  margin-top: 30px;
  overflow: hidden;
  border-radius: 8px;
  max-height: 400px;

  img {
    object-fit: cover;
    max-width: 100%;
    min-width: 100%;
  }
}
</style>
