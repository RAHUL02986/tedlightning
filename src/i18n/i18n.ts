// src/i18n/i18n.ts
import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

import en from "./locales/en.json";
import fil from "./locales/fil.json";
import ar from "./locales/ar.json";
import es from "./locales/es.json";
import ru from "./locales/ru.json";
import fr from "./locales/fr.json";
import de from "./locales/de.json";
import it from "./locales/it.json";

export const languages = [
  { code: "en", name: "English", flag: "🇺🇸" },
  { code: "fil", name: "Filipino", flag: "🇵🇭" },
  { code: "ar", name: "العربية", flag: "🇸🇦", rtl: true },
  { code: "es", name: "Español", flag: "🇪🇸" },
  { code: "ru", name: "Русский", flag: "🇷🇺" },
  { code: "fr", name: "Français", flag: "🇫🇷" },
  { code: "de", name: "Deutsch", flag: "🇩🇪" },
  { code: "it", name: "Italiano", flag: "🇮🇹" },
];

const resources = {
  en: { translation: en },
  fil: { translation: fil },
  ar: { translation: ar },
  es: { translation: es },
  ru: { translation: ru },
  fr: { translation: fr },
  de: { translation: de },
  it: { translation: it },
};

// ✅ Prevent re-initialization on Fast Refresh
if (!i18n.isInitialized) {
  i18n
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
      resources,
      fallbackLng: "en",
      interpolation: { escapeValue: false },
      detection: {
        order: ["localStorage", "navigator"],
        caches: ["localStorage"],
      },
    });
}

export default i18n;
