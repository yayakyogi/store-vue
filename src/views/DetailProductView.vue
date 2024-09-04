<script lang="ts">
import BreadcrumbSection from '@/components/BreadcrumbSection.vue'
import { useRoute } from 'vue-router'

export default {
  data() {
    return {
      route: useRoute(),
      loading: true,
      qty: 1,
      subtotal: 0,
      product: {
        id: 0,
        image: '',
        title: '',
        description: '',
        price: 0,
        rating: {
          rate: 0
        }
      },
      breadcrumbs: []
    }
  },
  methods: {
    async getData() {
      try {
        const res = await fetch(`https://fakestoreapi.com/products/${this.route.params.product_id}`)
        this.product = await res.json()
        this.subtotal = this.product.price
        this.loading = false
      } catch (error) {
        this.loading = false
        console.log('error', error)
      }
    },

    changeQty(type: 'increment' | 'decrement') {
      if (type === 'increment') {
        this.qty += 1
      } else {
        if (this.qty > 1) {
          this.qty -= 1
        }
      }

      if (this.qty >= 1) {
        this.subtotal = this.qty * this.product.price
      }
    }
  },
  components: {
    BreadcrumbSection
  },
  created() {
    this.getData()
  }
}
</script>

<template>
  <a-skeleton-input v-if="loading" active :size="20" class="mt-8" />
  <BreadcrumbSection v-if="!loading" :breadcrumbs="breadcrumbs" className="mt-8" />

  <!-- Image Preview Section -->
  <a-row :gutter="[32]" class="mt-8">
    <a-col :span="16" class="flex justify-center items-center overflow-hidden image">
      <a-skeleton-image v-if="loading" active :size="100" />
      <img v-if="!loading" :src="product?.image" />
    </a-col>
    <a-col :span="8">
      <a-skeleton v-if="loading" active class="action" />
      <div v-if="!loading" class="action">
        <p class="label">Quantity</p>
        <a-input size="large" min="0" :value="qty" class="w-35 text-center">
          <template #addonBefore>
            <div
              class="i-mdi:minus-circle-outline text-lg cursor-pointer"
              v-on:click="changeQty('decrement')"
            ></div>
          </template>
          <template #addonAfter>
            <div
              class="i-mdi:plus-circle-outline text-lg cursor-pointer"
              v-on:click="changeQty('increment')"
            ></div>
          </template>
        </a-input>
        <div class="flex justify-between items-center mt-4">
          <span class="label">Subtotal</span>
          <span class="subtotal">{{ `$${subtotal}` }}</span>
        </div>
        <a-button
          type="primary"
          size="large"
          class="w-full flex justify-center items-center gap-2 mt-5"
        >
          <template #icon><div class="i-mdi:cart text-xl"></div></template>
          Buy Now
        </a-button>
        <a-button size="large" class="w-full flex justify-center items-center gap-2 mt-3">
          <template #icon><div class="i-mdi:basket text-xl" /></template>
          Add to Cart
        </a-button>
      </div>
    </a-col>
  </a-row>

  <!-- Description Section -->
  <a-skeleton v-if="loading" />
  <div v-if="!loading" class="flex justify-between items-start gap-5 mt-8">
    <div class="flex-1 description">
      <p class="product-title">{{ product.title }}</p>
      <p class="author">By Yogi</p>
      <p class="price">{{ `$${product.price}` }}</p>
      <span class="text-xl">Description</span>
      <p class="max-w-3/4 text-slate-7">{{ product.description }}</p>
      <p class="text-xl">Product Review</p>
      <div class="flex flex-col items-center my-3">
        <img src="/images/illustrations/empty-review.svg" class="w-1/3" />
        <p>This product doesn't have any review</p>
      </div>
      <p>Leave comment</p>
      <div class="flex flex-col w-a">
        <a-textarea placeholder="Enter your command..." :rows="4" class="w-3/4" />
        <a-button type="primary" class="mt-3 mb-5 w-32">Send Comment</a-button>
      </div>
    </div>
  </div>
</template>

<style lang="less">
.image {
  height: 500px;

  img {
    max-width: 100%;
    max-height: 100%;
    object-fit: cover;
  }
}
.description {
  .product-title {
    font-size: 32px;
    line-height: 10px;
  }

  .author {
    color: @grey-color;
    line-height: 0;
    margin-bottom: 20px;
  }

  .price {
    font-weight: 500;
    font-size: 24px;
    color: @orange-color;
  }
}

.action {
  width: 400px;
  padding: 20px;
  position: sticky;
  top: 100px;
  border: 1px solid @border-color-1;
  border-radius: @border-radius;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 1px 2px;

  .label {
    color: @grey-color;
    margin-bottom: 10px;
  }

  .subtotal {
    font-size: 20px;
    color: @primary-color;
    font-weight: 500;
  }
}
</style>

<!-- <script lang="ts">
export default {
  name: 'DetailProduct',
  created() {
    document.title = `${this.$route.params.product} - Store`
  }
}
</script> -->
