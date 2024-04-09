import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import DetailProductView from '@/views/DetailProductView.vue'
import CartView from '@/views/CartView.vue'
import TesViewVue from '@/views/TesView.vue'
import FormViewVue from '@/views/FormView.vue'
import MainLayout from '@/layouts/MainLayout.vue'
import TesLayoutVue from '@/layouts/TesLayout.vue'
import DetailStoreView from '@/views/DetailStoreView.vue'
import TransactionSuccessView from '@/views/TransactionSuccessView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
      meta: {
        layout: MainLayout
      }
    },
    {
      path: '/:store',
      name: 'store-detail',
      component: DetailStoreView,
      meta: {
        layout: MainLayout
      }
    },
    {
      path: '/:store/:product',
      name: 'product-detail',
      component: DetailProductView,
      meta: {
        layout: MainLayout
      }
    },
    {
      path: '/cart',
      name: 'cart',
      component: CartView,
      meta: {
        layout: MainLayout
      }
    },
    {
      path: '/thank-you',
      name: 'thank-you',
      component: TransactionSuccessView,
      meta: {
        layout: MainLayout
      }
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('../views/AboutView.vue'),
      meta: {
        layout: MainLayout
      }
    },
    {
      path: '/tes',
      name: 'tes',
      component: TesViewVue,
      meta: {
        layout: TesLayoutVue
      }
    },
    {
      path: '/form',
      name: 'form',
      component: FormViewVue,
      meta: {
        layout: MainLayout
      }
    }
  ]
})

export default router
