import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "How much will it cost?",
    answer:
      "Quick fixes start at $300, a Refresh is $1,500, a Redesign is $3,500, and bigger projects start at $6,500. After a free checkup and a short call, you'll get the exact price in writing before any work starts, and you can split the cost into payments. No hourly billing and no surprise invoices.",
  },
  {
    question: "How long does it take?",
    answer:
      "A Refresh usually takes 1 to 2 weeks and a Redesign 3 to 4 weeks. Your current site stays up the whole time, so customers can still find you.",
  },
  {
    question: "Will I lose my Google rankings?",
    answer:
      "No. Because I improve the site you have rather than starting over, your pages and addresses stay put. Anything that does move gets a redirect, and I check your Google listing after launch.",
  },
  {
    question: "Do I have to change my hosting or website platform?",
    answer:
      "Usually not. I work with what you have. If moving would save you money or trouble, I'll explain why and let you decide.",
  },
  {
    question: "Who owns the website?",
    answer:
      "You do. Once the final payment is made, the site, its content, and your domain are yours, whether or not you keep working with me.",
  },
  {
    question: "What if I don't like the changes?",
    answer:
      "You review everything on a private preview before it goes live, and two rounds of changes are included. Nothing launches until you approve it.",
  },
  {
    question: "What happens after launch?",
    answer:
      "I walk you through the updated site. You can take it from there, or choose a care plan from $99 a month that covers hosting, updates, backups, and security, with monthly edits on higher plans.",
  },
  {
    question: "Do you only work with businesses in Northern Virginia?",
    answer:
      "No. I'm based in Northern Virginia and happy to meet locally, but I work with businesses anywhere by phone and video.",
  },
];

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map(({ question, answer }) => ({
    "@type": "Question",
    name: question,
    acceptedAnswer: { "@type": "Answer", text: answer },
  })),
};

export function Faq() {
  return (
    <section
      id="faq"
      aria-labelledby="faq-heading"
      className="scroll-mt-16 py-16 md:py-24"
    >
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <div className="page-width grid gap-10 lg:grid-cols-[2fr_3fr] lg:gap-16">
        <h2
          id="faq-heading"
          className="font-heading text-4xl font-semibold leading-[1.1] [text-wrap:balance] md:text-5xl"
        >
          Questions owners usually ask.
        </h2>

        <div className="border-t-2 border-foreground">
          {faqs.map(({ question, answer }) => (
            <details key={question} className="group border-b border-border">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 py-5 text-xl font-bold [&::-webkit-details-marker]:hidden">
                {question}
                <ChevronDown
                  aria-hidden="true"
                  className="h-5 w-5 shrink-0 transition-transform group-open:rotate-180"
                />
              </summary>
              <p className="max-w-[60ch] pb-6 text-lg leading-relaxed text-muted-foreground">
                {answer}
              </p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
