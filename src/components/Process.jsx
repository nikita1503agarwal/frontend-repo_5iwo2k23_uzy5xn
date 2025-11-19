const steps = [
  {
    step: '01',
    title: 'Listen',
    desc: 'We learn your context: goals, customers, workflows, and what’s getting in the way.'
  },
  {
    step: '02',
    title: 'Plan',
    desc: 'We outline a simple, outcome-focused approach with clear measures of success.'
  },
  {
    step: '03',
    title: 'Build',
    desc: 'We implement the essentials—right-sized, reliable, and easy to operate.'
  },
  {
    step: '04',
    title: 'Support',
    desc: 'Handoff, training, and iteration so your team is confident and the value grows.'
  }
]

export default function Process(){
  return (
    <section id="process" className="py-24 bg-slate-950/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <h2 className="text-3xl sm:text-4xl font-bold text-white">How we work</h2>
          <p className="mt-3 text-slate-300">Understand first. Then deliver in small, valuable steps.</p>
        </div>

        <ol className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map(({step, title, desc}) => (
            <li key={step} className="relative rounded-2xl border border-white/10 bg-gradient-to-b from-slate-900 to-slate-900/60 p-6">
              <div className="absolute -top-4 -left-4 h-10 w-10 rounded-xl bg-cyan-500/20 blur-xl" />
              <span className="text-cyan-300 font-mono text-sm">{step}</span>
              <h3 className="mt-2 text-lg font-semibold text-white">{title}</h3>
              <p className="mt-2 text-slate-300 text-sm leading-relaxed">{desc}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
