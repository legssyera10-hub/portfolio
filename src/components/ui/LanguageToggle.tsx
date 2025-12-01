import { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'
import i18n from '../../i18n/i18n'

export default function LanguageToggle() {
  const { t } = useTranslation()
  const [lang, setLang] = useState<'fr' | 'en'>('fr')

  useEffect(() => {
    setLang((i18n.language as 'fr' | 'en') || 'fr')
    const handler = (lng: string) => {
      setLang((lng as 'fr' | 'en') || 'fr')
      try {
        document.documentElement.setAttribute('lang', lng)
      } catch {}
    }
    i18n.on('languageChanged', handler)
    return () => {
      i18n.off('languageChanged', handler)
    }
  }, [])

  const toggle = () => {
    const next = lang === 'fr' ? 'en' : 'fr'
    setLang(next)
    i18n.changeLanguage(next)
    localStorage.setItem('lang', next)
    try {
      document.documentElement.setAttribute('lang', next)
    } catch {}
  }

  return (
    <button
      aria-label={t('language.toggleLabel')}
      onClick={toggle}
      className="inline-flex items-center gap-2 rounded-md border border-slate-300 dark:border-slate-700 px-3 py-1.5 text-sm hover:border-primary/60 hover:text-primary"
    >
      <span className="font-medium">{lang.toUpperCase()}</span>
    </button>
  )
}
