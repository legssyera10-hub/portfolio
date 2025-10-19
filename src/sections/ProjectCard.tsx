type Props = {
  title: string
  description: string
  tech: string[]
  category?: string
  image?: string
  github?: string
  demo?: string
  longDescription?: string
  screenshots?: string[]
}

import ProjectModal from '../components/ProjectModal'
import Typewriter from '../components/animations/Typewriter'
import { useState } from 'react'

export default function ProjectCard({ title, description, tech, category, image, github, demo, longDescription, screenshots }: Props) {
  const [open, setOpen] = useState(false)
  const project = { title, description, tech, image, github, demo, longDescription, screenshots }
  return (
    <article className="card overflow-hidden hover:border-primary/60 transition-colors cursor-pointer" onClick={() => setOpen(true)}>
      <div className="h-44 w-full bg-slate-800/40">
        {image ? (
          <img src={image} alt={title} className="h-full w-full object-cover" onError={(e)=>{(e.currentTarget as HTMLImageElement).style.display='none'}} />
        ) : null}
      </div>
      <div className="p-5">
        <div className="flex items-center justify-between gap-3">
          <h3 className="text-lg font-semibold">{title}</h3>
          {category && <span className="text-xs rounded-md bg-primary/20 text-primary px-2 py-1 whitespace-nowrap">{category}</span>}
        </div>
        <Typewriter as="p" className="mt-2 text-slate-600 dark:text-slate-300" text={description} speed={22} />
      </div>
      <div className="px-5 mt-1 flex flex-wrap gap-2">
        {tech.map((t) => (
          <span key={t} className="text-xs rounded-full border border-slate-700 px-2 py-1">{t}</span>
        ))}
      </div>
      {(github || demo) && (
        <div className="px-5 pb-5 pt-4 flex items-center gap-3">
          {github && (
            <a
              href={github}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-md border border-slate-700/60 bg-slate-900/40 px-3 py-2 text-sm hover:border-primary/60 hover:text-primary"
              onClick={(e) => { e.stopPropagation() }}
              aria-label={`Code source: ${title}`}
            >
              <img src="/icons/github.svg" alt="GitHub" className="h-4 w-4" />
              <span>Code</span>
            </a>
          )}
          {demo && (
            <a
              href={demo}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-md border border-slate-700/60 bg-slate-900/40 px-3 py-2 text-sm hover:border-primary/60 hover:text-primary"
              onClick={(e) => { e.stopPropagation() }}
              aria-label={`Démo: ${title}`}
            >
              <span>Démo</span>
            </a>
          )}
        </div>
      )}
      <ProjectModal project={project as any} open={open} onClose={() => setOpen(false)} />
    </article>
  )
}
