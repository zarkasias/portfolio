import { HeroVisual } from "./HeroVisual";

export const Hero = () => {
  return (
    <section
      id="home"
      aria-labelledby="hero-heading"
      className="bg-hero pb-14 pt-28 md:pb-20 md:pt-32"
    >
      <div className="page-width hero-grid">
        <div>
          <h1
            id="hero-heading"
            className="font-heading text-4xl font-semibold leading-[1.08] text-foreground [text-wrap:balance] sm:text-5xl xl:text-6xl"
          >
            A better website for your small business, without starting over.
          </h1>

          <p className="mt-6 max-w-[60ch] text-lg leading-relaxed text-muted-foreground">
            I'm David Chambers, a website specialist with 27+ years of
            experience. I help small businesses modernize how their sites look,
            fix problems on phones, and make it easier for customers to call,
            book, or get in touch.
          </p>

          <a href="#contact" className="btn-cta mt-8 w-full sm:w-auto">
            Tell me about your site
          </a>

          <ul className="mt-8 space-y-1 text-muted-foreground">
            <li>I work with your existing site.</li>
            <li>Based in Northern Virginia, working with businesses anywhere.</li>
          </ul>
        </div>

        <HeroVisual />
      </div>
    </section>
  );
};
