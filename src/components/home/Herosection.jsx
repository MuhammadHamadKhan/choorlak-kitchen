import { useEffect, useState } from 'react'
import siteContent from '../../data/siteContent.json'

const changingLines = [
  'from the phone to the kitchen',
  'on every station in the restaurant',
  'in one simple system',
]

function scrollToSection(id) {
  window.history.replaceState(null, '', `/#${id}`)
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
}

function HeroSection() {
  const [index, setIndex] = useState(0)
  const [fading, setFading] = useState(false)

  useEffect(() => {
    let timeoutId

    const intervalId = setInterval(() => {
      setFading(true)

      timeoutId = setTimeout(() => {
        setIndex((current) => (current + 1) % changingLines.length)
        setFading(false)
      }, 400)
    }, 3200)

    return () => {
      clearInterval(intervalId)
      clearTimeout(timeoutId)
    }
  }, [])

  return (
    <section className="relative flex min-h-screen items-center overflow-hidden bg-black">

      {/* Waitress at the restaurant counter */}
      <video
        autoPlay
        muted
        loop
        playsInline
        aria-hidden="true"
        className="absolute inset-0 h-full w-full object-cover"
      >
        <source src="/videos/hero-saas.mp4" type="video/mp4" />
      </video>

      {/* Dark glass so white text stays readable */}
      <div className="absolute inset-0 bg-black/60" />

      <div className="relative z-10 mx-auto flex min-h-screen w-full max-w-7xl items-center px-5 pt-24 pb-16 sm:px-10 lg:px-16">
        <div className="max-w-5xl text-left text-text-light">

          <p className="mb-5 flex items-center gap-3 text-sm font-semibold uppercase tracking-[0.2em]">
            <span className="h-2.5 w-2.5 rounded-full bg-primary" />
            Built for Modern Restaurants
          </p>

          <h1 className="text-5xl font-light leading-[1.08] tracking-tight text-text-light sm:text-6xl lg:text-7xl xl:text-8xl">
            <span className="block">Every order</span>
            <span
              className={`block transition-all duration-500 ${
                fading ? 'translate-y-2 opacity-0' : 'translate-y-0 opacity-100'
              }`}
            >
              {changingLines[index]}
            </span>
          </h1>

          <p className="mt-6 max-w-2xl text-lg leading-7 text-text-light/90 sm:text-xl">
            {siteContent.hero.body}
          </p>

          <div className="mt-8 flex flex-wrap items-stretch gap-3">
            <button
              type="button"
              onClick={() => scrollToSection('contact')}
              className="inline-flex items-center justify-center rounded-lg bg-primary px-7 py-3.5 font-semibold text-text-light transition hover:bg-primary-hover"
            >
              Request a Demo →
            </button>
            <button
              type="button"
              onClick={() => scrollToSection('how-it-works')}
              className="inline-flex items-center justify-center rounded-lg border border-text-light/40 px-7 py-3.5 font-semibold text-text-light transition hover:bg-text-light/10"
            >
              How It Works
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HeroSection
