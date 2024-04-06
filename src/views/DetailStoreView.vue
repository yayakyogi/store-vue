<script setup lang="ts"></script>

<template>
   <a-breadcrumb>
    <a-breadcrumb-item>
      <RouterLink :to="{ name: 'home', path: '/' }">Home</RouterLink>
    </a-breadcrumb-item>
    <a-breadcrumb-item>{{ $route.params.store }}</a-breadcrumb-item>
  </a-breadcrumb>
</template>