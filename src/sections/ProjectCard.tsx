import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import ProjectModal from '../components/ProjectModal'
import Typewriter from '../components/animations/Typewriter'
import { Project } from '../data/projects'
import { Lang, pickLocalized } from '../utils/locale'

type Props = {
  project: Project
  lang: Lang
}

export default function ProjectCard({ project, lang }: Props) {
  const { t } = useTranslation()
  const [open, setOpen] = useState(false)
  const title = pickLocalized(project.title, lang)
  const description = pickLocalized(project.description, lang)
  const categoryLabel = t(`projects.categoryLabels.${project.category}`)
  const codeLabel = t('projects.buttons.code')
  const demoLabel = t('projects.buttons.demo')

  return (
    <article className="card overflow-hidden hover:border-primary/60 transition-colors cursor-pointer" onClick={() => setOpen(true)}>
      <div className="h-44 w-full bg-slate-800/40">
        {project.image ? (
          <img src={project.image} alt={title} className="h-full w-full object-cover" onError={(e)=>{(e.currentTarget as HTMLImageElement).style.display='none'}} />
        ) : null}
      </div>
      <div className="p-5">
        <div className="flex items-center justify-between gap-3">
          <h3 className="text-lg font-semibold">{title}</h3>
          {project.category && <span className="text-xs rounded-md bg-primary/20 text-primary px-2 py-1 whitespace-nowrap">{categoryLabel}</span>}
        </div>
        <Typewriter as="p" className="mt-2 text-slate-600 dark:text-slate-300" text={description} speed={22} />
      </div>
      <div className="px-5 mt-1 flex flex-wrap gap-2">
        {project.tech.map((t) => (
          <span key={t} className="text-xs rounded-full border border-slate-700 px-2 py-1">{t}</span>
        ))}
      </div>
      {(project.github || project.demo) && (
        <div className="px-5 pb-5 pt-4 flex items-center gap-3">
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-md border border-slate-700/60 bg-slate-900/40 px-3 py-2 text-sm hover:border-primary/60 hover:text-primary"
              onClick={(e) => { e.stopPropagation() }}
              aria-label={`${codeLabel}: ${title}`}
            >
              <img src="/icons/github.svg" alt="GitHub" className="h-4 w-4" />
              <span>{codeLabel}</span>
            </a>
          )}
          {project.demo && (
            <a
              href={project.demo}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-md border border-slate-700/60 bg-slate-900/40 px-3 py-2 text-sm hover:border-primary/60 hover:text-primary"
              onClick={(e) => { e.stopPropagation() }}
              aria-label={`${demoLabel}: ${title}`}
            >
              <span>{demoLabel}</span>
            </a>
          )}
        </div>
      )}
      <ProjectModal project={project} open={open} onClose={() => setOpen(false)} lang={lang} />
    </article>
  )
}
