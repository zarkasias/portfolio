import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Check } from "lucide-react";
import PageLayout from "@/components/layout/PageLayout";
import { BeforeAfterSlider } from "@/components/preview/BeforeAfterSlider";
import { getAllPreviews, getPreviewByToken } from "@/lib/previews";

export const dynamicParams = false;

export const metadata: Metadata = {
  title: "Website refresh preview | Chambers Consulting",
  robots: { index: false, follow: false },
};

export function generateStaticParams() {
  return getAllPreviews().map((p) => ({ token: p.token }));
}

export default async function PreviewPage({
  params,
}: {
  params: Promise<{ token: string }>;
}) {
  const { token } = await params;
  const preview = getPreviewByToken(token);
  if (!preview) notFound();

  const date = new Date(`${preview.preparedOn}T12:00:00Z`).toLocaleDateString(
    "en-US",
    { year: "numeric", month: "long", day: "numeric", timeZone: "UTC" },
  );
  const subject = encodeURIComponent(
    `Website refresh for ${preview.businessName}`,
  );

  return (
    <PageLayout fullWidth>
      <section className="bg-hero pb-10 pt-28">
        <div className="page-width">
          <p className="text-sm text-muted-foreground">Prepared on {date}</p>
          <h1 className="mt-2 font-heading text-4xl font-semibold leading-[1.1] [text-wrap:balance] md:text-5xl">
            Prepared for {preview.businessName}
          </h1>
          <p className="mt-4 max-w-[60ch] text-lg text-muted-foreground">
            Here is your site today next to a refreshed version. Drag the
            divider to compare them.
          </p>
        </div>
      </section>

      <section className="page-width py-10" aria-label="Before and after">
        <BeforeAfterSlider images={preview.images} alt={preview.imageAlt} />
      </section>

      <section className="page-width py-10" aria-labelledby="found">
        <h2 id="found" className="font-heading text-3xl font-semibold">
          What we found
        </h2>
        <ul className="mt-6 grid gap-4 md:grid-cols-3">
          {preview.findings.map((f) => (
            <li
              key={f.title}
              className="rounded-lg border border-border bg-card p-5"
            >
              <h3 className="font-heading text-lg font-semibold">{f.title}</h3>
              <p className="mt-2 text-muted-foreground">{f.detail}</p>
            </li>
          ))}
        </ul>
      </section>

      <section className="bg-hero py-10" aria-labelledby="fixes">
        <div className="page-width">
          <h2 id="fixes" className="font-heading text-3xl font-semibold">
            What a refresh fixes
          </h2>
          <ul className="mt-6 space-y-3 text-lg">
            {preview.fixes.map((fix) => (
              <li key={fix} className="flex items-start gap-3">
                <Check aria-hidden="true" className="mt-1 h-5 w-5 shrink-0 text-primary" />
                {fix}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="page-width py-12" aria-labelledby="talk">
        <h2 id="talk" className="font-heading text-3xl font-semibold">
          Let&apos;s talk
        </h2>
        <p className="mt-3 max-w-[60ch] text-lg text-muted-foreground">
          If you like what you see, send me a note. There&apos;s no obligation.
        </p>
        <div className="mt-6 flex flex-wrap items-center gap-6">
          <a
            href={`mailto:david@chambers-consulting.dev?subject=${subject}`}
            className="btn-cta"
          >
            Let&apos;s talk
          </a>
          <a
            href="/#contact"
            className="font-medium text-primary underline underline-offset-4 hover:text-foreground"
          >
            Or use the contact form
          </a>
        </div>
        {preview.mockupUrl && (
          <p className="mt-8">
            <a
              href={preview.mockupUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium text-primary underline underline-offset-4 hover:text-foreground"
            >
              Open the full redesign
            </a>
          </p>
        )}
      </section>
    </PageLayout>
  );
}
