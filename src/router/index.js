import { createRouter, createWebHistory } from 'vue-router'
import layout from '@/layouts/layout'

const routes = [
  {
    path: '/',
    component: layout,
    children: [
      {
        name: 'home',
        path: '/',
        component: () => import('@/views/home'),
      },
    ]
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})


export default router
