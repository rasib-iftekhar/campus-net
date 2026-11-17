import Link from "next/link";

function ArrowIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" className="h-5 w-5">
      <path
        d="M5 12h14m-6-6 6 6-6 6"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function CommunityIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" className="h-6 w-6">
      <path
        d="M16 20v-1.5a3.5 3.5 0 0 0-3.5-3.5h-5A3.5 3.5 0 0 0 4 18.5V20m15 0v-1.5a3.5 3.5 0 0 0-2.5-3.35M10 11a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7Zm7-6.8a3.5 3.5 0 0 1 0 6.6"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function HeartIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" className="h-5 w-5">
      <path
        d="M20.8 8.8c0 5.2-8.8 10-8.8 10S3.2 14 3.2 8.8A4.3 4.3 0 0 1 12 7.1a4.3 4.3 0 0 1 8.8 1.7Z"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default function CommunityBanner() {
  return (
    <section className="relative isolate overflow-hidden bg-[#062f2c] text-white">
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_75%_30%,rgba(16,185,129,0.2),transparent_42%),radial-gradient(ellipse_at_10%_100%,rgba(20,184,166,0.14),transparent_38%)]"
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 opacity-[0.12] [background-image:linear-gradient(rgba(255,255,255,0.12)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.12)_1px,transparent_1px)] [background-size:64px_64px] [mask-image:linear-gradient(to_right,black,transparent_82%)]"
      />

      <div className="mx-auto grid min-h-[calc(100svh-68px)] max-w-7xl items-center gap-14 px-5 py-16 sm:px-8 lg:grid-cols-[1.15fr_0.85fr] lg:gap-10 lg:py-20">
        <div className="max-w-3xl">
          <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-emerald-300/25 bg-emerald-300/10 px-4 py-2 text-sm font-semibold text-emerald-200">
            <CommunityIcon />
            <span>STUDENT-LED COMMUNITY IMPACT</span>
          </div>

          <h1 className="text-4xl font-extrabold leading-[1.08] tracking-tight sm:text-5xl lg:text-6xl">
            Small acts.
            <br />
            <span className="bg-gradient-to-r from-emerald-300 via-lime-200 to-amber-300 bg-clip-text text-transparent">
              Stronger communities.
            </span>
          </h1>

          <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300 sm:text-xl">
            Bring people together to support local causes, serve your neighbors,
            and create a more caring campus—one meaningful action at a time.
          </p>

          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <Link
              href="/events"
              className="inline-flex min-h-14 items-center justify-center gap-3 rounded-2xl bg-emerald-500 px-7 font-bold text-emerald-950 shadow-lg shadow-emerald-950/20 transition hover:bg-emerald-400 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-emerald-300"
            >
              Explore community events
              <ArrowIcon />
            </Link>
            <Link
              href="/create-event"
              className="inline-flex min-h-14 items-center justify-center gap-3 rounded-2xl border border-white/20 bg-white/10 px-7 font-semibold text-white backdrop-blur transition hover:border-white/35 hover:bg-white/15 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-emerald-300"
            >
              <span className="flex h-6 w-6 items-center justify-center rounded-full border border-current text-lg leading-none">
                +
              </span>
              Start a community drive
            </Link>
          </div>

          <div className="mt-11 grid max-w-2xl grid-cols-3 gap-4 border-t border-white/15 pt-6">
            {[
              ["01", "Discover a cause"],
              ["02", "Join your community"],
              ["03", "Make an impact"],
            ].map(([number, label]) => (
              <div key={number}>
                <p className="text-2xl font-extrabold text-emerald-300 sm:text-3xl">
                  {number}
                </p>
                <p className="mt-1 text-xs leading-5 text-slate-300 sm:text-sm">
                  {label}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="relative mx-auto flex aspect-square w-full max-w-[27rem] items-center justify-center">
          <div
            aria-hidden="true"
            className="absolute inset-[8%] rounded-full border border-emerald-200/10"
          />
          <div
            aria-hidden="true"
            className="absolute inset-[20%] rounded-full border border-emerald-200/10"
          />
          <div className="absolute inset-[28%] rounded-full bg-emerald-300/10 blur-2xl" />

          <div className="relative flex h-48 w-48 items-center justify-center rounded-full border border-emerald-100/20 bg-gradient-to-br from-emerald-300/20 to-teal-500/10 shadow-[0_0_90px_rgba(52,211,153,0.16)] sm:h-56 sm:w-56">
            <div className="flex h-28 w-28 items-center justify-center rounded-full bg-emerald-400 text-emerald-950 shadow-xl shadow-emerald-950/30 sm:h-32 sm:w-32">
              <CommunityIcon />
              <span className="sr-only">People coming together</span>
            </div>
            <div className="absolute -right-3 top-7 flex h-12 w-12 items-center justify-center rounded-2xl border border-white/15 bg-[#104c43] text-amber-300 shadow-lg sm:-right-5 sm:h-14 sm:w-14">
              <HeartIcon />
            </div>
            <div className="absolute -bottom-2 left-5 flex h-11 w-11 items-center justify-center rounded-full border border-white/15 bg-[#104c43] text-emerald-200 shadow-lg sm:left-7 sm:h-12 sm:w-12">
              <svg
                aria-hidden="true"
                viewBox="0 0 24 24"
                fill="none"
                className="h-5 w-5"
              >
                <path
                  d="M12 21s7-4.4 7-11V5l-7-2-7 2v5c0 6.6 7 11 7 11Z"
                  stroke="currentColor"
                  strokeWidth="1.7"
                  strokeLinejoin="round"
                />
                <path
                  d="m9 12 2 2 4-4"
                  stroke="currentColor"
                  strokeWidth="1.7"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
          </div>

          <div className="absolute left-0 top-[22%] rounded-2xl border border-white/10 bg-[#0b4039]/90 px-4 py-3 shadow-xl shadow-black/10 backdrop-blur sm:-left-3">
            <p className="text-xs font-medium text-emerald-100/70">A place for</p>
            <p className="mt-1 text-sm font-bold text-white">Every helping hand</p>
          </div>
          <div className="absolute bottom-[18%] right-0 rounded-2xl border border-white/10 bg-[#0b4039]/90 px-4 py-3 shadow-xl shadow-black/10 backdrop-blur sm:-right-2">
            <p className="text-xs font-medium text-emerald-100/70">Together, we can</p>
            <p className="mt-1 text-sm font-bold text-white">Grow real change</p>
          </div>
        </div>
      </div>
    </section>
  );
}
