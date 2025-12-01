import { useTranslation } from 'react-i18next'
import { cvUrl, openAndDownloadCv } from '../../utils/cv'

export default function Footer() {
  const year = new Date().getFullYear()
  const { t } = useTranslation()
  return (
    <footer className="border-t border-slate-200 dark:border-slate-800">
      <div className="mx-auto max-w-[var(--container)] px-4 py-6 text-sm text-slate-600 dark:text-slate-400 flex flex-col sm:flex-row items-center gap-2 justify-between">
        <p>{t('footer.rights', { year })}</p>
        <div className="flex items-center gap-4">
          <a className="hover:text-primary" href="https://www.linkedin.com/in/anas-legssyer" target="_blank" rel="noreferrer">LinkedIn</a>
          <a className="hover:text-primary" href="https://github.com" target="_blank" rel="noreferrer">GitHub</a>
          <a
            className="hover:text-primary"
            href={cvUrl}
            onClick={(e) => {
              e.preventDefault()
              openAndDownloadCv()
            }}
          >
            CV (PDF)
          </a>
        </div>
      </div>
    </footer>
  )
}
