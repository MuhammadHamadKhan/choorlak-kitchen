
import { useState } from 'react'
import { NavLink } from 'react-router-dom'
import siteContent from '../../data/siteContent.json'
import choorlakLogo from '../../assets/logo.jpg'

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)

  const closeMenu = () => setMenuOpen(false)

  const navLinkClass = ({ isActive }) =>
    `transition-colors duration-200 hover:text-primary ${
      isActive ? 'font-semibold text-primary' : 'text-text-dark'
    }`

  const mobileNavLinkClass = ({ isActive }) =>
    `block w-full rounded-lg px-3 py-3 transition-colors duration-200 hover:text-primary ${
      isActive ? 'font-semibold text-primary' : 'text-text-dark'
    }`

  return (
    <header className="sticky top-0 z-50 w-full bg-white shadow-sm">
      <nav className="mx-auto flex h-18 max-w-7xl items-center justify-between px-4 sm:px-6 lg:h-22 lg:px-8">

        {/* Logo */}
        <NavLink
          to="/"
          onClick={closeMenu}
  aria-label="Choorlak Home"
  className="flex shrink-0 items-center"
>
  <img
    src={choorlakLogo}
    alt="Choorlak restaurant logo"
    className="h-12 w-auto object-contain sm:h-14"
  />

          <span className="text-2xl font-bold tracking-tight text-text-dark sm:text-3xl">
            {siteContent.brandName}
          </span>
        </NavLink>

        {/* Desktop navigation */}
        <div className="hidden items-center gap-6 lg:flex xl:gap-10">
          {siteContent.nav.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              className={navLinkClass}
            >
              {item.label}
            </NavLink>
          ))}
        </div>

        {/* Desktop CTA */}
        <NavLink
          to="/contact"
          className="hidden rounded-xl bg-primary px-7 py-3.5 font-semibold text-text-light transition-colors hover:bg-primary-hover lg:inline-flex"
        >
          {siteContent.cta}
        </NavLink>

        {/* Mobile controls */}
        <div className="flex items-center gap-3 lg:hidden">
          <NavLink
            to="/contact"
            onClick={closeMenu}
            className="hidden rounded-lg bg-primary px-4 py-2.5 text-sm font-semibold text-text-light hover:bg-primary-hover sm:inline-flex"
          >
            {siteContent.cta}
          </NavLink>

          <button
            type="button"
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={menuOpen}
            aria-controls="mobile-navigation"
            onClick={() => setMenuOpen((open) => !open)}
            className="flex h-11 w-11 items-center justify-center rounded-lg border border-border text-text-dark"
          >
            {menuOpen ? (
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                <path d="M18 6 6 18M6 6l12 12" />
              </svg>
            ) : (
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                <path d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </nav>

      {/* Dim overlay — click it to close. Stays in the page so it can fade. */}
      <button
        type="button"
        aria-label="Close menu"
        tabIndex={menuOpen ? 0 : -1}
        onClick={closeMenu}
        className={`fixed top-[4.5rem] right-0 bottom-0 left-0 z-30 bg-black/50 transition-opacity duration-700 ease-out lg:hidden ${
          menuOpen ? 'opacity-100' : 'pointer-events-none opacity-0'
        }`}
      />

      {/* Mobile and tablet side panel — stays in the page so it can slide */}
      <div
        id="mobile-navigation"
        aria-hidden={!menuOpen}
        className={`fixed top-[4.5rem] right-0 z-40 flex h-[calc(100vh-4.5rem)] w-64 max-w-[75%] flex-col gap-1 overflow-y-auto border-l border-border bg-white px-4 py-5 shadow-md transition-[translate] duration-700 ease-out lg:hidden ${
          menuOpen ? 'translate-x-0' : 'pointer-events-none translate-x-full'
        }`}
      >
        <div className="flex flex-col divide-y divide-border">
          {siteContent.nav.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              onClick={closeMenu}
              className={mobileNavLinkClass}
            >
              {item.label}
            </NavLink>
          ))}
        </div>

        <NavLink
          to="/contact"
          onClick={closeMenu}
          className="mt-6 rounded-lg bg-primary px-5 py-3 text-center font-semibold text-text-light sm:hidden"
        >
          {siteContent.cta}
        </NavLink>
      </div>
    </header>
  )
}

export default Navbar
