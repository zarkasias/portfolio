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
      className="scroll-mt-16 py-16 md:py-24"
    >
      <div className="page-width">
        <h2
          id="process-heading"
          className="font-heading text-4xl font-semibold leading-[1.05] md:text-5xl"
        >
          Simple from start to finish.
        </h2>

        <ol className="mt-10 grid gap-8 md:mt-14 md:grid-cols-3 md:gap-10">
          {steps.map((step, index) => (
            <li key={step.title} className="border-t-2 border-foreground pt-5">
              <span
                aria-hidden="true"
                className="font-heading text-6xl font-semibold leading-none text-primary"
              >
                {index + 1}
              </span>

              <h3 className="mt-4 font-sans text-xl font-bold tracking-normal">
                {step.title}
              </h3>

              <p className="mt-2 max-w-sm text-lg leading-relaxed text-muted-foreground">
                {step.description}
              </p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
