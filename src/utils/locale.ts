export type Lang = 'fr' | 'en'

export type Localized<T = string> = {
  fr: T
  en: T
}

export function resolveLang(input?: string | null): Lang {
  if (!input) return 'fr'
  return input.startsWith('en') ? 'en' : 'fr'
}

export function pickLocalized<T>(value: T | Localized<T>, lang: Lang): T {
  if (typeof value === 'object' && value !== null && 'fr' in (value as any) && 'en' in (value as any)) {
    const obj = value as Localized<T>
    return (obj as any)[lang] ?? obj.fr
  }
  return value as T
}
