import ProjectCard from '../sections/ProjectCard'
import { projects } from '../data/projects'

export default function Projects() {
  return (
    <section className="mx-auto max-w-[var(--container)] px-4 py-16">
      <h1 className="text-3xl font-bold mb-6">Projets</h1>
      <div className="grid gap-6 sm:grid-cols-2">
        {projects.map((p) => (
          <ProjectCard key={p.title} {...p} />
        ))}
      </div>
      <div className="mt-10">
        <hr className="border-slate-800" />
      </div>
      <div className="pt-4 text-center">
        <p className="text-lg text-slate-300 mb-6">Prêt à rejoindre votre équipe pour un stage de fin d'études !</p>
        <a href="/#contact" className="inline-flex items-center gap-2 rounded-md bg-primary px-5 py-3 text-white hover:opacity-90">Me contacter</a>
        <a href="/LegssyerMohammedAnasCv2025.pdf" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-md border border-primary text-primary px-5 py-3 hover:bg-primary/5 ml-4">Télécharger CV</a>
      </div>
    </section>
  )
}
