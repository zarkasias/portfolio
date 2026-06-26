import { Metadata } from "next";
import PageLayout from "@/components/layout/PageLayout";
import { Card, CardContent } from "@/components/ui/card";
import { Code2, Eye, TrendingUp, GraduationCap, Wrench, Users } from "lucide-react";

export const metadata: Metadata = {
  title: "About Chambers Consulting | Front-End UI Cleanup",
  description: "Chambers Consulting helps small businesses clean up and improve their existing websites, building clearer, faster, more accessible front-end UIs without a full rebuild.",
  openGraph: {
    title: "About Chambers Consulting | Front-End UI Cleanup",
    description: "Chambers Consulting helps small businesses clean up and improve their existing websites, building clearer, faster, more accessible front-end UIs without a full rebuild.",
    images: [
      {
        url: "/images/logos/cclogo-new.png",
        width: 32,
        height: 32,
      },
    ],
  },
};

const values = [
  {
    icon: Code2,
    title: "Technical Excellence",
    description:
      "We write clean, maintainable code that stands the test of time. Every project deserves attention to detail and performance optimization.",
  },
  {
    icon: Eye,
    title: "Accessibility First",
    description:
      "Websites should work for everyone. We build accessibility in from the start, not as an afterthought, so you reach your full audience.",
  },
  {
    icon: TrendingUp,
    title: "Business Focus",
    description:
      "Technology should drive business growth. We focus on improvements that work well technically and deliver measurable business results.",
  },
  {
    icon: GraduationCap,
    title: "Continuous Learning",
    description:
      "The web evolves constantly, and so do we. We stay current with the latest standards and best practices to deliver modern solutions.",
  },
];

const approach = [
  {
    icon: Wrench,
    title: "We improve, not rebuild",
    description:
      "We work with the site you already have, cleaning up and refining it instead of pushing an expensive ground-up rewrite.",
  },
  {
    icon: Users,
    title: "Built for small businesses",
    description:
      "We focus on the practical, high-impact fixes that help small businesses look professional and convert more visitors.",
  },
  {
    icon: TrendingUp,
    title: "27+ years of experience",
    description:
      "Founded in 2023, Chambers Consulting draws on more than 27 years of hands-on web development to deliver dependable results.",
  },
];

export default function AboutPage() {
  return (
    <PageLayout className="pt-24 md:w-[80%] mx-auto">
      {/* Hero Section */}
      <section className="text-center mb-12 px-4">
        <h1 className="text-3xl md:text-4xl font-heading font-bold mb-4">
          About Chambers Consulting
        </h1>
        <p className="text-xl text-muted-foreground mb-12 max-w-3xl mx-auto">
          We help small businesses clean up and improve their existing websites, clearer, faster,
          and more accessible, without a full rebuild.
        </p>
      </section>

      {/* Introduction Section */}
      <section className="mb-12 md:mb-16 px-4">
        <div className="max-w-3xl mx-auto space-y-6 text-center">
          <p className="text-lg text-muted-foreground">
            Founded in 2023, Chambers Consulting leverages over 27 years of experience in web
            development to help businesses build high-performance, accessible digital experiences.
          </p>
          <p className="text-lg text-muted-foreground">
            We focus on improving the websites businesses already have, refining the front-end UI so
            it&apos;s clearer, faster, and easier to use. Our approach combines technical excellence
            with a deep understanding of business needs.
          </p>
          <p className="text-sm text-muted-foreground">
            Founded by David Chambers.
          </p>
        </div>
      </section>

      {/* Values Section */}
      <section className="mb-12 md:mb-16 px-4">
        <h2 className="text-2xl font-bold mb-8 md:mb-12 text-center">Our Values</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 2xl:grid-cols-4 gap-6">
          {values.map((value) => (
            <Card key={value.title} className="border-border/50 shadow-sm hover:shadow-md transition-shadow">
              <CardContent className="p-6">
                <div className="flex flex-row items-center gap-4 mb-4">
                  <div className="w-10 h-10 shrink-0 rounded-lg bg-secondary text-primary flex items-center justify-center">
                    <value.icon className="w-5 h-5" />
                  </div>
                  <h3 className="text-xl font-bold">{value.title}</h3>
                </div>
                <p className="text-muted-foreground">{value.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Approach / Credibility Section */}
      <section className="mb-12 md:mb-20 px-4">
        <h2 className="text-2xl font-bold mb-8 md:mb-12 text-center">How We Work</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {approach.map((item) => (
            <Card key={item.title} className="border-border/50 shadow-sm hover:shadow-md transition-shadow">
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 mx-auto mb-4 rounded-lg bg-secondary text-primary flex items-center justify-center">
                  <item.icon className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold mb-2">{item.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{item.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>
    </PageLayout>
  );
}
