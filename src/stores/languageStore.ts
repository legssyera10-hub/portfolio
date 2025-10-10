import { create } from 'zustand'

type LanguageState = {
  lang: 'fr' | 'en'
  setLang: (l: 'fr' | 'en') => void
}

export const useLanguageStore = create<LanguageState>((set) => ({
  lang: 'fr',
  setLang: (l) => set({ lang: l })
}))

