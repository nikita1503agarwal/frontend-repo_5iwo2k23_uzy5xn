import { Sparkles, Cpu, Workflow, LineChart } from 'lucide-react'

const services = [
  {
    icon: Sparkles,
    title: 'AI Strategy & Roadmapping',
    desc: 'Align AI initiatives with business goals. We define pragmatic, high-ROI bets and the systems to deliver them.'
  },
  {
    icon: Cpu,
    title: 'Custom Models & Integrations',
    desc: 'Fine-tuned LLMs, vector search, RAG, and integrations with your stack to automate real workflows.'
  },
  {
    icon: Workflow,
    title: 'Automation & Agents',
    desc: 'Design resilient agents and pipelines that safely execute tasks end-to-end with human-in-the-loop controls.'
  },
  {
    icon: LineChart,
    title: 'Analytics & Enablement',
    desc: 'Dashboards, evaluation harnesses, and training so your teams can operate and improve AI systems.'
  }
]

export default function Services() {
  return (
    <section id="services" className="py-24 bg-slate-950/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <h2 className="text-3xl sm:text-4xl font-bold text-white">What we do</h2>
          <p className="mt-3 text-slate-300">Focused, senior expertise to move from idea to impact.</p>
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
