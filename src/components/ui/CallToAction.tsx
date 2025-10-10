import { Link } from 'react-router-dom'

export default function CallToAction() {
  return (
    <section className="mx-auto max-w-[var(--container)] px-4 py-16 text-center">
      <p className="text-lg text-slate-300 mb-6">Prêt à rejoindre votre équipe pour un stage de fin d'études !</p>
      <div className="flex items-center justify-center gap-4">
        <Link to="/#contact" reloadDocument className="inline-flex items-center gap-2 rounded-md bg-primary px-5 py-3 text-white hover:opacity-90">
          Me contacter
        </Link>
        <a href="/LegssyerMohammedAnasCv2025.pdf" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-md border border-primary text-primary px-5 py-3 hover:bg-primary/5">
          Télécharger CV
        </a>
      </div>
    </section>
  )
}

