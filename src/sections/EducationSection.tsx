import { education } from '../data/education'
import WordReveal from '../components/animations/WordReveal'
import Typewriter from '../components/animations/Typewriter'
import { motion } from 'framer-motion'
import { useState } from 'react'

export default function EducationSection() {
  return (
    <section id="education" className="relative overflow-hidden mx-auto max-w-[var(--container)] px-4 py-20">
      <div className="text-center mb-12">
        <WordReveal text="Éducation" className="text-3xl md:text-5xl font-extrabold" />
        <div className="mt-3 text-slate-400">
          <Typewriter as="p" text="Parcours académique et apprentissages clés" speed={28} />
        </div>
      </div>

      <div className="relative">
        {/* Central glowing line */}
        <div className="pointer-events-none absolute left-1/2 -translate-x-1/2 h-full w-[2px] bg-gradient-to-b from-primary/60 via-primary/30 to-accent/60" />

        <ol className="space-y-14">
          {education.map((e, i) => {
            const left = i % 2 === 0
            const xFrom = left ? -24 : 24
            return (
              <li key={i} className="relative grid md:grid-cols-2 gap-6 items-start">
                {/* connector dot */}
                <span className="pointer-events-none absolute left-1/2 -translate-x-1/2 top-6 h-4 w-4 rounded-full bg-slate-950">
                  <span className="absolute inset-0 m-auto h-4 w-4 rounded-full border-2 border-primary" />
                </span>

                {left ? (
                  <div className="hidden md:block">
                    <EduCard e={e} align="left" xFrom={xFrom} />
                  </div>
                ) : (
                  <div className="hidden md:block" />
                )}

                {!left ? (
                  <div className="hidden md:block">
                    <EduCard e={e} align="right" xFrom={xFrom} />
                  </div>
                ) : (
                  <div className="hidden md:block" />
                )}

                {/* mobile single column */}
                <div className="md:hidden col-span-2">
                  <EduCard e={e} align="left" xFrom={-16} />
                </div>
              </li>
            )
          })}
        </ol>
      </div>
    </section>
  )
}

function EduCard({ e, align, xFrom }: { e: (typeof education)[number]; align: 'left' | 'right'; xFrom: number }) {
  return (
    <motion.article
      initial={{ opacity: 0, x: xFrom, y: 8 }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once: true, amount: 0.6 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className={`relative rounded-2xl border bg-slate-900/40 border-slate-700/60 backdrop-blur-md shadow-xl ${
        align === 'left' ? 'md:mr-10' : 'md:ml-10'
      }`}
    >
      <span className="pointer-events-none absolute -inset-px rounded-2xl ring-1 ring-white/5" />

      <div className="p-6">
        <div className="flex items-start justify-between gap-4">
          <div className="flex items-center gap-3">
            <LogoSquare school={e.school} logo={e.logo} />
            <div>
              <h3 className="text-xl font-semibold text-slate-100">{e.title}</h3>
              <p className="text-primary font-medium">{e.school}</p>
            </div>
          </div>
          <div className="text-sm text-slate-400 text-right">
            <p>{e.period}</p>
            {e.location && <p>{e.location}</p>}
          </div>
        </div>

        {e.bullets && (
          <ul className="mt-4 list-disc ps-5 text-slate-300 space-y-1">
            {e.bullets.map((b, j) => (
              <li key={j}>{b}</li>
            ))}
          </ul>
        )}
      </div>
    </motion.article>
  )
}

function getInitials(name: string) {
  const parts = name.trim().split(/\s+/)
  const a = parts[0]?.[0] ?? ''
  const b = parts[1]?.[0] ?? ''
  return (a + b).toUpperCase()
}

function LogoSquare({ school, logo }: { school: string; logo?: string }) {
  const [bad, setBad] = useState(false)
  const showImg = !!logo && !bad
  return (
    <div className="h-10 w-10 rounded-md overflow-hidden flex items-center justify-center">
      {showImg ? (
        <img
          src={logo}
          alt={school}
          className="h-full w-full object-contain bg-white/90 p-1"
          onError={() => setBad(true)}
        />
      ) : (
        <div className="h-full w-full rounded-md bg-gradient-to-br from-primary/25 to-accent/25 text-slate-100 flex items-center justify-center text-xs font-semibold">
          {getInitials(school)}
        </div>
      )}
    </div>
  )
}
