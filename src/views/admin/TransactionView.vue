<script setup lang="ts">
import HeaderSection from '@/components/admin/HeaderSection.vue'
import TransactionCard from '@/components/admin/TransactionCard.vue'

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
  <HeaderSection title="Transactions" subtitle="Big result start from the small one" />
  <TransactionCard
    v-for="transaction in recentTransctions"
    :key="transaction.id"
    :id="transaction.id"
    :product="transaction.product"
    :image="transaction.image"
    :date="transaction.date"
    user="Shaina"
  />
</template>

<style></style>
