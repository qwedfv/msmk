import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/dl',
    component: () => import('@/views/dl')
  },
  {
    path: '/pass',
    component: () => import('@/views/pass')
  },
  {
    path: '/mim',
    component: () => import('@/views/mim')
  },
  {
    path: '/dlmm',
    component: () => import('@/views/dlmm')
  },
  {
    path: '/qd',
    component: () => import('@/views/qd')
  },
  {
    path: '/xq',
    component: () => import('@/views/xq')
  },
  {
    path: '/dwtl',
    component: () => import('@/views/dwtl')
  },
  {
    path: '/dz',
    component: () => import('@/views/dz')
  },
  {
    path: '/xqjxq',
    component: () => import('@/views/xqjxq')
  },
  {
    path: '/zxxq',
    component: () => import('@/views/zxxq')
  },
  {
    path: '/Index',
    component: () => import('@/views/Index'),
    children: [
      {
        path: '/sy',
        component: () => import('@/views/sy')
      },
      {
        path: '/kc',
        component: () => import('@/views/kc')
      },
      {
        path: '/zx',
        component: () => import('@/views/zx')
      },
      {
        path: '/ts',
        component: () => import('@/views/ts')
      },
      {
        path: '/wd',
        component: () => import('@/views/wd')
      },
    ]
  },


]

const router = new VueRouter({
  routes
})

export default router
