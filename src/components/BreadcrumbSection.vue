<script setup lang="ts">
export interface BreadcrumbProps {
  link?: string
  name: string
  title: string
}

defineProps<{ breadcrumbs: BreadcrumbProps[]; className?: string }>()
</script>

<template>
  <a-breadcrumb :class="className">
    <!-- default item -->
    <a-breadcrumb-item>
      <RouterLink :to="{ name: 'home', path: '/' }">Home</RouterLink>
    </a-breadcrumb-item>

    <a-breadcrumb-item v-for="breadcrumb in breadcrumbs" :key="breadcrumb.name">
      <!-- with link -->
      <RouterLink
        :to="{ name: `${breadcrumb.name}`, path: `${breadcrumb.link}` }"
        v-if="breadcrumb.link"
      >
        <span class="breadcrumb-item">{{ breadcrumb.title }}</span>
      </RouterLink>

      <!-- without link -->
      <span v-if="!breadcrumb.link" class="breadcrumb-item">{{ breadcrumb.title }}</span>
    </a-breadcrumb-item>
  </a-breadcrumb>
</template>
