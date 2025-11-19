import { Sparkles, Handshake, Workflow, Lightbulb } from 'lucide-react'

const services = [
  {
    icon: Handshake,
    title: 'Discovery & Alignment',
    desc: 'We dig into your goals, customers, and constraints to pinpoint the problems worth solving.'
  },
  {
    icon: Lightbulb,
    title: 'Practical Solutions',
    desc: 'Clear plans in plain language. We choose simple, reliable approaches that fit your team and stack.'
  },
  {
    icon: Workflow,
    title: 'Implementation',
    desc: 'From integrations to automation, we build what’s needed—always with safety and maintainability in mind.'
  },
  {
    icon: Sparkles,
    title: 'Enablement & Handoff',
    desc: 'We document, train, and support so your team can run and improve the solution confidently.'
  }
]

export default function Services() {
  return (
    <section id="services" className="py-24 bg-slate-950/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <h2 className="text-3xl sm:text-4xl font-bold text-white">How we help</h2>
          <p className="mt-3 text-slate-300">We start with understanding, then apply focused expertise to deliver outcomes.</p>
        </div>

        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="rounded-2xl border border-white/10 bg-gradient-to-b from-slate-900 to-slate-900/60 p-6 hover:border-cyan-500/30 transition-colors">
              <div className="inline-flex items-center justify-center h-12 w-12 rounded-lg bg-cyan-500/15 text-cyan-300 border border-cyan-400/20">
                <Icon className="h-6 w-6" />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-white">{title}</h3>
              <p className="mt-2 text-slate-300 text-sm leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
