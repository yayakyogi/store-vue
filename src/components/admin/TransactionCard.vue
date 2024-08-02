<script setup lang="ts">
import { useRouter } from 'vue-router'
const router = useRouter()

defineProps<{ id: number; image: string; product: string; user: string; date: string }>()
</script>

<template>
  <div
    class="bg-white flex items-center gap-3 p-2 pe-8 rounded-lg mb-3 hover:cursor-pointer"
    @click="() => router.push(`/transactions/${id}`)"
  >
    <div class="flex-1 flex items-center gap-3">
      <img :src="image" alt="img-product" class="w-16 h-16 rounded-md" />
      <div class="w-[200px]">{{ product }}</div>
      <div class="w-[200px]">{{ user }}</div>
      <div class="w-[200px]">{{ date }}</div>
    </div>
    <div class="i-mdi:chevron-right text-2xl" />
  </div>
</template>
