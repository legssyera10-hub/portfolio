import { education } from '../data/education'
import WordReveal from '../components/animations/WordReveal'
import Reveal from '../components/animations/Reveal'

export default function EducationSection() {
  return (
    <section id="education" className="mx-auto max-w-[var(--container)] px-4 py-20">
      <div className="text-center mb-12">
        <WordReveal text="Éducation" className="text-3xl md:text-5xl font-extrabold" />
      </div>

      <div className="grid gap-6">
        {education.map((e, i) => (
          <Reveal key={i}>
            <article className="card p-6">
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                <div>
                  <h3 className="text-xl font-semibold">{e.title}</h3>
                  <p className="text-primary font-medium">{e.school}</p>
                </div>
                <div className="text-sm text-slate-600 dark:text-slate-400 text-right md:text-right">
                  <p>{e.period}</p>
                  {e.location && <p>{e.location}</p>}
                </div>
              </div>
              {e.bullets && (
                <ul className="mt-3 list-disc ps-5 text-slate-700 dark:text-slate-300 space-y-1">
                  {e.bullets.map((b, j) => (
                    <li key={j}>{b}</li>
                  ))}
                </ul>
              )}
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  )
}
