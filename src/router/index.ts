import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('@/views/home/HomeIndex.vue'),
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('@/views/about/AboutIndex.vue'),
    },
    {
      path: '/details/:id',
      name: 'details',
      component: () => import('@/views/details/DetailsIndex.vue')
    }
  ],
})

export default router
