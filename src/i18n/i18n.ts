import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import fr from './locales/fr.json'
import en from './locales/en.json'

const stored = typeof window !== 'undefined' ? localStorage.getItem('lang') : null

i18n
  .use(initReactI18next)
  .init({
    resources: {
      fr: { translation: fr },
      en: { translation: en },
    },
    lng: stored || 'fr',
    fallbackLng: 'fr',
    interpolation: { escapeValue: false },
  })

// Reflect current language in <html lang="...">
if (typeof document !== 'undefined') {
  const lng = i18n.language || stored || 'fr'
  document.documentElement.setAttribute('lang', lng)
  i18n.on('languageChanged', (l) => {
    try { document.documentElement.setAttribute('lang', l) } catch {}
  })
}

export default i18n
