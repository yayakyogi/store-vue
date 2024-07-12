<script setup lang="ts">
import { Button } from 'ant-design-vue'
import { RouterLink } from 'vue-router'
</script>

<template>
  <div class="container">
    <div class="header">
      <nav class="nav">
        <div class="flex-1">
          <RouterLink to="/" class="p-0">
            <img src="/images/logo/main-logo.png" class="w-8" />
          </RouterLink>
        </div>
        <div class="menu">
          <RouterLink to="#" class="p-0">
            <Button type="ghost">Home</Button>
          </RouterLink>
          <RouterLink to="#">
            <Button type="ghost">Categories</Button>
          </RouterLink>
          <RouterLink to="#">
            <Button type="ghost">Rewards</Button>
          </RouterLink>
          <RouterLink to="sign-up">
            <Button type="ghost">Sign Up</Button>
          </RouterLink>
          <RouterLink to="sign-in">
            <Button type="primary">Sign In</Button>
          </RouterLink>
        </div>
      </nav>
    </div>
    <div class="children">
      <slot></slot>
    </div>
    <div class="footer">
      <span>2024 &copy; Copyright Store. All Right Reserved</span>
    </div>
  </div>
</template>

<style lang="less">
.container {
  height: 100vh;
  display: flex;
  flex-direction: column;

  .header {
    background-color: @white-color;
    position: fixed;
    width: 100%;
    top: 0;
    z-index: 1;
    box-shadow: rgba(0, 0, 0, 0.05) 0px 1px 2px 0px;

    .nav {
      display: flex;
      align-items: center;
      padding: 10px 0 15px;
      margin: 0 auto;
      max-width: @max-content;

      & img {
        &:hover {
          cursor: pointer;
        }
      }

      .menu {
        display: flex;
        justify-content: end;
        align-items: center;
        gap: 10px;

        a {
          padding: 0;
        }
      }
    }
  }

  .children {
    width: 100%;
    flex: 1;
    margin: 70px auto 0;
    max-width: @max-content;
  }

  .footer {
    border-top: 1px solid @border-color-1;
    text-align: center;
    padding: 20px 0;
    color: @grey-color;
    font-size: 14px;
  }
}
</style>
