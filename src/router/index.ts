import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import DetailProductView from '@/views/DetailProductView.vue'
import CartView from '@/views/CartView.vue'
import TesViewVue from '@/views/TesView.vue'
import FormViewVue from '@/views/FormView.vue'
import MainLayout from '@/layouts/MainLayout.vue'
import TesLayoutVue from '@/layouts/TesLayout.vue'
import DetailStoreView from '@/views/DetailStoreView.vue'
import SignUp from '@/views/SignUp.vue'
import SignIn from '@/views/SignIn.vue'
import TransactionSuccessView from '@/views/TransactionSuccessView.vue'
// Admin
import DashboardLayout from '@/layouts/DashboardLayout.vue'
import DashboardView from '@/views/admin/DashboardView.vue'
import ProductView from '@/views/admin/ProductView.vue'
import ProductAddView from '@/views/admin/ProductAddView.vue'
import ProductDetailView from '@/views/admin/ProductDetailView.vue'
import TransactionView from '@/views/admin/TransactionView.vue'
import TransactionDetailView from '@/views/admin/TransactionDetailView.vue'
import StoreSettingView from '@/views/admin/StoreSettingView.vue'
import AccountView from '@/views/admin/AccountView.vue'

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
      path: '/sign-up',
      name: 'signup',
      component: SignUp,
      meta: {
        layout: MainLayout
      }
    },
    {
      path: '/sign-in',
      name: 'signin',
      component: SignIn,
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
    // DASHBOARD ROUTE
    {
      path: '/dashboard',
      name: 'dashboard',
      component: DashboardView,
      meta: {
        layout: DashboardLayout
      }
    },
    {
      path: '/products',
      name: 'products',
      meta: {
        layout: DashboardLayout
      },
      children: [
        {
          path: '',
          component: ProductView
        },
        {
          path: ':id',
          component: ProductDetailView
        },
        {
          path: 'add',
          component: ProductAddView
        }
      ]
    },
    {
      path: '/transactions',
      name: 'transactions',
      meta: {
        layout: DashboardLayout
      },
      children: [
        {
          path: '',
          component: TransactionView
        },
        {
          path: ':id',
          component: TransactionDetailView
        }
      ]
    },
    {
      path: '/settings',
      component: StoreSettingView,
      meta: {
        layout: DashboardLayout
      }
    },
    {
      path: '/accounts',
      component: AccountView,
      meta: {
        layout: DashboardLayout
      }
    }
  ]
})

export default router
