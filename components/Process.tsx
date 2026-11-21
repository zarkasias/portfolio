const steps = [
  {
    title: "Free site checkup",
    when: "Within 2 business days",
    cost: "Free",
    description:
      "Send me your website address. You'll get a short video or report showing what's holding your site back and what I'd fix first.",
  },
  {
    title: "Clear written price",
    when: "A short call",
    cost: "Free",
    description:
      "After a short free call, you'll get a one-page proposal within a day. Your first payment books your spot.",
  },
  {
    title: "I make it better",
    when: "Usually a few days to 4 weeks",
    cost: "The price we agreed",
    description:
      "You get a short update every week and a private preview to review. Two rounds of changes are included, and nothing goes live until you approve it.",
  },
  {
    title: "Launch and look after it",
    when: "Launch day and beyond",
    cost: "Care plans from $99 a month",
    description:
      "I launch the site, check your Google listing and redirects, and walk you through it. A care plan keeps it updated and backed up.",
  },
];

export function Process() {
  return (
    <section
      id="process"
      aria-labelledby="process-heading"
      className="scroll-mt-16 py-16 md:py-20"
    >
      <div className="page-width">
        <h2
          id="process-heading"
          className="font-heading text-4xl font-medium leading-[1.05] md:text-5xl"
        >
          From checkup to launch
        </h2>

        <ol className="mt-8 grid gap-8 md:mt-12 md:grid-cols-2 md:gap-10 xl:grid-cols-4">
          {steps.map((step, index) => (
            <li key={step.title} className="border-t-2 border-foreground pt-5">
              <span
                aria-hidden="true"
                className="font-heading text-6xl font-normal leading-none text-muted-foreground tabular-nums"
              >
                {index + 1}
              </span>

              <h3 className="mt-4 font-sans text-xl font-semibold tracking-normal">
                {step.title}
              </h3>

              <dl className="mt-3 space-y-1 text-sm">
                <div className="flex gap-2">
                  <dt className="font-medium">When:</dt>
                  <dd className="text-muted-foreground">{step.when}</dd>
                </div>
                <div className="flex gap-2">
                  <dt className="font-medium">Cost:</dt>
                  <dd className="text-muted-foreground">{step.cost}</dd>
                </div>
              </dl>

              <p className="mt-3 max-w-sm text-lg leading-relaxed text-muted-foreground">
                {step.description}
              </p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
