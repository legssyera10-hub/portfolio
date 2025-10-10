import { useForm } from 'react-hook-form'
import toast, { Toaster } from 'react-hot-toast'

type FormData = { name: string; email: string; subject: string; message: string }

export default function Contact() {
  const { register, handleSubmit, formState: { errors, isSubmitting }, reset } = useForm<FormData>()

  const onSubmit = async (data: FormData) => {
    // Placeholder: integrate EmailJS later
    await new Promise(r => setTimeout(r, 800))
    toast.success('Message envoyé (démo). Intégration EmailJS à configurer.')
    reset()
  }

  return (
    <section className="mx-auto max-w-[var(--container)] px-4 py-16">
      <Toaster />
      <h1 className="text-3xl font-bold mb-6">Contact</h1>
      <form onSubmit={handleSubmit(onSubmit)} className="grid gap-4 max-w-2xl">
        <div>
          <label className="block text-sm mb-1">Nom</label>
          <input {...register('name', { required: true })} className="w-full rounded-md border border-slate-300 dark:border-slate-700 bg-transparent px-3 py-2" />
          {errors.name && <p className="text-sm text-red-500 mt-1">Nom requis</p>}
        </div>
        <div>
          <label className="block text-sm mb-1">Email</label>
          <input type="email" {...register('email', { required: true })} className="w-full rounded-md border border-slate-300 dark:border-slate-700 bg-transparent px-3 py-2" />
          {errors.email && <p className="text-sm text-red-500 mt-1">Email requis</p>}
        </div>
        <div>
          <label className="block text-sm mb-1">Sujet</label>
          <input {...register('subject', { required: true })} className="w-full rounded-md border border-slate-300 dark:border-slate-700 bg-transparent px-3 py-2" />
          {errors.subject && <p className="text-sm text-red-500 mt-1">Sujet requis</p>}
        </div>
        <div>
          <label className="block text-sm mb-1">Message</label>
          <textarea rows={6} {...register('message', { required: true })} className="w-full rounded-md border border-slate-300 dark:border-slate-700 bg-transparent px-3 py-2" />
          {errors.message && <p className="text-sm text-red-500 mt-1">Message requis</p>}
        </div>
        <div>
          <button disabled={isSubmitting} className="inline-flex items-center gap-2 rounded-md bg-primary px-4 py-2 text-white hover:opacity-90 disabled:opacity-50">
            {isSubmitting ? 'Envoi...' : 'Envoyer'}
          </button>
        </div>
      </form>
      <div className="mt-10">
        <hr className="border-slate-800" />
      </div>
      <div className="pt-4 text-center">
        <p className="text-lg text-slate-300 mb-6">Prêt à rejoindre votre équipe pour un stage de fin d'études !</p>
        <a href="/#contact" className="inline-flex items-center gap-2 rounded-md bg-primary px-5 py-3 text-white hover:opacity-90">Me contacter</a>
        <a href="/LegssyerMohammedAnasCv2025.pdf" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-md border border-primary text-primary px-5 py-3 hover:bg-primary/5 ml-4">Télécharger CV</a>
      </div>
    </section>
  )
}
