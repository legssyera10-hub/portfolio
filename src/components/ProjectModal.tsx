import React, { useEffect, useMemo, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { Project } from '../data/projects'
import { Lang, pickLocalized } from '../utils/locale'

const iconMap: Record<string, string> = {
  python: '/icons/python.svg',
  react: '/icons/react.svg',
  fastapi: '/icons/fastapi.svg',
  mongodb: '/icons/mongo.svg',
  mongo: '/icons/mongo.svg',
  tailwind: '/icons/html5.svg',
  pandas: '/icons/pandas.svg',
  numpy: '/icons/numpy.svg',
  java: '/icons/java.svg',
  javascript: '/icons/js.svg',
  typescript: '/icons/js.svg',
  php: '/icons/php.svg',
  wordpress: '/icons/php.svg',
  docker: '/icons/docker.svg',
  csharp: '/icons/csharp.svg',
  oracle: '/icons/oracle.svg',
  postgres: '/icons/postgres.svg',
  postgresql: '/icons/postgres.svg',
  pytorch: '/icons/pytorch.svg',
  tensorflow: '/icons/tensorflow.svg',
  scikitlearn: '/icons/python.svg',
}

function techIcon(name: string) {
  const key = name.toLowerCase().replace(/[^a-z0-9]+/g, '')
  return iconMap[key]
}

export default function ProjectModal({ project, open, onClose, lang }: { project: Project; open: boolean; onClose: () => void; lang: Lang }) {
  const { t } = useTranslation()
  const images = useMemo(() => {
    const list = project.screenshots && project.screenshots.length > 0 ? project.screenshots : (project.image ? [project.image] : [])
    return list
  }, [project])

  const [idx, setIdx] = useState(0)

  useEffect(() => {
    if (!open) return
    setIdx(0)
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
      if (e.key === 'ArrowRight') setIdx((i) => (i + 1) % Math.max(images.length, 1))
      if (e.key === 'ArrowLeft') setIdx((i) => (i - 1 + Math.max(images.length, 1)) % Math.max(images.length, 1))
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [open, images.length, onClose])

  if (!open) return null

  const title = pickLocalized(project.title, lang)
  const description = pickLocalized(project.longDescription || project.description, lang)
  const codeLabel = t('projects.buttons.code')
  const demoLabel = t('projects.buttons.demo')

  return (
    <div className="fixed inset-0 z-50">
      <div className="absolute inset-0 bg-black/60" onClick={onClose} />
      <div className="absolute inset-0 flex items-start justify-center overflow-auto p-2 md:p-6" onClick={onClose}>
        <div className="w-full max-w-6xl rounded-xl bg-slate-900 text-slate-100 shadow-2xl" onClick={(e) => e.stopPropagation()}>
          <div className="flex items-center justify-between border-b border-slate-700 px-6 py-4">
            <h2 className="text-2xl font-bold">{title}</h2>
            <button aria-label={t('projectModal.close')} className="rounded-md px-2 py-1 hover:bg-slate-800" onClick={onClose}>
              x
            </button>
          </div>
          {images.length > 0 && (
            <div className="px-6 pt-5">
              <div className="relative overflow-hidden rounded-lg bg-slate-800">
                <img src={images[idx]} alt={title} className="w-full max-h-[520px] object-cover" onError={(e)=>{(e.currentTarget as HTMLImageElement).style.display='none'}} />
                {images.length > 1 && (
                  <>
                    <button aria-label={t('projectModal.prev')} className="absolute left-3 top-1/2 -translate-y-1/2 h-10 w-10 rounded-full bg-black/40 hover:bg-black/60 flex items-center justify-center" onClick={() => setIdx((i)=> (i-1+images.length)%images.length)}>{'<'}</button>
                    <button aria-label={t('projectModal.next')} className="absolute right-3 top-1/2 -translate-y-1/2 h-10 w-10 rounded-full bg-black/40 hover:bg-black/60 flex items-center justify-center" onClick={() => setIdx((i)=> (i+1)%images.length)}>{'>'}</button>
                  </>
                )}
              </div>
              {images.length > 1 && (
                <div className="mt-3 flex gap-2 overflow-x-auto py-1">
                  {images.map((src, i) => (
                    <button key={src+String(i)} className={`h-16 w-24 rounded-md overflow-hidden border ${i===idx? 'border-primary':'border-slate-700'}`} onClick={()=>setIdx(i)}>
                      <img src={src} alt="miniature" className="h-full w-full object-cover" />
                    </button>
                  ))}
                </div>
              )}
            </div>
          )}

          <div className="px-6 py-5">
            <h3 className="text-xl font-semibold mb-2">{t('projectModal.description')}</h3>
            <p className="text-slate-300 leading-relaxed">
              {description}
            </p>

            {project.tech?.length ? (
              <>
                <h3 className="text-xl font-semibold mt-6 mb-3">{t('projectModal.tech')}</h3>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tname) => {
                    const icon = techIcon(tname)
                    return (
                      <span key={tname} className="inline-flex items-center gap-2 text-xs rounded-full border border-slate-700 px-3 py-1.5">
                        {icon ? <img src={icon} alt="" className="h-4 w-4" /> : null}
                        <span>{tname}</span>
                      </span>
                    )
                  })}
                </div>
              </>
            ) : null}

            {(project.github || project.demo) && (
              <div className="mt-6 flex items-center gap-3">
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 rounded-md border border-slate-700/60 bg-slate-800 px-4 py-2 text-sm hover:border-primary/60 hover:text-primary"
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
                    className="inline-flex items-center gap-2 rounded-md border border-slate-700/60 bg-slate-800 px-4 py-2 text-sm hover:border-primary/60 hover:text-primary"
                  >
                    <span>{demoLabel}</span>
                  </a>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
