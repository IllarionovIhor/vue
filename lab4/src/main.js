import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import { createPinia} from "pinia";
import {router} from "./router/router.js";
import { createI18n } from "vue-i18n";
import {defaultLocale, lang} from "@/i18n/index.js";
import piniaPluginPersistedstate from "pinia-plugin-persistedstate";

const pinia = createPinia();

pinia.use(piniaPluginPersistedstate)


const i18n = createI18n({
    legacy: false,
    locale: defaultLocale,
    fallbackLocale: "en",
    messages: lang
})

createApp(App)
    .use(pinia)
    .use(i18n)
    .use(router)
    .mount('#app')
