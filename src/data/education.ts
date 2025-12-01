import { Localized } from '../utils/locale'

export type Education = {
  title: Localized<string>
  school: string
  period: string
  location?: Localized<string>
  bullets?: Localized<string>[]
  logo?: string
}

export const education: Education[] = [
  {
    title: { fr: 'Big Data & Intelligence Artificielle, Informatique', en: 'Big Data & Artificial Intelligence, Computer Science' },
    school: 'Universite Internationale de Rabat (UIR)',
    period: '09/2023 - En cours',
    location: { fr: 'Maroc - Rabat', en: 'Morocco - Rabat' },
    bullets: [
      { fr: "Formation axee sur le Big Data, l'Intelligence Artificielle et l'informatique avancee", en: 'Program focused on Big Data, Artificial Intelligence, and advanced computer science' },
      { fr: 'Developpement de competences solides en analyse de donnees, apprentissage automatique, programmation et gestion de projets technologiques', en: 'Built strong skills in data analysis, machine learning, programming, and technology project management' },
    ],
    logo:'/logos/uir.png'
  },
  {
    title: { fr: 'Classes Preparatoires aux Grandes Ecoles', en: 'Preparatory Classes for Engineering Schools' },
    school: 'Pythagore Prepas Oujda',
    period: '09/2021 - 06/2023',
    location: { fr: 'Maroc - Oujda', en: 'Morocco - Oujda' },
    bullets: [
      { fr: "Reussite au CNC, admissible aux grandes ecoles d'ingenieurs marocaines", en: 'Passed CNC, admissible to top Moroccan engineering schools' },
      { fr: "Formation approfondie en mathematiques, physique et informatique, favorisant une pensee logique, une rigueur methodologique et une solide capacite d'analyse", en: 'In-depth training in mathematics, physics, and computer science, fostering logical thinking, rigor, and strong analytical ability' },
      { fr: "Acquisition d'une base scientifique solide avec un sens aigu de la methode, de la precision et de la resolution de problemes complexes", en: 'Built a solid scientific foundation with a strong sense of method, precision, and complex problem solving' },
    ],
    logo:'/logos/cpge.png'
  },
]
