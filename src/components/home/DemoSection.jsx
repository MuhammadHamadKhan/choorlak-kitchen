import { useEffect, useRef, useState } from 'react'

const chapters = [
  { id: 'guest', label: 'Guest', text: 'The table orders from the phone.' },
  { id: 'kitchen', label: 'Kitchen', text: 'The ticket lands on the kitchen screen.' },
  { id: 'dashboard', label: 'Dashboard', text: 'You see sales in one place.' },
]

function clamp(value) {
  return Math.min(1, Math.max(0, value))
}

function easeInOut(t) {
  return t < 0.5 ? 2 * t * t : 1 - (-2 * t + 2) ** 2 / 2
}

function DemoSection() {
  const videoRef = useRef(null)
  const trackRef = useRef(null)
  const [chapter, setChapter] = useState(chapters[0])
  const [progress, setProgress] = useState(0)
  const [view, setView] = useState({ w: 1024, h: 768 })
  const [reduceMotion, setReduceMotion] = useState(false)

  useEffect(() => {
    const video = videoRef.current
    if (!video) return
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

    video.muted = true
    video.loop = true
    const start = video.play()
    if (start) start.catch(() => {})
  }, [])

  useEffect(() => {
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    setReduceMotion(reduced)
    if (reduced) return undefined

    const track = trackRef.current
    if (!track) return undefined

    let frame = 0

    function update() {
      frame = 0
      setView({ w: window.innerWidth, h: window.innerHeight })
      const rect = track.getBoundingClientRect()
      const range = rect.height - window.innerHeight
      setProgress(range <= 0 ? 0 : clamp(-rect.top / range))
    }

    function onScroll() {
      if (frame) return
      frame = requestAnimationFrame(update)
    }

    update()
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll)

    return () => {
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
      if (frame) cancelAnimationFrame(frame)
    }
  }, [])

  function showChapter(next) {
    setChapter(next)
  }

  const p = reduceMotion ? 0 : easeInOut(progress)
  const startW = Math.min(960, Math.max(280, view.w - 48))
  const startH = startW * (9 / 16)
  const endW = Math.min(1280, Math.max(startW, view.w - 48))
  const endH = endW * (9 / 16)
  const frameW = startW + (endW - startW) * p
  const frameH = startH + (endH - startH) * p
  const headingHide = Math.min(1, p * 2)

  const videoBlock = (
    <div className="relative h-full w-full bg-black">
      <video
        ref={videoRef}
        className="h-full w-full object-cover"
        autoPlay
        playsInline
        muted
        loop
        preload="auto"
      >
        <source src="/videos/hero-video.mp4" type="video/mp4" />
      </video>
    </div>
  )

  const heading = (
    <div className="mx-auto max-w-3xl px-5 text-center">
      <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
        Watch it
      </p>
      <h2 className="mt-3 text-3xl font-bold leading-tight sm:text-5xl">
        One order. Phone to kitchen.
      </h2>
    </div>
  )

  return (
    <section
      id="online-ordering"
      className="scroll-mt-24 bg-gray-light text-text-dark lg:scroll-mt-28"
    >
      {reduceMotion ? (
        <div className="px-5 py-16 sm:px-8 lg:px-12 lg:py-24">
          {heading}
          <div className="mx-auto mt-10 max-w-3xl overflow-hidden rounded-2xl border border-border bg-white shadow-lg">
            <div className="aspect-video">{videoBlock}</div>
          </div>
        </div>
      ) : (
        <div ref={trackRef} className="relative h-[180vh]">
          <div
            className="sticky top-24 flex h-[calc(100dvh-6rem)] flex-col items-center justify-center overflow-hidden lg:top-28 lg:h-[calc(100dvh-7rem)]"
            style={{ paddingTop: `${(1 - headingHide) * 12}px` }}
          >
            <div
              className="w-full overflow-hidden"
              style={{
                opacity: 1 - headingHide,
                maxHeight: `${(1 - headingHide) * 200}px`,
                marginBottom: `${(1 - headingHide) * 28}px`,
                pointerEvents: headingHide > 0.6 ? 'none' : 'auto',
              }}
            >
              {heading}
            </div>

            <div
              className="shrink-0 overflow-hidden rounded-2xl border border-border bg-black shadow-lg"
              style={{
                width: `${frameW}px`,
                height: `${frameH}px`,
              }}
            >
              {videoBlock}
            </div>
          </div>
        </div>
      )}

      <div className="px-5 py-10 sm:px-8 lg:px-12">
        <div className="mx-auto flex max-w-3xl flex-wrap items-center justify-center gap-2">
          {chapters.map((item) => {
            const active = item.id === chapter.id

            return (
              <button
                key={item.id}
                type="button"
                onClick={() => showChapter(item)}
                className={
                  active
                    ? 'rounded-full bg-primary px-5 py-2 text-sm font-semibold text-text-light'
                    : 'rounded-full border border-border bg-white px-5 py-2 text-sm font-semibold text-text-dark transition hover:border-primary/40'
                }
              >
                {item.label}
              </button>
            )
          })}
        </div>
        <p className="mt-4 text-center text-sm text-text-muted">{chapter.text}</p>
      </div>
    </section>
  )
}

export default DemoSection
