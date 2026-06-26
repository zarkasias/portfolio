"use client";
import { Hero } from "@/components/Hero";
import PageLayout from "@/components/layout/PageLayout";
import { useRouter } from "next/navigation";
import { Card, CardContent } from "@/components/ui/card";
import { Layout, Smartphone, Eye, Zap, FileCode, Search, ListTodo, Wrench, CheckCircle2, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export default function Home() {
  const router = useRouter();
  
  return (
    <PageLayout className="pt-4 md:pt-8">
      <Hero />

      <section className="py-24 bg-secondary/30 relative">
        <div className="absolute inset-0 bg-grid-pattern opacity-[0.03]"></div>
        <div className="container mx-auto px-6 relative">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-heading font-bold mb-6">Not happy with how your site feels or performs?</h2>
              <p className="text-lg text-muted-foreground mb-8">
                Many teams find themselves with a functional product that feels visually inconsistent, cluttered, or brittle.
                You don&apos;t need a flashy agency or a complete rebuild. You need a specialist to tidy up what you already have.
              </p>

              <ul className="space-y-4">
                {[
                  "Visually inconsistent UI elements",
                  "Cluttered layouts that confuse users",
                  "Outdated or unmaintainable CSS",
                  "Poor mobile responsiveness"
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-foreground/80">
                    <div className="w-6 h-6 rounded-full bg-red-100 text-red-600 flex items-center justify-center shrink-0">
                      <span className="text-xs font-bold">!</span>
                    </div>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-white rounded-xl shadow-xl border border-border overflow-hidden">
              {/* Browser chrome */}
              <div className="bg-slate-100 p-3 flex items-center gap-2 border-b border-border">
                <div className="flex gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-red-400"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                  <div className="w-3 h-3 rounded-full bg-green-400"></div>
                </div>
                <div className="ml-2 flex-1 bg-white border border-border rounded px-3 py-1 text-xs text-muted-foreground truncate">
                  yourbusiness.com
                </div>
              </div>

              {/* Before / After visual mockups */}
              <div className="grid grid-cols-2 divide-x divide-border">
                {/* Before: cluttered */}
                <div className="p-5">
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xs font-semibold text-red-600 uppercase tracking-wide">Before</span>
                    <span className="text-[10px] px-2 py-0.5 rounded-full bg-red-100 text-red-600 font-medium">Cluttered</span>
                  </div>
                  <div className="space-y-2.5">
                    <div className="flex items-center gap-2">
                      <div className="h-5 w-10 bg-orange-400 rounded-sm"></div>
                      <div className="h-3 w-14 bg-slate-300 rounded-sm rotate-1"></div>
                      <div className="h-6 w-9 bg-fuchsia-500 rounded ml-auto -rotate-2"></div>
                    </div>
                    <div className="h-2.5 w-full bg-slate-200 rounded"></div>
                    <div className="h-2.5 w-3/4 bg-slate-200 rounded rotate-1"></div>
                    <div className="h-2.5 w-5/6 bg-slate-200 rounded"></div>
                    <div className="h-2.5 w-2/3 bg-slate-200 rounded -rotate-1"></div>
                    <div className="h-7 w-24 bg-lime-500 rounded-full mt-3 ml-6 shadow"></div>
                    <div className="flex gap-2 pt-1">
                      <div className="h-10 w-10 bg-cyan-300 rounded -rotate-2"></div>
                      <div className="h-8 w-16 bg-slate-200 rounded mt-1"></div>
                    </div>
                  </div>
                </div>

                {/* After: clean */}
                <div className="p-5 bg-slate-50/60">
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xs font-semibold text-green-600 uppercase tracking-wide">After</span>
                    <span className="text-[10px] px-2 py-0.5 rounded-full bg-green-100 text-green-700 font-medium">Clean</span>
                  </div>
                  <div className="space-y-3">
                    <div className="flex items-center gap-2">
                      <div className="h-5 w-5 bg-primary rounded"></div>
                      <div className="h-3 w-14 bg-slate-300 rounded"></div>
                      <div className="flex gap-1.5 ml-auto">
                        <div className="h-2 w-6 bg-slate-200 rounded"></div>
                        <div className="h-2 w-6 bg-slate-200 rounded"></div>
                      </div>
                    </div>
                    <div className="h-2.5 w-full bg-slate-200 rounded"></div>
                    <div className="h-2.5 w-full bg-slate-200 rounded"></div>
                    <div className="h-2.5 w-2/3 bg-slate-200 rounded"></div>
                    <div className="h-8 w-28 bg-primary rounded-md mt-3"></div>
                    <div className="grid grid-cols-2 gap-2 pt-1">
                      <div className="h-12 bg-white border border-border rounded"></div>
                      <div className="h-12 bg-white border border-border rounded"></div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Plain-language outcomes */}
              <div className="border-t border-border p-4 flex flex-wrap gap-2 justify-center">
                {[
                  { icon: Sparkles, label: "Looks professional" },
                  { icon: Zap, label: "Loads faster" },
                  { icon: CheckCircle2, label: "Easier to use" },
                  { icon: Smartphone, label: "Works on mobile" },
                ].map(({ icon: Icon, label }) => (
                  <span key={label} className="inline-flex items-center gap-1.5 text-xs text-foreground/70 bg-secondary rounded-full px-3 py-1">
                    <Icon className="w-3.5 h-3.5 text-primary" />
                    {label}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="services" className="py-24">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">Front-End UI Cleanup</h2>
            <p className="text-muted-foreground">
              Practical, high-impact improvements for your existing codebase. 
              No black-box magic, just solid engineering and design principles.
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
                  Audit and unify spacing, typography, and color usage. Creating a coherent design system from existing chaotic styles.
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
                  Fixing broken layouts on mobile and tablet. Ensuring your application works flawlessly across all device sizes.
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
                  Improving contrast, keyboard navigation, and screen reader support to make your product usable by everyone.
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
                  Reducing bundle sizes, optimizing images, and improving Core Web Vitals for a snappier user experience.
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
                  Refactoring massive components, removing dead CSS, and implementing better project structure for maintainability.
                </p>
              </CardContent>
            </Card>

            <Card className="border-border/50 shadow-sm hover:shadow-md transition-shadow bg-secondary/20">
              <CardContent className="p-8 flex flex-col items-center justify-center text-center h-full">
                <h3 className="text-xl font-bold mb-3">Custom Request?</h3>
                <p className="text-muted-foreground mb-6">
                  Have a specific frontend headache?
                </p>
                <Button variant="outline" onClick={() => router.push('/contact')}>
                  Let&apos;s Discuss It <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>


      <section id="process" className="py-14 bg-slate-50 border-y border-border/50">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">How It Works</h2>
            <p className="text-muted-foreground">
              A transparent, low-friction process designed to get results without disrupting your team&apos;s flow.
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
                We dive into your codebase and UI to identify the pain points, inconsistencies, and quick wins.
              </p>
            </div>

            <div className="relative flex flex-col items-center text-center">
              <div className="w-24 h-24 rounded-full bg-white border-4 border-slate-100 flex items-center justify-center mb-6 shadow-sm z-10">
                <ListTodo className="w-10 h-10 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-3">2. Recommendations</h3>
              <p className="text-muted-foreground text-sm leading-relaxed max-w-xs">
                You get a clear, prioritized action plan. We agree on the scope and high-impact fixes.
              </p>
            </div>

            <div className="relative flex flex-col items-center text-center">
              <div className="w-24 h-24 rounded-full bg-white border-4 border-slate-100 flex items-center justify-center mb-6 shadow-sm z-10">
                <Wrench className="w-10 h-10 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-3">3. Targeted Fixes</h3>
              <p className="text-muted-foreground text-sm leading-relaxed max-w-xs">
                We implement the improvements directly. Code is cleaned, UI is polished, and debt is reduced.
              </p>
            </div>
          </div>
        </div>
      </section>
    </PageLayout>
  );
}
