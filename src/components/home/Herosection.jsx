
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
      <div className="relative z-10 mx-auto grid w-full max-w-7xl grid-cols-1 items-center gap-10 px-5 py-16 sm:px-8 lg:grid-cols-2 lg:gap-8 lg:px-12">

        {/* LEFT SIDE */}
        <div className="max-w-xl self-center text-text-light">

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

        {/* RIGHT SIDE — screenshot layout: phone → overlapping tickets → kitchen */}
        <div
          aria-hidden="true"
          className="relative mx-auto h-[26.5rem] w-full max-w-[36rem] self-center lg:max-w-none"
        >
          {/* Kitchen monitor — high, top right */}
          <div className="absolute top-0 right-0 z-10 w-[66%] rounded-xl bg-[#262626] p-[7px] shadow-2xl">
            <div className="overflow-hidden rounded-lg bg-[#0b0b0b]">
              <div className="flex items-center justify-between px-3 py-2.5 sm:px-4">
                <span className="text-[11px] font-bold tracking-[0.14em] text-white">
                  KITCHEN VIEW
                </span>
                <span className="flex items-center gap-1.5 text-[10px] font-semibold text-white">
                  <i className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                  LIVE
                </span>
              </div>
              <div className="grid grid-cols-3 gap-2 px-2 pb-3 text-left text-[10px] text-white sm:px-3">
                <div className="relative min-h-[9rem] rounded-md bg-[#171717] p-2.5">
                  <p className="font-bold">Table 08</p>
                  <p className="text-white/50">2 Guests</p>
                  <span className="mt-7 inline-block rotate-[-12deg] border-2 border-[#ff2d2d] px-2 py-0.5 text-[11px] font-extrabold tracking-[0.18em] text-[#ff2d2d]">
                    NEW
                  </span>
                </div>
                <div className="relative min-h-[9rem] rounded-md bg-[#171717] p-2.5">
                  <p className="font-bold">Table 08</p>
                  <p className="text-white/50">2 Guests</p>
                  <p className="mt-5 font-semibold">Karahi</p>
                  <p className="text-white/50">Chicken, Medium Spice</p>
                  <p className="text-white/50">Qty 1</p>
                </div>
                <div className="relative min-h-[9rem] rounded-md bg-[#171717] p-2.5">
                  <span className="mb-4 inline-block rotate-[-6deg] border-2 border-[#ff2d2d] px-2 py-0.5 text-[11px] font-extrabold tracking-[0.18em] text-[#ff2d2d]">
                    NEW
                  </span>
                  <p className="font-semibold">Naan</p>
                  <p className="text-white/50">Qty 2</p>
                </div>
              </div>
            </div>
          </div>

          {/* Phone — left, no hand */}
          <div className="absolute top-[6.25rem] left-0 z-20 w-[11.5rem] overflow-hidden rounded-[1.9rem] border-[6px] border-[#1a1a1a] bg-[#0f0f0f] shadow-2xl">
            <div className="mx-auto mt-1.5 h-1 w-10 rounded-full bg-white/15" />
            <p className="pt-1 text-center text-[10px] font-medium text-white/70">9:41</p>
            <div className="flex items-center justify-between px-3 py-2 text-white">
              <span className="text-base leading-none">×</span>
              <p className="text-xs font-semibold">New Order</p>
              <span className="flex h-4 w-4 items-center justify-center rounded-full border border-[#ff2d2d] text-[9px] text-[#ff2d2d]">
                ✓
              </span>
            </div>
            <div className="space-y-3.5 px-3 pb-3 text-left text-white">
              <div>
                <p className="text-sm font-bold">Table 08</p>
                <p className="text-[10px] text-white/50">2 Guests</p>
              </div>
              <div>
                <p className="text-sm font-semibold">Karahi</p>
                <p className="text-[10px] text-white/50">Chicken, Medium Spice</p>
                <p className="text-[10px] text-white/50">Qty 1</p>
              </div>
              <div>
                <p className="text-sm font-semibold">Naan</p>
                <p className="text-[10px] text-white/50">Qty 2</p>
              </div>
              <span className="mt-1 inline-flex w-full items-center justify-center gap-1.5 rounded-md bg-primary py-2.5 text-[11px] font-bold text-white">
                Send to Kitchen
                <svg viewBox="0 0 16 16" className="h-3 w-3 fill-current" aria-hidden="true">
                  <path d="M2.2 8.1 13.6 2.6c.5-.2 1 .3.8.8L9.9 13.8c-.2.5-.9.5-1.1 0L7.2 9.4 2.2 8.1Z" />
                </svg>
              </span>
            </div>
          </div>

          {/* Tickets — same-size overlapping fan, leaving the phone into the kitchen */}
          <div className="hero-ticket-cluster absolute top-[8.1rem] left-[10.9rem] z-30 h-[12.5rem] w-[19.5rem]">
            <div className="hero-fly-ticket-card absolute top-8 left-0 z-10 flex h-[6.8rem] w-[6.8rem] -rotate-[8deg] flex-col justify-between rounded-[0.2rem] p-2.5 text-left">
              <div>
                <p className="text-[13px] font-bold text-white">Karahi</p>
                <p className="text-[10px] leading-tight text-white/80">Chicken, Medium Spice</p>
              </div>
              <p className="text-[10px] text-white/80">Qty 1</p>
            </div>
            <div className="hero-fly-ticket-card absolute top-3.5 left-[3.4rem] z-20 flex h-[6.8rem] w-[6.8rem] rotate-[3deg] flex-col justify-between rounded-[0.2rem] p-2.5 text-left">
              <p className="text-[13px] font-bold text-white">Naan</p>
              <p className="mt-auto text-[10px] text-white/80">Qty 2</p>
            </div>
            <div className="hero-fly-ticket-card absolute top-0 left-[6.8rem] z-30 flex h-[6.8rem] w-[6.8rem] rotate-[8deg] flex-col rounded-[0.2rem] p-2.5 text-left">
              <p className="text-[13px] font-bold text-white">Table 08</p>
              <p className="text-[10px] text-white/80">2 Guests</p>
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}

export default HeroSection
