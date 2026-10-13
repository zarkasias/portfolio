import type { Metadata } from "next";
import PageLayout from "@/components/layout/PageLayout";
import { ArrowUpRight, Linkedin, Mail } from "lucide-react";

export const metadata: Metadata = {
  title: "Contact Chambers Consulting",
  description:
    "Have a site that needs improvement? Get in touch with Chambers Consulting to discuss redesign, modernization, and front-end cleanup.",
  openGraph: {
    title: "Contact Chambers Consulting",
    description:
      "Let's talk about improving your existing site with thoughtful redesign and front-end development.",
    images: [
      {
        url: "/images/logos/cclogo-new.png",
        width: 32,
        height: 32,
      },
    ],
  },
};

export default function ContactPage() {
  return (
    <PageLayout className="pt-24 md:pt-32" showFooterBlurb={false}>
      <section
        aria-labelledby="contact-heading"
        className="mx-auto max-w-4xl px-4 pb-16 md:pb-24"
      >
        <div className="mb-12 md:mb-16">
          <span className="mb-4 block text-xs font-semibold uppercase tracking-widest text-primary">
            Contact Chambers Consulting
          </span>

          <h1
            id="contact-heading"
            className="font-heading text-3xl font-bold tracking-tight text-foreground md:text-5xl"
          >
            Let's work together.
          </h1>

          <p className="mt-6 max-w-2xl md:text-lg leading-relaxed text-muted-foreground">
            Have a site that needs attention? Tell me what you'd like to
            improve, and we'll take it from there.
          </p>
        </div>

        <div className="border-t border-border pt-8 md:pt-10">
          <span className="mb-4 block text-xs font-semibold uppercase tracking-widest text-muted-foreground">
            Email Me Directly
          </span>

          <a
            href="mailto:david@chambers-consulting.dev"
            className="group inline-flex max-w-full items-center md:items-start gap-2 md:gap-3 text-primary transition-colors hover:text-primary/80 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
          >
            <Mail
              aria-hidden="true"
              className="md:mt-1 h-5 w-5 md:h-6 md:w-6 shrink-0"
            />

            <span className="break-all font-heading text-md font-semibold tracking-tight sm:text-2xl">
              david@chambers-consulting.dev
            </span>

            <ArrowUpRight
              aria-hidden="true"
              className="md:mt-1 h-5 w-5 shrink-0"
            />
          </a>

          <p className="mt-5 max-w-xl leading-relaxed text-muted-foreground">
            Whether it's a redesign, front-end cleanup, or something in between,
            I'd be happy to hear about it.
          </p>
        </div>

        <div className="mt-12 border-t border-border pt-8">
          <span className="mb-4 block text-xs font-semibold uppercase tracking-widest text-muted-foreground">
            Elsewhere
          </span>

          <a
            href="https://linkedin.com/in/davidmachambers"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 text-foreground transition-colors hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
          >
            <Linkedin aria-hidden="true" className="h-5 w-5" />
            <span className="font-medium">Connect on LinkedIn</span>
            <ArrowUpRight aria-hidden="true" className="h-4 w-4" />
          </a>
        </div>
      </section>
    </PageLayout>
  );
}
