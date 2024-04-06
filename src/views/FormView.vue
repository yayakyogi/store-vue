<script setup lang="ts">
import { ref } from 'vue'
import { Button } from 'ant-design-vue';

const message = ref('')
</script>

<template>
  <p class="text-white">Message is: {{ message }}</p>
  <input v-model="message" placeholder="text me" />
  <br/>
  <Button type="primary">Primary</Button>
  <Button type="ghost">Ghost</Button>
  <Button>Default</Button>
  <Button disabled>Disabled</Button>
  <Button loading disabled>Loading</Button>
</template>
