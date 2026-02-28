import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import PrimeVue from 'primevue/config';
import Lara from '@primeuix/themes/lara'
import 'primeicons/primeicons.css';
import ToastService from 'primevue/toastservice'
import copyToClipboard from "./plugins/copyToClipboard.js";
createApp(App)
    .use(PrimeVue, {
        theme:{
            preset: Lara
        }
    })
    .use(ToastService)
    .use(copyToClipboard)
    .mount('#app')
