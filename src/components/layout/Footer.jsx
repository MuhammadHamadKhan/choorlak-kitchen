import { NavLink } from 'react-router-dom'
import siteContent from '../../data/siteContent.json'
import choorlakLogo from '../../assets/logo.png'

function goToSupport() {
  window.history.replaceState(null, '', '/#contact')
  const contact = document.getElementById('contact')
  if (contact) {
    contact.scrollIntoView({ behavior: 'smooth' })
  } else {
    window.location.assign('/#contact')
  }
}

function Footer() {
  const linkClass = 'text-sm text-text-muted transition-colors hover:text-primary'

  return (
    <footer className="border-t border-border bg-white">
      <div className="mx-auto flex max-w-7xl flex-col gap-6 px-5 py-8 sm:px-8 lg:flex-row lg:items-center lg:justify-between lg:py-10">
        <NavLink
          to="/"
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="flex shrink-0 items-center gap-2"
          aria-label="Choorlak Home"
        >
          <img
            src={choorlakLogo}
            alt="Choorlak restaurant logo"
            className="h-10 w-auto object-contain"
          />
          <span className="text-xl font-bold text-text-dark">
            {siteContent.brandName}
          </span>
        </NavLink>

        <div className="flex flex-wrap items-center gap-x-6 gap-y-3">
          <button type="button" onClick={goToSupport} className={linkClass}>
            {siteContent.footer.support}
          </button>
          <NavLink to="/terms" className={linkClass}>
            {siteContent.footer.terms}
          </NavLink>
          <NavLink to="/privacy" className={linkClass}>
            {siteContent.footer.privacy}
          </NavLink>
        </div>

        <div className="flex items-center gap-4">
          <a href="#" aria-label="Facebook" className="text-text-muted hover:text-primary">
            <svg viewBox="0 0 24 24" className="h-5 w-5 fill-current" aria-hidden="true">
              <path d="M14 8h3V4h-3c-2.8 0-5 2.2-5 5v2H6v4h3v8h4v-8h3.2l.8-4H13V9c0-.6.4-1 1-1z" />
            </svg>
          </a>
          <a href="#" aria-label="Instagram" className="text-text-muted hover:text-primary">
            <svg viewBox="0 0 24 24" className="h-5 w-5 fill-current" aria-hidden="true">
              <path d="M7 3h10c2.2 0 4 1.8 4 4v10c0 2.2-1.8 4-4 4H7c-2.2 0-4-1.8-4-4V7c0-2.2 1.8-4 4-4zm10 2H7c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h10c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2zm-5 3.2A3.8 3.8 0 1 1 8.2 12 3.8 3.8 0 0 1 12 8.2zm0 2A1.8 1.8 0 1 0 13.8 12 1.8 1.8 0 0 0 12 10.2zM17.2 6.5a.9.9 0 1 1-.9.9.9.9 0 0 1 .9-.9z" />
            </svg>
          </a>
          <a href="#" aria-label="TikTok" className="text-text-muted hover:text-primary">
            <svg viewBox="0 0 24 24" className="h-5 w-5 fill-current" aria-hidden="true">
              <path d="M14.5 3c.4 2.2 1.8 3.9 4 4.3v2.2c-1.4 0-2.7-.4-3.8-1.1v6.4c0 3.3-2.7 6-6 6s-6-2.7-6-6 2.7-6 6-6c.3 0 .7 0 1 .1v2.4c-.3-.1-.6-.1-1-.1-2 0-3.6 1.6-3.6 3.6s1.6 3.6 3.6 3.6 3.6-1.6 3.6-3.6V3h2.2z" />
            </svg>
          </a>
        </div>
      </div>
    </footer>
  )
}

export default Footer
