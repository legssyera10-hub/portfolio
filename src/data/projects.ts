export type Project = {
  title: string
  description: string
  tech: string[]
  category: 'IA' | 'Développement Web' | 'Data Science'
  image?: string
  github?: string
  demo?: string
}

export const projects: Project[] = [
  {
    title: 'Chatbot IA pour la recommandation de médicaments',
    category: 'IA',
    tech: ['Python', 'MongoDB'],
    description:
      "Développement d’un chatbot intelligent aidant à choisir des médicaments adaptés selon des critères spécifiques. Compétences : NLP, conception/gestion de base de données, backend Python.",
    image: '/projects/meds-chatbot.svg',
  },
  {
    title: 'Plateforme de gestion des informations patients et suivi médical',
    category: 'Développement Web',
    tech: ['FastAPI', 'MongoDB', 'React', 'Tailwind'],
    description:
      "Application web pour gérer patients, consultations et rendez‑vous, avec perspectives d’assistance intelligente. Compétences : Full Stack, DB, UI, intégration de fonctionnalités IA.",
    image: '/projects/medical-platform.svg',
  },
  {
    title: 'Analyse de la satisfaction des étudiants – Machine Learning & Web App',
    category: 'Data Science',
    tech: ['Python', 'Pandas', 'scikit‑learn', 'XGBoost', 'SVM'],
    description:
      "Enquête sur 550 étudiants, analyse exploratoire et modèles de classification (RF 87 %, SVM, XGBoost). Application web interactive pour explorer résultats et indicateurs.",
    image: '/projects/student-satisfaction.svg',
  },
  {
    title: 'Optimisation de performances de sites WordPress et Magento 2',
    category: 'Développement Web',
    tech: ['WordPress', 'Magento 2', 'Optimisation DB', 'Cache'],
    description:
      "Audit et optimisation (code, plugins, cache, images) avec tests de performance. Compétences : audit technique, optimisation web, mesures et documentation.",
    image: '/projects/performance-optimization.svg',
  },
]
