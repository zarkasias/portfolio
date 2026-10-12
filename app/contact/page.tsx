import { Metadata } from "next";
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import PageLayout from "@/components/layout/PageLayout";
import workspaceImg from "@/assets/workspace.png";
import Link from "next/link";
import { Mail, Linkedin, MessageSquare } from "lucide-react";

export const metadata: Metadata = {
  title: "Contact Chambers Consulting | Front-End UI Cleanup",
  description:
    "Get in touch to clean up and improve your existing website. We help small businesses build clearer, faster, more accessible front-end UIs.",
  openGraph: {
    title: "Contact Chambers Consulting | Front-End UI Cleanup",
    description:
      "Get in touch to clean up and improve your existing website. We help small businesses build clearer, faster, more accessible front-end UIs.",
    images: [
      {
        url: "/images/logos/cclogo-new.png",
        width: 32,
        height: 32,
      },
    ],
  },
};

export default function ContactPage() {
  return (
    <PageLayout className="pt-24 md:w-[80%] mx-auto" showFooterBlurb={false}>
      {/* Hero Section */}
      <section className="text-center mb-12 md:mb-20 px-4">
        <h1 className="text-2xl md:text-4xl font-heading font-bold mb-4">
          Let&apos;s Work Together
        </h1>
        <p className="text-md md:text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
          Looking to improve your existing website? We specialize in cleaning up
          and refining front-end UIs so your site is clearer, faster, and easier
          to use.
        </p>
      </section>

      {/* Contact Grid */}
      <section className="mb-12 md:mb-20 px-4">
        <div className="grid md:grid-cols-2 gap-8 md:gap-12">
          {/* Contact Info */}
          <div className="space-y-4">
            <div>
              <h2 className="text-2xl font-bold mb-6">Get in Touch</h2>
              <Card className="border-border/50 shadow-sm hover:shadow-md transition-shadow">
                <CardContent className="p-4">
                  <h3 className="text-lg font-semibold mb-1">New Business</h3>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 flex-shrink-0 rounded-full bg-secondary text-primary flex items-center justify-center">
                      <Mail className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-muted-foreground mb-1">
                        Start a conversation
                      </h3>
                      <a
                        href="mailto:david@chambers-consulting.dev"
                        className="text-sm md:text-md text-primary hover:text-primary/80 transition-colors"
                      >
                        david@chambers-consulting.dev
                      </a>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="space-y-4">
              <Card className="border-border/50 shadow-sm hover:shadow-md transition-shadow">
                <CardContent className="p-4">
                  <div className="flex gap-4">
                    <div className="w-10 h-10 flex-shrink-0 rounded-full bg-secondary text-primary flex items-center justify-center">
                      <MessageSquare className="w-5 h-5" />
                    </div>
                    <div className="flex flex-col">
                      <h3 className="text-lg font-semibold mb-1">
                        General Inquiries
                      </h3>
                      <a
                        href="mailto:info@chambers-consulting.dev"
                        className="text-sm md:text-md text-primary hover:text-primary/80 transition-colors"
                      >
                        info@chambers-consulting.dev
                      </a>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-border/50 shadow-sm hover:shadow-md transition-shadow">
                <CardContent className="p-4">
                  <div className="flex gap-4">
                    <div className="w-10 h-10 flex-shrink-0 rounded-full bg-secondary text-primary flex items-center justify-center">
                      <Linkedin className="w-5 h-5" />
                    </div>
                    <div className="flex flex-col min-w-0">
                      <h3 className="text-lg font-semibold mb-1">LinkedIn</h3>
                      <a
                        href="https://linkedin.com/in/davidmachambers"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm md:text-md text-primary hover:text-primary/80 transition-colors break-all"
                      >
                        linkedin.com/in/davidmachambers
                      </a>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Workspace Image Section */}
          <div className="relative h-[400px] md:h-[500px] rounded-xl overflow-hidden border-2 border-border">
            <Image
              src={workspaceImg}
              alt="Workspace"
              fill
              sizes="(min-width: 1423px) 472px, (min-width: 768px) calc(36vw - 40px), calc(90vw - 32px)"
              className="object-cover"
              priority
            />
          </div>
        </div>
      </section>
    </PageLayout>
  );
}
