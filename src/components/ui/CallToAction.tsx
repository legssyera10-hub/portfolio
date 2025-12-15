import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'
import { getCvUrl, openAndDownloadCv } from '../../utils/cv'
import { resolveLang } from '../../utils/locale'

export default function CallToAction() {
  const { t, i18n } = useTranslation()
  const lang = resolveLang(i18n.language)
  const link = getCvUrl(lang)
  return (
    <section className="mx-auto max-w-[var(--container)] px-4 py-16 text-center">
      <p className="text-lg text-slate-300 mb-6">{t('cta.ready')}</p>
      <div className="flex items-center justify-center gap-4">
        <Link to="/#contact" reloadDocument className="inline-flex items-center gap-2 rounded-md bg-primary px-5 py-3 text-white hover:opacity-90">
          {t('cta.buttonContact')}
        </Link>
        <a
          href={link}
          onClick={(e) => {
            e.preventDefault()
            openAndDownloadCv(lang)
          }}
          className="inline-flex items-center gap-2 rounded-md border border-primary text-primary px-5 py-3 hover:bg-primary/5"
        >
          {t('cta.download')}
        </a>
      </div>
    </section>
  )
}
