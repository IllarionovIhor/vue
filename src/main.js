import { router } from '@/router/router.js'
import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import {vuetify} from "@/vuetify/style.js";

createApp(App)
    .use(router)
    .use(vuetify)
    .mount('#app')
