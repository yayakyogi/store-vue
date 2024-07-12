<script setup lang="ts">
import { reactive } from 'vue';

  interface FormStateProps {
    email: string;
    password:string;
  }

  const formState = reactive<FormStateProps>({
    email: '',
    password: '',
  })
</script>

<template>
  <div class="w-[75%] mx-a flex items-start gap-20">
    <div class="login-banner">
      <div class="banner-img">
        <img src="/images/illustrations/login-banner.png" />
      </div>
      <div class="banner-bg"></div>
    </div>
    <div class="mt-5">
      <p class="text-3xl line-height-normal mb-10">Belanja kebutuhan utama jadi lebih mudah</p>
      <a-form layout="vertical" class="">
        <a-form-item label="Email">
          <a-input v-model:value="formState.email" />
        </a-form-item>
        <a-form-item label="Password">
          <a-input v-model:value="formState.password" type="password" />
        </a-form-item>
        <a-form-item>
          <a-button size="large" class="w-full mt-5" type="primary" html-type="submit">Sign In to My Account</a-button>
          <a-button size="large" class="w-full mt-4">Sign Up</a-button>
        </a-form-item>
      </a-form>
    </div>
  </div>
</template>

<style lang="less">
.login-banner {
  margin-top: 80px;
  position: relative;
  max-height: 500px;
  max-width: 500px;

  .banner-img {
    width: 450px;
    height: 550px;
    position: absolute;
    right: -30px;
    top: -30px;
    overflow: hidden;
    border-bottom-left-radius: 50px;
    border-top-right-radius: 50px;

    img {
      width: 100%;
    }
  }

  .banner-bg {
    width: 450px;
    height: 550px;
    border: 1px solid #E4E4E4;
    border-top-right-radius: 50px;
    border-bottom-left-radius: 50px;
  }
}
</style>