import { Hero } from "@/components/Hero";
import PageLayout from "@/components/layout/PageLayout";
import { WhatIFix } from "@/components/WhatIFix";
import { About } from "@/components/About";
import { Process } from "@/components/Process";
import { ContactCta } from "@/components/ContactCta";
import { Pricing } from "@/components/Pricing";

export default function Home() {
  return (
    <PageLayout fullWidth>
      <Hero />
      <WhatIFix />
      <Process />
      <Pricing />
      <About />
      <ContactCta />
    </PageLayout>
  );
}
