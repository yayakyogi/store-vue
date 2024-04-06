<script setup lang="ts">
import BreadcrumbSection, {type  BreadcrumbProps } from '@/components/BreadcrumbSection.vue'
import { useRoute } from 'vue-router'

const route = useRoute();

const breadcrumbs: BreadcrumbProps[] = [
  {
    name: 'store-detail',
    title: `${route.params.store}`,
    link: `${route.params.store}`
  },
  {
    name: `${route.params.product}`,
    title: `${route.params.product}`
  }
]
</script>

<template>
  <!-- Breadcrumb Section -->
  <!-- <a-breadcrumb class="mt-8">
    <a-breadcrumb-item>
      <RouterLink :to="{ name: 'home', path: '/' }">Home</RouterLink>
    </a-breadcrumb-item>
    <a-breadcrumb-item>
      <RouterLink :to="{ name: 'store-detail', path: `${$route.params.store}` }">
        <span class="breadcrumb-item">{{ $route.params.store }}</span>
      </RouterLink>
    </a-breadcrumb-item>
    <a-breadcrumb-item>
      <span class="breadcrumb-item">
        {{ $route.params.product }}
      </span>
    </a-breadcrumb-item>
  </a-breadcrumb> -->
  <BreadcrumbSection :breadcrumbs="breadcrumbs" className="mt-8" />

  <!-- Image Preview Section -->
  <a-row :gutter="[32]" class="mt-8">
    <a-col :span="16" class="h-126.5 flex justify-center items-center overflow-hidden rounded-lg">
      <img src="https://picsum.photos/1000" />
    </a-col>
    <a-col :span="8">
      <a-row :gutter="[0, 13]">
        <a-col class="h-40 w-full flex justify-center items-center overflow-hidden rounded-lg">
          <img src="https://picsum.photos/401" />
        </a-col>
        <a-col class="h-40 w-full flex justify-center items-center overflow-hidden rounded-lg">
          <img src="https://picsum.photos/402" />
        </a-col>
        <a-col class="h-40 w-full flex justify-center items-center overflow-hidden rounded-lg">
          <img src="https://picsum.photos/403" />
        </a-col>
      </a-row>
    </a-col>
  </a-row>

  <!-- Description Section -->
  <div class="flex justify-between items-start gap-5 mt-8">
    <div class="flex-1 description">
      <p class="product-title">Sofa Ternyaman</p>
      <p class="author">By Yogi</p>
      <p class="price">Rp 400.000</p>
      <p>
        The Nike Air Max 720 SE goes bigger than ever before with Nike's tallest Air unit yet for
        unimaginable, all-day comfort. There's super breathable fabrics on the upper, while colours
        add a modern edge.
      </p>
      <p>
        Bring the past into the future with the Nike Air Max 2090, a bold look inspired by the DNA
        of the iconic Air Max 90. Brand-new Nike Air cushioning underfoot adds unparalleled comfort
        while transparent mesh and vibrantly coloured details on the upper are blended with timeless
        OG features for an edgy, modernised look.
      </p>
      <a-comment>
        <template #actions>
          <span key="comment-nested-reply-to">Reply to</span>
        </template>
        <template #author>
          <a>Han Solo</a>
        </template>
        <template #avatar>
          <a-avatar src="https://joeschmoe.io/api/v1/random" alt="Han Solo" />
        </template>
        <template #content>
          <p>
            We supply a series of design principles, practical patterns and high quality design
            resources (Sketch and Axure).
          </p>
        </template>
        <a-comment>
          <template #actions>
            <span>Reply to</span>
          </template>
          <template #author>
            <a>Han Solo</a>
          </template>
          <template #avatar>
            <a-avatar src="#" alt="Han Solo" />
          </template>
          <template #content>
            <p>
              We supply a series of design principles, practical patterns and high quality design
              resources (Sketch and Axure).
            </p>
          </template>
          <a-comment>
            <template #actions>
              <span>Reply to</span>
            </template>
            <template #author>
              <a>Han Solo</a>
            </template>
            <template #avatar>
              <a-avatar src="https://joeschmoe.io/api/v1/random" alt="Han Solo" />
            </template>
            <template #content>
              <p>
                We supply a series of design principles, practical patterns and high quality design
                resources (Sketch and Axure).
              </p>
            </template>
          </a-comment>
          <a-comment>
            <template #actions>
              <span>Reply to</span>
            </template>
            <template #author>
              <a>Han Solo</a>
            </template>
            <template #avatar>
              <a-avatar src="https://joeschmoe.io/api/v1/random" alt="Han Solo" />
            </template>
            <template #content>
              <p>
                We supply a series of design principles, practical patterns and high quality design
                resources (Sketch and Axure).
              </p>
            </template>
          </a-comment>
        </a-comment>
      </a-comment>
      <p>Leave comment</p>
      <a-textarea placeholder="Enter your command..." :rows="4" />
      <a-button type="primary" class="mt-3 mb-5">Send Comment</a-button>
    </div>
    <div class="action">
      <p class="label">Quantity</p>
      <a-input size="large" min="0" value="1" class="w-35 text-center">
        <template #addonBefore>
          <div class="i-mdi:minus-circle-outline text-lg cursor-pointer"></div>
        </template>
        <template #addonAfter>
          <div class="i-mdi:plus-circle-outline text-lg cursor-pointer"></div>
        </template>
      </a-input>
      <div class="flex justify-between items-center mt-4">
        <span class="label">Subtotal</span>
        <span class="subtotal">Rp 20.000</span>
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
        <template #icon><div class="i-mdi:basket text-xl"></div></template>
        Add to Cart
      </a-button>
    </div>
  </div>
</template>

<style lang="less">
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
    font-size: 20px;
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
