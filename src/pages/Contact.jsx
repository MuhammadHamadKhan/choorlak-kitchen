function handleSubmit(event) {
  event.preventDefault()
}

function handlePhoneInput(event) {
  event.target.value = event.target.value.replace(/\D/g, '')
}

function Contact() {
  return (
    <section
      id="contact"
      className="scroll-mt-24 bg-white px-5 py-16 sm:px-8 lg:scroll-mt-28 lg:py-24"
    >
      <div className="mx-auto grid max-w-7xl overflow-hidden rounded-[2rem] border border-border lg:grid-cols-2">
        <div className="footer-shell flex min-h-[22rem] flex-col justify-end p-8 sm:p-12">
          <h1 className="text-4xl font-bold leading-tight text-text-light sm:text-5xl">
            Tell us about your kitchen
          </h1>
          <p className="mt-4 max-w-sm text-base text-white/80 sm:text-lg">
            Request a free demo. We will show Choorlak on a menu that looks like
            yours.
          </p>
        </div>

        <div className="bg-white p-8 sm:p-12">
          <form className="grid gap-5 sm:grid-cols-2" onSubmit={handleSubmit}>
            <label className="text-sm font-medium text-text-dark">
              First name <span className="text-primary">*</span>
              <input
                type="text"
                name="firstName"
                required
                className="mt-2 w-full rounded-lg border border-border px-3 py-2.5 text-base outline-none focus:border-primary"
              />
            </label>

            <label className="text-sm font-medium text-text-dark">
              Last name <span className="text-primary">*</span>
              <input
                type="text"
                name="lastName"
                required
                className="mt-2 w-full rounded-lg border border-border px-3 py-2.5 text-base outline-none focus:border-primary"
              />
            </label>

            <label className="text-sm font-medium text-text-dark sm:col-span-2">
              Email <span className="text-primary">*</span>
              <input
                type="email"
                name="email"
                required
                className="mt-2 w-full rounded-lg border border-border px-3 py-2.5 text-base outline-none focus:border-primary"
              />
            </label>

            <label className="text-sm font-medium text-text-dark sm:col-span-2">
              Phone <span className="text-primary">*</span>
              <input
                type="tel"
                name="phone"
                required
                inputMode="numeric"
                pattern="[0-9]*"
                placeholder="03XX XXXXXXX"
                onInput={handlePhoneInput}
                className="mt-2 w-full rounded-lg border border-border px-3 py-2.5 text-base outline-none focus:border-primary"
              />
            </label>

            <label className="text-sm font-medium text-text-dark sm:col-span-2">
              Business name <span className="text-primary">*</span>
              <input
                type="text"
                name="businessName"
                required
                className="mt-2 w-full rounded-lg border border-border px-3 py-2.5 text-base outline-none focus:border-primary"
              />
            </label>

            <label className="text-sm font-medium text-text-dark sm:col-span-2">
              Number of branches <span className="text-primary">*</span>
              <input
                type="number"
                name="branches"
                min="1"
                required
                className="mt-2 w-full rounded-lg border border-border px-3 py-2.5 text-base outline-none focus:border-primary"
              />
            </label>

            <label className="text-sm font-medium text-text-dark sm:col-span-2">
              Country <span className="text-primary">*</span>
              <select
                name="country"
                required
                defaultValue=""
                className="mt-2 w-full rounded-lg border border-border bg-white px-3 py-2.5 text-base outline-none focus:border-primary"
              >
                <option value="" disabled>
                  Select a country
                </option>
                <option value="Pakistan">Pakistan</option>
                <option value="UAE">UAE</option>
                <option value="UK">UK</option>
                <option value="USA">USA</option>
              </select>
            </label>

            <div className="grid gap-3 sm:col-span-2">
              <label className="flex items-start gap-3 text-sm text-text-dark">
                <input
                  type="checkbox"
                  name="wantDemo"
                  required
                  className="mt-1 h-4 w-4 accent-primary"
                />
                <span>
                  I want a free demo. <span className="text-primary">*</span>
                </span>
              </label>

              <label className="flex items-start gap-3 text-sm text-text-dark">
                <input
                  type="checkbox"
                  name="updates"
                  className="mt-1 h-4 w-4 accent-primary"
                />
                <span>You can email me about Choorlak.</span>
              </label>
            </div>

            <button
              type="submit"
              className="rounded-xl bg-primary px-7 py-3.5 font-semibold text-text-light transition-colors hover:bg-primary-hover sm:col-span-2"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}

export default Contact
