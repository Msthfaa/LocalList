import { createRouter, createWebHistory } from 'vue-router'

import oioi from '@/Page/Index.vue'
import Home from '@/Page/Home.vue'
import CobaMap from '@/Page/testing/CobaMap.vue';

const routes = [
    { path: '/coba-maps', component: CobaMap },
  { path: '/', component: oioi },  
  { path: '/home', component: Home },  

]

const router = createRouter({
  history: createWebHistory(),
  routes,
})


export default router;