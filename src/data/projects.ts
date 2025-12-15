import { Localized } from '../utils/locale'

export type Project = {
  title: Localized<string>
  description: Localized<string>
  tech: string[]
  category: 'ai' | 'web' | 'data'
  image?: string
  github?: string
  demo?: string
  longDescription?: Localized<string>
  screenshots?: string[]
}

export const projects: Project[] = [
  {
    title: { fr: 'OCR Uploader - Azure Vision Read', en: 'OCR Uploader - Azure Vision Read' },
    category: 'ai',
    tech: [
      'FastAPI',
      'Python',
      'Azure Blob Storage',
      'Azure Vision Read v3.2',
      'OpenTelemetry',
      'Azure Application Insights',
      'HTML/CSS/JS',
    ],
    description: {
      fr: 'Front drag & drop pour uploader une image, stockage Blob avec SAS 60 min et appel OCR Azure Vision Read v3.2. Retour JSON avec texte extrait.',
      en: 'Drag & drop front to upload an image, Blob storage with 60-min SAS, then OCR via Azure Vision Read v3.2. Returns JSON with extracted text.',
    },
    image: '/projects/ocr-uploader.png',
    screenshots: ['/projects/ocr-uploader2.png', '/projects/ocr-uploader3.png'],


    longDescription: {
      fr: "Flux complet : upload multipart vers Blob (creation du container si besoin), SAS en lecture, appel Vision Read + polling jusqu a succeeded et aggregation des lignes. Instrumentation OpenTelemetry vers Azure Monitor (FastAPI, requests).",
      en: 'End-to-end: multipart upload to Blob (creates container if missing), read SAS, Vision Read call + polling until succeeded and line aggregation. OpenTelemetry instrumentation to Azure Monitor (FastAPI, requests).',
    },
    github: 'https://github.com/legssyera10-hub/projectocr',
    demo: 'https://projectocrlegssyer.vercel.app/',
  },
  {
    title: { fr: 'Plateforme de gestion des informations patients et suivi medical', en: 'Patient information management and medical follow-up platform' },
    category: 'web',
    tech: ['FastAPI', 'MongoDB', 'React', 'Tailwind'],
    description: {
      fr: "Application web pour gerer patients, consultations et rendez-vous, avec perspectives d'assistance intelligente. Competences : Full Stack, DB, UI, integration de fonctionnalites IA.",
      en: 'Web app to manage patients, consultations, and appointments with future intelligent assistance. Skills: full stack, databases, UI, and AI feature integration.',
    },
    image: '/projects/medicalapp.jpg',
    longDescription: {
      fr: 'Portail medical: gestion des patients, consultations, rendez-vous, API FastAPI, MongoDB et frontend React/Tailwind.',
      en: 'Medical portal: patient, consultation, and appointment management with FastAPI, MongoDB, and React/Tailwind frontend.',
    },
    screenshots: ['/projects/medicalapp2.png'],
    github: 'https://github.com/legssyera10-hub/Gestion-des-patients-et-suivi-m-dical.git',
  },
  {
    title: { fr: 'Chatbot IA pour la recommandation de medicaments', en: 'AI chatbot for medicine recommendation' },
    category: 'ai',
    tech: ['Python', 'MongoDB'],
    description: {
      fr: "Developpement d'un chatbot intelligent aidant a choisir des medicaments adaptes selon des criteres specifiques. Competences : NLP, conception/gestion de base de donnees, backend Python.",
      en: 'Developed an intelligent chatbot to suggest appropriate medicines based on specific criteria. Skills: NLP, database design/management, Python backend.',
    },
    image: '/projects/chatbot.png',
    longDescription: {
      fr: "Chatbot de recommandation de medicaments base sur le NLP: pretraitement, extraction d'entites/symptomes et proposition de medicaments selon regles metier.",
      en: 'Medicine recommendation chatbot powered by NLP: preprocessing, entity/symptom extraction, and proposing medicines based on business rules.',
    },
    screenshots: ['/projects/chatbot2.png'],
    github: 'https://github.com/legssyera10-hub/Chatbot-IA-pour-la-recommandation-de-m-dicaments.git',
  },
  {
    title: { fr: 'Analyse de la satisfaction des etudiants - Machine Learning & Web App', en: 'Student satisfaction analysis - Machine Learning & Web App' },
    category: 'data',
    tech: ['Python', 'Pandas', 'scikit-learn', 'XGBoost', 'SVM'],
    description: {
      fr: 'Enquete sur 550 etudiants, analyse exploratoire et modeles de classification (RF 87 %, SVM, XGBoost). Application web interactive pour explorer resultats et indicateurs.',
      en: 'Survey of 550 students, exploratory analysis and classification models (RF 87%, SVM, XGBoost). Interactive web app to explore results and indicators.',
    },
    image: '/projects/analyse.png',
    screenshots: ['/projects/analyse2.png'],
    longDescription: {
      fr: 'Analyse de satisfaction: pretraitement, modelisation (Random Forest, SVM, XGBoost), visualisations interactives.',
      en: 'Satisfaction analysis: preprocessing, modeling (Random Forest, SVM, XGBoost), interactive visualizations.',
    },
  },
  {
    title: { fr: 'Optimisation de performances de sites WordPress et Magento 2', en: 'Performance optimization for WordPress and Magento 2 sites' },
    category: 'web',
    tech: ['WordPress', 'Magento 2', 'Optimisation DB', 'Cache'],
    description: {
      fr: 'Audit et optimisation (code, plugins, cache, images) avec tests de performance. Competences : audit technique, optimisation web, mesures et documentation.',
      en: 'Audited and optimized code, plugins, caching, and images with performance testing. Skills: technical audit, web optimization, measurement, and documentation.',
    },
    image: '/projects/optimisation.png',
    screenshots: ['/projects/optimisation2.png'],
    longDescription: {
      fr: 'Optimisation WordPress/Magento : caches, compression, nettoyage de code et reporting avant/apres.',
      en: 'WordPress/Magento optimization: caching, compression, code cleanup, and before/after reporting.',
    },
  },
]
