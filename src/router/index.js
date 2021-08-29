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
