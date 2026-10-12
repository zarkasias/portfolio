"use client";
import { Hero } from "@/components/Hero";
import PageLayout from "@/components/layout/PageLayout";
import { useRouter } from "next/navigation";
import { Card, CardContent } from "@/components/ui/card";
import {
  Layout,
  Smartphone,
  Eye,
  Zap,
  FileCode,
  Search,
  ListTodo,
  Wrench,
  CheckCircle2,
  Sparkles,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export default function Home() {
  const router = useRouter();

  return (
    <PageLayout className="pt-4 md:pt-8">
      <Hero />

      <section
        aria-labelledby="frontend-problems-heading"
        className="relative my-8 overflow-hidden rounded-2xl border border-border bg-gradient-to-br from-secondary/80 via-background to-background md:my-12"
      >
        <div
          aria-hidden="true"
          className="absolute inset-y-0 left-0 w-1 bg-primary"
        />

        <div className="grid gap-10 px-6 py-10 sm:px-10 md:py-14 lg:grid-cols-[1.1fr_1fr] lg:gap-16">
          <div>
            <h2
              id="frontend-problems-heading"
              className="max-w-xl font-heading text-3xl font-bold leading-[1.15] tracking-tight md:text-4xl"
            >
              Not happy with how your site{" "}
              <span className="text-primary">feels or performs?</span>
            </h2>

            <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground">
              Many teams find themselves with a functional product that feels
              visually inconsistent, cluttered, or brittle. You don&apos;t need
              a flashy agency or a complete rebuild. You need a specialist to
              tidy up what you already have.
            </p>
          </div>

          <ul className="divide-y divide-border border-y border-border">
            {[
              "Visually inconsistent UI elements",
              "Cluttered layouts that confuse users",
              "Outdated or unmaintainable CSS",
              "Poor mobile responsiveness",
            ].map((item, index) => (
              <li key={item} className="flex items-center gap-5 py-4 sm:py-5">
                <span
                  aria-hidden="true"
                  className="font-mono text-sm font-medium text-primary/60"
                >
                  {String(index + 1).padStart(2, "0")}
                </span>
                <span className="text-base font-medium leading-relaxed text-foreground sm:text-lg">
                  {item}
                </span>
              </li>
            ))}
          </ul>
        </div>

        <ul className="grid border-t border-border bg-card/80 sm:grid-cols-2 lg:grid-cols-4">
          {[
            { icon: Sparkles, label: "Looks professional" },
            { icon: Zap, label: "Loads faster" },
            { icon: CheckCircle2, label: "Easier to use" },
            { icon: Smartphone, label: "Works on mobile" },
          ].map(({ icon: Icon, label }) => (
            <li
              key={label}
              className="flex items-center gap-3 px-6 py-5 sm:px-8"
            >
              <Icon
                aria-hidden="true"
                className="h-5 w-5 shrink-0 text-primary"
              />
              <span className="text-sm font-medium text-foreground">
                {label}
              </span>
            </li>
          ))}
        </ul>
      </section>

      <section id="services" className="scroll-mt-24 py-24">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
              Front-End UI Cleanup
            </h2>
            <p className="text-muted-foreground">
              Practical, high-impact improvements for your existing codebase. No
              black-box magic, just solid engineering and design principles.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border-border/50 shadow-sm hover:shadow-md transition-shadow">
              <CardContent className="p-8">
                <div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-lg flex items-center justify-center mb-6">
                  <Layout className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold mb-3">Visual Consistency</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Audit and unify spacing, typography, and color usage. Creating
                  a coherent design system from existing chaotic styles.
                </p>
              </CardContent>
            </Card>

            <Card className="border-border/50 shadow-sm hover:shadow-md transition-shadow">
              <CardContent className="p-8">
                <div className="w-12 h-12 bg-green-50 text-green-600 rounded-lg flex items-center justify-center mb-6">
                  <Smartphone className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold mb-3">Responsive Triage</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Fixing broken layouts on mobile and tablet. Ensuring your
                  application works flawlessly across all device sizes.
                </p>
              </CardContent>
            </Card>

            <Card className="border-border/50 shadow-sm hover:shadow-md transition-shadow">
              <CardContent className="p-8">
                <div className="w-12 h-12 bg-purple-50 text-purple-600 rounded-lg flex items-center justify-center mb-6">
                  <Eye className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold mb-3">Accessibility (a11y)</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Improving contrast, keyboard navigation, and screen reader
                  support to make your product usable by everyone.
                </p>
              </CardContent>
            </Card>

            <Card className="border-border/50 shadow-sm hover:shadow-md transition-shadow">
              <CardContent className="p-8">
                <div className="w-12 h-12 bg-amber-50 text-amber-600 rounded-lg flex items-center justify-center mb-6">
                  <Zap className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold mb-3">Performance Tuning</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Reducing bundle sizes, optimizing images, and improving Core
                  Web Vitals for a snappier user experience.
                </p>
              </CardContent>
            </Card>

            <Card className="border-border/50 shadow-sm hover:shadow-md transition-shadow">
              <CardContent className="p-8">
                <div className="w-12 h-12 bg-slate-50 text-slate-600 rounded-lg flex items-center justify-center mb-6">
                  <FileCode className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold mb-3">Code Cleanup</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Refactoring massive components, removing dead CSS, and
                  implementing better project structure for maintainability.
                </p>
              </CardContent>
            </Card>

            <Card className="border-border/50 shadow-sm hover:shadow-md transition-shadow bg-secondary/20">
              <CardContent className="p-8 flex flex-col items-center justify-center text-center h-full">
                <h3 className="text-xl font-bold mb-3">Custom Request?</h3>
                <p className="text-muted-foreground mb-6">
                  Have a specific frontend headache?
                </p>
                <Button
                  variant="outline"
                  onClick={() => router.push("/contact")}
                >
                  Let&apos;s Discuss It <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section
        id="process"
        className="scroll-mt-24 border-y border-border/50 bg-slate-50 py-14"
      >
        <div className="container mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
              How It Works
            </h2>
            <p className="text-muted-foreground">
              A transparent, low-friction process designed to get results
              without disrupting your team&apos;s flow.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-12 relative">
            {/* Connector Line (Desktop) */}
            <div className="hidden md:block absolute top-12 left-[16%] right-[16%] h-0.5 bg-slate-200 -z-10"></div>

            <div className="relative flex flex-col items-center text-center">
              <div className="w-24 h-24 rounded-full bg-white border-4 border-slate-100 flex items-center justify-center mb-6 shadow-sm z-10">
                <Search className="w-10 h-10 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-3">1. Review & Audit</h3>
              <p className="text-muted-foreground text-sm leading-relaxed max-w-xs">
                We dive into your codebase and UI to identify the pain points,
                inconsistencies, and quick wins.
              </p>
            </div>

            <div className="relative flex flex-col items-center text-center">
              <div className="w-24 h-24 rounded-full bg-white border-4 border-slate-100 flex items-center justify-center mb-6 shadow-sm z-10">
                <ListTodo className="w-10 h-10 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-3">2. Recommendations</h3>
              <p className="text-muted-foreground text-sm leading-relaxed max-w-xs">
                You get a clear, prioritized action plan. We agree on the scope
                and high-impact fixes.
              </p>
            </div>

            <div className="relative flex flex-col items-center text-center">
              <div className="w-24 h-24 rounded-full bg-white border-4 border-slate-100 flex items-center justify-center mb-6 shadow-sm z-10">
                <Wrench className="w-10 h-10 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-3">3. Targeted Fixes</h3>
              <p className="text-muted-foreground text-sm leading-relaxed max-w-xs">
                We implement the improvements directly. Code is cleaned, UI is
                polished, and debt is reduced.
              </p>
            </div>
          </div>
        </div>
      </section>
    </PageLayout>
  );
}
