import { createRouter, createWebHistory } from '@ionic/vue-router';
import Tabs from '../views/Tabs.vue'

const routes = [
  {
    path: '/',
    redirect: '/tabs/'
  },
  {
    path: '/tabs/',
    component: Tabs,
    children: [
      {
        path: '',
        redirect: '/tabs/tab1'
      },
      {
        path: 'tab0',
        component: () => import('@/views/Tab0.vue')
      },
      {
        path: 'tab1',
        component: () => import('@/views/Tab1.vue')
      },
      {
        path: 'tab2',
        component: () => import('@/views/Tab2.vue')
      },
      {
        path: 'tab3',
        component: () => import('@/views/Tab3.vue')
      }

    ]
  },
  {
    path: '/login',
    component: () => import('@/views/login_process/login.vue')
  },
  {
    path: '/login_select_way',
    component: () => import('@/views/login_process/login_select_way.vue')
  },  
  {
    path: '/restaurant/:placeId',
    component: () => import('@/views/Restaurant.vue')
  },
  {
    path: '/page1',
    component: () => import('@/views/login_process/login_select_way.vue')
  },
  {
    path: '/page23',
    component: () => import('@/views/login_process/login.vue')
  },
  {
    path: '/page4',
    component: () => import('@/views/event/page4.vue')
  },
  {
    path: '/page5',
    component: () => import('@/views/event/page5.vue')
  },
  {
    path: '/page6',
    component: () => import('@/views/event/page6.vue')
  },

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
