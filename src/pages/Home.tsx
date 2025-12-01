import { useTranslation } from 'react-i18next'
import Hero from '../sections/Hero'
import AboutSection from '../sections/AboutSection'
import SkillsSection from '../sections/SkillsSection'
import ProjectsSection from '../sections/ProjectsSection'
import ExperienceSection from '../sections/ExperienceSection'
import ContactSection from '../sections/ContactSection'
import CallToAction from '../components/ui/CallToAction'
import EducationSection from '../sections/EducationSection'

export default function Home() {
  const { t } = useTranslation()
  return (
    <div>
      <Hero />
      <AboutSection />
      <SkillsSection />
      <ProjectsSection />
      {/* CTA juste apres les projets */}
      <section className="mx-auto max-w-[var(--container)] px-4 py-12 text-center">
        <p className="text-lg text-slate-300 mb-4">{t('cta.primary')}</p>
        <a href="/#contact" className="inline-flex items-center gap-2 rounded-md bg-primary px-5 py-3 text-white hover:opacity-90">{t('cta.buttonContact')}</a>
      </section>
      <ExperienceSection />
      <EducationSection />
      <ContactSection />
      <CallToAction />
    </div>
  )
}
