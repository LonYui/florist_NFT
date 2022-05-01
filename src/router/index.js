import { createRouter, createWebHistory } from '@ionic/vue-router';

const routes = [
  {
    path: '/',
    redirect: '/land'
  },
  {
    path: '/mint',
    component: () => import('@/views/mint.vue'),
  },
  {
    path: '/land',
    component: () => import('@/views/land.vue'),
  },

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
