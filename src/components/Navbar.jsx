import { useState } from 'react'
import { Menu, X } from 'lucide-react'

function NavLink({ href, children, onClick }) {
  return (
    <a href={href} onClick={onClick} className="text-slate-200 hover:text-white transition-colors px-3 py-2 rounded-md">
      {children}
    </a>
  )
}

export default function Navbar() {
  const [open, setOpen] = useState(false)

  const handleNav = () => setOpen(false)

  return (
    <header className="fixed top-0 inset-x-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-slate-900/60 bg-slate-900/80 border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <a href="#home" className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-cyan-400 to-blue-500 shadow-lg shadow-cyan-500/30"></div>
            <span className="text-white font-semibold tracking-tight">CloudEagle Consultants</span>
          </a>

          <nav className="hidden md:flex items-center gap-2">
            <NavLink href="#services">Services</NavLink>
            <NavLink href="#benefits">Benefits</NavLink>
            <NavLink href="#process">Process</NavLink>
            <NavLink href="#contact">Contact</NavLink>
            <a href="#contact" className="ml-2 inline-flex items-center gap-2 bg-gradient-to-r from-cyan-400 to-blue-500 text-slate-900 font-semibold px-4 py-2 rounded-md shadow hover:opacity-90 transition-opacity">
              Get a quote
            </a>
          </nav>

          <button className="md:hidden text-white" onClick={() => setOpen(v => !v)} aria-label="Toggle menu">
            {open ? <X className="w-6 h-6"/> : <Menu className="w-6 h-6"/>}
          </button>
        </div>
      </div>

      {open && (
        <div className="md:hidden border-t border-white/10">
          <div className="px-4 py-3 flex flex-col">
            <NavLink href="#services" onClick={handleNav}>Services</NavLink>
            <NavLink href="#benefits" onClick={handleNav}>Benefits</NavLink>
            <NavLink href="#process" onClick={handleNav}>Process</NavLink>
            <a href="#contact" onClick={handleNav} className="mt-2 inline-flex items-center justify-center bg-gradient-to-r from-cyan-400 to-blue-500 text-slate-900 font-semibold px-4 py-2 rounded-md shadow">
              Get a quote
            </a>
          </div>
        </div>
      )}
    </header>
  )
}
