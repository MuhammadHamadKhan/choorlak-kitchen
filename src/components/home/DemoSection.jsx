import { useRef, useState } from 'react'

function DemoSection() {
  const videoRef = useRef(null)
  const [playing, setPlaying] = useState(false)

  function playClip() {
    const video = videoRef.current
    if (!video) return
    video.play()
    setPlaying(true)
  }

  return (
    <section className="bg-gray-light px-5 py-16 sm:px-8 lg:py-24">
      <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-2">
        <div className="max-w-lg">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">
            Watch it
          </p>
          <h2 className="mt-3 text-3xl font-bold leading-tight text-text-dark sm:text-5xl">
            A short demo of the whole day.
          </h2>
          <p className="mt-4 text-base leading-7 text-text-muted sm:text-lg">
            Press play. You will see an order move from the phone
            to the kitchen, then to the owner&apos;s screen.
          </p>
          <button
            type="button"
            onClick={playClip}
            className="mt-6 inline-flex rounded-lg bg-primary px-6 py-3 font-semibold text-text-light transition hover:bg-primary-hover"
          >
            See a customer clip
          </button>
        </div>

        <div className="relative overflow-hidden rounded-2xl bg-black shadow-xl">
          <span className="absolute top-3 left-3 z-10 rounded-full bg-white px-3 py-1 text-xs font-semibold text-text-dark">
            Sample clip
          </span>

          <video
            ref={videoRef}
            className="aspect-video w-full object-cover"
            playsInline
            preload="metadata"
            onPause={() => setPlaying(false)}
            onEnded={() => setPlaying(false)}
          >
            <source src="/videos/hero-video.mp4" type="video/mp4" />
          </video>

          {!playing && (
            <button
              type="button"
              onClick={playClip}
              aria-label="Play sample clip"
              className="absolute inset-0 z-10 flex items-center justify-center"
            >
              <span className="flex h-16 w-16 items-center justify-center rounded-full bg-primary text-white shadow-[0_0_28px_rgba(169,10,20,0.7)]">
                <svg viewBox="0 0 24 24" className="ml-0.5 h-7 w-7 fill-current" aria-hidden="true">
                  <path d="M8 5.5v13l11-6.5L8 5.5Z" />
                </svg>
              </span>
            </button>
          )}

          <p className="absolute bottom-3 left-4 z-10 text-xs text-white/90">
            Sample demo — replace with your real video later
          </p>
        </div>
      </div>
    </section>
  )
}

export default DemoSection
