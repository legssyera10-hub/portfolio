import { profile } from '../data/profile'
import { Link } from 'react-router-dom'
import WordReveal from '../components/animations/WordReveal'
import Reveal from '../components/animations/Reveal'

const expertise = [
  'Intelligence Artificielle',
  'Machine Learning & NLP',
  'Systèmes BI & Analytics',
  'Agents IA Autonomes',
  'Solutions RPA',
  'Développement Web',
]

export default function AboutSection() {
  return (
    <section id="about" className="mx-auto max-w-[var(--container)] px-4 py-20">
      <div className="text-center mb-12">
        <WordReveal text="À propos de moi" className="text-3xl md:text-5xl font-extrabold" />
        <Reveal delay={0.1}>
          <p className="mt-3 text-slate-400">Passionné par la technologie et l'innovation</p>
        </Reveal>
      </div>

      <div className="grid gap-10 md:grid-cols-2 items-start">
        {/* Photo card (placeholder until provided) */}
        <div className="relative mx-auto w-full max-w-md">
          <div className="card shadow-xl ring-0 overflow-hidden">
            {/* Show provided image if present later (public/profile.jpg). Fallback to gradient box. */}
            <img
              src={profile.photo}
              alt={profile.name}
              className="w-full h-[360px] object-cover transition-transform duration-300"
              style={{ transform: `scale(${profile.photoScale ?? 1})` }}
              onError={(e) => {
                (e.currentTarget as HTMLImageElement).style.display = 'none'
                const fallback = (e.currentTarget.nextSibling as HTMLElement | null)
                if (fallback) fallback.style.display = 'block'
              }}
            />
            <div style={{ display: 'none' }} className="w-full h-[360px] bg-gradient-to-br from-primary/20 to-accent/20" />
          </div>
          {/* Decorative bubbles */}
          <span className="pointer-events-none absolute -top-4 -right-4 h-20 w-20 rounded-full bg-primary/30 blur-sm" />
          <span className="pointer-events-none absolute -bottom-6 -left-6 h-24 w-24 rounded-full bg-accent/30 blur" />
        </div>

        {/* Text content */}
        <Reveal>
          <p className="text-lg leading-relaxed text-slate-700 dark:text-slate-300">
            Je suis {profile.name}, {profile.role}. Je suis motivé et passionné par les défis technologiques, en particulier
            ceux à l'intersection de la donnée et de l'intelligence artificielle.
          </p>
          <p className="mt-4 text-lg leading-relaxed text-slate-700 dark:text-slate-300">
            Je recherche constamment à mettre en pratique mes compétences à travers des projets concrets et innovants,
            en combinant analyse de données, apprentissage automatique et bonnes pratiques d’ingénierie.
          </p>
          <p className="mt-4 text-lg leading-relaxed text-slate-700 dark:text-slate-300">
            Mon objectif est de contribuer activement à des projets qui repoussent les limites de la technologie tout en
            apportant une réelle valeur ajoutée.
          </p>

          <div className="mt-8">
            <h3 className="text-xl font-semibold">Domaines d'expertise</h3>
            <div className="mt-4 grid gap-3 sm:grid-cols-2">
              {expertise.map((e) => (
                <div key={e} className="flex items-center gap-2 rounded-xl border border-slate-700/60 bg-slate-900/40 px-4 py-3">
                  <span className="h-2 w-2 rounded-full bg-primary inline-block" />
                  <span className="text-slate-800 dark:text-slate-200">{e}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-8">
            <Link to="/contact" className="inline-flex items-center gap-2 rounded-md bg-primary px-5 py-3 text-white hover:opacity-90">
              Discutons ensemble
              <span aria-hidden>⚡</span>
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
