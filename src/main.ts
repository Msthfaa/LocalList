import { createApp } from 'vue'
import './input.css'
import App from './App.vue'
import router from './lib/route'

createApp(App)
    .use(router)
    .mount('#app')
