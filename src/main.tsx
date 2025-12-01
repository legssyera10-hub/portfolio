import { StrictMode, useEffect } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App'
import './i18n/i18n'
import './index.css'

function ThemeBootstrap() {
  // Ensure theme is applied before paint
  useEffect(() => {
    const stored = localStorage.getItem('theme')
    const shouldDark = stored ? stored === 'dark' : true // default to dark when no preference stored
    if (!stored) localStorage.setItem('theme', shouldDark ? 'dark' : 'light')
    document.documentElement.classList.toggle('dark', shouldDark)
  }, [])
  return null
}

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ThemeBootstrap />
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>
)
