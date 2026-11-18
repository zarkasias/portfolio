import { Check } from "lucide-react";

const assurances = [
  "No hourly billing and no surprises",
  "Pay in full, or split it into 3 payments",
  "You own everything when it's done",
];

const quickFix = {
  name: "Quick fixes",
  price: "$300",
  unit: "per fix",
  bundle: "or any 3 for $500",
  timeline: "a few days",
  summary: "For one nagging problem, like:",
  includes: [
    "A broken mobile menu",
    "A missing call button",
    "A slow page",
    "A form that doesn't send",
  ],
};

const packages = [
  {
    name: "Refresh",
    price: "$1,500",
    installments: "or 3 payments of $500",
    timeline: "1–2 weeks",
    pages: "Up to 5 pages",
    summary: "For when your site is fine but looks dated.",
    includes: [
      "A modern look: new layout, fonts, and colors",
      "Works properly on phones",
      "Loads faster and is easier for everyone to use",
      "\u201cCall now\u201d and \u201cGet a quote\u201d buttons where people expect them",
    ],
  },
  {
    name: "Redesign",
    price: "$3,500",
    installments: "or $1,500 to start, then 2 × $1,000",
    timeline: "3–4 weeks",
    pages: "Up to 12 pages",
    summary:
      "For when your site needs better pages and better words, not just a new coat of paint.",
    includes: [
      "Everything in Refresh",
      "Clearer wording that tells visitors what you do and why to choose you",
      "Keeps your Google ranking safe while things change",
      "Helps you show up better in local Google searches and Maps",
      "Shows you how many people visit and call",
    ],
    featured: true,
  },
  {
    name: "Redesign + Growth",
    price: "From $6,500",
    installments: "or $2,500 to start, then 2 × $2,000",
    timeline: "5–8 weeks",
    summary: "For businesses ready to get more leads from their site.",
    includes: [
      "Everything in Redesign",
      "Online booking or quote request forms",
      "Connects to the tools you already use, like your calendar, email, or CRM",
      "A page for each town or area you serve, so locals can find you",
      "I move all your existing content over for you",
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

          <p className="mx-auto mt-8 max-w-[60ch] text-lg leading-relaxed text-muted-foreground [text-wrap:balance]">
            <span className="font-bold text-foreground">
              Pay once. Own it forever.
            </span>{" "}
            Monthly website plans charge you as long as you have a site, and if
            you leave, your site stays with them. Mine is yours, even if you
            never spend another dollar with me.
          </p>
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
                {pkg.pages && <> · {pkg.pages}</>}
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
              {quickFix.price}{" "}
              <span className="font-sans text-lg font-normal text-muted-foreground">
                {quickFix.unit}
              </span>
            </p>
            <p className="mt-1 font-bold text-foreground">{quickFix.bundle}</p>
            <p className="mt-1 text-muted-foreground">
              Usually {quickFix.timeline}
            </p>
          </div>
          <div className="md:border-l md:border-border md:pl-10">
            <p className="text-lg leading-relaxed">{quickFix.summary}</p>
            <ul className="mt-4 grid gap-3 lg:grid-cols-2">
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
              Hosting, updates, backups, and security monitoring, so you never
              have to think about it. Higher plans add monthly edits and a
              simple report on visits and calls. Optional, and you can cancel
              anytime without losing your site.
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
