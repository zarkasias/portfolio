import { Hero } from "@/components/Hero";
import PageLayout from "@/components/layout/PageLayout";
import { Services } from "@/components/Services";
import { WhyChambers } from "@/components/WhyChambers";
import { Process } from "@/components/Process";

export default function Home() {
  return (
    <PageLayout className="pt-4 md:pt-8">
      <Hero />

      <section
        aria-labelledby="frontend-problems-heading"
        className="relative my-8 overflow-hidden rounded-2xl border border-border bg-gradient-to-br from-secondary/80 via-background to-background md:my-12"
      >
        <div
          aria-hidden="true"
          className="absolute inset-y-0 left-0 w-1 bg-primary"
        />

        <div className="grid gap-10 px-6 py-10 sm:px-10 md:py-14 lg:grid-cols-[1.1fr_1fr] lg:gap-16">
          <div>
            <span className="mb-4 block text-xs font-semibold uppercase tracking-widest text-primary">
              Sound Familiar?
            </span>
            <h2
              id="frontend-problems-heading"
              className="max-w-xl font-heading text-3xl font-bold leading-[1.15] tracking-tight md:text-4xl"
            >
              Not happy with how your site{" "}
              <span className="text-primary">feels or performs?</span>
            </h2>

            <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground">
              Your site should make a great first impression, not get in the
              way.
            </p>

            <p className="mt-6 font-medium text-foreground">
              The good news? You may not need to start over.
            </p>
          </div>

          <ul className="divide-y divide-border border-y border-border">
            {[
              "Your site looks outdated",
              "Visitors struggle to find information",
              "Updating your site has become difficult",
              "Your site doesn't work well on mobile",
            ].map((item, index) => (
              <li key={item} className="flex items-start gap-5 py-4 sm:py-5">
                <span
                  aria-hidden="true"
                  className="mt-1 shrink-0 font-mono text-sm font-medium text-primary/60"
                >
                  {String(index + 1).padStart(2, "0")}
                </span>
                <span className="text-base font-medium leading-relaxed text-foreground sm:text-lg">
                  {item}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <Services />

      <div id="why-chambers" className="pt-10">
        <WhyChambers />
      </div>

      <Process />
    </PageLayout>
  );
}
