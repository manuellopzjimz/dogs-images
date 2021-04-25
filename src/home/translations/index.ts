import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import home from './home.json';
import search from '@Search/translations/search.json';
import results from '@DisplayResults/translations/results.json';

i18n.use(initReactI18next).init({
    lng: 'en',
    fallbackLng: 'en',
    interpolation: {
        escapeValue: false
    },
    resources: {
        en: {
            home,
            search,
            results
        }
    }
})