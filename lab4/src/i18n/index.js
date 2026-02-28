import en from './locales/en.json'
import ua from './locales/ua.json'


const storage = localStorage.getItem("settings")
const storObj = storage ? JSON?.parse(storage) : {locale: "ua"}
const locale = storObj.locale


export const defaultLocale = locale;

export const lang = {
    en,
    ua
}