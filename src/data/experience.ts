import { Localized } from '../utils/locale'

export type Experience = {
  company: string
  role: Localized<string>
  period: string
  location?: Localized<string>
  summary?: Localized<string>
  tech?: string[]
  responsibilities?: Localized<string>[]
  achievements?: Localized<string>[]
  logo?: string
}

export const experiences: Experience[] = [
  {
    company: 'CHU Mohammed VI Oujda',
    role: { fr: 'Stagiaire', en: 'Intern' },
    period: 'Jul 2025 - Sep 2025',
    location: { fr: 'Oujda, Maroc', en: 'Oujda, Morocco' },
    logo: '/logos/chu.png',
    summary: {
      fr: "Developpement d'une solution intelligente de gestion des patients et rendez-vous",
      en: 'Built an intelligent solution for patient and appointment management',
    },
    responsibilities: [
      { fr: "Developpement d'une solution intelligente de gestion des patients et rendez-vous", en: 'Built an intelligent solution for patient and appointment management' },
      { fr: "Integration d'IA pour resumer les dossiers medicaux", en: 'Integrated AI to summarize medical records' },
      { fr: "Assistance a l'analyse clinique", en: 'Assisted with clinical analysis' },
      { fr: "Optimisation de la planification des rendez-vous", en: 'Optimized appointment scheduling' },
    ],
    tech: ['Python', 'IA', 'Machine Learning', 'FastAPI', 'MongoDB'],
    achievements: [
      { fr: "Amelioration de l'efficacite de gestion des patients", en: 'Improved patient management efficiency' },
      { fr: "Reduction du temps d'analyse des dossiers medicaux", en: 'Reduced time needed to review medical records' },
    ],
  },
  {
    company: 'YoSoBox',
    role: { fr: 'Stagiaire en optimisation web', en: 'Web performance intern' },
    period: 'Jul 2024 - Aug 2024',
    location: { fr: 'Oujda, Maroc', en: 'Oujda, Morocco' },
    logo: '/logos/yosobox.png',
    summary: {
      fr: 'Optimisation des performances de sites WordPress et Magento 2',
      en: 'Optimized performance for WordPress and Magento 2 websites',
    },
    responsibilities: [
      { fr: 'Audit des performances de sites WordPress et Magento 2', en: 'Audited performance for WordPress and Magento 2 sites' },
      { fr: 'Optimisation du code, des plugins et extensions', en: 'Optimized code, plugins, and extensions' },
      { fr: "Mise en place de cache avance et optimisation des images", en: 'Implemented advanced caching and image optimization' },
      { fr: 'Tests de performance et reporting', en: 'Ran performance tests and reporting' },
    ],
    tech: ['WordPress', 'Magento 2', 'MySQL', 'Optimisation'],
    achievements: [
      { fr: "Reductions significatives des temps de chargement (jusqu'a ~40%)", en: 'Significant load time reductions (up to ~40%)' },
      { fr: 'Documentation professionnelle des optimisations', en: 'Documented optimizations professionally' },
    ],
  },
]
