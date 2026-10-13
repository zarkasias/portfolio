export function WhyChambers() {
  return (
    <section
      aria-labelledby="why-chambers-heading"
      className="relative left-1/2 w-screen max-w-[100vw] -translate-x-1/2 bg-foreground py-16 text-background md:py-20"
    >
      <div className="mx-auto w-[90%] max-w-7xl">
        <div className="grid items-start gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
          <div>
            <span className="mb-4 block text-xs font-semibold uppercase tracking-widest text-background/70">
              Why Chambers Consulting
            </span>

            <h2
              id="why-chambers-heading"
              className="font-heading text-3xl font-bold leading-tight tracking-tight text-background md:text-4xl"
            >
              Experienced hands.
              <br />A better site.
            </h2>
          </div>

          <div className="max-w-2xl">
            <p className="text-lg leading-relaxed text-background">
              Over 27 years of front-end experience, helping businesses improve
              the sites they already have.
            </p>

            <p className="mt-4 leading-relaxed text-background/80">
              Work directly with me from start to finish. No unnecessary
              complexity or one-size-fits-all solutions.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
