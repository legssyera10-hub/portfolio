import { useForm } from 'react-hook-form'
import toast, { Toaster } from 'react-hot-toast'
import { profile } from '../data/profile'
import { Github, Linkedin } from 'lucide-react'
import emailjs from '@emailjs/browser'
import Typewriter from '../components/animations/Typewriter'
import FuturisticBackground from '../components/backgrounds/FuturisticBackground'

type FormData = { name: string; email: string; subject: string; message: string }

function InfoCard({ icon, title, value }: { icon: React.ReactNode; title: string; value: string }) {
  return (
    <div className="flex items-center gap-4 rounded-xl border border-slate-700/60 bg-slate-900/40 p-4">
      <div className="h-10 w-10 rounded-lg bg-gradient-to-br from-primary/20 to-accent/20 ring-1 ring-primary/30 flex items-center justify-center text-primary">{icon}</div>
      <div>
        <p className="text-sm text-slate-500 dark:text-slate-400">{title}</p>
        <p className="font-medium text-slate-700 dark:text-slate-100">{value}</p>
      </div>
    </div>
  )
}

export default function ContactSection() {
  const { register, handleSubmit, formState: { errors, isSubmitting }, reset } = useForm<FormData>()

  const onSubmit = async (data: FormData) => {
    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID as string | undefined
    const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID as string | undefined
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY as string | undefined

    if (!serviceId || !templateId || !publicKey) {
      toast.error('Email non configuré. Ajoutez vos clés EmailJS dans .env.local')
      return
    }

    try {
      await emailjs.send(
        serviceId,
        templateId,
        {
          from_name: data.name,
          from_email: data.email,
          subject: data.subject,
          message: data.message,
          to_email: profile.email,
        },
        { publicKey }
      )
      toast.success('Message envoyé avec succès !')
      reset()
    } catch (err) {
      console.error('EmailJS error:', err)
      toast.error("Échec de l'envoi. Réessayez plus tard.")
    }
  }

  return (
    <section id="contact" className="relative overflow-hidden mx-auto max-w-[var(--container)] px-4 py-20">
      <FuturisticBackground />
      <Toaster />
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-5xl font-extrabold">Contactez-moi</h2>
        <div className="mt-3 text-slate-400">
          <Typewriter as="p" text="Discutons de votre prochain projet" speed={28} />
        </div>
      </div>

      <div className="grid gap-8 md:grid-cols-2">
        {/* Left: contact info */}
        <div className="space-y-4">
          <div className="card p-4"><InfoCard icon={<img src="/icons/mail-modern.svg" alt="" className="h-5 w-5" />} title="Email" value={profile.email} /></div>
          <div className="card p-4"><InfoCard icon={<img src="/icons/phone-modern.svg" alt="" className="h-5 w-5" />} title="Téléphone" value={profile.phone} /></div>
          <div className="card p-4"><InfoCard icon={<img src="/icons/location-modern.svg" alt="" className="h-5 w-5" />} title="Localisation" value={profile.location} /></div>

          <div className="rounded-xl p-5 bg-gradient-to-r from-primary to-accent text-white shadow-lg">
            <p className="font-semibold">Disponibilité</p>
            <p className="opacity-90">{profile.availability}</p>
          </div>

          <div className="pt-2">
            <p className="font-semibold mb-3">LinkedIn & Réseaux</p>
            <div className="flex items-center gap-3">
              <a className="h-10 w-10 rounded-lg border border-slate-700/60 bg-slate-900/40 flex items-center justify-center hover:text-primary" href={profile.social.github} target="_blank" rel="noreferrer" aria-label="GitHub">
                <Github size={18}/>
              </a>
              <a className="h-10 w-10 rounded-lg border border-slate-700/60 bg-slate-900/40 flex items-center justify-center hover:text-primary" href={profile.social.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn">
                <Linkedin size={18}/>
              </a>
              <a className="h-10 w-10 rounded-lg border border-slate-700/60 bg-slate-900/40 flex items-center justify-center hover:text-primary" href={`mailto:${profile.email}`} aria-label="Email">
                <img src="/icons/mail-modern.svg" alt="" className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>

        {/* Right: form */}
        <div className="card p-6">
          <form onSubmit={handleSubmit(onSubmit)} className="grid gap-4">
            <div>
              <label className="block text-sm mb-1">Nom *</label>
              <input {...register('name', { required: true })} className="w-full rounded-md border border-slate-700 bg-transparent px-3 py-2" placeholder="Votre nom complet" />
              {errors.name && <p className="text-sm text-red-500 mt-1">Nom requis</p>}
            </div>
            <div>
              <label className="block text-sm mb-1">Email *</label>
              <input type="email" {...register('email', { required: true })} className="w-full rounded-md border border-slate-700 bg-transparent px-3 py-2" placeholder="votre@email.com" />
              {errors.email && <p className="text-sm text-red-500 mt-1">Email requis</p>}
            </div>
            <div>
              <label className="block text-sm mb-1">Sujet *</label>
              <input {...register('subject', { required: true })} className="w-full rounded-md border border-slate-700 bg-transparent px-3 py-2" placeholder="Sujet de votre message" />
              {errors.subject && <p className="text-sm text-red-500 mt-1">Sujet requis</p>}
            </div>
            <div>
              <label className="block text-sm mb-1">Message *</label>
              <textarea rows={6} {...register('message', { required: true })} className="w-full rounded-md border border-slate-700 bg-transparent px-3 py-2" placeholder="Votre message..." />
              {errors.message && <p className="text-sm text-red-500 mt-1">Message requis</p>}
            </div>
            <div>
              <button disabled={isSubmitting} className="w-full inline-flex items-center justify-center gap-2 rounded-md bg-primary px-4 py-3 text-white hover:opacity-90 disabled:opacity-50">
                {isSubmitting ? 'Envoi...' : 'Envoyer le message'}
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  )
}
