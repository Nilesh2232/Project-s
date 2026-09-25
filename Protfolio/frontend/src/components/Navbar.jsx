import { Menu, X } from 'lucide-react'
import { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { profile } from '../data/portfolio'

const links = [
  { href: '/#about', label: 'About' },
  { href: '/#projects', label: 'Works' },
  { href: '/#skills', label: 'Skills' },
  { href: '/#certificates', label: 'Certificates' },
  { href: '/#experience', label: 'Experience' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const handleNav = (href) => {
    setOpen(false)
    if (href.startsWith('/#') && location.pathname === '/') {
      const id = href.slice(2)
      const el = document.getElementById(id)
      if (el) el.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <header
      className={`fixed top-0 left-0 z-50 w-full transition ${
        scrolled ? 'bg-body/80 backdrop-blur-xl border-b border-line' : 'bg-transparent'
      }`}
    >
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5 md:h-20">
        <Link
          to="/"
          className="font-display text-lg font-semibold text-ink"
          onClick={() => setOpen(false)}
        >
          {profile.name}
          <span className="text-accent"> </span>
        </Link>

        <nav className="hidden items-center gap-10 lg:flex">
          {links.map((link) => (
            <Link
              key={link.href}
              to={link.href}
              onClick={() => handleNav(link.href)}
              className="text-sm font-semibold text-ink transition hover:text-accent"
            >
              {link.label}
            </Link>
          ))}
          <Link
            to="/#contact"
            onClick={() => handleNav('/#contact')}
            className="btn-pill btn-pill-primary !py-3 !px-6 text-sm"
          >
            Contact me
          </Link>
        </nav>

        <button
          type="button"
          className="text-ink lg:hidden"
          aria-label="Toggle menu"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {open ? (
        <div className="border-t border-line bg-soft/95 px-6 py-8 backdrop-blur-xl lg:hidden">
          <div className="flex flex-col gap-6">
            {links.map((link) => (
              <Link
                key={link.href}
                to={link.href}
                onClick={() => handleNav(link.href)}
                className="font-semibold text-ink"
              >
                {link.label}
              </Link>
            ))}
            <Link
              to="/#contact"
              onClick={() => handleNav('/#contact')}
              className="btn-pill btn-pill-primary w-fit text-sm"
            >
              Contact me
            </Link>
          </div>
        </div>
      ) : null}
    </header>
  )
}
