import { useEffect, useState } from 'react'
import i18n from '../../i18n/i18n'

export default function LanguageToggle() {
  const [lang, setLang] = useState<'fr' | 'en'>('fr')

  useEffect(() => {
    setLang((i18n.language as 'fr' | 'en') || 'fr')
  }, [])

  const toggle = () => {
    const next = lang === 'fr' ? 'en' : 'fr'
    setLang(next)
    i18n.changeLanguage(next)
    localStorage.setItem('lang', next)
  }

  return (
    <button
      aria-label="Changer la langue"
      onClick={toggle}
      className="inline-flex items-center gap-2 rounded-md border border-slate-300 dark:border-slate-700 px-3 py-1.5 text-sm hover:border-primary/60 hover:text-primary"
    >
      <span className="font-medium">{lang.toUpperCase()}</span>
    </button>
  )
}

