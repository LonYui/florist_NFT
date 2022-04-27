import { createRouter, createWebHistory } from '@ionic/vue-router';

const routes = [
  {
    path: '/',
    redirect: '/roadmap'
  },
  {
    path: '/mint',
    component: () => import('@/views/mint.vue'),
  },
  {
    path: '/roadmap',
    component: () => import('@/views/roadmap.vue'),
  },

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
