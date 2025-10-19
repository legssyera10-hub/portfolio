﻿import Hero from '../sections/Hero'
import AboutSection from '../sections/AboutSection'
import SkillsSection from '../sections/SkillsSection'
import ProjectsSection from '../sections/ProjectsSection'
import ExperienceSection from '../sections/ExperienceSection'
import ContactSection from '../sections/ContactSection'
import CallToAction from '../components/ui/CallToAction'
import EducationSection from '../sections/EducationSection'

export default function Home() {
  return (
    <div>
      <Hero />
      <AboutSection />
      <SkillsSection />
      <ProjectsSection />
      {/* CTA juste aprÃ¨s les projets */}
      <section className="mx-auto max-w-[var(--container)] px-4 py-12 text-center">
        <p className="text-lg text-slate-300 mb-4">IntÃ©ressÃ© par mon travail ? Discutons de votre prochain projet !</p>
        <a href="/#contact" className="inline-flex items-center gap-2 rounded-md bg-primary px-5 py-3 text-white hover:opacity-90">Me contacter</a>
      </section>
      <ExperienceSection />
      <EducationSection />
      <ContactSection />
      <CallToAction />
    </div>
  )
}

