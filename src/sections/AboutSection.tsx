import { profile } from '../data/profile'
import WordReveal from '../components/animations/WordReveal'
import Reveal from '../components/animations/Reveal'
import Typewriter from '../components/animations/Typewriter'
import CircuitRevealImage from '../components/animations/CircuitRevealImage'

const expertise = [
  'Intelligence Artificielle & Machine Learning',
  'Traitement du Langage Naturel (NLP)',
  'Big Data & Data Analytics',
  'Développement Web (Python, FastAPI, JavaScript)',
  'Optimisation de Performances Web (WordPress, Magento 2)',
  'Chatbots & Systèmes de Recommandation IA',
]

export default function AboutSection() {
  return (
    <section id="about" className="mx-auto max-w-[var(--container)] px-4 py-20">
      <div className="text-center mb-12">
        <WordReveal text="À propos de moi" className="text-3xl md:text-5xl font-extrabold" />
        <div className="mt-3 text-slate-400">
          <Typewriter as="p" text="Passionné par la technologie et l'innovation" speed={28} />
        </div>
      </div>

      <div className="grid gap-10 md:grid-cols-2 items-start">
        {/* Photo card */}
        <div className="relative mx-auto w-full max-w-sm">
          <div className="card shadow-xl ring-0 overflow-hidden">
            <CircuitRevealImage
              src={profile.photo}
              alt={profile.name}
              height={300}
              imageScale={profile.photoScale ?? 1}
              variant="blurFade"
            />
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
              {expertise.map((e, i) => (
                <Reveal key={e} delay={i * 0.08}>
                  <div className="flex items-center gap-2 rounded-xl border border-slate-700/60 bg-slate-900/40 px-4 py-3">
                    <span className="h-2 w-2 rounded-full bg-primary inline-block" />
                    <span className="text-slate-800 dark:text-slate-200">{e}</span>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>

        </Reveal>
      </div>
    </section>
  )
}
