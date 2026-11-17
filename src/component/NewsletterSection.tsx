export default function NewsletterSection() {
  return (
    <section
      aria-labelledby="newsletter-heading"
      className="bg-slate-50 px-5 pb-14 pt-4 sm:px-8 sm:pb-16"
    >
      <div className="relative isolate mx-auto max-w-7xl overflow-hidden rounded-[2rem] bg-gradient-to-br from-emerald-700 via-teal-700 to-emerald-900 px-6 py-10 text-center shadow-xl shadow-emerald-950/10 sm:px-12 sm:py-12 lg:px-20 lg:py-14">
        <div
          aria-hidden="true"
          className="absolute -left-20 -top-32 -z-10 h-80 w-80 rounded-full bg-emerald-300/10 blur-3xl"
        />
        <div
          aria-hidden="true"
          className="absolute -bottom-40 -right-20 -z-10 h-96 w-96 rounded-full bg-teal-300/10 blur-3xl"
        />

        <p className="inline-flex rounded-full bg-white/15 px-4 py-1.5 text-xs font-bold tracking-wider text-emerald-50">
          THE CAMPUS-NET BULLETIN
        </p>
        <h2
          id="newsletter-heading"
          className="mx-auto mt-4 max-w-3xl text-3xl font-extrabold tracking-tight text-white sm:text-4xl lg:text-5xl"
        >
          Good things are happening on campus.
          <span className="block">Be the first to know.</span>
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-emerald-50/85 sm:text-lg sm:leading-8">
          Get a thoughtful weekly roundup of campus events, student initiatives,
          and ways to make a difference in your community.
        </p>

        <div className="mx-auto mt-6 flex max-w-2xl flex-col gap-3 sm:flex-row">
          <label htmlFor="newsletter-email" className="sr-only">
            University email address
          </label>
          <input
            id="newsletter-email"
            type="email"
            autoComplete="email"
            placeholder="Enter your university email address"
            className="min-h-14 min-w-0 flex-1 rounded-2xl border border-white/30 bg-white px-5 text-left text-slate-900 outline-none placeholder:text-slate-400 focus:border-amber-300 focus:ring-4 focus:ring-amber-200/30"
          />
          <button
            type="button"
            className="inline-flex min-h-14 items-center justify-center gap-3 rounded-2xl bg-amber-400 px-7 font-bold text-slate-950 shadow-lg shadow-emerald-950/20 transition hover:bg-amber-300 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-amber-200"
          >
            Subscribe
            <svg
              aria-hidden="true"
              viewBox="0 0 24 24"
              fill="none"
              className="h-5 w-5"
            >
              <path
                d="m22 2-7 20-4-9-9-4 20-7ZM22 2 11 13"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </div>
        <p className="mt-4 text-sm text-emerald-50/70">
          A little campus inspiration, delivered once a week.
        </p>
      </div>
    </section>
  );
}
