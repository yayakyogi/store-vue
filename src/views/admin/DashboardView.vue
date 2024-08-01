<script setup lang="ts">
import HeaderSection from '@/components/admin/HeaderSection.vue'

const recentTransctions = [
  {
    id: 1,
    image:
      'https://img.freepik.com/free-photo/bottles-cosmetics_23-2147670182.jpg?t=st=1722391673~exp=1722395273~hmac=f21206a71a589025908518cce4e5361dc9cb8e5484a8672ea80ddb27bb35d7db&w=1380',
    product: 'Shirup Marzza',
    user: 'Angga Rizky',
    date: '12 Januari 2020'
  },
  {
    id: 2,
    image:
      'https://img.freepik.com/free-photo/bottles-cosmetics_23-2147670182.jpg?t=st=1722391673~exp=1722395273~hmac=f21206a71a589025908518cce4e5361dc9cb8e5484a8672ea80ddb27bb35d7db&w=1380',
    product: 'Shirup Marzza',
    user: 'Angga Rizky',
    date: '12 Januari 2020'
  }
]
</script>

<template>
  <HeaderSection title="Dashboard" subtitle="Looks what you have made today" />
  <div class="flex items-center gap-5">
    <a-card class="w-[300px]">
      <span class="text-gray-400 text-lg">Customer</span>
      <h1 class="mt-5 mb-0 text-3xl">15,209</h1>
    </a-card>
    <a-card class="w-[300px]">
      <span class="text-gray-400 text-lg">Revenue</span>
      <h1 class="mt-5 mb-0 text-3xl">$931,290</h1>
    </a-card>
    <a-card class="w-[300px]">
      <span class="text-gray-400 text-lg">Transaction</span>
      <h1 class="mt-5 mb-0 text-3xl">22,409,399</h1>
    </a-card>
  </div>
  <div class="mt-6">
    <h3 class="font-normal">Recent Transaction</h3>
    <div
      v-for="transaction in recentTransctions"
      v-bind:key="transaction.id"
      class="bg-white flex items-center gap-3 p-3 pe-8 rounded-lg mb-5"
    >
      <div class="flex-1 flex items-center gap-3">
        <img :src="transaction.image" alt="img-product" class="w-16 h-16 rounded-md" />
        <div class="w-[200px]">{{ transaction.product }}</div>
        <div class="w-[200px]">{{ transaction.user }}</div>
        <div class="w-[200px]">{{ transaction.date }}</div>
      </div>
      <div class="i-mdi:chevron-right text-2xl" />
    </div>
  </div>
</template>
