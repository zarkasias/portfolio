import Image from "next/image";
import { concepts } from "@/data/concepts";

export function ConceptRedesigns() {
  const approved = concepts.filter((concept) => concept.ownerApproved);
  if (approved.length === 0) return null;

  return (
    <section
      id="work"
      aria-labelledby="work-heading"
      className="scroll-mt-16 py-16 md:py-24"
    >
      <div className="page-width">
        <h2
          id="work-heading"
          className="max-w-3xl font-heading text-4xl font-semibold leading-[1.05] [text-wrap:balance] md:text-5xl"
        >
          What a few local sites could look like.
        </h2>
        <p className="mt-6 max-w-[60ch] text-lg leading-relaxed text-muted-foreground">
          Concept redesigns of real Northern Virginia businesses, shared with
          the owners&apos; permission. These are proposals, not client projects.
        </p>

        <ul className="mt-10 space-y-16 md:mt-14">
          {approved.map((concept) => (
            <li key={concept.slug} className="border-t-2 border-foreground pt-6">
              <h3 className="font-sans text-xl font-bold tracking-normal">
                {concept.business}
              </h3>
              <p className="mt-1 text-muted-foreground">
                {concept.type} · {concept.town}
              </p>
              <p className="mt-3 max-w-[65ch] text-lg leading-relaxed">
                {concept.summary}
              </p>

              <div className="mt-6 grid gap-6 md:grid-cols-2">
                {(
                  [
                    ["Today", concept.before],
                    ["Concept", concept.after],
                  ] as const
                ).map(([label, src]) => (
                  <figure key={label}>
                    <div className="overflow-hidden rounded-lg border border-border shadow-sm">
                      <Image
                        src={src}
                        alt={`${concept.business} website, ${label.toLowerCase()}`}
                        width={1600}
                        height={1000}
                        sizes="(min-width: 768px) 50vw, 100vw"
                        className="h-auto w-full"
                      />
                    </div>
                    <figcaption className="mt-2 text-sm font-bold">
                      {label}
                    </figcaption>
                  </figure>
                ))}
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
