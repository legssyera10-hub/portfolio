import { create } from 'zustand'

type ThemeState = {
  dark: boolean
  setDark: (d: boolean) => void
}

export const useThemeStore = create<ThemeState>((set) => ({
  dark: false,
  setDark: (d) => set({ dark: d })
}))

