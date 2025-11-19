import { useEffect, useMemo, useState } from 'react'
import { Menu, X } from 'lucide-react'

function NavLink({ href, children, onClick, active }) {
  return (
    <a
      href={href}
      onClick={onClick}
      className={[
        'relative px-3 py-2 rounded-md transition-colors',
        active
          ? 'text-lime-300'
          : 'text-slate-200 hover:text-white'
      ].join(' ')}
    >
      <span>{children}</span>
      <span
        aria-hidden
        className={[
          'pointer-events-none absolute left-3 right-3 -bottom-[2px] h-[2px] rounded-full transition-all duration-300',
          active ? 'bg-lime-400/80' : 'bg-transparent'
        ].join(' ')}
      />
    </a>
  )
}

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [activeId, setActiveId] = useState('home')
  const [progress, setProgress] = useState(0)

  const sections = useMemo(() => ['home', 'services', 'benefits', 'process', 'contact'], [])

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY || window.pageYOffset
      setScrolled(y > 10)

      const doc = document.documentElement
      const total = doc.scrollHeight - doc.clientHeight
      const p = total > 0 ? Math.min(100, Math.max(0, (y / total) * 100)) : 0
      setProgress(p)
    }

    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter(e => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)
        if (visible[0]) {
          setActiveId(visible[0].target.id)
        }
      },
      {
        rootMargin: '-40% 0px -50% 0px',
        threshold: [0, 0.25, 0.5, 0.75, 1]
      }
    )

    sections.forEach(id => {
      const el = document.getElementById(id)
      if (el) observer.observe(el)
    })

    return () => observer.disconnect()
  }, [sections])

  const handleNav = () => setOpen(false)

  return (
    <header className={[
      'fixed top-0 inset-x-0 z-50 border-b transition-all duration-300',
      'supports-[backdrop-filter]:backdrop-blur',
      scrolled
        ? 'bg-slate-900/90 border-white/10 shadow-lg shadow-slate-900/40'
        : 'bg-slate-900/60 border-white/10'
    ].join(' ')}>
      {/* Scroll progress bar */}
      <div
        className="absolute inset-x-0 top-0 h-[2px] bg-transparent"
        aria-hidden
      >
        <div
          className="h-full bg-gradient-to-r from-lime-400 to-sky-400 transition-[width] duration-200"
          style={{ width: `${progress}%` }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={[
          'flex items-center justify-between',
          scrolled ? 'h-14' : 'h-16'
        ].join(' ')}>
          <a href="#home" className="flex items-center gap-2">
            <div className={[
              'w-8 h-8 rounded-lg bg-gradient-to-tr from-lime-400 to-sky-400 shadow-lg transition-transform',
              scrolled ? 'scale-95' : 'scale-100'
            ].join(' ')}></div>
            <span className="text-white font-semibold tracking-tight">CloudEagle Consultants</span>
          </a>

          <nav className="hidden md:flex items-center gap-2">
            <NavLink href="#services" active={activeId === 'services'}>Services</NavLink>
            <NavLink href="#benefits" active={activeId === 'benefits'}>Benefits</NavLink>
            <NavLink href="#process" active={activeId === 'process'}>Process</NavLink>
            <NavLink href="#contact" active={activeId === 'contact'}>Contact</NavLink>
            <a href="#contact" className="ml-2 inline-flex items-center gap-2 bg-gradient-to-r from-lime-400 to-sky-400 text-slate-900 font-semibold px-4 py-2 rounded-md shadow hover:opacity-90 transition-opacity">
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
            <NavLink href="#services" onClick={handleNav} active={activeId === 'services'}>Services</NavLink>
            <NavLink href="#benefits" onClick={handleNav} active={activeId === 'benefits'}>Benefits</NavLink>
            <NavLink href="#process" onClick={handleNav} active={activeId === 'process'}>Process</NavLink>
            <a href="#contact" onClick={handleNav} className="mt-2 inline-flex items-center justify-center bg-gradient-to-r from-lime-400 to-sky-400 text-slate-900 font-semibold px-4 py-2 rounded-md shadow">
              Get a quote
            </a>
          </div>
        </div>
      )}
    </header>
  )
}
