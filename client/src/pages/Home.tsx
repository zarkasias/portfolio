import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { 
  CheckCircle2, 
  ArrowRight, 
  Code, 
  Layout, 
  Smartphone, 
  Eye, 
  Zap, 
  FileCode,
  Search,
  ListTodo,
  Wrench
} from "lucide-react";
import heroBg from "@/assets/hero-bg.png";
import workspaceImg from "@/assets/workspace.png";
import { motion } from "framer-motion";

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

const stagger = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
};

export default function Home() {
  return (
    <div className="min-h-screen bg-background font-sans text-foreground overflow-x-hidden">
      <Navbar />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden">
        <div className="absolute inset-0 -z-10 opacity-40">
           <img src={heroBg} alt="Abstract Background" className="w-full h-full object-cover" />
           <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/50 to-background"></div>
        </div>
        
        <div className="container mx-auto px-6">
          <motion.div 
            initial="hidden"
            animate="visible"
            variants={stagger}
            className="max-w-3xl"
          >
            <motion.div variants={fadeIn} className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/50 text-accent-foreground text-sm font-medium mb-6 border border-accent">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
              </span>
              Accepting New Audits for Q1
            </motion.div>
            
            <motion.h1 variants={fadeIn} className="text-5xl md:text-6xl lg:text-7xl font-heading font-bold tracking-tight text-foreground mb-8 leading-[1.1]">
              Improve your existing frontend. <br className="hidden md:block" />
              <span className="text-primary/80">Without the rewrite.</span>
            </motion.h1>
            
            <motion.p variants={fadeIn} className="text-xl text-muted-foreground mb-10 max-w-2xl leading-relaxed">
              I help businesses clean up, stabilize, and refine their existing front-end codebases. 
              Clearer, faster, and more maintainable — no full redesign required.
            </motion.p>
            
            <motion.div variants={fadeIn} className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="text-base h-12 px-8 shadow-lg hover:shadow-xl transition-all" onClick={() => document.getElementById('contact')?.scrollIntoView({behavior: 'smooth'})}>
                Request a Front-End Review
              </Button>
              <Button variant="outline" size="lg" className="text-base h-12 px-8 bg-background/50 backdrop-blur-sm hover:bg-background" onClick={() => document.getElementById('services')?.scrollIntoView({behavior: 'smooth'})}>
                View Services
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Problem / Solution */}
      <section className="py-24 bg-secondary/30 relative">
        <div className="absolute inset-0 bg-grid-pattern opacity-[0.03]"></div>
        <div className="container mx-auto px-6 relative">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-heading font-bold mb-6">Not happy with how your site feels or performs?</h2>
              <p className="text-lg text-muted-foreground mb-8">
                Many teams find themselves with a functional product that feels visually inconsistent, cluttered, or brittle. 
                You don't need a flashy agency or a complete rebuild. You need a specialist to tidy up what you already have.
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
                <div className="grid grid-cols-2 gap-8">
                  <div className="opacity-50 blur-[0.5px]">
                    <div className="text-red-400 mb-2">// Before: Cluttered</div>
                    <div className="text-slate-600">
                      .btn-primary &#123;<br/>
                      &nbsp;&nbsp;float: left;<br/>
                      &nbsp;&nbsp;margin: 10px !important;<br/>
                      &nbsp;&nbsp;width: 95%;<br/>
                      &#125;<br/><br/>
                      &lt;div class="wrapper"&gt;<br/>
                      &nbsp;&nbsp;&lt;center&gt;<br/>
                      &nbsp;&nbsp;&nbsp;&nbsp;&lt;font size="3"&gt;<br/>
                    </div>
                  </div>
                  <div>
                    <div className="text-green-600 mb-2">// After: Structured</div>
                    <div className="text-slate-800">
                      const Button = styled('button', &#123;<br/>
                      &nbsp;&nbsp;display: 'flex',<br/>
                      &nbsp;&nbsp;alignItems: 'center',<br/>
                      &nbsp;&nbsp;gap: tokens.spacing.2,<br/>
                      &nbsp;&nbsp;padding: tokens.spacing.4,<br/>
                      &#125;)<br/><br/>
                      &lt;Button variant="primary"&gt;<br/>
                      &nbsp;&nbsp;Submit Request<br/>
                      &lt;/Button&gt;
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
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
                <Button variant="outline" onClick={() => document.getElementById('contact')?.scrollIntoView({behavior: 'smooth'})}>
                  Let's Discuss It <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section id="process" className="py-24 bg-slate-50 border-y border-border/50">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">How It Works</h2>
            <p className="text-muted-foreground">
              A transparent, low-friction process designed to get results without disrupting your team's flow.
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

      {/* About Section */}
      <section id="about" className="py-24">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row gap-16 items-center">
            <div className="md:w-1/2">
               <div className="w-full aspect-square md:aspect-[4/3] bg-slate-100 rounded-2xl overflow-hidden relative shadow-lg">
                 <img src={workspaceImg} alt="Workspace" className="w-full h-full object-cover" />
               </div>
            </div>
            <div className="md:w-1/2">
              <h2 className="text-3xl md:text-4xl font-heading font-bold mb-6">A Specialist, Not An Agency.</h2>
              <div className="space-y-6 text-lg text-muted-foreground">
                <p>
                  I'm a Front-End Specialist focused on the craft of UI engineering. I don't sell "full-stack solutions" or marketing campaigns.
                </p>
                <p>
                  My goal is simple: to help businesses who are struggling with UI debt. You have a product that works, but it feels heavy, outdated, or inconsistent.
                </p>
                <p>
                  I bring a calm, experienced approach to cleaning up that mess. I value clarity, accessibility, and code that is a joy to maintain.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA / Contact */}
      <section id="contact" className="py-24 bg-primary text-primary-foreground relative overflow-hidden">
        {/* Decorative circles */}
        <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 rounded-full bg-white/5 blur-3xl"></div>
        <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 rounded-full bg-white/5 blur-3xl"></div>

        <div className="container mx-auto px-6 relative z-10 text-center">
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-6">Ready to clear the clutter?</h2>
          <p className="text-xl text-primary-foreground/80 max-w-2xl mx-auto mb-10">
            Let's have a low-pressure conversation about your site's current state and where you want it to be.
          </p>
          
          <Card className="max-w-md mx-auto bg-white/10 border-white/20 backdrop-blur-sm shadow-2xl text-left">
            <CardContent className="p-6 md:p-8">
              <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                <div>
                  <label className="block text-sm font-medium text-white mb-1.5">Email Address</label>
                  <input type="email" placeholder="you@company.com" className="w-full px-4 py-3 rounded-md bg-white text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-white/50" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-white mb-1.5">Website URL</label>
                  <input type="text" placeholder="https://example.com" className="w-full px-4 py-3 rounded-md bg-white text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-white/50" />
                </div>
                <Button size="lg" className="w-full bg-accent hover:bg-accent/90 text-accent-foreground font-semibold h-12 mt-2">
                  Request a Free Review
                </Button>
                <p className="text-xs text-center text-white/60 mt-4">
                  No commitment required. I'll take a look and send you a few initial thoughts.
                </p>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>

      <Footer />
    </div>
  );
}