export type Project = {
  title: string
  description: string
  tech: string[]
  category: 'IA' | 'Développement Web' | 'Data Science'
  image?: string
  github?: string
  demo?: string
}

export const projects: any[] = [
  {
    title: 'Chatbot IA pour la recommandation de médicaments',
    category: 'IA',
    tech: ['Python', 'MongoDB'],
    description:
      "Développement d’un chatbot intelligent aidant à choisir des médicaments adaptés selon des critères spécifiques. Compétences : NLP, conception/gestion de base de données, backend Python.",
    image: '/projects/chatbot.png',
    longDescription:
      "Chatbot de recommandation de médicaments basé sur le NLP: prétraitement, extraction d'entités/symptômes et proposition de médicaments selon règles métier.",
    screenshots: ['/projects/chatbot2.png'],
    // Remplacer par l'URL GitHub réelle de ce projet
    github: 'https://github.com/legssyera10-hub/Chatbot-IA-pour-la-recommandation-de-m-dicaments.git',
  },
  {
    title: 'Plateforme de gestion des informations patients et suivi médical',
    category: 'Développement Web',
    tech: ['FastAPI', 'MongoDB', 'React', 'Tailwind'],
    description:
      "Application web pour gérer patients, consultations et rendez‑vous, avec perspectives d’assistance intelligente. Compétences : Full Stack, DB, UI, intégration de fonctionnalités IA.",
    image: '/projects/medicalapp.jpg',
    longDescription:
      "Portail médical: gestion des patients, consultations, rendez-vous, API FastAPI, MongoDB et frontend React/Tailwind.",
    screenshots: ['/projects/medicalapp2.png'],
    // Remplacer par l'URL GitHub réelle de ce projet
    github: 'https://github.com/legssyera10-hub/Gestion-des-patients-et-suivi-m-dical.git',
  },
  {
    title: 'Analyse de la satisfaction des étudiants – Machine Learning & Web App',
    category: 'Data Science',
    tech: ['Python', 'Pandas', 'scikit‑learn', 'XGBoost', 'SVM'],
    description:
      "Enquête sur 550 étudiants, analyse exploratoire et modèles de classification (RF 87 %, SVM, XGBoost). Application web interactive pour explorer résultats et indicateurs.",
    image: '/projects/analyse.png',
    screenshots: ['/projects/analyse2.png'],
  },
  {
    title: 'Optimisation de performances de sites WordPress et Magento 2',
    category: 'Développement Web',
    tech: ['WordPress', 'Magento 2', 'Optimisation DB', 'Cache'],
    description:
      "Audit et optimisation (code, plugins, cache, images) avec tests de performance. Compétences : audit technique, optimisation web, mesures et documentation.",
    image: '/projects/optimisation.png',
    screenshots: ['/projects/optimisation2.png'],
  },
]
