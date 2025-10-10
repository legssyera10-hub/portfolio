import { useEffect, useState } from 'react'
import { Moon, Sun } from 'lucide-react'

export default function ThemeToggle() {
  const [dark, setDark] = useState(false)

  useEffect(() => {
    const stored = localStorage.getItem('theme')
    setDark(stored ? stored === 'dark' : document.documentElement.classList.contains('dark'))
  }, [])

  const toggle = () => {
    const next = !dark
    setDark(next)
    document.documentElement.classList.toggle('dark', next)
    localStorage.setItem('theme', next ? 'dark' : 'light')
  }

  return (
    <button
      aria-label="Basculer le thème"
      onClick={toggle}
      className="inline-flex items-center gap-2 rounded-md border border-slate-300 dark:border-slate-700 px-3 py-1.5 text-sm hover:border-primary/60 hover:text-primary"
    >
      {dark ? <Sun size={16} /> : <Moon size={16} />}
      <span className="hidden sm:inline">{dark ? 'Clair' : 'Sombre'}</span>
    </button>
  )
}

