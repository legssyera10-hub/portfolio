# Démarrage du projet (Vite + React + TS + Tailwind)

Ce dépôt contient le squelette initial de votre portfolio tel que décrit dans `README.md`.

## Prérequis
- Node.js 18+
- npm 9+

## Installation

Exécutez ces étapes en local :

```bash
npm install
npm run dev
```

Ensuite ouvrez l’URL indiquée (par défaut http://localhost:5173).

## Dossiers clés
- `src/pages` : Pages principales (Home, About, Projects, Contact)
- `src/components` : Layout (Header, Footer) et UI (Theme/Language toggle)
- `src/sections` : Sections réutilisables (Hero, ProjectCard, etc.)
- `src/i18n` : Internationalisation (FR/EN)
- `src/data/profile.ts` : Vos informations (nom, rôle, bio, photo)

## CV (PDF)
Le fichier `LegssyerMohammedAnasCv2025.pdf` est à la racine. Pour Vite, placez les assets statiques dans `public/`.

Actions suggérées :
- Créez un dossier `public/` et déplacez-y le CV en `public/cv-fr.pdf` (et `public/cv-en.pdf` si version EN).
- Mettez à jour le lien du CV dans `src/components/layout/Footer.tsx`.

## Intégrations
- EmailJS : configuré dans `src/sections/ContactSection.tsx`. Ajoutez un fichier `.env.local` à la racine avec:

```
VITE_EMAILJS_SERVICE_ID=xxx
VITE_EMAILJS_TEMPLATE_ID=xxx
VITE_EMAILJS_PUBLIC_KEY=xxx
```

Créez un service + template sur https://www.emailjs.com/ et placez votre email de réception dans le template (ou utilisez le champ `to_email` passé par le code).
- Animations Lottie, autres sections (Skills, Timeline Expérience, Education)
- SEO (React Helmet Async), PWA (vite-plugin-pwa)
- Données projets dynamiques (JSON/Markdown)

## Scripts
- `npm run dev` : serveur de dev
- `npm run build` : build de production
- `npm run preview` : prévisualisation local du build

