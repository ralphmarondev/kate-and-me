import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('@/views/home/HomeIndex.vue')
    },
    {
      path: '/post-details/:id',
      name: 'post-details',
      component: () => import('@/views/post-details/PostDetailsIndex.vue')
    },
    {
      path: '/snapshots',
      name: 'snapshots',
      component: () => import('@/views/snapshots/SnapshotsIndex.vue')
    },
    {
      path: '/snap-details/:id',
      name: 'snap-details',
      component: () => import('@/views/snap-details/SnapDetailsIndex.vue')
    },
    {
      path: '/the-start',
      name: 'the-start',
      component: () => import('@/views/the-start/TheStartIndex.vue')
    }
  ],
})

export default router
