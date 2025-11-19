const items = [
  {
    title: 'Senior-only team',
    desc: 'Hands-on experts with battle-tested patterns. No learning on your dime.'
  },
  {
    title: 'Fast time-to-value',
    desc: 'Tight feedback loops and weekly deliverables so value lands early and often.'
  },
  {
    title: 'Production-minded',
    desc: 'Reliability, observability, and safety are baked in from day one.'
  },
  {
    title: 'Transparent pricing',
    desc: 'Clear scopes, flexible engagement models, and no surprises.'
  }
]

export default function Benefits(){
  return (
    <section id="benefits" className="py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <h2 className="text-3xl sm:text-4xl font-bold text-white">Why CloudEagle</h2>
          <p className="mt-3 text-slate-300">We focus on tangible business outcomes and operational excellence.</p>
        </div>

        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {items.map(({title, desc}) => (
            <div key={title} className="rounded-2xl border border-white/10 bg-slate-900/60 p-6">
              <h3 className="text-lg font-semibold text-white">{title}</h3>
              <p className="mt-2 text-slate-300 text-sm leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
