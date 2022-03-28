import { createRouter, createWebHistory } from '@ionic/vue-router';

const routes = [
  {
    path: '/',
    redirect: '/tmi_mint_site'
  },
  {
    path: '/tmi_mint_site',
    component: () => import('@/views/tmi_mint_site.vue'),
    props: route => ({  mint_psw: route.query.mint_psw,display_nft_token_id: route.query.display_nft_token_id })
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
