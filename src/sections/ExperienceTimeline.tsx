import { experiences } from '../data/experience'

export default function ExperienceTimeline() {
  return (
    <ol className="relative border-s border-slate-200 dark:border-slate-800">
      {experiences.map((exp, idx) => (
        <li key={idx} className="ms-6 mb-8">
          <span className="absolute -start-1.5 mt-1.5 h-3 w-3 rounded-full bg-primary" />
          <h3 className="text-lg font-semibold">
            {exp.role} • <span className="text-primary">{exp.company}</span>
          </h3>
          <p className="text-sm text-slate-500 dark:text-slate-400">{exp.period}</p>
          {exp.tech && (
            <div className="mt-2 flex flex-wrap gap-2">
              {exp.tech.map((t) => (
                <span key={t} className="text-xs rounded-full border border-slate-300 dark:border-slate-700 px-2 py-1">{t}</span>
              ))}
            </div>
          )}
          <ul className="mt-3 list-disc ps-5 text-slate-700 dark:text-slate-300">
            {exp.bullets.map((b, i) => (
              <li key={i}>{b}</li>
            ))}
          </ul>
        </li>
      ))}
    </ol>
  )
}

