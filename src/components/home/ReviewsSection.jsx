const reviews = [
  {
    initials: 'AY',
    name: 'Ayesha',
    role: 'Spice Route',
    quote:
      'The kitchen and the counter finally match. We stopped checking three apps at the end of the night.',
  },
  {
    initials: 'HM',
    name: 'Hassan',
    role: 'Noon Grill',
    quote:
      'New orders show up on the kitchen screen at once. My team does not shout across the floor anymore.',
  },
  {
    initials: 'SR',
    name: 'Sana',
    role: 'Lahore Diner',
    quote:
      "I can see today's sales in one look. No spreadsheet. No extra app for my staff to learn.",
  },
  {
    initials: 'BL',
    name: 'Bilal',
    role: 'Mian G Kitchen',
    quote:
      'Pickup and dine-in land in the same place. The floor is quieter, and tickets do not get lost.',
  },
  {
    initials: 'NF',
    name: 'Nadia',
    role: 'Karahi House',
    quote:
      'Staff learned it in one shift. Phone orders now show on the kitchen screen without extra calling.',
  },
]

function ReviewCard({ review }) {
  return (
    <article className="flex w-64 shrink-0 flex-col rounded-2xl bg-gray-light p-5 text-left sm:w-72 sm:p-6">
      <p className="text-sm tracking-wide text-primary" aria-hidden="true">
        ★★★★★
      </p>
      <p className="mt-3 flex-1 text-sm leading-6 text-text-dark sm:text-[15px]">
        “{review.quote}”
      </p>
      <div className="mt-5 flex items-center gap-3">
        <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-black text-[11px] font-bold text-text-light">
          {review.initials}
        </span>
        <div>
          <p className="text-sm font-bold text-text-dark">{review.name}</p>
          <p className="text-xs text-text-muted">{review.role}</p>
        </div>
      </div>
    </article>
  )
}

function ReviewsSection() {
  return (
    <section
      id="reviews"
      className="scroll-mt-24 overflow-x-hidden bg-white px-3 py-16 sm:px-4 lg:scroll-mt-28 lg:py-24"
    >
      <div className="reviews-shell w-full rounded-[2rem] pt-14 sm:rounded-[2.75rem] sm:pt-20">
        <div className="px-6 text-center sm:px-12">
          <h2 className="mx-auto max-w-3xl text-3xl font-bold leading-tight text-text-light sm:text-5xl">
            See why restaurants pick one system
          </h2>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-xs font-semibold text-text-light sm:text-sm">
              <i className="h-2 w-2 rounded-full bg-primary" />
              Kitchen + counter
            </span>
            <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-xs font-semibold text-text-light sm:text-sm">
              <i className="h-2 w-2 rounded-full bg-primary" />
              One system
            </span>
          </div>

          <p className="mt-6 text-sm text-white/70">
            ★★★★★ from owners who run the floor
          </p>
        </div>

        <div className="reviews-marquee mt-12 pb-10 sm:pb-12">
          <div className="reviews-marquee-track">
            {[...reviews, ...reviews].map((review, index) => (
              <ReviewCard key={`${review.name}-${index}`} review={review} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default ReviewsSection
