<script setup lang="ts">
interface FormState {
  address: string
  province: string
  city: string
  district: string
  postalCode: string
  phoneNumber: string
}

import BreadcrumbSection, { type BreadcrumbProps } from '@/components/BreadcrumbSection.vue'
import { reactive } from 'vue'

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

const formState = reactive<FormState>({
  address: '',
  city: '',
  district: '',
  phoneNumber: '',
  postalCode: '',
  province: ''
})

const onFinish = (value: any) => {
  console.log('value ', value)
}

const onFinishFailed = (errorInfo: any) => {
  console.log('error ', errorInfo)
}
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
      <a-button
        type="primary"
        danger
        size="large"
        class="w-auto flex justify-center items-center gap-1"
      >
        Remove
      </a-button>
    </a-col>

    <a-divider v-if="index === carts.length - 1" />
  </a-row>

  <a-flex gap="middle" class="mb-6">
    <a-card title="Shipping Details" class="flex-1">
      <a-form
        :model="formState"
        name="basic"
        autocomplete="off"
        layout="vertical"
        size="large"
        @finish="onFinish"
        @finishFailed="onFinishFailed"
      >
        <!-- Address -->
        <a-form-item
          label="Address"
          name="address"
          :rules="[{ required: true, message: 'Please input your address!' }]"
        >
          <a-input v-model:value="formState.address" />
        </a-form-item>

        <!-- Phone Number -->
        <a-form-item
          label="Phone Number"
          name="phoneNumber"
          :rules="[{ required: true, message: 'Please input your phone number!' }]"
        >
          <a-input v-model:value="formState.phoneNumber" />
        </a-form-item>

        <!-- Province -->
        <a-form-item
          label="Province"
          name="province"
          :rules="[{ required: true, message: 'Please input your province!' }]"
        >
          <a-select v-model:value="formState.province">
            <a-select-option value="jawa timur">Jawa Timur</a-select-option>
            <a-select-option value="jawa tengah">Jawa Tengah</a-select-option>
            <a-select-option value="jawa barat">Jawa Barat</a-select-option>
          </a-select>
        </a-form-item>

        <!-- City -->
        <a-form-item
          label="City"
          name="city"
          :rules="[{ required: true, message: 'Please input your city!' }]"
        >
         <a-select :disabled="!formState.province" v-model:value="formState.city">
            <a-select-option value="tulungagung">Tulungagung</a-select-option>
            <a-select-option value="trenggalek">Trenggalek</a-select-option>
            <a-select-option value="kediri">Kediri</a-select-option>
            <a-select-option value="blitar">Blitar</a-select-option>
          </a-select>
        </a-form-item>

        <!-- District -->
        <a-form-item
          label="District"
          name="district"
          :rules="[{ required: true, message: 'Please input your district!' }]"
        >
         <a-select :disabled="!formState.city" v-model:value="formState.city">
            <a-select-option value="kauman">Kauman</a-select-option>
            <a-select-option value="gondang">Gondang</a-select-option>
            <a-select-option value="kedungwaru">Kedungwaru</a-select-option>
          </a-select>
        </a-form-item>

        <!-- Postal Code -->
        <a-form-item
          label="Postal Code"
          name="postalCode"
          :rules="[{ required: true, message: 'Please input your postal code!' }]"
        >
          <a-input :disabled="!formState.district" v-model:value="formState.postalCode" />
        </a-form-item>

        <a-form-item>
          <a-button class="mt-4" size="large" type="primary" html-type="submit">Save</a-button>
        </a-form-item>
      </a-form>
    </a-card>

    <div class="payment">
      <h3 class="title">Payment Informations</h3>
      <a-flex class="row" justify="space-between">
        <span class="label">Country Tax</span>
        <span class="value">Rp 100000</span>
      </a-flex>
      <a-flex class="row" justify="space-between">
        <span class="label">Product Insurance</span>
        <span class="value">Rp 25000</span>
      </a-flex>
      <a-flex class="row" justify="space-between">
        <span class="label">Shipping Cost</span>
        <span class="value">Rp 35000</span>
      </a-flex>
      <a-divider class="my-4"/>
      <a-flex class="row" justify="space-between">
        <span class="label">Total</span>
        <span class="total">Rp 160000</span>
      </a-flex>

      <a-button block size="large" type="primary" class="mt-5">Checkout Now</a-button>
    </div>
  </a-flex>
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

.payment {
  height: 300px;
  width: 30%;
  padding: 0 16px;
  border-radius: @border-radius;
  background-color: @grey-color-2;

  .title {
    font-weight: 500;
    color: @black-color;
    font-size: 20px;
  }

  .row {
    margin-bottom: 10px;
  }

  .label {
    color: @grey-color;
    font-size: 15px;
  }

  .value {
    color: @black-color;
    font-size: 15px;
  }

  .total {
    color: @primary-color;
    font-size: 18px;
    font-weight: 600;
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
