import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import Backend from 'i18next-http-backend';
import LanguageDetector from 'i18next-browser-languagedetector';

i18n
    .use(Backend)
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
        cleanCode: true,
        interpolation: {
            escapeValue: false,
        },
        lng: 'ru',
        load: 'currentOnly',
        defaultNS: "app"
    })
    .then();

export default i18n;
