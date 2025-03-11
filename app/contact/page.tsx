import { Metadata } from "next";
import Image from "next/image";
import PageLayout from "@/components/layout/PageLayout";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Contact David Chambers | Frontend Development Consulting",
  description: "Get in touch to discuss your web development project. Specializing in accessible, high-performance web applications that drive business growth.",
  openGraph: {
    title: "Contact David Chambers | Frontend Development Consulting",
    description: "Get in touch to discuss your web development project. Specializing in accessible, high-performance web applications that drive business growth.",
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
        <h1 className="text-4xl font-bold tracking-tight text-gray-100 mb-4">
          Let&apos;s Work Together
        </h1>
        <p className="text-xl text-gray-400 mb-8 max-w-3xl mx-auto">
          Looking to build something amazing? I specialize in creating accessible, high-performance web applications that drive business growth.
        </p>
      </section>

      {/* Contact Grid */}
      <section className="mb-12 md:mb-20 px-4">
        <div className="grid md:grid-cols-2 gap-8 md:gap-12">
          {/* Contact Info */}
          <div className="space-y-4">
            <div>
              <h2 className="text-2xl font-bold mb-6">Get in Touch</h2>
              <div className="flex flex-col bg-neutral-800/50 rounded-xl p-4 backdrop-blur-sm">
              <h3 className="text-lg font-semibold mb-1">New Business</h3>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 relative flex-shrink-0">
                  <Image 
                    src="/dave2.png" 
                    alt="David Chambers" 
                    fill
                    className="object-cover rounded-full"
                  />
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-1">David Chambers</h3>
                  <a 
                    href="mailto:david@chambers-consulting.dev" 
                    className="text-blue-400 hover:text-blue-300 transition-colors"
                  >
                    david@chambers-consulting.dev
                  </a>
                </div>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <div className="bg-neutral-800/50 rounded-xl p-4 backdrop-blur-sm">
              <div className="flex gap-4">
              <img src="/images/icons/message.png" alt="General Inquiries" className="w-10 h-10" />
                <div className="flex flex-col">
                <h3 className="text-lg font-semibold mb-1">General Inquiries</h3>
                <a href="mailto:info@chambers-consulting.dev" className="text-blue-400 hover:text-blue-300 transition-colors">
                  info@chambers-consulting.dev
                </a>
                </div>
                </div>
              </div>

              <div className="bg-neutral-800/50 rounded-xl p-4 backdrop-blur-sm">
              <div className="flex gap-4">
              <img src="/images/icons/linkedin.png" alt="LinkedIn" className="w-10 h-10 flex-shrink-0" />
                <div className="flex flex-col min-w-0">
                <h3 className="text-lg font-semibold mb-1">LinkedIn</h3>
                <a 
                  href="https://linkedin.com/in/davidmachambers" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-blue-400 hover:text-blue-300 transition-colors break-all"
                >
                  linkedin.com/in/davidmachambers
                </a>
              </div>
              </div>
            </div>
            </div>
          </div>

          {/* Forest Image Section */}
          <div className="relative h-[400px] md:h-[500px] rounded-xl overflow-hidden border-2 border-neutral-700">
            <Image
              src="/forest.png"
              alt="Forest landscape"
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>
      </section>

      <section className="mb-12 md:mb-20 px-4">
        <div className="bg-neutral-800/50 rounded-xl p-8 backdrop-blur-sm text-center">
          <h2 className="text-2xl font-bold mb-4">Get a Free Website Audit</h2>
          <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
            Not sure where to start? I offer free website audits to help you understand what&apos;s working 
            and what could be improved in your current website.
          </p>
          <Link 
            href="/audit"
            className="inline-block bg-purple-600 hover:bg-purple-700 text-white px-8 py-3 rounded-lg transition-colors"
          >
            Request Free Audit
          </Link>
        </div>
      </section>
    </PageLayout>
  );
} 