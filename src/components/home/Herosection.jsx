
import { Link } from 'react-router-dom'

function HeroSection() {
  return (
    <section className="relative flex min-h-[85vh] items-center overflow-hidden bg-black">

      {/* Background Video */}
      <video
        autoPlay
        muted
        loop
        playsInline
        aria-hidden="true"
        className="absolute inset-0 h-full w-full object-cover"
      >
        <source src="/videos/hero-video.mp4" type="video/mp4" />
      </video>

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/50" />

      {/* Hero Content */}
      <div className="relative z-10 mx-auto grid w-full max-w-7xl grid-cols-1 items-center gap-12 px-5 py-16 sm:px-8 lg:grid-cols-2 lg:px-12">

        {/* LEFT SIDE */}
        <div className="max-w-xl text-text-light">

          <p className="mb-3 flex items-center gap-3 text-sm font-semibold uppercase tracking-[0.2em]">
            <span className="h-2.5 w-2.5 rounded-full bg-primary" />
            Built for Modern Restaurants
          </p>

          <h1 className="text-4xl font-bold leading-none sm:text-5xl lg:text-7xl">
            Every Order.
            <span className="block">Every Station.</span>
            <span className="block text-primary">One System.</span>
          </h1>

          <p className="mt-4 max-w-lg text-base leading-6 text-text-light/90 sm:text-lg">
            Manage orders from your counter, online customers, and kitchen
            in one simple system. Choorlak helps your team work faster,
            stay organized, and serve customers better.
          </p>

          <div className="mt-5 flex flex-wrap items-center gap-3">
            <Link
              to="/contact"
              className="inline-flex rounded-lg bg-primary px-7 py-3.5 font-semibold text-text-light transition hover:bg-primary-hover"
            >
              Book a Demo →
            </Link>
            <Link
              to="/how-it-works"
              className="inline-flex rounded-lg border border-text-light/40 px-7 py-3.5 font-semibold text-text-light transition hover:bg-text-light/10"
            >
              How It Works
            </Link>
          </div>
        </div>

        {/* RIGHT SIDE — LIVE RAIL CARD */}
        <div className="w-full max-w-lg justify-self-center lg:justify-self-end">

          <div className="rounded-2xl border border-border bg-white p-5 text-text-dark shadow-2xl sm:p-7">

            {/* Card Top Bar */}
            <div className="flex items-center justify-between border-b border-border pb-5">

              {/* Live Rail — Left */}
              <div className="flex items-center gap-2">
                <span className="h-2.5 w-2.5 animate-pulse rounded-full bg-primary" />
                <span className="text-sm font-bold tracking-wide">
                  LIVE ORDER TRACKING
                </span>
              </div>

              {/* Table 14 — Right */}
              <span className="text-xs font-semibold tracking-wide text-primary">
                TABLE 08
              </span>

            </div>

            {/* Order number and status */}
            <div className="mt-5 flex flex-wrap items-center gap-3">
              <span className="rounded-full bg-primary/10 px-4 py-2 text-2xl font-bold text-text-dark">
                #184
              </span>
              <span className="rounded-full bg-primary/10 px-4 py-2 text-xs font-semibold tracking-wide text-primary">
                PREPARING
              </span>
            </div>

            {/* Order items */}
            <div className="mt-4">
              <p className="text-lg font-semibold text-text-dark">
                Chicken Karahi
              </p>
              <p className="mt-1 text-sm text-text-muted">
                2 × Naan
              </p>
            </div>

            {/* Order timeline */}
            <div className="relative mt-6 border-t border-border pt-8">
              {/* Grey line across the three steps */}
              <div
                className="absolute top-12 right-[16%] left-[16%] h-0.5 bg-border"
                aria-hidden="true"
              />
              {/* Red line: Order Received → Kitchen */}
              <div
                className="absolute top-12 left-[16%] h-0.5 w-[34%] bg-primary"
                aria-hidden="true"
              />

              <div className="relative grid grid-cols-3 text-center">
                <div>
                  <div className="mx-auto flex h-8 w-8 items-center justify-center rounded-full bg-primary text-sm font-bold text-text-light">
                    ✓
                  </div>
                  <p className="mt-3 text-sm font-semibold text-text-dark">
                    Order Received
                  </p>
                  <p className="mt-1 text-xs text-text-muted">10:24 AM</p>
                </div>

                <div>
                  <div className="mx-auto flex h-8 w-8 items-center justify-center rounded-full bg-primary text-sm text-text-light">
                    👨‍🍳
                  </div>
                  <p className="mt-3 text-sm font-semibold text-text-dark">
                    Kitchen
                  </p>
                  <p className="mt-1 text-xs text-text-muted">10:27 AM</p>
                </div>

                <div>
                  <div className="mx-auto flex h-8 w-8 items-center justify-center rounded-full border-2 border-border bg-white text-sm text-text-muted">
                    ♨️
                  </div>
                  <p className="mt-3 text-sm font-semibold text-text-dark">
                    Ready
                  </p>
                  <p className="mt-1 text-xs text-text-muted">---</p>
                </div>
              </div>
            </div>

            <div className="mt-6 flex items-center gap-2 rounded-xl bg-primary/10 px-4 py-3">
              <span className="text-primary" aria-hidden="true">
                ⏱
              </span>
              <p className="text-sm font-medium text-primary">
                Your order is being prepared.
              </p>
            </div>


          </div>
        </div>

      </div>
    </section>
  )
}

export default HeroSection
