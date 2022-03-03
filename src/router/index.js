import { createRouter, createWebHistory } from '@ionic/vue-router';
import Tabs from '../views/Tabs.vue'

const routes = [
  {
    // TODO date判斷
    path: '/',
    redirect: '/tabs/'
  },
  {
    path: '/tabs/',
    component: Tabs,
    children: [
      {
        path: '',
        redirect: '/tabs/tab0'
      },
      {
        path: 'tab0',
        component: () => import('@/views/Tab0.vue'),
        props: route => ({ member_id: route.query.member_id })
      },
      {
        path: 'tab1',
        component: () => import('@/views/Tab1.vue'),
        props: route => ({ member_id: route.query.member_id })
      },
      {
        path: 'tab2',
        component: () => import('@/views/Tab2.vue'),
        props: route => ({ mob: route.query.mob })
      },
      {
        path: 'tab3',
        component: () => import('@/views/Tab3.vue'),
        props: route => ({ member_id: route.query.member_id, txn_id: route.query.txn_id})
      }

    ]
  },
  {
    path: '/login_select_way',
    component: () => import('@/views/login_process/login_select_way.vue')
  },
  {
    path: '/login',
    component: () => import('@/views/login_process/login.vue')
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
    component: () => import('@/views/campagn_use_views/page4.vue')
  },
  {
    path: '/page5',
    component: () => import('@/views/campagn_use_views/page5.vue')
  },
  {
    path: '/page6',
    component: () => import('@/views/campagn_use_views/page6.vue')
  },
  {
    path:'/receipt',
    component: () => import('@/views/comment_process/Receipt.vue')
  },
  {
    path:'/web_camera',
    component: () => import('@/views/comment_process/web_camera.vue')
  },
  {
    path:'/create_comment',
    component: () => import('@/views/comment_process/create_comment.vue'),
    props: route => ({  mob: route.query.mob , place_id:route.query.place_id ,qr_code_str: route.query.qr_code_str })
  },
  {
    path:'/scan_receipt',
    component: () => import('@/views/comment_process/web_camera.vue'),
    props: route => ({ mob: route.query.mob , place_id:route.query.place_id })
  },
  {
    path:'/chat',
    component: () => import('@/views/chat.vue'),
    props: route => ({ mob: route.query.mob })
  },
  {
    path: '/spend_how_much',
    component: () => import('@/views/spend_money/spend_how_much.vue'),
    props: route => ({ member_id: route.query.member_id })
  },
  {
    path: '/open_pay_post_form',
    component: () => import('@/views/spend_money/open_pay_post_form.vue'),
    props: route => ({
      member_id: route.query.member_id, amount:route.query.amount,
      cname: route.query.cname, caddress:route.query.caddress, cemail: route.query.cemail, ctel:route.query.ctel,
    })
  },
  {
    path: '/pament_check',
    component: () => import('@/views/spend_money/payment_check.vue'),
    props: route => ({ ispayment: route.query.ispayment , txn_id: route.query.txn_id, amount: route.query.amount })
  }


]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
