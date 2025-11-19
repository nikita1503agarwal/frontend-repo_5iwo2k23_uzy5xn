import { useState } from 'react'

export default function Contact(){
  const [status, setStatus] = useState('idle')

  const handleSubmit = async (e) => {
    e.preventDefault()
    if(status === 'loading') return
    setStatus('loading')

    const form = new FormData(e.currentTarget)
    const payload = Object.fromEntries(form.entries())

    try {
      const res = await fetch(`${import.meta.env.VITE_BACKEND_URL || ''}/contact`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      })
      if(!res.ok) throw new Error('Request failed')
      setStatus('success')
      e.currentTarget.reset()
    } catch(err){
      setStatus('error')
    }
  }

  return (
    <section id="contact" className="py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <h2 className="text-3xl sm:text-4xl font-bold text-white">Tell us about your project</h2>
          <p className="mt-3 text-slate-300">Share a few details and we’ll reach out within one business day.</p>
        </div>

        <div className="mt-10 grid lg:grid-cols-3 gap-8">
          <form onSubmit={handleSubmit} className="lg:col-span-2 rounded-2xl border border-white/10 bg-slate-900/60 p-6">
            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm text-slate-300 mb-1">Name</label>
                <input name="name" required className="w-full rounded-md bg-slate-800 border border-white/10 px-3 py-2 text-white placeholder-slate-400" placeholder="Your name" />
              </div>
              <div>
                <label className="block text-sm text-slate-300 mb-1">Email</label>
                <input type="email" name="email" required className="w-full rounded-md bg-slate-800 border border-white/10 px-3 py-2 text-white placeholder-slate-400" placeholder="name@company.com" />
              </div>
            </div>
            <div className="mt-4">
              <label className="block text-sm text-slate-300 mb-1">Company</label>
              <input name="company" className="w-full rounded-md bg-slate-800 border border-white/10 px-3 py-2 text-white placeholder-slate-400" placeholder="Company name" />
            </div>
            <div className="mt-4">
              <label className="block text-sm text-slate-300 mb-1">What problem are you solving?</label>
              <textarea name="message" rows="5" required className="w-full rounded-md bg-slate-800 border border-white/10 px-3 py-2 text-white placeholder-slate-400" placeholder="Describe goals, constraints, and timeline" />
            </div>

            <div className="mt-6 flex items-center gap-4">
              <button type="submit" disabled={status==='loading'} className="inline-flex items-center justify-center px-6 py-3 rounded-md bg-gradient-to-r from-sky-400 to-lime-400 text-slate-900 font-semibold shadow disabled:opacity-60">
                {status === 'loading' ? 'Sending…' : 'Send message'}
              </button>
              {status === 'success' && <span className="text-green-400 text-sm">Thanks! We’ll be in touch shortly.</span>}
              {status === 'error' && <span className="text-red-400 text-sm">Something went wrong. Try again.</span>}
            </div>
          </form>

          <div className="rounded-2xl border border-white/10 bg-slate-900/60 p-6 text-slate-300">
            <h3 className="text-white font-semibold">Typical engagements</h3>
            <ul className="mt-3 space-y-2 text-sm">
              <li>• 2-12 week pilots</li>
              <li>• Team augmentation</li>
              <li>• Fixed-scope delivery</li>
              <li>• Training & enablement</li>
            </ul>
            <div className="mt-6">
              <div className="text-white font-semibold">Email</div>
              <a href="mailto:hello@cloudeagle.ai" className="text-sky-300">hello@cloudeagle.ai</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
