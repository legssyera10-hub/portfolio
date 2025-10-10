export type Experience = {
  company: string
  role: string
  period: string
  location?: string
  logo?: string
  summary?: string
  tech?: string[]
  bullets?: string[]
  responsibilities?: string[]
  achievements?: string[]
}

export const experiences: Experience[] = [
  {
    company: 'CHU Mohammed VI Oujda',
    role: 'Stagiaire',
    period: 'Jul 2025 - Sep 2025',
    location: 'Oujda, Maroc',
    logo: '/logos/chu.png',
    summary: "Développement d'une solution intelligente de gestion des patients et rendez‑vous",
    responsibilities: [
      "Développement d'une solution intelligente de gestion des patients et rendez‑vous",
      "Intégration d'IA pour résumer les dossiers médicaux",
      "Assistance à l'analyse clinique",
      "Optimisation de la planification des rendez‑vous",
    ],
    tech: ['Python', 'IA', 'Machine Learning', 'FastAPI', 'MongoDB'],
    achievements: [
      "Amélioration de l'efficacité de gestion des patients",
      'Réduction du temps d’analyse des dossiers médicaux',
    ],
  },
  {
    company: 'YoSoBox',
    role: 'Stagiaire en optimisation web',
    period: 'Jul 2024 - Aug 2024',
    location: 'Oujda, Maroc',
    logo: '/logos/yosobox.png',
    summary: "Optimisation des performances de sites WordPress et Magento 2",
    responsibilities: [
      'Audit des performances de sites WordPress et Magento 2',
      'Optimisation du code, des plugins et extensions',
      'Mise en place de cache avancé et optimisation des images',
      'Tests de performance et reporting',
    ],
    tech: ['WordPress', 'Magento 2', 'MySQL', 'Optimisation'],
    achievements: [
      "Réductions significatives des temps de chargement (jusqu’à ~40%)",
      'Documentation professionnelle des optimisations',
    ],
  },
]
