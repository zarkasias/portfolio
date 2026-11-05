import type { Metadata } from "next";
import PageLayout from "@/components/layout/PageLayout";
import { ContactForm } from "@/components/ContactForm";
import { Linkedin, Mail } from "lucide-react";

export const metadata: Metadata = {
  title: "Contact Chambers Consulting",
  description:
    "Have a website that needs improvement? Tell David Chambers what's bothering you about it and get a reply within one business day.",
  openGraph: {
    title: "Contact Chambers Consulting",
    description:
      "Tell me what's bothering you about your website and get a reply within one business day.",
    images: [{ url: "/opengraph-image", width: 1200, height: 630 }],
  },
};

export default function ContactPage() {
  return (
    <PageLayout className="pt-24 md:pt-32">
      <section
        aria-labelledby="contact-heading"
        className="mx-auto max-w-4xl px-4 pb-16 md:pb-24"
      >
        <div className="mb-10 md:mb-12">
          <h1
            id="contact-heading"
            className="font-heading text-5xl font-semibold leading-[1.02] text-foreground md:text-6xl"
          >
            Tell me about your site.
          </h1>

          <p className="mt-6 max-w-2xl leading-relaxed text-foreground md:text-lg">
            What's bothering you about your website? I read every message
            myself and reply within one business day, with no obligation.
          </p>
        </div>

        <ContactForm />

        <div className="mt-12 flex flex-col gap-4 border-t border-border pt-8 sm:flex-row sm:gap-8">
          <a
            href="mailto:david@chambers-consulting.dev"
            className="inline-flex items-center gap-3 text-foreground transition-colors hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
          >
            <Mail aria-hidden="true" className="h-5 w-5 shrink-0" />
            <span className="break-all font-medium">
              david@chambers-consulting.dev
            </span>
          </a>

          <a
            href="https://linkedin.com/in/davidmachambers"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 text-foreground transition-colors hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
          >
            <Linkedin aria-hidden="true" className="h-5 w-5 shrink-0" />
            <span className="font-medium">Connect on LinkedIn</span>
          </a>
        </div>
      </section>
    </PageLayout>
  );
}
