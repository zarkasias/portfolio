import { ContactForm } from "@/components/ContactForm";
import { contactPhone } from "@/data";

export function ContactCta() {
  return (
    <section
      id="contact"
      aria-labelledby="contact-cta-heading"
      className="scroll-mt-16 bg-hero py-16 md:py-24"
    >
      <div className="page-width grid gap-10 lg:grid-cols-[2fr_3fr] lg:gap-16">
        <div>
          <h2
            id="contact-cta-heading"
            className="font-heading text-4xl font-semibold leading-[1.1] [text-wrap:balance] md:text-5xl"
          >
            Have a site that isn't working for you?
          </h2>

          <p className="mt-6 max-w-[50ch] text-lg leading-relaxed text-muted-foreground">
            Tell me what's bothering you about it. I'll reply within one
            business day, and there's no obligation.
          </p>

          <p className="mt-6 text-lg text-muted-foreground">
            Rather talk it through?
            <a
              href={contactPhone.href}
              className="mt-1 block font-bold text-primary underline underline-offset-4 hover:text-foreground"
            >
              Call {contactPhone.display}
            </a>
          </p>

          <p className="mt-6 text-lg text-muted-foreground">
            Prefer email?
            <a
              href="mailto:david@chambers-consulting.dev"
              className="mt-1 block break-words font-bold text-primary underline underline-offset-4 hover:text-foreground"
            >
              david@chambers-consulting.dev
            </a>
          </p>
        </div>

        <div className="rounded-lg border border-border bg-card p-6 text-card-foreground shadow-sm md:p-8">
          <ContactForm />
        </div>
      </div>
    </section>
  );
}
