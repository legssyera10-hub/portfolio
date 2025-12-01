import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'
import { cvUrl, openAndDownloadCv } from '../../utils/cv'

export default function CallToAction() {
  const { t } = useTranslation()
  return (
    <section className="mx-auto max-w-[var(--container)] px-4 py-16 text-center">
      <p className="text-lg text-slate-300 mb-6">{t('cta.ready')}</p>
      <div className="flex items-center justify-center gap-4">
        <Link to="/#contact" reloadDocument className="inline-flex items-center gap-2 rounded-md bg-primary px-5 py-3 text-white hover:opacity-90">
          {t('cta.buttonContact')}
        </Link>
        <a
          href={cvUrl}
          onClick={(e) => {
            e.preventDefault()
            openAndDownloadCv()
          }}
          className="inline-flex items-center gap-2 rounded-md border border-primary text-primary px-5 py-3 hover:bg-primary/5"
        >
          {t('cta.download')}
        </a>
      </div>
    </section>
  )
}
