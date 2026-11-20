import { ContactForm } from "@/components/ContactForm";
import { contactPhone } from "@/data";

const darkLink =
  "mt-1 block break-words font-medium text-background underline underline-offset-4 hover:decoration-2 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-background";

export function ContactCta() {
  return (
    <section
      id="contact"
      aria-labelledby="contact-cta-heading"
      className="scroll-mt-16 py-16 md:py-20"
    >
      <div className="page-width">
        <div className="grid gap-8 rounded-3xl bg-foreground p-6 text-background sm:p-10 lg:grid-cols-[2fr_3fr] lg:gap-16 lg:p-14">
          <div>
            <h2
              id="contact-cta-heading"
              className="font-heading text-4xl font-semibold leading-[1.1] [text-wrap:balance] md:text-5xl"
            >
              Have a site that isn&apos;t working for you?
            </h2>

            <p className="mt-6 max-w-[50ch] text-lg leading-relaxed text-background/75">
              Tell me what&apos;s bothering you about it. I&apos;ll reply within
              one business day, and there&apos;s no obligation.
            </p>

            {contactPhone && (
              <p className="mt-6 text-lg text-background/75">
                Rather talk it through?
                <a href={contactPhone.href} className={darkLink}>
                  Call {contactPhone.display}
                </a>
              </p>
            )}

            <p className="mt-6 text-lg text-background/75">
              Prefer email?
              <a href="mailto:david@chambers-consulting.dev" className={darkLink}>
                david@chambers-consulting.dev
              </a>
            </p>
          </div>

          <div className="self-start rounded-2xl bg-card p-6 text-card-foreground">
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
}
