import { useEffect, useRef, useState } from 'react'
import phoneStationPhoto from '../../assets/station-phone.jpg'
import tabletStationPhoto from '../../assets/station-tablet.jpg'
import kioskStationPhoto from '../../assets/station-kiosk.jpg'
import tableStationPhoto from '../../assets/station-table.jpg'
import counterStationPhoto from '../../assets/station-counter.jpg'
import screensStationPhoto from '../../assets/station-screens.jpg'

const stations = [
  {
    label: 'Phone',
    photo: phoneStationPhoto,
    alt: 'A guest ordering from a phone in a restaurant',
  },
  {
    label: 'Tablet',
    photo: tabletStationPhoto,
    alt: 'A tablet used to take a restaurant order',
  },
  {
    label: 'Kiosk',
    photo: kioskStationPhoto,
    alt: 'A restaurant self-order kiosk',
  },
  {
    label: 'Table',
    photo: tableStationPhoto,
    alt: 'A restaurant dining table',
  },
  {
    label: 'Counter',
    photo: counterStationPhoto,
    alt: 'The restaurant counter',
  },
  {
    label: 'Screens',
    photo: screensStationPhoto,
    alt: 'Restaurant order screens',
  },
]

function EveryStationSection() {
  const [active, setActive] = useState(0)
  const cardRefs = useRef([])

  useEffect(() => {
    function updateActive() {
      let current = 0
      cardRefs.current.forEach((card, index) => {
        if (!card) return
        const top = card.getBoundingClientRect().top
        if (top <= 180) current = index
      })
      setActive(current)
    }

    updateActive()
    window.addEventListener('scroll', updateActive, { passive: true })
    return () => window.removeEventListener('scroll', updateActive)
  }, [])

  function goToStation(index) {
    cardRefs.current[index]?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  return (
    <section id="features" className="scroll-mt-24 bg-white pt-20 sm:pt-24 lg:scroll-mt-28">
      <div className="px-6 text-center">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
          In the restaurant
        </p>
        <h2 className="mt-3 text-3xl font-bold text-text-dark sm:text-4xl">
          See it at every station.
        </h2>
        <p className="mt-3 text-base text-text-muted">
          A phone, a tablet, a kiosk, the table, and the counter. Same orders.
          Same screen.
        </p>
      </div>

      <div className="mx-auto mt-12 grid max-w-[1240px] grid-cols-[2.75rem_1fr] items-start gap-6 px-4 pb-24 sm:grid-cols-[3.25rem_1fr] sm:gap-8 sm:px-6 lg:gap-10">
        <nav aria-label="Stations" className="self-stretch">
          <div className="sticky top-[7rem] flex h-[68svh] items-center justify-end lg:top-32 sm:h-[min(42rem,72svh)]">
            <div className="flex flex-col items-center gap-3 rounded-full bg-black px-2 py-4">
              <span className="text-[10px] font-semibold tracking-wide text-white/50">
                01
              </span>
              {stations.map((station, index) => (
                <button
                  key={station.label}
                  type="button"
                  aria-label={station.label}
                  aria-current={index === active ? 'true' : undefined}
                  onClick={() => goToStation(index)}
                  className="flex h-8 w-4 items-center justify-center"
                >
                  {index === active ? (
                    <span className="h-7 w-1 rounded-full bg-primary shadow-[0_0_12px_var(--color-primary)]" />
                  ) : (
                    <span className="h-1.5 w-1.5 rounded-full bg-white/35" />
                  )}
                </button>
              ))}
              <span className="text-[10px] font-semibold tracking-wide text-white/50">
                06
              </span>
            </div>
          </div>
        </nav>

        <ol className="relative isolate min-w-0 flex-1">
          {stations.map((station, index) => (
            <li
              key={station.label}
              ref={(node) => {
                cardRefs.current[index] = node
              }}
              className="sticky mb-6 top-[calc(7rem+var(--stack))] lg:top-[calc(8rem+var(--stack))]"
              style={{
                '--stack': `${index * 10}px`,
                zIndex: index + 1,
              }}
            >
              <article className="station-stack-card relative mx-auto h-[68svh] w-full overflow-hidden rounded-[28px] bg-white shadow-[0_18px_40px_rgba(22,22,22,0.16)] sm:h-[min(42rem,72svh)]">
                <img
                  src={station.photo}
                  alt={station.alt}
                  className="h-full w-full object-cover"
                />
                <span className="absolute bottom-5 left-5 inline-flex items-center gap-2 rounded-full bg-white px-3.5 py-2 text-sm font-bold text-text-dark shadow-md">
                  <i className="block h-2 w-2 rounded-full bg-primary" />
                  {station.label}
                </span>
              </article>
            </li>
          ))}
          <li className="h-[60vh] list-none" aria-hidden="true" />
        </ol>
      </div>
    </section>
  )
}

export default EveryStationSection
