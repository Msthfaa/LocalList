import { createRouter, createWebHistory } from 'vue-router'

import Index from '@/Page/Index.vue'
import Home from '@/Page/Home.vue'
import CobaMap from '@/Page/testing/CobaMap.vue';
import Maps from '@/Page/Maps.vue';

const routes = [
  { path: '/coba-maps', component: CobaMap },
  { path: '/', component: Index },  
  { path: '/menu-v1', component: Home },
  { path: '/maps', component: Maps },

]

const router = createRouter({
  history: createWebHistory(),
  routes,
})


export default router;