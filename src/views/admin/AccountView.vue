<script setup lang="ts"></script>

<template>
  <HeaderSection title="My Account" subtitle="Update your current profile" />
  <a-card class="w-3/4">
    <a-form layout="vertical">
      <div class="flex gap-5">
        <a-form-item label="Name" class="w-full">
          <a-input />
        </a-form-item>
        <a-form-item label="Your Email" class="w-full">
          <a-input />
        </a-form-item>
      </div>
      <div class="flex gap-5">
        <a-form-item label="Address 1" class="w-full">
          <a-input />
        </a-form-item>
        <a-form-item label="Address 2" class="w-full">
          <a-input />
        </a-form-item>
      </div>
      <div class="flex gap-5">
        <a-form-item label="Province" class="w-full">
          <a-input />
        </a-form-item>
        <a-form-item label="City" class="w-full">
          <a-input />
        </a-form-item>
        <a-form-item label="Postal Code" class="w-full">
          <a-input />
        </a-form-item>
      </div>
      <div class="flex gap-5">
        <a-form-item label="Country" class="w-full">
          <a-input />
        </a-form-item>
        <a-form-item label="Mobile" class="w-full">
          <a-input />
        </a-form-item>
      </div>
      <div class="flex justify-end mt-3">
        <a-button type="primary" size="large">Save Now</a-button>
      </div>
    </a-form>
  </a-card>
</template>
