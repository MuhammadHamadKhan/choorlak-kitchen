import { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'
import siteContent from '../../data/siteContent.json'
import choorlakLogo from '../../assets/logo.png'

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  // When the page moves down, fill the bar so links stay readable.
  useEffect(() => {
    function onScroll() {
      setScrolled(window.scrollY > 24)
    }

    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  function goHome() {
    setMenuOpen(false)
    window.history.replaceState(null, '', '/')
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  function goToSection(id) {
    setMenuOpen(false)
    window.history.replaceState(null, '', `/#${id}`)
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <header
      className={`fixed top-0 z-50 w-full transition-colors duration-300 ${
        scrolled || menuOpen ? 'bg-black' : 'bg-transparent'
      }`}
    >
      <nav className="mx-auto flex h-18 max-w-7xl items-center justify-between px-4 sm:px-6 lg:h-22 lg:px-8">
        <NavLink
          to="/"
          onClick={goHome}
          className="flex shrink-0 items-center gap-2"
        >
          <img
            src={choorlakLogo}
            alt="Choorlak restaurant logo"
            className="h-10 w-auto object-contain sm:h-12"
          />
          <span className="text-2xl font-bold tracking-tight text-text-light sm:text-3xl">
            {siteContent.brandName}
          </span>
        </NavLink>

        <div className="hidden items-center gap-8 lg:flex">
          {siteContent.nav.map((item) => (
            <button
              key={item.hash}
              type="button"
              onClick={() => goToSection(item.hash)}
              className="text-text-light transition-colors hover:text-primary"
            >
              {item.label}
            </button>
          ))}
        </div>

        <button
          type="button"
          onClick={() => goToSection('contact')}
          className="hidden rounded-xl bg-primary px-7 py-3.5 font-semibold text-text-light hover:bg-primary-hover lg:inline-flex"
        >
          {siteContent.cta}
        </button>

        <button
          type="button"
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          onClick={() => setMenuOpen(!menuOpen)}
          className="flex h-11 w-11 items-center justify-center rounded-lg border border-text-light/40 text-xl text-text-light lg:hidden"
        >
          {menuOpen ? '✕' : '☰'}
        </button>
      </nav>

      {menuOpen && (
        <div className="border-t border-white/15 bg-black px-4 py-4 lg:hidden">
          {siteContent.nav.map((item) => (
            <button
              key={item.hash}
              type="button"
              onClick={() => goToSection(item.hash)}
              className="block w-full py-3 text-left text-text-light hover:text-primary"
            >
              {item.label}
            </button>
          ))}
          <button
            type="button"
            onClick={() => goToSection('contact')}
            className="mt-3 w-full rounded-lg bg-primary px-5 py-3 font-semibold text-text-light"
          >
            {siteContent.cta}
          </button>
        </div>
      )}
    </header>
  )
}

export default Navbar
