const restaurants = ['Mian G', 'Spice', 'Noon', 'Lahore', 'Diner']

const stats = [
  { value: '1,000+', label: 'restaurants live' },
  { value: '1,800+', label: 'orders a day' },
  { value: '5', label: 'minute setup' },
  { value: '24/7', label: 'help desk' },
]

function TrustedSection() {
  return (
    <section className="bg-white px-5 py-16 text-center sm:px-8">
      <p className="text-xs font-semibold uppercase tracking-[0.2em] text-text-muted">
        Trusted by restaurants
      </p>
      <h2 className="mt-3 text-3xl font-bold text-text-dark sm:text-4xl">
        Restaurants already running on one system
      </h2>
      <p className="mt-3 text-base text-text-muted">
        Real kitchens. Real orders. No extra apps.
      </p>

      <div className="mt-10 flex flex-wrap items-center justify-center gap-8">
        {restaurants.map((name) => (
          <div key={name} className="flex items-center gap-2">
            <span className="flex h-8 w-8 items-center justify-center rounded-full border border-border text-xs font-bold text-text-dark">
              {name.charAt(0)}
            </span>
            <span className="text-sm font-bold uppercase tracking-wide text-text-dark">
              {name}
            </span>
          </div>
        ))}
      </div>

      <div className="mx-auto mt-8 w-full max-w-4xl">
        {/* Red line */}
        <div className="h-0.5 bg-primary" aria-hidden="true" />

        <div className="mt-0 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((item) => (
            <div key={item.label} className="flex flex-col items-center">
              {/* Short tick from the red line down to the card */}
              <div
                className="hidden h-4 w-0.5 bg-primary lg:block"
                aria-hidden="true"
              />
              <div className="w-full rounded-xl border border-dashed border-primary/40 bg-gray-light px-5 py-5 text-left">
                <span className="mb-3 block h-2 w-2 rounded-full bg-primary" />
                <p className="text-3xl font-bold text-text-dark">{item.value}</p>
                <p className="mt-1 text-sm text-text-muted">{item.label}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default TrustedSection
