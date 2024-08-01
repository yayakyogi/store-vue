<script setup lang="ts">
defineProps<{ title: string; subtitle: string }>()
</script>

<template>
  <div class="flex justify-between items-start gap-2 mb-8">
    <div>
      <h1 class="mb-1 mt-0 font-normal">{{ title }}</h1>
      <span class="text-gray-400">{{ subtitle }}</span>
    </div>
    <div class="flex items-center gap-3">
      <a-tooltip placement="top">
        <template #title>Cart</template>
        <div class="i-mdi:basket-outline text-3xl hover:cursor-pointer" />
      </a-tooltip>
      <span>Hi, Angga</span>
      <img src="/images/illustrations/login-banner.png" alt="user-profile" class="user-profile" />
    </div>
  </div>
</template>

<style lang="less">
.user-profile {
  object-fit: cover;
  width: 40px;
  height: 40px;
  border-radius: 50px;
}
</style>
