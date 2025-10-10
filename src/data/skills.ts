export type SkillCategory =
  | 'Frontend'
  | 'Backend'
  | 'Bases de données'
  | 'IA & Data Science'
  | 'DevOps & Outils'
  | 'Outils'

export type Skill = {
  name: string
  category: SkillCategory
  icon?: string // optional path in /public
}

export const skills: Skill[] = [
  // Frontend
  { name: 'React', category: 'Frontend', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
  { name: 'HTML/CSS', category: 'Frontend', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg' },
  { name: 'JavaScript', category: 'Frontend', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg' },
  // Backend
  { name: 'Python', category: 'Backend', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg' },
  { name: 'Java', category: 'Backend', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg' },
  { name: 'C#', category: 'Backend', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/csharp/csharp-original.svg' },
  { name: 'PHP', category: 'Backend', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg' },
  { name: 'FastAPI', category: 'Backend', icon: 'https://cdn.simpleicons.org/fastapi/059669' },
  // DB
  { name: 'PostgreSQL', category: 'Bases de données', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg' },
  { name: 'MongoDB', category: 'Bases de données', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg' },
  { name: 'MySQL', category: 'Bases de données', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg' },
  { name: 'Oracle', category: 'Bases de données', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/oracle/oracle-original.svg' },
  // IA & Data
  { name: 'Machine Learning', category: 'IA & Data Science', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original.svg' },
  { name: 'Deep Learning', category: 'IA & Data Science', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pytorch/pytorch-original.svg' },
  { name: 'NLP', category: 'IA & Data Science', icon: '/icons/nlp.svg' },
  { name: 'LLM', category: 'IA & Data Science', icon: 'https://cdn.simpleicons.org/openai/412991' },
  { name: 'Pandas', category: 'IA & Data Science', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pandas/pandas-original.svg' },
  { name: 'NumPy', category: 'IA & Data Science', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/numpy/numpy-original.svg' },
  // DevOps & Tools
  { name: 'Git', category: 'DevOps & Outils', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg' },
  { name: 'GitHub', category: 'DevOps & Outils', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg' },
  { name: 'Docker', category: 'DevOps & Outils', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg' },
  // Misc tools
  { name: 'VS Code', category: 'Outils', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg' },
]
