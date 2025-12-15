import { Localized } from '../utils/locale'

type LocalizedField = Localized<string> | string

export const profile = {
  name: 'LEGSSYER Mohammed Anas',
  role: {
    fr: 'Futur ingenieur en Data Science & IA',
    en: 'Future Data Science & AI engineer',
  } as LocalizedField,
  bio: {
    fr: "Futur ingenieur en Data Science & IA, passionne par l'innovation technologique et le developpement de solutions intelligentes.",
    en: 'Future Data Science & AI engineer, passionate about technological innovation and building intelligent solutions.',
  } as LocalizedField,
  // Place an image at /public/profile.jpg to use it
  photo: '/profile.jpg',
  // Zoom de la photo (1 = normal, 1.2 = 20% plus zoome)
  photoScale: 1.25,
  // Contact info (a personnaliser)
  email: 'mohammed-anas.legssyer@uir.ac.ma',
  phone: '0682850803',
  location: {
    fr: 'Rabat, Maroc',
    en: 'Rabat, Morocco',
  } as LocalizedField,
  availability: {
    fr: "Disponible pour un stage de fin d'etudes",
    en: 'Available for a final-year internship',
  } as LocalizedField,
  social: {
    github: 'https://github.com',
    linkedin: 'https://www.linkedin.com/in/anas-legssyer'
  }
}

export function initialsFromName(name: string) {
  const parts = name.trim().split(/\s+/)
  const first = parts[0]?.[0] || ''
  const last = parts[parts.length - 1]?.[0] || ''
  return (first + last).toUpperCase()
}
