const restaurants = [
  {
    name: 'Mian G',
    logo: (
      <svg viewBox="0 0 32 32" className="block h-12 w-12 shrink-0" aria-hidden="true">
        <rect width="32" height="32" rx="8" fill="#111111" />
        <path d="M8 22V10h4l4 7 4-7h4v12h-3.5v-7l-4.5 7-4.5-7v7H8Z" fill="#FFFFFF" />
      </svg>
    ),
  },
  {
    name: 'Spice',
    logo: (
      <svg viewBox="0 0 32 32" className="block h-12 w-12 shrink-0" aria-hidden="true">
        <rect width="32" height="32" rx="8" fill="#A90A14" />
        <circle cx="16" cy="16" r="6" fill="none" stroke="#FFFFFF" strokeWidth="2.5" />
        <circle cx="16" cy="16" r="2" fill="#FFFFFF" />
      </svg>
    ),
  },
  {
    name: 'Noon',
    logo: (
      <svg viewBox="0 0 32 32" className="block h-12 w-12 shrink-0" aria-hidden="true">
        <rect width="32" height="32" rx="8" fill="#111111" />
        <path d="M8 22V10h5c4 0 7 2.5 7 6s-3 6-7 6H8Zm4-3.5h1.5c1.6 0 2.8-1 2.8-2.5S15.1 13.5 13.5 13.5H12v5Z" fill="#FFFFFF" />
      </svg>
    ),
  },
  {
    name: 'Lahore',
    logo: (
      <svg viewBox="0 0 32 32" className="block h-12 w-12 shrink-0" aria-hidden="true">
        <rect width="32" height="32" rx="8" fill="#A90A14" />
        <path d="M10 22V10h12v3h-8v2.5h7V18h-7V22H10Z" fill="#FFFFFF" />
      </svg>
    ),
  },
  {
    name: 'Diner',
    logo: (
      <svg viewBox="0 0 32 32" className="block h-12 w-12 shrink-0" aria-hidden="true">
        <rect width="32" height="32" rx="8" fill="#111111" />
        <path d="M9 10h3.5v5.5L16 10h4l-5 7 5.5 5h-4.2L12.5 17v5H9V10Z" fill="#FFFFFF" />
      </svg>
    ),
  },
]

function TrustedSection() {
  return (
    <section className="bg-white px-5 py-16 text-center sm:px-8 lg:px-12 lg:py-20">
      <p className="text-xs font-semibold uppercase tracking-[0.2em] text-text-muted">
        Trusted by restaurants
      </p>
      <h2 className="mt-3 text-3xl font-bold text-text-dark sm:text-4xl">
        Restaurants already running on one system
      </h2>
      <p className="mt-3 text-base text-text-muted">
        Real kitchens. Real orders. No extra apps.
      </p>

      <div className="trusted-marquee mt-10 py-4">
        <div className="trusted-marquee-track">
          {[0, 1, 2, 3].map((copy) => (
            <div
              key={copy}
              className="trusted-marquee-set"
              aria-hidden={copy === 0 ? undefined : true}
            >
              {restaurants.map((restaurant) => (
                <div
                  key={`${restaurant.name}-${copy}`}
                  className="flex h-12 shrink-0 items-center gap-3"
                >
                  {restaurant.logo}
                  <span className="leading-none text-base font-bold uppercase tracking-wide text-text-dark">
                    {restaurant.name}
                  </span>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default TrustedSection
