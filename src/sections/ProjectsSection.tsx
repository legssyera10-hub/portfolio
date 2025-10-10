import { useMemo, useState } from 'react'
import { projects } from '../data/projects'
import ProjectCard from './ProjectCard'
import WordReveal from '../components/animations/WordReveal'
import Reveal from '../components/animations/Reveal'

const cats: ('Tous les projets' | 'IA' | 'Développement Web' | 'Data Science')[] = [
  'Tous les projets',
  'IA',
  'Développement Web',
  'Data Science',
]

function Chip({ active, onClick, children }: { active: boolean; onClick: () => void; children: React.ReactNode }) {
  return (
    <button
      onClick={onClick}
      className={`rounded-full px-5 py-2 text-sm transition-colors border ${
        active
          ? 'bg-primary text-white border-primary'
          : 'bg-slate-900/40 text-slate-200 border-slate-700/60 hover:border-primary/60 hover:text-primary'
      }`}
    >
      {children}
    </button>
  )
}

export default function ProjectsSection() {
  const [filter, setFilter] = useState<(typeof cats)[number]>('Tous les projets')
  const filtered = useMemo(() => (filter === 'Tous les projets' ? projects : projects.filter(p => p.category === filter)), [filter])

  return (
    <section id="projects" className="mx-auto max-w-[var(--container)] px-4 py-20">
      <div className="text-center mb-10">
        <WordReveal text="Mes Projets" className="text-3xl md:text-5xl font-extrabold" />
        <Reveal delay={0.1}><p className="mt-3 text-slate-400">Découvrez mes réalisations techniques</p></Reveal>
      </div>

      <Reveal>
      <div className="flex flex-wrap items-center justify-center gap-3 mb-10">
        {cats.map((c) => (
          <Chip key={c} active={filter === c} onClick={() => setFilter(c)}>
            {c}
          </Chip>
        ))}
      </div>
      </Reveal>

      <Reveal>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((p) => (
            <ProjectCard key={p.title} {...p} />
          ))}
        </div>
      </Reveal>
    </section>
  )
}
