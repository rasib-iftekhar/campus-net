import Link from "next/link";

const navigationLinks = [
  { label: "Home overview", href: "/" },
  { label: "All campus events", href: "/events" },
  { label: "Host a club event", href: "/create-event" },
  { label: "My event schedule", href: "/joined-events" },
];

const eventCategories = [
  "Tech fests & hackathons",
  "Seminars, career & debate",
  "Cultural nights & club fairs",
  "Campus cleanups & social welfare",
];

function CampusMark() {
  return (
    <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-emerald-500 text-white shadow-lg shadow-emerald-500/20">
      <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" className="h-6 w-6">
        <path
          d="M3 9.5 12 5l9 4.5-9 4.5-9-4.5Z"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinejoin="round"
        />
        <path
          d="M6.5 11.5v4c3.5 2.5 7.5 2.5 11 0v-4M21 10v5"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </span>
  );
}

function ContactIcon({ type }: { type: "location" | "email" | "hours" }) {
  if (type === "location") {
    return (
      <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" className="mt-0.5 h-5 w-5 shrink-0 text-emerald-400">
        <path
          d="M20 10c0 5-8 12-8 12S4 15 4 10a8 8 0 1 1 16 0Z"
          stroke="currentColor"
          strokeWidth="1.8"
        />
        <circle cx="12" cy="10" r="2.5" stroke="currentColor" strokeWidth="1.8" />
      </svg>
    );
  }

  if (type === "email") {
    return (
      <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" className="mt-0.5 h-5 w-5 shrink-0 text-emerald-400">
        <rect x="3" y="5" width="18" height="14" rx="2" stroke="currentColor" strokeWidth="1.8" />
        <path d="m4 7 8 6 8-6" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
      </svg>
    );
  }

  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" className="mt-0.5 h-5 w-5 shrink-0 text-emerald-400">
      <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.8" />
      <path d="M12 7v5l3 2" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
    </svg>
  );
}

export default function Footer() {
  return (
    <footer className="mt-auto bg-slate-950 text-slate-300">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 py-14 sm:px-8 sm:py-16 md:grid-cols-2 lg:grid-cols-[1.15fr_1fr_1.2fr_1.1fr] lg:gap-8">
        <div>
          <Link href="/" className="inline-flex items-center gap-3">
            <CampusMark />
            <span className="text-xl font-extrabold tracking-tight text-white">
              Campus<span className="text-emerald-400">-Net</span>
            </span>
          </Link>
          <p className="mt-5 max-w-sm text-sm leading-6 text-slate-400">
            A campus event network bringing students, clubs, and communities
            together through learning, culture, and service.
          </p>
        </div>

        <nav aria-label="Footer navigation">
          <h2 className="text-sm font-bold uppercase tracking-wide text-white">
            Campus-Net
          </h2>
          <ul className="mt-4 space-y-3">
            {navigationLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="text-sm text-slate-400 transition hover:text-emerald-300 focus-visible:text-emerald-300"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div>
          <h2 className="text-sm font-bold uppercase tracking-wide text-white">
            Event categories
          </h2>
          <ul className="mt-4 space-y-3">
            {eventCategories.map((category) => (
              <li key={category} className="text-sm text-slate-400">
                {category}
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="text-sm font-bold uppercase tracking-wide text-white">
            Student coordination desk
          </h2>
          <ul className="mt-4 space-y-4 text-sm leading-6 text-slate-400">
            <li className="flex items-start gap-3">
              <ContactIcon type="location" />
              <span>
                Student Activity Center (TSC), Kumira Campus, Chattogram,
                Bangladesh
              </span>
            </li>
            <li className="flex items-start gap-3">
              <ContactIcon type="email" />
              <a
                href="mailto:events@campusnet.edu.bd"
                className="transition hover:text-emerald-300 focus-visible:text-emerald-300"
              >
                events@campusnet.edu.bd
              </a>
            </li>
            <li className="flex items-start gap-3">
              <ContactIcon type="hours" />
              <span>Sat – Wed: 8:30 AM – 5:00 PM (BST)</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10">
        <p className="mx-auto max-w-7xl px-5 py-5 text-center text-xs leading-5 text-slate-500 sm:px-8 sm:text-sm">
          © {new Date().getFullYear()} Campus-Net — University &amp; campus
          events platform. Built for student communities.
        </p>
      </div>
    </footer>
  );
}
