import { createRouter, createWebHistory } from 'vue-router'

import Index from '@/Page/Index.vue'
import Home from '@/Page/Home.vue'
import CobaMap from '@/Page/testing/CobaMap.vue';
import Maps from '@/Page/Maps.vue';
import About from '@/Page/About.vue';
import Contact from '@/Page/Contact.vue';

const routes = [
  { path: '/coba-maps', component: CobaMap },
  { path: '/', component: Index },  
  { path: '/menu-v1', component: Home },
  { path: '/maps', component: Maps },
  { path: '/contact', component: Contact },
  { path: '/about', component: About },

]

const router = createRouter({
  history: createWebHistory(),
  routes,
})


export default router;