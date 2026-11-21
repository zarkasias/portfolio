const fixes = [
  {
    problem: "Your site looks outdated",
    fix: "I refresh the layout, typography, and color so your business makes a stronger impression, without rebuilding everything.",
  },
  {
    problem: "Visitors struggle to find information",
    fix: "I simplify the navigation and page structure so people can find what they need and get in touch.",
  },
  {
    problem: "Your site doesn't work well on mobile",
    fix: "I fix the layouts, menus, and buttons so the site is easy to use on a phone.",
  },
  {
    problem: "Your site is slow or hard for some people to use",
    fix: "I improve loading speed and accessibility so fewer visitors give up before they reach you.",
  },
  {
    problem: "Updating your site has become difficult",
    fix: "I clean up what's behind the scenes so future changes are simpler.",
  },
];

export function WhatIFix() {
  return (
    <section
      id="services"
      aria-labelledby="services-heading"
      className="scroll-mt-16 py-16 md:py-20"
    >
      <div className="page-width">
        <h2
          id="services-heading"
          className="max-w-3xl font-heading text-4xl font-medium leading-[1.05] [text-wrap:balance] md:text-5xl"
        >
          Not happy with how your site feels or performs?
        </h2>

        <dl className="mt-8 border-t-2 border-foreground md:mt-12">
          {fixes.map(({ problem, fix }) => (
            <div
              key={problem}
              className="grid gap-2 border-b border-border py-5 md:grid-cols-[2fr_3fr] md:gap-10"
            >
              <dt className="text-xl font-semibold">{problem}</dt>
              <dd className="max-w-[60ch] text-lg leading-relaxed text-muted-foreground">
                {fix}
              </dd>
            </div>
          ))}
        </dl>

        <p className="mt-8 text-lg">
          Not sure what your website needs?{" "}
          <a
            href="#contact"
            className="font-medium text-foreground underline underline-offset-4 hover:decoration-2"
          >
            Tell me what&apos;s bothering you
          </a>
        </p>
      </div>
    </section>
  );
}
