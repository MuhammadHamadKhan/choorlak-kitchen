import { useState } from 'react'
import biryaniPhoto from '../../assets/dishes/dish-biryani.jpg'
import karahiPhoto from '../../assets/dishes/dish-karahi.jpg'
import naanPhoto from '../../assets/dishes/dish-naan.jpg'
import haleemPhoto from '../../assets/dishes/dish-haleem.jpg'
import seekhPhoto from '../../assets/dishes/dish-seekh-kebab.jpg'
import tikkaPhoto from '../../assets/dishes/dish-chicken-tikka.jpg'
import nihariPhoto from '../../assets/dishes/dish-nihari.jpg'

const days = [
  { name: 'Monday', orders: 128, revenue: '84,500', dish: 'Biryani', busy: '1 to 3 pm', photo: biryaniPhoto },
  { name: 'Tuesday', orders: 96, revenue: '71,200', dish: 'Karahi', busy: '12 to 2 pm', photo: karahiPhoto },
  { name: 'Wednesday', orders: 154, revenue: '91,200', dish: 'Naan', busy: '2 to 4 pm', photo: naanPhoto },
  { name: 'Thursday', orders: 78, revenue: '54,100', dish: 'Haleem', busy: '1 to 2 pm', photo: haleemPhoto },
  { name: 'Friday', orders: 171, revenue: '102,400', dish: 'Seekh kebab', busy: '7 to 9 pm', photo: seekhPhoto },
  { name: 'Saturday', orders: 189, revenue: '118,900', dish: 'Chicken tikka', busy: '8 to 10 pm', photo: tikkaPhoto },
  { name: 'Sunday', orders: 121, revenue: '79,800', dish: 'Nihari', busy: '1 to 3 pm', photo: nihariPhoto },
]

function LiveViewSection() {
  const [active, setActive] = useState(0)
  const current = days[active]

  return (
    <section
      id="live-view"
      className="scroll-mt-24 bg-gray-light px-5 py-16 sm:px-8 lg:scroll-mt-28 lg:py-24"
    >
      <div className="mx-auto flex max-w-7xl flex-col gap-10 lg:flex-row lg:items-stretch">
        <div className="lg:w-2/5">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
            Live view
          </p>
          <h2 className="mt-3 text-3xl font-bold text-text-dark sm:text-5xl">
            See your day in one screen.
          </h2>
          <p className="mt-4 max-w-md text-base text-text-muted sm:text-lg">
            Open this page and know if today is busy, quiet, or on track. No
            training needed.
          </p>

          <div className="mt-10 flex items-start gap-4">
            <ul className="flex-1 space-y-2">
              {days.map((day, index) => (
                <li key={day.name}>
                  <button
                    type="button"
                    onClick={() => setActive(index)}
                    className={`flex h-10 w-full cursor-pointer items-center text-left text-2xl font-semibold ${
                      index === active
                        ? 'text-text-dark'
                        : 'text-text-muted/35 hover:text-text-muted'
                    }`}
                  >
                    {day.name}
                  </button>
                </li>
              ))}
            </ul>

            <ul className="hidden space-y-2 lg:block">
              {days.map((day, index) => (
                <li
                  key={day.name}
                  className="flex h-10 w-10 items-center justify-center"
                >
                  {index === active ? (
                    <span className="flex h-10 w-10 items-center justify-center rounded-full border border-primary text-primary">
                      →
                    </span>
                  ) : null}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="flex min-h-[28rem] flex-1 flex-col rounded-[1.75rem] border border-border bg-white p-6 shadow-lg sm:p-8">
          <div className="flex items-start justify-between gap-3">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-primary">
              Today&apos;s check · {current.name}
            </p>
            <span className="border border-primary px-2 py-0.5 text-[10px] font-extrabold tracking-[0.14em] text-primary">
              Open
            </span>
          </div>

          <div className="mt-6 grid grid-cols-3 gap-4">
            <div>
              <p className="text-sm text-text-muted">Orders</p>
              <p className="mt-1 text-2xl font-bold text-text-dark sm:text-3xl">
                {current.orders}
              </p>
            </div>
            <div>
              <p className="text-sm text-text-muted">Revenue</p>
              <p className="mt-1 text-2xl font-bold text-text-dark sm:text-3xl">
                <span className="mr-1 text-sm font-semibold text-text-muted">
                  Rs
                </span>
                {current.revenue}
              </p>
            </div>
            <div>
              <p className="text-sm text-text-muted">Top dish</p>
              <p className="mt-1 text-2xl font-bold text-text-dark sm:text-3xl">
                {current.dish}
              </p>
            </div>
          </div>

          <div className="mt-6 min-h-[12rem] flex-1 overflow-hidden rounded-2xl">
            <img
              src={current.photo}
              alt={current.dish}
              className="h-full w-full object-cover"
            />
          </div>

          <p className="mt-5 border-t border-border pt-5 text-sm text-text-muted">
            Busy time: {current.busy}
          </p>
        </div>
      </div>
    </section>
  )
}

export default LiveViewSection
