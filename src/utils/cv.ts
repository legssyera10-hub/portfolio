const cvUrl = '/LegssyerMohammedAnasCv2025.pdf'

// Open the CV in a new tab and trigger an explicit download
export function openAndDownloadCv() {
  if (typeof window === 'undefined' || typeof document === 'undefined') return

  window.open(cvUrl, '_blank', 'noopener,noreferrer')

  const link = document.createElement('a')
  link.href = cvUrl
  link.download = 'LegssyerMohammedAnasCv2025.pdf'
  document.body.appendChild(link)
  link.click()
  document.body.removeChild(link)
}

export { cvUrl }
