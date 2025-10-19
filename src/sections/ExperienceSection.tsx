import { Calendar, MapPin } from 'lucide-react'
import { experiences } from '../data/experience'
import WordReveal from '../components/animations/WordReveal'
import Reveal from '../components/animations/Reveal'
import Typewriter from '../components/animations/Typewriter'

function Badge({ children }: { children: React.ReactNode }) {
  return <span className="text-xs rounded-md bg-slate-800/60 border border-slate-700/60 px-2 py-1 text-slate-200">{children}</span>
}

export default function ExperienceSection() {
  return (
    <section id="experience" className="relative overflow-hidden mx-auto max-w-[var(--container)] px-4 py-20">
      {/* Themed background */}
      <div aria-hidden className="absolute inset-0 -z-10">
        <div className="absolute inset-0 opacity-20 dark:opacity-25 bg-[url('/bg/ai-circuit-dark.svg')] dark:bg-[url('/bg/ai-circuit-dark.svg')] bg-center bg-cover" />
        <div className="absolute -top-32 left-1/2 -translate-x-1/2 h-96 w-[120%] rounded-full blur-3xl bg-gradient-to-r from-primary/20 via-transparent to-accent/20" />
        <div className="absolute -bottom-32 left-1/2 -translate-x-1/2 h-96 w-[120%] rounded-full blur-3xl bg-gradient-to-r from-accent/20 via-transparent to-primary/20" />
      </div>
      <div className="text-center mb-12">
        <WordReveal text="Expérience Professionnelle" className="text-3xl md:text-5xl font-extrabold" />
        <div className="mt-3 text-slate-400">
          <Typewriter as="p" text="Mon parcours professionnel" speed={28} />
        </div>
      </div>

      <div className="relative">
        <div className="pointer-events-none absolute left-1/2 -translate-x-1/2 h-full w-px bg-gradient-to-b from-primary/60 via-primary/40 to-accent/60" />

        <ol className="space-y-14">
          {experiences.map((exp, idx) => {
            const isLeft = idx % 2 === 0
            return (
              <li key={idx} className="relative grid md:grid-cols-2 gap-6 items-start">
                <span className="pointer-events-none absolute left-1/2 -translate-x-1/2 top-6 h-4 w-4 rounded-full bg-slate-950">
                  <span className="absolute inset-0 m-auto h-4 w-4 rounded-full border-2 border-primary" />
                </span>

                {isLeft ? (
                  <div className="hidden md:block">
                    <Reveal><ExperienceCard exp={exp} align="left" /></Reveal>
                  </div>
                ) : (
                  <div className="hidden md:block" />
                )}

                {!isLeft ? (
                  <div className="hidden md:block">
                    <Reveal><ExperienceCard exp={exp} align="right" /></Reveal>
                  </div>
                ) : (
                  <div className="hidden md:block" />
                )}

                <div className="md:hidden col-span-2">
                  <ExperienceCard exp={exp} align="left" />
                </div>
              </li>
            )
          })}
        </ol>
      </div>
    </section>
  )
}

function ExperienceCard({ exp, align }: { exp: (typeof experiences)[number]; align: 'left' | 'right' }) {
  return (
    <div className={`card p-6 ${align === 'left' ? 'md:mr-10' : 'md:ml-10'}`}>
      <div className="flex items-start justify-between gap-4">
        <div className="flex items-center gap-3">
          {exp.logo ? (
            <img src={exp.logo} alt={exp.company} className="h-10 w-10 rounded-md object-contain bg-white p-1" onError={(e)=>{(e.currentTarget as HTMLImageElement).style.display='none'}} />
          ) : (
            <div className="h-10 w-10 rounded-md bg-gradient-to-br from-primary/20 to-accent/20" />
          )}
          <div>
            <h3 className="text-xl font-semibold">{exp.role}</h3>
            <p className="text-primary">{exp.company}</p>
          </div>
        </div>
        <div className="text-sm text-slate-400 flex flex-col items-end">
          <div className="flex items-center gap-2"><Calendar size={14}/> {exp.period}</div>
          {exp.location && <div className="flex items-center gap-2"><MapPin size={14}/> {exp.location}</div>}
        </div>
      </div>

      {exp.summary && <p className="mt-4 text-slate-700 dark:text-slate-300">{exp.summary}</p>}

      {exp.responsibilities && (
        <div className="mt-5">
          <h4 className="font-semibold">Responsabilités</h4>
          <ul className="mt-2 list-disc ps-5 text-slate-700 dark:text-slate-300 space-y-1">
            {exp.responsibilities.map((r, i) => <li key={i}>{r}</li>)}
          </ul>
        </div>
      )}

      {exp.tech && (
        <div className="mt-5">
          <h4 className="font-semibold">Technologies</h4>
          <div className="mt-2 flex flex-wrap gap-2">{exp.tech.map((t) => <Badge key={t}>{t}</Badge>)}</div>
        </div>
      )}

      {exp.achievements && (
        <div className="mt-5">
          <h4 className="font-semibold">Réalisations</h4>
          <ul className="mt-2 text-slate-700 dark:text-slate-300 space-y-1">
            {exp.achievements.map((a, i) => (
              <li key={i} className="flex items-start gap-2">
                <span className="mt-2 h-2 w-2 rounded-full bg-green-500 inline-block" />
                <span>{a}</span>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  )
}

