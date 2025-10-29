export const profile = {
  name: 'LEGSSYER Mohammed Anas',
  role: 'Futur ingénieur en Big Data & IA',
  bio:
    "Futur ingénieur en Big Data & IA, passionné par l’innovation technologique et le développement de solutions intelligentes.",
  // Place an image at /public/profile.jpg to use it
  photo: '/profile.jpg',
  // Zoom de la photo (1 = normal, 1.2 = 20% plus zoomé)
  photoScale: 1.25,
  // Contact info (à personnaliser)
  email: 'mohammed-anas.legssyer@uir.ac.ma',
  phone: '0682850803',
  location: 'Rabat, Maroc',
  availability: "Disponible pour un stage de fin d'études",
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
