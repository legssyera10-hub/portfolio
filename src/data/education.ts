export type Education = {
  title: string
  school: string
  period: string
  location?: string
  bullets?: string[]
  logo?: string
}

export const education: Education[] = [
  {
    title: 'Big Data & Intelligence Artificielle, Informatique',
    school: 'Université Internationale de Rabat (UIR)',
    period: '09/2023 – En cours',
    location: 'Maroc — Rabat',
    bullets: [
      'Formation axée sur le Big Data, l’Intelligence Artificielle et l’informatique avancée',
      'Développement de compétences solides en analyse de données, apprentissage automatique, programmation et gestion de projets technologiques',
    ],
    logo:'/logos/uir.png'
  },
  {
    title: 'Classes Préparatoires aux Grandes écoles',
    school: 'Pythagore Prépas Oujda',
    period: '09/2021 – 06/2023',
    location: 'Maroc — Oujda',
    bullets: [
      "Réussite au CNC, admissible aux grandes écoles d'ingénieurs marocaines",
      "Formation approfondie en mathématiques, physique et informatique, favorisant le développement d’une pensée logique, d’une rigueur méthodologique et d’une solide capacité d’analyse",
      "Acquisition d’une base scientifique solide accompagnée d’un sens aigu de la méthode, de la précision et de la résolution de problèmes complexes",
    ],
    logo:'/logos/cpge.png'
  },
]
