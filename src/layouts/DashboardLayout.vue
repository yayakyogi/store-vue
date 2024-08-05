<script setup lang="ts">
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()
const activeRoute = ref<string>(router.currentRoute.value.matched[0].path) // set default active route when first load

const routes = [
  {
    path: '/dashboard',
    title: 'Dashboard'
  },
  {
    path: '/products',
    title: 'My Products'
  },
  {
    path: '/transactions',
    title: 'Transactions'
  },
  {
    path: '/settings',
    title: 'Store Settings'
  },
  {
    path: '/accounts',
    title: 'My Account'
  }
]

// to set active route when changed
router.afterEach((to) => (activeRoute.value = to.matched[0].path))
</script>

<template>
  <div class="container-dashboard">
    <div class="sidenav relative">
      <div class="flex justify-center items-center h-150px w-full mb-5">
        <img src="/images/logo/main-logo.png" class="w-16" />
      </div>
      <div v-for="route in routes" v-bind:key="route.path">
        <RouterLink :to="route.path">
          <a-button
            type="link"
            class="item-menu"
            :class="{ activeMenu: activeRoute === route.path }"
            >{{ route.title }}</a-button
          >
        </RouterLink>
      </div>
      <a-button type="link" class="absolute bottom-2 left-0 w-full text-left h-[55px] text-black"
        >Sign Out</a-button
      >
    </div>
    <div class="admin-content">
      <slot></slot>
    </div>
  </div>
</template>

<style lang="less">
.container-dashboard {
  display: flex;
  background-color: #f5f5fb;
  height: 100vh;

  .sidenav {
    width: 320px;
    background-color: #ffffff;

    .logo {
      display: flex;
      justify-content: center;
      align-items: center;
      height: 120px;
      width: 100%;
    }

    .item-menu {
      width: 100%;
      height: 55px;
      text-align: start;
      font-size: 16px;
      padding-left: 20px;
      border-radius: 0;
      color: #c5c5c5;

      &:hover {
        color: #0c0d36;
        background-image: linear-gradient(to right, rgba(255, 0, 0, 0), rgba(255, 0, 0, 0.3));
      }
    }

    .activeMenu {
      color: #0c0d36;
      background-image: linear-gradient(to right, rgba(255, 0, 0, 0), rgba(255, 0, 0, 0.3));
    }
  }

  .admin-content {
    padding: 25px 30px;
    width: 100%;
    overflow: hidden;
  }
}
</style>
