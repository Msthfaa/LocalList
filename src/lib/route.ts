import { createRouter, createWebHistory } from 'vue-router'

import Index from '@/Page/Index.vue';
import Maps from '@/Page/Maps.vue';
import About from '@/Page/About.vue';
import Contact from '@/Page/Contact.vue';

const routes = [
  { path: '/', component: Index },  
  { path: '/maps', component: Maps },
  { path: '/contact', component: Contact },
  { path: '/about', component: About },

]

const router = createRouter({
  history: createWebHistory(),
  routes,
})


export default router;