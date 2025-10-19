import { motion } from 'framer-motion'
import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'
import { profile, initialsFromName } from '../data/profile'
import WordReveal from '../components/animations/WordReveal'
import Typewriter from '../components/animations/Typewriter'

export default function Hero() {
  const { t } = useTranslation()
  const initials = initialsFromName(profile.name)

  return (
    <section className="relative overflow-hidden hero-ai">
      <div className="mx-auto max-w-[var(--container)] px-4 py-20 md:py-28 text-center">
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-primary/90 font-medium"
        >
          Salut, je suis
        </motion.p>
        <h1 className="mt-2 text-5xl md:text-7xl font-extrabold tracking-tight bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
          <WordReveal text={profile.name} />
        </h1>
        <motion.h2
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="mt-4 text-2xl md:text-3xl font-semibold text-slate-800 dark:text-slate-200"
        >
          {profile.role}
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.25 }}
          className="mx-auto mt-8 h-44 w-44 rounded-full ring-4 ring-primary/60 p-1 bg-slate-800/30 flex items-center justify-center overflow-hidden"
        >
          {/* Avatar: if /public/profile.jpg exists it will show; otherwise show initials */}
          <img
            src={profile.photo}
            alt={profile.name}
            className="h-full w-full object-cover rounded-full transition-transform duration-300"
            style={{ transform: `scale(${profile.photoScale ?? 1})` }}
            onError={(e) => {
              // hide image when not found; initials fallback will show
              ;(e.currentTarget as HTMLImageElement).style.display = 'none'
              const sib = (e.currentTarget.nextSibling as HTMLElement | null)
              if (sib) sib.style.display = 'flex'
            }}
          />
          <div style={{ display: 'none' }} className="h-full w-full rounded-full bg-gradient-to-br from-primary/20 to-accent/20 text-4xl font-bold text-slate-100 flex items-center justify-center">
            {initials}
          </div>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.35 }}
          className="mx-auto mt-8 max-w-4xl text-lg text-slate-700 dark:text-slate-300"
        >
          <Typewriter text={profile.bio} speed={26} />
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.45 }}
          className="mt-10 flex items-center justify-center gap-3"
        >
          <Link to="/projects" className="inline-flex items-center gap-2 rounded-md bg-primary px-5 py-3 text-white hover:opacity-90">
            {t('hero.cta')}
          </Link>
          <a href="/LegssyerMohammedAnasCv2025.pdf" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-md border border-slate-300 dark:border-slate-700 px-5 py-3 hover:border-primary/60 hover:text-primary">
            Télécharger CV
          </a>
        </motion.div>
      </div>
    </section>
  )
}
