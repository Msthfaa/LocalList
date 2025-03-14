import { createRouter, createWebHistory } from 'vue-router'

import HomeView from '@/Page/Index.vue'
import CobaMap from '@/Page/testing/CobaMap.vue';

const routes = [
    { path: '/coba-maps', component: CobaMap },
  { path: '/', component: HomeView },  

]

const router = createRouter({
  history: createWebHistory(),
  routes,
})


export default router;