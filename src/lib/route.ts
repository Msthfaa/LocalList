import { createRouter, createWebHistory } from 'vue-router'

import oioi from '@/Page/Index.vue'
import Home from '@/Page/Home.vue'
import CobaMap from '@/Page/testing/CobaMap.vue';
import Maps from '@/Page/Maps.vue';

const routes = [
  { path: '/coba-maps', component: CobaMap },
  { path: '/menu-v2', component: oioi },  
  { path: '/menu-v1', component: Home },
  { path: '/', component: Home },
  { path: '/maps', component: Maps },

]

const router = createRouter({
  history: createWebHistory(),
  routes,
})


export default router;