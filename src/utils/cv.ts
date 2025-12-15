import { resolveLang } from './locale'

const cvFiles: Record<'fr' | 'en', string> = {
  fr: '/LegssyerMohammedAnasCv2025.pdf',
  en: '/LegssyerMohammedAnasCv2025-en.pdf', // place the EN version in /public
}

export function getCvUrl(lang?: string) {
  const resolved = resolveLang(lang)
  return cvFiles[resolved] || cvFiles.fr
}

// Open the CV in a new tab and trigger an explicit download
export function openAndDownloadCv(lang?: string) {
  if (typeof window === 'undefined' || typeof document === 'undefined') return
  const url = getCvUrl(lang)
  const filename = url.split('/').pop() || 'cv.pdf'

  window.open(url, '_blank', 'noopener,noreferrer')

  const link = document.createElement('a')
  link.href = url
  link.download = filename
  document.body.appendChild(link)
  link.click()
  document.body.removeChild(link)
}

// default export for backward compatibility (FR)
const cvUrl = cvFiles.fr

export { cvUrl }
