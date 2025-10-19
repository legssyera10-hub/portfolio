import { Link, NavLink } from 'react-router-dom'
import ThemeToggle from '../ui/ThemeToggle'
import LanguageToggle from '../ui/LanguageToggle'
import { profile, initialsFromName } from '../../data/profile'
import { useTranslation } from 'react-i18next'

export default function Header() {
  const { t } = useTranslation()
  const nav = [
    { to: '/', key: 'home' },
    { to: '/#about', key: 'about' },
    { to: '/#skills', key: 'skills' },
    { to: '/#projects', key: 'projects' },
    { to: '/#experience', key: 'experience' },
    { to: '/#education', key: 'education' },
    { to: '/#contact', key: 'contact' },
  ]

  return (
    <header className="sticky top-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-white/60 dark:supports-[backdrop-filter]:bg-slate-950/60 border-b border-slate-200 dark:border-slate-800">
      <div className="mx-auto max-w-[var(--container)] px-4 py-3 flex items-center gap-4">
        <Link to="/" className="flex items-center gap-2">
          <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-r from-primary to-accent text-white font-bold">
            {initialsFromName(profile.name)}
          </span>
          <span className="font-semibold tracking-tight hidden sm:inline">{profile.name}</span>
        </Link>
        <nav className="flex-1 hidden sm:flex items-center gap-6">
          {nav.map((n) => (
            <NavLink
              key={n.to}
              to={n.to}
              className={({ isActive }) => `text-sm transition-colors hover:text-primary ${isActive ? 'text-primary' : 'text-slate-600 dark:text-slate-300'}`}
              reloadDocument={n.to.includes('#')}
            >
              {t(`nav.${n.key}`)}
            </NavLink>
          ))}
        </nav>
        <div className="ml-auto flex items-center gap-2">
          <LanguageToggle />
          <ThemeToggle />
        </div>
      </div>
    </header>
  )
}

