import { useMemo, useState } from 'react'
import { skills, Skill, SkillCategory } from '../data/skills'
import WordReveal from '../components/animations/WordReveal'
import Reveal from '../components/animations/Reveal'

const categories: (SkillCategory | 'Toutes')[] = [
  'Toutes',
  'Frontend',
  'Backend',
  'Bases de données',
  'IA & Data Science',
  'DevOps & Outils',
  'Outils',
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

function SkillCard({ s }: { s: Skill }) {
  return (
    <div className="card p-6 hover:border-primary/60 transition-colors">
      <div className="h-16 flex items-center justify-center">
        {/* Icon placeholder: shows nothing if not provided. You can drop SVGs in /public/icons */}
        {s.icon ? (
          <img src={s.icon} alt={s.name} className="h-12 w-12 object-contain opacity-90" />
        ) : (
          <div className="h-12 w-12 rounded-md bg-gradient-to-br from-primary/20 to-accent/20" />
        )}
      </div>
      <h4 className="mt-4 text-xl font-semibold text-slate-100 text-center">{s.name}</h4>
      <p className="mt-1 text-sm text-slate-400 text-center">{s.category}</p>
    </div>
  )
}

export default function SkillsSection() {
  const [filter, setFilter] = useState<(typeof categories)[number]>('Toutes')

  const filtered = useMemo(() => {
    if (filter === 'Toutes') return skills
    return skills.filter((s) => s.category === filter)
  }, [filter])

  return (
    <section id="skills" className="mx-auto max-w-[var(--container)] px-4 py-20">
      <div className="text-center mb-10">
        <WordReveal text="Mes Compétences" className="text-3xl md:text-5xl font-extrabold" />
        <Reveal delay={0.1}><p className="mt-3 text-slate-400">Technologies et outils que je maîtrise</p></Reveal>
      </div>

      <div className="flex flex-wrap items-center justify-center gap-3 mb-10">
        {categories.map((c) => (
          <Chip key={c} active={filter === c} onClick={() => setFilter(c)}>
            {c}
          </Chip>
        ))}
      </div>

      <Reveal>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((s) => (
            <SkillCard key={`${s.name}-${s.category}`} s={s} />
          ))}
        </div>
      </Reveal>
    </section>
  )}
