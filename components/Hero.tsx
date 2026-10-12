import Link from "next/link";
import {
  ArrowDown,
  ArrowUpRight,
  Check,
  Code2,
  LayoutTemplate,
} from "lucide-react";

export const Hero = () => {
  return (
    <section
      id="home"
      aria-labelledby="hero-heading"
      className="relative overflow-hidden pt-24 pb-20 md:pt-30 md:pb-28"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-b from-secondary/40 via-background to-background"
      />

      <div className="container mx-auto px-6">
        <div className="grid items-center gap-14 lg:grid-cols-2 lg:gap-16">
          <div className="max-w-2xl">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-border bg-card px-4 py-2 texts-xs font-semibold uppercase tracking-widest text-primary">
              <span className="h-2 w-2 rounded-full bg-primary" />
              Front-End Design & Development
            </div>

            <h1
              id="hero-heading"
              className="mb-6 font-heading text-4xl font-bold leading-[1.12] tracking-tight text-foreground sm:text-5xl xl:text-6xl"
            >
              Your website deserves a{" "}
              <span className="text-primary">better front end.</span>
            </h1>

            <p className="mb-9 max-w-xl text-lg leading-relaxed text-muted-foreground">
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

            <div className="mt-10 flex flex-wrap items-center gap-3 border-t border-border pt-6 text-sm text-muted-foreground">
              <span className="font-semibold text-foreground">27+ years</span>
              <span>of front-end UI experience</span>
              <span aria-hidden="true" className="hidden sm:inline">
                ·
              </span>
              <span>Design-minded engineering</span>
            </div>
          </div>

          {/* Right: Illustrative UI transformation */}
          <div className="relative mx-auto w-full max-w-xl">
            <div className="rounded-2xl border border-slate-700 bg-slate-900 p-4 shadow-2xl sm:p-6">
              <div className="mb-6 flex items-center gap-2 border-b border-slate-700 pb-4">
                <span className="h-2.5 w-2.5 rounded-full bg-slate-500" />
                <span className="h-2.5 w-2.5 rounded-full bg-slate-500" />
                <span className="h-2.5 w-2.5 rounded-full bg-slate-500" />
                <span className="ml-auto text-xs text-slate-400">
                  Interface concept
                </span>
              </div>

              <div className="space-y-5">
                <div className="rounded-xl border border-slate-700 bg-slate-800 p-4">
                  <div className="mb-4 flex items-center gap-3">
                    <Code2 className="h-5 w-5 text-slate-400" />
                    <span className="text-sm font-medium text-slate-200">
                      Before
                    </span>
                    <span className="ml-auto text-xs text-slate-400">
                      Existing UI
                    </span>
                  </div>

                  <div className="space-y-3 opacity-75">
                    <div className="flex items-center gap-2">
                      <div className="h-8 w-8 rounded bg-slate-500" />
                      <div className="h-3 w-24 rounded bg-slate-600" />
                      <div className="ml-auto h-7 w-16 rounded bg-slate-600" />
                    </div>
                    <div className="h-3 w-full rounded bg-slate-600" />
                    <div className="h-3 w-3/4 rounded bg-slate-600" />
                    <div className="grid grid-cols-2 gap-2">
                      <div className="h-12 rounded bg-slate-700" />
                      <div className="h-12 rounded bg-slate-700" />
                    </div>
                  </div>
                </div>

                <div className="flex items-center justify-center gap-2 text-sm font-medium text-emerald-300">
                  <ArrowDown className="h-4 w-4" />
                  Cleanup + Redesign
                </div>

                <div className="rounded-xl border border-slate-200 bg-slate-50 p-4 shadow-lg">
                  <div className="mb-4 flex items-center gap-3">
                    <LayoutTemplate className="h-5 w-5 text-slate-700" />
                    <span className="text-sm font-semibold text-slate-800">
                      After
                    </span>
                    <Check className="ml-auto h-4 w-4 text-emerald-600" />
                  </div>

                  <div className="space-y-3">
                    <div className="flex items-center gap-2">
                      <div className="h-8 w-8 rounded-md bg-slate-700" />
                      <div className="h-3 w-24 rounded bg-slate-300" />
                      <div className="ml-auto h-7 w-16 rounded-md bg-slate-200" />
                    </div>
                    <div className="h-3 w-full rounded bg-slate-200" />
                    <div className="h-3 w-4/5 rounded bg-slate-200" />
                    <div className="grid grid-cols-2 gap-3">
                      <div className="h-12 rounded-lg border border-slate-200 bg-white" />
                      <div className="h-12 rounded-lg border border-slate-200 bg-white" />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <p className="mt-3 text-center text-xs text-muted-foreground">
              Illustrative interface modernization concept
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
