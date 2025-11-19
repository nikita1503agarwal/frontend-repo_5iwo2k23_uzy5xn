import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Services from './components/Services'
import Benefits from './components/Benefits'
import Process from './components/Process'
import Contact from './components/Contact'

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-950 to-slate-900 text-slate-100">
      {/* Background accents */}
      <div className="pointer-events-none fixed inset-0 -z-10 bg-[radial-gradient(1200px_600px_at_10%_-10%,rgba(34,211,238,0.08),transparent),radial-gradient(800px_400px_at_110%_10%,rgba(59,130,246,0.06),transparent)]" />

      <Navbar />

      <main className="pt-16">
        <Hero />
        <Services />
        <Benefits />
        <Process />
        <Contact />
      </main>

      <footer className="border-t border-white/10 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-slate-400">
          <div>© {new Date().getFullYear()} CloudEagle Consultants. All rights reserved.</div>
          <div className="flex items-center gap-4">
            <a href="#services" className="hover:text-slate-200">Services</a>
            <a href="#process" className="hover:text-slate-200">Process</a>
            <a href="#contact" className="hover:text-slate-200">Contact</a>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
