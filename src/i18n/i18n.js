// src/i18n/i18n.js

import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import es from "./locales/es.json"; // 👈 Tu archivo es.json
import en from "./locales/en.json"; // 👈 Tu archivo en.json

i18n.use(initReactI18next).init({
  resources: {
    es: { translation: es },
    en: { translation: en },
  },
  lng: "es", // idioma por defecto
  fallbackLng: "es",
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;