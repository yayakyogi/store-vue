<script setup lang="ts">
import { reactive } from 'vue'
import { Button } from 'ant-design-vue'

interface FormStateProps {
  email: string
  password: string
}

const formState = reactive<FormStateProps>({
  email: '',
  password: ''
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
          <Button size="large" class="w-full" type="primary" html-type="submit">
            Sign In to My Account
          </Button>
          <RouterLink to="/sign-up">
            <Button size="large" type="link" class="w-full mt-2 text-green-600">Sign Up</Button>
          </RouterLink>
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
    border: 1px solid #e4e4e4;
    border-top-right-radius: 50px;
    border-bottom-left-radius: 50px;
  }
}
</style>
