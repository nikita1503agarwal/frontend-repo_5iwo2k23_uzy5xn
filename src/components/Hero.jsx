export default function Hero() {
  return (
    <section id="home" className="relative overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <div className="absolute -top-1/2 left-1/2 -translate-x-1/2 h-[900px] w-[900px] rounded-full bg-cyan-500/10 blur-3xl" />
        <div className="absolute top-1/3 -left-40 h-80 w-80 rounded-full bg-blue-500/10 blur-2xl" />
        <div className="absolute bottom-10 -right-20 h-72 w-72 rounded-full bg-indigo-500/10 blur-2xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 pb-24">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-slate-800 text-cyan-300 border border-cyan-400/20">
              AI Agency for SMBs
            </span>
            <h1 className="mt-6 text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white">
              Technical muscle to power your AI roadmap
            </h1>
            <p className="mt-6 text-lg text-slate-300 leading-relaxed">
              CloudEagle Consultants builds pragmatic, production-grade AI solutions for small and mid-sized businesses. We plug in as your senior AI engineering team and ship results fast.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              <a href="#contact" className="inline-flex items-center justify-center px-6 py-3 rounded-md bg-gradient-to-r from-cyan-400 to-blue-500 text-slate-900 font-semibold shadow hover:opacity-90 transition">
                Book a strategy call
              </a>
              <a href="#services" className="inline-flex items-center justify-center px-6 py-3 rounded-md bg-slate-800 text-slate-100 border border-white/10 hover:bg-slate-700 transition">
                Explore services
              </a>
            </div>
            <div className="mt-8 flex items-center gap-6 text-slate-400 text-sm">
              <div>Fast iteration</div>
              <div className="w-1 h-1 rounded-full bg-slate-500" />
              <div>Production focus</div>
              <div className="w-1 h-1 rounded-full bg-slate-500" />
              <div>Clear ROI</div>
            </div>
          </div>

          <div className="relative">
            <div className="aspect-[4/3] rounded-2xl bg-gradient-to-br from-slate-800 to-slate-900 border border-white/10 p-6">
              <div className="grid grid-cols-3 gap-3 h-full">
                {[...Array(9)].map((_, i) => (
                  <div key={i} className="rounded-lg bg-slate-700/50 border border-white/5" />
                ))}
              </div>
            </div>
            <div className="absolute -bottom-4 -left-4 h-24 w-24 rounded-xl bg-cyan-500/20 blur-xl" />
            <div className="absolute -top-4 -right-6 h-24 w-24 rounded-xl bg-blue-500/20 blur-xl" />
          </div>
        </div>
      </div>
    </section>
  )
}
