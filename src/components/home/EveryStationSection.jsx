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
  return (
    <section className="bg-white pt-20 sm:pt-24">
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

      <ol className="relative isolate mx-auto mt-12 max-w-[1240px] px-4 pb-24 sm:px-6">
        {stations.map((station, index) => (
          <li
            key={station.label}
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
    </section>
  )
}

export default EveryStationSection
