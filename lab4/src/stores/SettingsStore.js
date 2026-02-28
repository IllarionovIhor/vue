import {defineStore} from "pinia";

export const useSettingsStore = defineStore('settings', {
    state: () => ({
        locale: 'en'
    }),

    actions: {
        setLocale(lang) {
            this.locale = lang
        }
    },

    persist: {
        key: 'settings',
        pick: ['locale'],
        paths: ['locale']
    }

})
