import { Check } from "lucide-react";

const assurances = [
  "No hourly billing",
  "Pay in full or in 3 payments",
  "You own everything",
];

const quickFix = {
  name: "Quick fixes",
  price: "From $300",
  timeline: "a few days",
  summary:
    "For a specific problem that's costing you calls or customers. One fix from $300, or two or three together for $500.",
  includes: [
    "A broken menu or layout on phones",
    "Missing click-to-call or quote buttons",
    "A slow page or a form that doesn't send",
  ],
};

const packages = [
  {
    name: "Refresh",
    price: "$1,500",
    installments: "or 3 payments of $500",
    timeline: "1–2 weeks",
    summary: "For a site that works but looks tired or breaks on phones.",
    includes: [
      "Up to 5 pages",
      "New layout, typography, and color",
      "Mobile fixes for menus, layouts, and buttons",
      "Speed and accessibility pass",
      "Click-to-call and quote buttons",
    ],
  },
  {
    name: "Redesign",
    price: "$3,500",
    installments: "or 3 payments of $1,167",
    timeline: "3–4 weeks",
    summary: "For a site that needs a real update, without starting over.",
    includes: [
      "Up to 12 pages",
      "Everything in Refresh",
      "Copy cleanup so visitors know what to do next",
      "On-page SEO and redirects, so you keep your Google rankings",
      "Google Business Profile tune-up and analytics",
    ],
    featured: true,
  },
  {
    name: "Redesign + Growth",
    price: "From $6,500",
    installments: "or 3 payments from $2,167",
    timeline: "5–8 weeks",
    summary: "For businesses that need their site to do more.",
    includes: [
      "Everything in Redesign",
      "Booking or quote request forms",
      "Connections to the tools you already use",
      "Pages for each service area you cover",
      "Moving content over from your old site",
    ],
  },
];

export function Pricing() {
  return (
    <section
      id="pricing"
      aria-labelledby="pricing-heading"
      className="scroll-mt-16 pb-16 md:pb-24"
    >
      <div className="page-width">
        <div className="mx-auto max-w-3xl text-center">
          <h2
            id="pricing-heading"
            className="font-heading text-4xl font-semibold leading-[1.05] [text-wrap:balance] md:text-5xl"
          >
            Clear prices, agreed in writing before any work starts.
          </h2>

          <p className="mx-auto mt-6 max-w-[60ch] text-lg leading-relaxed text-muted-foreground [text-wrap:balance]">
            You&apos;ll know the full cost up front. Pay-monthly website plans
            can top $4,000 over two years and keep the site if you leave. With
            me, you pay once and it&apos;s yours.
          </p>

          <ul className="mt-6 flex flex-col items-center gap-x-8 gap-y-2 font-bold text-foreground sm:flex-row sm:flex-wrap sm:justify-center">
            {assurances.map((item) => (
              <li key={item} className="flex items-center gap-2">
                <Check
                  aria-hidden="true"
                  className="h-4 w-4 shrink-0 text-primary"
                />
                {item}
              </li>
            ))}
          </ul>
        </div>

        <ul className="mt-10 grid gap-6 md:mt-14 lg:grid-cols-3">
          {packages.map((pkg) => (
            <li
              key={pkg.name}
              className={`flex flex-col rounded-lg border bg-card p-6 text-card-foreground shadow-sm md:p-8 ${
                pkg.featured ? "border-2 border-primary" : "border-border"
              }`}
            >
              <div className="flex items-center justify-between gap-4">
                <h3 className="font-sans text-xl font-bold tracking-normal">
                  {pkg.name}
                </h3>
                {pkg.featured && (
                  <span className="rounded-full bg-primary px-3 py-1 text-sm font-bold text-primary-foreground">
                    Most popular
                  </span>
                )}
              </div>

              <p className="mt-4 font-heading text-4xl font-semibold">
                {pkg.price}
              </p>
              <p className="mt-1 font-bold text-foreground">
                {pkg.installments}
              </p>
              <p className="mt-1 text-muted-foreground">
                Usually {pkg.timeline}
              </p>

              <p className="mt-4 text-lg leading-relaxed">{pkg.summary}</p>

              <ul className="mt-6 space-y-3 border-t border-border pt-6">
                {pkg.includes.map((item) => (
                  <li key={item} className="flex gap-3">
                    <Check
                      aria-hidden="true"
                      className="mt-1 h-4 w-4 shrink-0 text-primary"
                    />
                    <span className="text-muted-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>

        <div className="mt-6 grid gap-6 rounded-lg border border-border bg-card p-6 text-card-foreground shadow-sm md:grid-cols-[2fr_3fr] md:gap-10 md:p-8">
          <div>
            <h3 className="font-sans text-xl font-bold tracking-normal">
              {quickFix.name}
            </h3>
            <p className="mt-4 font-heading text-4xl font-semibold">
              {quickFix.price}
            </p>
            <p className="mt-1 text-muted-foreground">
              Usually {quickFix.timeline}
            </p>
          </div>
          <div>
            <p className="text-lg leading-relaxed">{quickFix.summary}</p>
            <ul className="mt-4 space-y-3">
              {quickFix.includes.map((item) => (
                <li key={item} className="flex gap-3">
                  <Check
                    aria-hidden="true"
                    className="mt-1 h-4 w-4 shrink-0 text-primary"
                  />
                  <span className="text-muted-foreground">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <p className="mt-6 text-lg">
          Not sure which fits?{" "}
          <a
            href="#checkup"
            className="font-bold text-primary underline underline-offset-4 hover:text-foreground"
          >
            Start with a free site checkup.
          </a>
        </p>

        <div className="mt-8 grid gap-4 rounded-lg bg-secondary p-6 md:grid-cols-[1fr_auto] md:items-center md:p-8">
          <div>
            <h3 className="font-sans text-xl font-bold tracking-normal">
              Ongoing care, from $99 a month
            </h3>
            <p className="mt-2 max-w-[65ch] text-lg leading-relaxed text-muted-foreground">
              Hosting, updates, backups, and security monitoring, so your site
              keeps working after launch. Higher plans include monthly edits and
              a simple report on visits and calls.
            </p>
          </div>
          <a href="#checkup" className="btn-cta w-full md:w-auto">
            Get a free site checkup
          </a>
        </div>
      </div>
    </section>
  );
}
