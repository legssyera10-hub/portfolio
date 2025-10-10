type Props = {
  title: string
  description: string
  tech: string[]
  category?: string
  image?: string
}

export default function ProjectCard({ title, description, tech, category, image }: Props) {
  return (
    <article className="card overflow-hidden hover:border-primary/60 transition-colors">
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
        <p className="mt-2 text-slate-600 dark:text-slate-300">{description}</p>
      </div>
      <div className="px-5 pb-5 mt-1 flex flex-wrap gap-2">
        {tech.map((t) => (
          <span key={t} className="text-xs rounded-full border border-slate-700 px-2 py-1">{t}</span>
        ))}
      </div>
    </article>
  )
}
