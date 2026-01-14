import { useMemo, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { skills, Skill, SkillCategory } from '../data/skills'
import WordReveal from '../components/animations/WordReveal'
import Reveal from '../components/animations/Reveal'
import Typewriter from '../components/animations/Typewriter'

const filters: ('all' | SkillCategory)[] = ['all', 'frontend', 'backend', 'databases', 'ai', 'devops', 'tools']

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

function SkillCard({ s, label }: { s: Skill; label: string }) {
  return (
    <div className="card p-3 hover:border-primary/60 transition-colors">
      <div className="h-10 flex items-center justify-center">
        {s.icon ? (
          <img src={s.icon} alt={s.name} className="h-8 w-8 object-contain opacity-90" />
        ) : (
          <div className="h-8 w-8 rounded-md bg-gradient-to-br from-primary/20 to-accent/20" />
        )}
      </div>
      <h4 className="mt-2 text-base font-semibold text-slate-100 text-center">{s.name}</h4>
      <p className="mt-1 text-[11px] text-slate-400 text-center">{label}</p>
    </div>
  )
}

export default function SkillsSection() {
  const { t } = useTranslation()
  const [filter, setFilter] = useState<(typeof filters)[number]>('all')

  const filtered = useMemo(() => {
    if (filter === 'all') return skills
    return skills.filter((s) => s.category === filter)
  }, [filter])

  const labels = (category: SkillCategory | 'all') => t(`skills.filters.${category === 'all' ? 'all' : category}`)

  return (
    <section id="skills" className="mx-auto max-w-[var(--container)] px-4 py-20">
      <div className="text-center mb-10">
        <WordReveal text={t('skills.title')} className="text-3xl md:text-5xl font-extrabold" />
        <div className="mt-3 text-slate-400">
          <Typewriter as="p" text={t('skills.subtitle')} speed={28} />
        </div>
      </div>

      <div className="flex flex-wrap items-center justify-center gap-3 mb-10">
        {filters.map((c) => (
          <Chip key={c} active={filter === c} onClick={() => setFilter(c)}>
            {labels(c)}
          </Chip>
        ))}
      </div>

      <Reveal>
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((s) => (
            <SkillCard key={`${s.name}-${s.category}`} s={s} label={t(`skills.categoryLabels.${s.category}`)} />
          ))}
        </div>
      </Reveal>
    </section>
  )
}
