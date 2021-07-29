import i18n from "i18next";
import detector from "i18next-browser-languagedetector";
import { reactI18nextModule } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

// import translationEN from "./Locales/en.json";
// import translationPL from "./Locales/pl.json";
// import translationRU from "./Locales/ru.json";

import translationEN from "./locales/en/translation.json";
import translationIt from "./locales/it/translation.json";


// the translations
const resources = {


  en: {
    translation: translationEN,
  },
  it: {
    translation: translationIt
  }
};
const detectionOptions = {
  order: [
    "localStorage",
    "cookie",
    "navigator",
    "subdomain",
    "queryString",
    "htmlTag",
    "path",
  ],
  lookupFromPathIndex: 0,
};
i18n.use(reactI18nextModule) // passes i18n down to react-i18next
  .init(
    {
      resources,
      fallbackLng: "it", // use en if detected lng is not available
      debug: false,
      detection: detectionOptions,

      keySeparator: false, // we do not use keys in form messages.welcome

      interpolation: {
        escapeValue: false, // react already safes from xss
      },
    },
    (err, t) => {
      console.log(t)
      if (err) console.error(err);
    }
  );
export default i18n;