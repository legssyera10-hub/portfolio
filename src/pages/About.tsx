export default function About() {
  return (
    <section className="mx-auto max-w-[var(--container)] px-4 py-16">
      <h1 className="text-3xl font-bold mb-6">À propos</h1>
      <div className="prose dark:prose-invert max-w-none">
        <p>
          Je suis Legssyer Mohammed Anas, futur ingénieur en Big Data & IA. J'aime créer des expériences et des solutions numériques
          modernes, performantes et accessibles. Ce site présente une sélection de mes projets, mon parcours et mes compétences.
        </p>
      </div>
      <div className="mt-10">
        <hr className="border-slate-800" />
      </div>
      <div className="pt-4">
        {/* CTA */}
        <div className="mx-auto max-w-3xl">
          <div className="text-center">
            <p className="text-lg text-slate-300 mb-6">Prêt à rejoindre votre équipe pour un stage de fin d'études !</p>
            <div className="flex items-center justify-center gap-4">
              <a href="/#contact" className="inline-flex items-center gap-2 rounded-md bg-primary px-5 py-3 text-white hover:opacity-90" rel="noreferrer">Me contacter</a>
              <a href="/LegssyerMohammedAnasCv2025.pdf" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-md border border-primary text-primary px-5 py-3 hover:bg-primary/5">Télécharger CV</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
