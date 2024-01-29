import i18n, {use} from "i18next";
import { initReactI18next } from "react-i18next";
import Backend from 'i18next-http-backend';
import LanguageDetector from 'i18next-browser-languagedetector';


i18n
    .use(Backend)
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
        cleanCode: true,
        detection: {
            order: ['localStorage', 'navigator'],
            caches: ['localStorage']
        },
        interpolation: {
            escapeValue: false,
        },
        fallbackLng: 'en',
        load: 'currentOnly',
        defaultNS: "app",
        // backend: {
        //     loadPath: './public/locales/{{lng}}/app.json'
        // }
    })


export default i18n;
