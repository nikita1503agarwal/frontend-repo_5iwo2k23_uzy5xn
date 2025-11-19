const items = [
  {
    title: 'We speak business first',
    desc: 'We translate goals into simple plans and keep the focus on outcomes, not jargon.'
  },
  {
    title: 'Right-sized delivery',
    desc: 'Lean, iterative work that fits your timeline and resources.'
  },
  {
    title: 'Built to last',
    desc: 'Reliable, maintainable solutions your team can operate with confidence.'
  },
  {
    title: 'Clear and transparent',
    desc: 'Straightforward communication, pricing, and progress—no surprises.'
  }
]

export default function Benefits(){
  return (
    <section id="benefits" className="py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <h2 className="text-3xl sm:text-4xl font-bold text-white">Why teams choose us</h2>
          <p className="mt-3 text-slate-300">We listen, align on outcomes, and deliver value step by step.</p>
        </div>

        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {items.map(({title, desc}) => (
            <div key={title} className="rounded-2xl border border-white/10 bg-slate-900/60 p-6">
              <h3 className="text-lg font-semibold text-white">{title}</h3>
              <p className="mt-2 text-slate-300 text-sm leading-relaxed">{desc}</p>
              <div className="mt-4 h-1.5 w-16 rounded-full bg-gradient-to-r from-sky-400 to-lime-400" />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
