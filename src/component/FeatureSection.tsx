type Feature = {
  title: string;
  description: string;
  icon: "campus" | "service" | "organize";
  color: string;
};

const features: Feature[] = [
  {
    title: "Campus life, all together",
    description:
      "Find academic, cultural, and social events from across your campus in one welcoming place.",
    icon: "campus",
    color: "text-emerald-600",
  },
  {
    title: "Make service meaningful",
    description:
      "Discover volunteer opportunities, community drives, and causes that bring students together.",
    icon: "service",
    color: "text-amber-600",
  },
  {
    title: "Bring your event to life",
    description:
      "Give student organizers a place to share event details and invite their campus community.",
    icon: "organize",
    color: "text-sky-600",
  },
];

function FeatureIcon({ icon }: { icon: Feature["icon"] }) {
  if (icon === "campus") {
    return (
      <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" className="h-7 w-7">
        <path
          d="m3 9 9-5 9 5-9 5-9-5Zm3 2v5c3.5 2.5 8.5 2.5 12 0v-5M21 10v6"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  }

  if (icon === "service") {
    return (
      <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" className="h-7 w-7">
        <path
          d="M12 20s-7-4.4-7-9.5A3.8 3.8 0 0 1 12 8a3.8 3.8 0 0 1 7 2.5C19 15.6 12 20 12 20Z"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M8.5 12h2l1.2-2 1.6 4 1.1-2h1.1"
          stroke="currentColor"
          strokeWidth="1.6"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  }

  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" className="h-7 w-7">
      <rect
        x="4"
        y="5"
        width="16"
        height="16"
        rx="2"
        stroke="currentColor"
        strokeWidth="1.8"
      />
      <path
        d="M8 3v4m8-4v4M4 10h16m-9 4 2 2 4-4"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default function FeatureSection() {
  return (
    <section
      aria-labelledby="features-heading"
      className="bg-slate-50 px-5 py-20 sm:px-8 sm:py-24"
    >
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-bold tracking-[0.16em] text-emerald-600">
            WHY CAMPUS-NET
          </p>
          <h2
            id="features-heading"
            className="mt-4 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl"
          >
            Built for a more connected campus
          </h2>
          <p className="mt-4 text-base leading-7 text-slate-600 sm:text-lg sm:leading-8">
            From campus gatherings to community service, bring opportunities
            and the people behind them together.
          </p>
        </div>

        <div className="mt-12 grid gap-5 md:grid-cols-3 md:gap-6 lg:mt-14">
          {features.map((feature) => (
            <article
              key={feature.title}
              className="rounded-3xl border border-slate-200 bg-white p-7 shadow-sm transition duration-200 hover:-translate-y-1 hover:shadow-lg hover:shadow-slate-900/5 sm:p-8"
            >
              <div
                className={`flex h-14 w-14 items-center justify-center rounded-2xl bg-slate-100 ${feature.color}`}
              >
                <FeatureIcon icon={feature.icon} />
              </div>
              <h3 className="mt-6 text-xl font-bold tracking-tight text-slate-900">
                {feature.title}
              </h3>
              <p className="mt-3 leading-7 text-slate-600">
                {feature.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
