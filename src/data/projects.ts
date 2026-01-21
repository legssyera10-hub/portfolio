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
      fr: "Flux complet : upload multipart vers Blob (création du container si besoin), SAS en lecture, appel Vision Read + polling jusqu'à succeeded et agrégation des lignes. Instrumentation OpenTelemetry vers Azure Monitor (FastAPI, requests).",
      en: 'End-to-end: multipart upload to Blob (creates container if missing), read SAS, Vision Read call + polling until succeeded and line aggregation. OpenTelemetry instrumentation to Azure Monitor (FastAPI, requests).',
    },
    github: 'https://github.com/legssyera10-hub/projectocr',
    demo: 'https://projectocrlegssyer.vercel.app/',
  },
  {
    title: { fr: 'Plateforme de gestion des informations patients et suivi médical', en: 'Patient information management and medical follow-up platform' },
    category: 'web',
    tech: ['FastAPI', 'MongoDB', 'React', 'Tailwind'],
    description: {
      fr: "Application web pour gérer patients, consultations et rendez-vous, avec perspectives d'assistance intelligente. Compétences : Full Stack, DB, UI, intégration de fonctionnalités IA.",
      en: 'Web app to manage patients, consultations, and appointments with future intelligent assistance. Skills: full stack, databases, UI, and AI feature integration.',
    },
    image: '/projects/medicalapp.jpg',
    longDescription: {
      fr: 'Portail médical: gestion des patients, consultations, rendez-vous, API FastAPI, MongoDB et frontend React/Tailwind.',
      en: 'Medical portal: patient, consultation, and appointment management with FastAPI, MongoDB, and React/Tailwind frontend.',
    },
    screenshots: ['/projects/medicalapp2.png'],
    github: 'https://github.com/legssyera10-hub/Gestion-des-patients-et-suivi-m-dical.git',
  },
  {
    title: {
      fr: 'Représentation conjointe texte-graphes pour la recommandation',
      en: 'Joint text-graph representations for recommendation',
    },
    category: 'data',
    tech: ['Python', 'Word2Vec', 'Graph Neural Networks (GCN)', 'PyTorch', 'scikit-learn'],
    description: {
      fr: "Système de recommandation hybride MovieLens combinant embeddings texte et structure de graphe pour améliorer la qualité des recommandations.",
      en: 'Hybrid MovieLens recommender that combines text embeddings and graph structure to improve recommendation quality.',
    },
    image: '/projects/Representation conjointe texte-graphes pour la recommandation.webp',
    longDescription: {
      fr: "Pipeline complet : texte des films (titre + genres) encodé via Word2Vec (dim 16, fenêtre 3, 1 epoch), graphe item-item construit par similarité de genres (top-k voisins) puis GCN 2 couches pour embeddings 16d. Les représentations texte + graphe sont concaténées puis projetées via MLP, entraînées en prédiction d'arêtes (80/10/10). Évaluation Precision@10, Recall@10, F1@10 : le graphe seul est meilleur et la fusion dépasse le texte seul.",
      en: 'End-to-end pipeline: movie text (title + genres) encoded with Word2Vec (dim 16, window 3, 1 epoch), item-item graph built by genre similarity (top-k neighbors) then 2-layer GCN for 16d embeddings. Text + graph representations are concatenated and projected via MLP, trained with edge prediction (80/10/10). Precision@10/Recall@10/F1@10 show graph-only is best and fusion beats text-only.',
    },
    github: 'https://github.com/legssyera10-hub/livrablesR-D',
  },
  {
    title: { fr: 'Chatbot IA pour la recommandation de médicaments', en: 'AI chatbot for medicine recommendation' },
    category: 'ai',
    tech: ['Python', 'MongoDB'],
    description: {
      fr: "Développement d'un chatbot intelligent aidant à choisir des médicaments adaptés selon des critères spécifiques. Compétences : NLP, conception/gestion de base de données, backend Python.",
      en: 'Developed an intelligent chatbot to suggest appropriate medicines based on specific criteria. Skills: NLP, database design/management, Python backend.',
    },
    image: '/projects/chatbot.png',
    longDescription: {
      fr: "Chatbot de recommandation de médicaments basé sur le NLP: prétraitement, extraction d'entités/symptômes et proposition de médicaments selon règles métier.",
      en: 'Medicine recommendation chatbot powered by NLP: preprocessing, entity/symptom extraction, and proposing medicines based on business rules.',
    },
    screenshots: ['/projects/chatbot2.png'],
    github: 'https://github.com/legssyera10-hub/Chatbot-IA-pour-la-recommandation-de-m-dicaments.git',
  },
  {
    title: { fr: 'Analyse de la satisfaction des étudiants - Machine Learning & Web App', en: 'Student satisfaction analysis - Machine Learning & Web App' },
    category: 'data',
    tech: ['Python', 'Pandas', 'scikit-learn', 'XGBoost', 'SVM'],
    description: {
      fr: 'Enquête sur 550 étudiants, analyse exploratoire et modèles de classification (RF 87 %, SVM, XGBoost). Application web interactive pour explorer résultats et indicateurs.',
      en: 'Survey of 550 students, exploratory analysis and classification models (RF 87%, SVM, XGBoost). Interactive web app to explore results and indicators.',
    },
    image: '/projects/analyse.png',
    screenshots: ['/projects/analyse2.png'],
    longDescription: {
      fr: 'Analyse de satisfaction: prétraitement, modélisation (Random Forest, SVM, XGBoost), visualisations interactives.',
      en: 'Satisfaction analysis: preprocessing, modeling (Random Forest, SVM, XGBoost), interactive visualizations.',
    },
  },
  {
    title: { fr: 'Optimisation de performances de sites WordPress et Magento 2', en: 'Performance optimization for WordPress and Magento 2 sites' },
    category: 'web',
    tech: ['WordPress', 'Magento 2', 'Optimisation DB', 'Cache'],
    description: {
      fr: 'Audit et optimisation (code, plugins, cache, images) avec tests de performance. Compétences : audit technique, optimisation web, mesures et documentation.',
      en: 'Audited and optimized code, plugins, caching, and images with performance testing. Skills: technical audit, web optimization, measurement, and documentation.',
    },
    image: '/projects/optimisation.png',
    screenshots: ['/projects/optimisation2.png'],
    longDescription: {
      fr: 'Optimisation WordPress/Magento : caches, compression, nettoyage de code et reporting avant/après.',
      en: 'WordPress/Magento optimization: caching, compression, code cleanup, and before/after reporting.',
    },
  },
]
