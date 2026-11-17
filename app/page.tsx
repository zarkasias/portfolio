import { Hero } from "@/components/Hero";
import PageLayout from "@/components/layout/PageLayout";
import { WhatIFix } from "@/components/WhatIFix";
import { About } from "@/components/About";
import { Process } from "@/components/Process";
import { ContactCta } from "@/components/ContactCta";
import { Pricing } from "@/components/Pricing";
import { Faq } from "@/components/Faq";
import { Checkup } from "@/components/Checkup";
import { ConceptRedesigns } from "@/components/ConceptRedesigns";

export default function Home() {
  return (
    <PageLayout fullWidth>
      <Hero />
      <WhatIFix />
      <Checkup />
      <ConceptRedesigns />
      <Process />
      <Pricing />
      <About />
      <Faq />
      <ContactCta />
    </PageLayout>
  );
}
