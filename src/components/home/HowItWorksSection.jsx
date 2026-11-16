function IconPhone() {
  return (
    <svg viewBox="0 0 48 48" className="h-16 w-16" fill="none" aria-hidden="true">
      <rect x="15" y="6" width="18" height="36" rx="3.5" stroke="currentColor" strokeWidth="2" />
      <path d="M21 10h6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      <circle cx="24" cy="37" r="1.25" fill="currentColor" />
    </svg>
  )
}

function IconKitchen() {
  return (
    <svg viewBox="0 0 48 48" className="h-16 w-16" fill="none" aria-hidden="true">
      <rect x="6" y="8" width="36" height="24" rx="2.5" stroke="currentColor" strokeWidth="2" />
      <path d="M18 40h12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      <path d="M24 32v8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      <path d="M12 16h16M12 21h10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </svg>
  )
}

function IconDashboard() {
  return (
    <svg viewBox="0 0 48 48" className="h-16 w-16" fill="none" aria-hidden="true">
      <path d="M10 38V22M20 38V12M30 38V18M40 38V8" stroke="currentColor" strokeWidth="2.25" strokeLinecap="round" />
    </svg>
  )
}

const steps = [
  {
    number: 1,
    title: 'Online ordering',
    icon: IconPhone,
    summary: 'The guest orders. You stay in control.',
    points: [
      'Guests order from their phone.',
      'You choose pickup or delivery.',
      'No extra app to learn.',
    ],
  },
  {
    number: 2,
    title: 'Kitchen display',
    icon: IconKitchen,
    summary: 'The ticket lands on the kitchen screen.',
    points: [
      'New orders appear instantly.',
      'Staff tap when food is ready.',
      'Nothing gets lost on paper.',
    ],
  },
  {
    number: 3,
    title: 'Owner dashboard',
    icon: IconDashboard,
    summary: 'You see the day in one place.',
    points: [
      "See today's sales in one look.",
      'Know your busy hour.',
      'No spreadsheets.',
    ],
  },
]

function HowItWorksSection() {
  return (
    <section
      id="how-it-works"
      className="scroll-mt-24 bg-gray-light px-5 py-16 text-center sm:px-8 lg:scroll-mt-28"
    >
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

          return (
          <div
            key={step.number}
            tabIndex={0}
            aria-label={`${step.title}. Hover or tap to read more.`}
            className="how-flip min-h-[24rem] cursor-pointer"
          >
            <div className="how-flip-inner">
              <article
                className={`how-flip-front flex min-h-[24rem] flex-col items-center justify-center rounded-2xl p-8 text-center shadow-sm ${
                  redFront
                    ? 'bg-primary text-text-light'
                    : 'bg-white text-text-dark'
                }`}
              >
                <span className="animate-float-y">
                  <step.icon />
                </span>

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
                <p
                  className={`mt-4 text-xs ${
                    redFront ? 'text-text-light/80' : 'text-text-muted'
                  }`}
                >
                  Hover or tap to read more
                </p>
              </article>

              <article
                className={`how-flip-back flex min-h-[24rem] flex-col rounded-2xl p-8 text-left shadow-sm ${
                  redFront
                    ? 'bg-white text-text-dark'
                    : 'bg-primary text-text-light'
                }`}
              >
                <div className="flex items-center gap-2">
                  <span
                    className={`flex h-6 w-6 shrink-0 items-center justify-center rounded-full text-xs font-bold ${
                      redFront
                        ? 'bg-primary text-text-light'
                        : 'bg-white text-primary'
                    }`}
                  >
                    {step.number}
                  </span>
                  <h3 className="text-lg font-bold">{step.title}</h3>
                </div>

                <p
                  className={`mt-3 text-sm leading-6 ${
                    redFront ? 'text-text-muted' : 'text-text-light/80'
                  }`}
                >
                  {step.summary}
                </p>

                <ul className="mt-5 flex flex-1 flex-col gap-3">
                  {step.points.map((point, pointIndex) => (
                    <li
                      key={point}
                      className={`flex flex-1 items-center gap-3 rounded-xl px-4 py-3 text-sm leading-6 ${
                        redFront
                          ? 'bg-gray-light text-text-dark'
                          : 'bg-white/10 text-text-light'
                      }`}
                    >
                      <span
                        className={`flex h-5 w-5 shrink-0 items-center justify-center rounded-full text-[11px] font-bold ${
                          redFront
                            ? 'bg-black text-white'
                            : 'bg-white text-primary'
                        }`}
                      >
                        {pointIndex + 1}
                      </span>
                      {point}
                    </li>
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
