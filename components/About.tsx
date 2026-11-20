export function About() {
  return (
    <section
      id="about"
      aria-labelledby="about-heading"
      className="scroll-mt-16 bg-secondary py-16 md:py-20"
    >
      <div className="page-width grid gap-8 lg:grid-cols-[2fr_3fr] lg:gap-16">
        <h2
          id="about-heading"
          className="font-heading text-4xl font-semibold leading-[1.1] [text-wrap:balance] md:text-5xl"
        >
          You&apos;ll work directly with me
        </h2>

        <div className="max-w-[60ch] space-y-4 text-lg leading-relaxed">
          <p>
            I&apos;m David Chambers, and I&apos;ve spent more than 27 years building and
            improving websites. I&apos;m based in Northern Virginia and work with
            businesses anywhere.
          </p>

          <p>
            There&apos;s no account manager and no handoff. The person you talk to is
            the person doing the work. I&apos;ll explain what I find in plain
            English, recommend what&apos;s worth fixing, and tell you what can wait.
          </p>
        </div>
      </div>
    </section>
  );
}
