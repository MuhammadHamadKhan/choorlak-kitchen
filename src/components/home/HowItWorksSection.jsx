import { useState } from 'react'
import dashboardIcon from '../../assets/how-it-works-dashboard.png'
import kitchenIcon from '../../assets/how-it-works-kitchen.png'
import phoneIcon from '../../assets/how-it-works-phone.png'

const steps = [
  {
    number: 1,
    title: 'Online ordering',
    icon: phoneIcon,
    points: [
      'Guests order from their phone.',
      'You choose pickup or delivery.',
      'No extra app to learn.',
    ],
  },
  {
    number: 2,
    title: 'Kitchen display',
    icon: kitchenIcon,
    points: [
      'New orders appear instantly.',
      'Staff tap when food is ready.',
      'Nothing gets lost on paper.',
    ],
  },
  {
    number: 3,
    title: 'Owner dashboard',
    icon: dashboardIcon,
    points: [
      "See today's sales in one look.",
      'Know your busy hour.',
      'No spreadsheets.',
    ],
  },
]

function HowItWorksSection() {
  const [flippedCard, setFlippedCard] = useState(null)

  return (
    <section className="bg-gray-light px-5 py-16 text-center sm:px-8">
      <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
        How it works
      </p>
      <h2 className="mt-3 text-3xl font-bold text-text-dark sm:text-4xl">
        Three steps. One restaurant.
      </h2>
      <p className="mt-3 text-base text-text-muted">
        A customer orders. The kitchen sees it. You check the numbers.
      </p>

      <div className="mx-auto mt-12 grid max-w-6xl grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {steps.map((step, index) => {
          const redFront = index % 2 === 0
          const isFlipped = flippedCard === step.number

          return (
          <div
            key={step.number}
            role="button"
            tabIndex={0}
            aria-pressed={isFlipped}
            aria-label={`${step.title}. Tap to ${isFlipped ? 'close' : 'read more'}.`}
            className={`how-flip min-h-[24rem] cursor-pointer ${isFlipped ? 'is-flipped' : ''}`}
            onClick={() =>
              setFlippedCard(isFlipped ? null : step.number)
            }
            onKeyDown={(event) => {
              if (event.key === 'Enter' || event.key === ' ') {
                event.preventDefault()
                setFlippedCard(isFlipped ? null : step.number)
              }
            }}
          >
            <div className="how-flip-inner">
              <article
                className={`how-flip-front flex min-h-[24rem] flex-col items-center justify-center rounded-2xl p-8 text-center shadow-sm ${
                  redFront
                    ? 'bg-primary text-text-light'
                    : 'bg-white text-text-dark'
                }`}
              >
                <img
                  src={step.icon}
                  alt=""
                  className="h-24 w-auto animate-float-y object-contain"
                />

                <div className="mt-4 flex items-center justify-center gap-2">
                  <span
                    className={`flex h-6 w-6 items-center justify-center rounded-full text-xs font-bold ${
                      redFront
                        ? 'bg-white text-primary'
                        : 'bg-primary text-text-light'
                    }`}
                  >
                    {step.number}
                  </span>
                  <h3 className="text-lg font-bold">{step.title}</h3>
                </div>
              </article>

              <article
                className={`how-flip-back flex min-h-[24rem] flex-col items-center justify-center rounded-2xl p-8 text-center shadow-sm ${
                  redFront
                    ? 'bg-white text-text-dark'
                    : 'bg-primary text-text-light'
                }`}
              >
                <div className="mb-4 flex items-center justify-center gap-2">
                  <span
                    className={`flex h-6 w-6 items-center justify-center rounded-full text-xs font-bold ${
                      redFront
                        ? 'bg-primary text-text-light'
                        : 'bg-white text-primary'
                    }`}
                  >
                    {step.number}
                  </span>
                  <h3 className="text-lg font-bold">{step.title}</h3>
                </div>

                <ul
                  className={`list-disc space-y-1 pl-6 text-left text-sm ${
                    redFront ? 'text-text-muted' : 'text-text-light/90'
                  }`}
                >
                  {step.points.map((point) => (
                    <li key={point}>{point}</li>
                  ))}
                </ul>
              </article>
            </div>
          </div>
          )
        })}
      </div>
    </section>
  )
}

export default HowItWorksSection
