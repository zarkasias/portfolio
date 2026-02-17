"use client";
import { Hero } from "@/components/Hero";
import PageLayout from "@/components/layout/PageLayout";
import { useRouter } from "next/navigation";
import { Card, CardContent } from "@/components/ui/card";
import { Layout, Smartphone, Eye, Zap, FileCode, Search, ListTodo, Wrench } from "lucide-react";
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
              <div className="bg-slate-900 text-slate-400 p-4 text-xs font-mono flex items-center gap-2 border-b border-slate-800">
                <div className="flex gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-red-500/20"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500/20"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500/20"></div>
                </div>
                <span className="ml-2">style.css vs modern-component.tsx</span>
              </div>
              <div className="p-6 md:p-8 font-mono text-sm leading-relaxed">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="opacity-50 blur-[0.5px]">
                    <div className="text-red-400 mb-2">{`// Before: Cluttered`}</div>
                    <div className="text-slate-600">
                      .btn-primary &#123;<br />
                      &nbsp;&nbsp;float: left;<br />
                      &nbsp;&nbsp;margin: 10px !important;<br />
                      &nbsp;&nbsp;width: 95%;<br />
                      &#125;<br /><br />
                      &lt;div class=&quot;wrapper&quot;&gt;<br />
                      &nbsp;&nbsp;&lt;center&gt;<br />
                      &nbsp;&nbsp;&nbsp;&nbsp;&lt;font size=&quot;3&quot;&gt;<br />
                    </div>
                  </div>

                  <div>
                    <div className="text-green-600 mb-2">{`// After: Uncluttered`}</div>
                    <div className="text-slate-800">
                      .btn &#123;<br />
                      &nbsp;&nbsp;display: inline-flex;<br />
                      &nbsp;&nbsp;align-items: center;<br />
                      &nbsp;&nbsp;padding: 1rem;<br />
                      &#125;<br /><br />
                      .btn--primary &#123;<br />
                      &nbsp;&nbsp;width: 100%;<br />
                      &#125;<br /><br />
                      &lt;button class=&quot;btn btn--primary&quot;&gt;<br />
                      &nbsp;&nbsp;Submit request<br />
                      &lt;/button&gt;
                    </div>
                  </div>
                </div>
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
                I dive into your codebase and UI. I identify the pain points, inconsistencies, and quick wins.
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
                I implement the improvements directly. Code is cleaned, UI is polished, and debt is reduced.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* <section className="pt-8 md:py-20">

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-neutral-800/40 rounded-xl p-8 backdrop-blur-sm">
            <div className="w-full md:w-14 h-14 relative flex-shrink-0 mb-4">
              <Image
                src="/images/icons/information.png"
                alt="information"
                fill
                className="object-contain"
              />
            </div>
            <h3 className="text-xl font-semibold mb-3">
              Is your website attracting customers?
            </h3>
            <p className="text-gray-400">
              Your website should be your best salesperson, working 24/7 to bring in new business.
            </p>
          </div>
          <div className="bg-neutral-800/40 rounded-xl p-8 backdrop-blur-sm">
            <div className="w-full md:w-14 h-14 relative flex-shrink-0 mb-4">
              <Image
                src="/images/icons/growth.png"
                alt="growth"
                fill
                className="object-contain"
              />
            </div>
            <h3 className="text-xl font-semibold mb-3">
              Not sure if your site is helping your business grow?
            </h3>
            <p className="text-gray-400">
              Understanding your website&apos;s performance is crucial for business growth.
            </p>
          </div>
          <div className="bg-neutral-800/40 rounded-xl p-8 backdrop-blur-sm md:col-span-2 lg:col-span-1">
            <div className="w-full md:w-14 h-14 relative flex-shrink-0 mb-4">
              <Image
                src="/images/icons/ai-technology.png"
                alt="audit"
                fill
                className="object-contain"
              />
            </div>
            <h3 className="text-xl font-semibold mb-3">
              Get a Free Website Audit
            </h3>
            <p className="text-gray-400 mb-6">
              I offer free website audits to help you understand what&apos;s working and what needs improvement.
            </p>
            <Link 
              href="/audit"
              className="inline-block bg-purple-600 hover:bg-purple-700 text-white px-6 py-2 rounded-lg transition-colors text-sm"
            >
              Request Free Audit
            </Link>
          </div>
        </div>
      </section> */}



      {/* Call to Action */}
      {/* <section className="py-20">
        <div className="bg-neutral-800/40 rounded-xl p-12 text-center backdrop-blur-sm">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">Let&apos;s Work Together</h2>
          <p className="text-xl md:text-2xl text-gray-400 mb-8 max-w-3xl mx-auto">
            Looking for a senior frontend developer to help with your next project? 
            Let&apos;s discuss how I can contribute to your success.
          </p>
          <Link 
            href="/contact"
            className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg transition-colors"
          >
            Get in Touch
          </Link>
        </div>
      </section> */}
    </PageLayout>
  );
}
