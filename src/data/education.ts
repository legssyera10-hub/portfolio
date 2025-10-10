export type Education = {
  title: string
  school: string
  period: string
  location?: string
  bullets?: string[]
}

export const education: Education[] = [
  {
    title: 'Big Data & Intelligence Artificielle, Informatique',
    school: 'Université Internationale de Rabat (UIR)',
    period: '09/2023 – En cours',
    location: 'Maroc — Rabat',
    bullets: [
      'Université Internationale de Rabat (UIR)',
      'Big Data & Intelligence Artificielle, Informatique',
    ],
  },
  {
    title: 'Classes Préparatoires aux Grandes écoles',
    school: 'Pythagore Prépas Oujda',
    period: '09/2021 – 06/2023',
    location: 'Maroc — Oujda',
    bullets: [
      "Réussite au CNC, admissible aux grandes écoles d'ingénieurs marocaines",
      "Acquisition d’une solide base en mathématiques, physique et informatique, avec développement de rigueur, méthode et capacité d’analyse.",
    ],
  },
]

