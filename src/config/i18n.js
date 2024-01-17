import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import Backend from 'i18next-http-backend';
import LanguageDetector from 'i18next-browser-languagedetector';


i18n
    .use(Backend)
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
        // resources,
        cleanCode: true,
        detection: {
            order: ['cookie', 'localStorage', 'htmlTag', 'path'],
            caches: ['cookie']
        },
        interpolation: {
            escapeValue: false,
        },
        lng: 'ru',
        load: 'currentOnly',
        defaultNS: "app",
        // backend: {
        //     loadPath: './public/locales/{{lng}}/app.json'
        // }
    })


export default i18n;
