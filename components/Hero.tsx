import Link from "next/link";
import { ArrowDown, ArrowUpRight } from "lucide-react";

import { HeroShowcase } from "./HeroShowcase";

export const Hero = () => {
  return (
    <section
      id="home"
      aria-labelledby="hero-heading"
      className="relative pt-24 pb-12 md:pt-28 md:pb-12"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-b from-secondary/40 via-background to-background"
      />

      <div className="container mx-auto px-6">
        <div className="flex flex-col gap-16 lg:gap-20">
          <div className="w-full">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-border bg-card px-4 py-2 text-xs font-semibold uppercase tracking-widest text-primary">
              <span className="h-2 w-2 rounded-full bg-primary" />
              Front-End Design & Development
            </div>

            <h1
              id="hero-heading"
              className="mb-4 font-heading text-4xl font-bold leading-[1.1] tracking-tight text-foreground sm:text-5xl lg:text-6xl xl:text-7xl"
            >
              Your website deserves a{" "}
              <span className="text-primary">better front end.</span>
            </h1>

            <p className="mb-6 text-lg leading-relaxed text-muted-foreground md:text-xl">
              We clean up outdated code and redesign existing interfaces to
              create websites and applications that look better, work better,
              and are easier to maintain.
            </p>

            <div className="flex flex-col gap-3 sm:flex-row">
              <Link
                href="/contact"
                className="inline-flex min-h-12 items-center justify-center gap-2 rounded-lg bg-primary px-6 py-3 font-medium text-primary-foreground transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
              >
                Let's Talk About Your Project
                <ArrowUpRight className="h-4 w-4" />
              </Link>

              <Link
                href="#services"
                className="inline-flex min-h-12 items-center justify-center gap-2 rounded-lg border border-border bg-background px-6 py-3 font-medium text-foreground transition-colors hover:bg-secondary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
              >
                Explore Services
                <ArrowDown className="h-4 w-4" />
              </Link>
            </div>

            {/* <div className="mt-6 flex flex-wrap items-center gap-3 border-t border-border pt-6 text-sm text-muted-foreground">
              <span className="font-semibold text-foreground">27+ years</span>
              <span>of front-end UI experience</span>
              <span aria-hidden="true" className="hidden sm:inline">
                ·
              </span>
              <span>Design-minded engineering</span>
            </div> */}
          </div>

          {/* Right: Illustrative UI transformation */}
          <HeroShowcase />
        </div>
      </div>
    </section>
  );
};
