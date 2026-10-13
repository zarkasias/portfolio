const steps = [
  {
    title: "Let's Talk",
    description:
      "Tell me about your site, what's not working, and what you'd like to improve.",
  },
  {
    title: "Make a Plan",
    description:
      "I'll recommend the best approach, and we'll agree on what needs to be done.",
  },
  {
    title: "Make It Better",
    description:
      "I'll make the improvements, test the changes, and get your site ready to go.",
  },
];

export function Process() {
  return (
    <section
      id="process"
      aria-labelledby="process-heading"
      className="scroll-mt-24 py-16 md:py-24"
    >
      <div className="container mx-auto px-6">
        <div className="mb-12">
          <span className="mb-3 block text-xs font-semibold uppercase tracking-widest text-primary">
            The Process
          </span>

          <h2
            id="process-heading"
            className="font-heading text-3xl font-bold tracking-tight text-foreground md:text-4xl lg:text-5xl"
          >
            Simple from start to finish.
          </h2>

          <p className="mt-5 max-w-2xl text-lg text-muted-foreground">
            No complicated process. Just a clear path to a better site.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-3 md:gap-10">
          {steps.map((step, index) => (
            <div key={step.title} className="border-t border-border pt-6">
              <span
                aria-hidden="true"
                className="font-heading text-4xl font-semibold tracking-tight text-primary/40"
              >
                {String(index + 1).padStart(2, "0")}
              </span>

              <h3 className="mt-5 font-heading text-xl font-semibold text-foreground">
                {step.title}
              </h3>

              <p className="mt-3 max-w-sm leading-relaxed text-muted-foreground">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
