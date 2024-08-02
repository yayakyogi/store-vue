<script setup lang="ts">
import HeaderSection from '@/components/admin/HeaderSection.vue'
</script>

<template>
  <HeaderSection title="#STORE0839" subtitle="Transaction Detail" />
  <a-card>
    <div class="flex">
      <img
        src="https://img.freepik.com/free-photo/bottles-cosmetics_23-2147670182.jpg?t=st=1722391673~exp=1722395273~hmac=f21206a71a589025908518cce4e5361dc9cb8e5484a8672ea80ddb27bb35d7db&w=1380"
        class="w-72 h-72 rounded-lg mr-10"
      />
      <div class="mr-10">
        <p class="text-xl mt-0">Customer Information</p>
        <div class="flex gap-10 h-60">
          <div class="flex flex-col justify-between">
            <div>
              <p class="label">Customer Name</p>
              <p class="title">Angga Risky</p>
            </div>
            <div>
              <p class="label">Date of transaction</p>
              <p class="title">12 Januari 2024</p>
            </div>
            <div>
              <p class="label">Total Amound</p>
              <p class="title">$280,409</p>
            </div>
          </div>
          <div class="flex flex-col justify-between">
            <div>
              <p class="label">Product Name</p>
              <p class="title">Shirup Morzan</p>
            </div>
            <div>
              <p class="label">Payment Status</p>
              <p class="title text-red-600">Pending</p>
            </div>
            <div>
              <p class="label">Mobile</p>
              <p class="title">+628202011111</p>
            </div>
          </div>
        </div>
      </div>
      <div class="mr-10">
        <p class="text-xl mt-0">Shipping Information</p>
        <div class="flex gap-10 h-60">
          <div class="flex flex-col justify-between">
            <div>
              <p class="label">Address I</p>
              <p class="title">Setra Duta Cemara</p>
            </div>
            <div>
              <p class="label">Province</p>
              <p class="title">West Java</p>
            </div>
            <div>
              <p class="label">Postal Code</p>
              <p class="title">123999</p>
            </div>
          </div>
          <div class="flex flex-col justify-between">
            <div>
              <p class="label">Address II</p>
              <p class="title">Blok B2 No.34</p>
            </div>
            <div>
              <p class="label">City</p>
              <p class="title">Bandung</p>
            </div>
            <div>
              <p class="label">Country</p>
              <p class="title">Indonesia</p>
            </div>
          </div>
        </div>
      </div>
      <div>
        <p class="text-xl mt-0">Order Status</p>
      </div>
    </div>

    <!-- <div class="mt-5">
      <p class="title">Shipping Information</p>
    </div>
    <div class="flex gap-20 mt-4">
      <div class="flex flex-col gap-5">
        <div>
          <p class="label">Address I</p>
          <p class="title">Setra Duta Cemara</p>
        </div>
        <div>
          <p class="label">Province</p>
          <p class="title">West Java</p>
        </div>
        <div>
          <p class="label">Postal Code</p>
          <p class="title">123999</p>
        </div>
      </div>
      <div class="flex flex-col gap-5">
        <div>
          <p class="label">Address II</p>
          <p class="title">Blok B2 No.34</p>
        </div>
        <div>
          <p class="label">City</p>
          <p class="title">Bandung</p>
        </div>
        <div>
          <p class="label">Country</p>
          <p class="title">Indonesia</p>
        </div>
      </div>
    </div> -->
  </a-card>
</template>

<style lang="less">
.label {
  color: @grey-color-3;
  margin: 0;
  font-size: 16px;
}

.title {
  color: @black-color;
  margin: 0;
  font-size: 18px;
}
</style>
