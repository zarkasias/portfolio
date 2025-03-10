"use client";
import { Hero } from "@/components/Hero";
import PageLayout from "@/components/layout/PageLayout";
import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <PageLayout className="pt-4 md:pt-8">
      <Hero />

      <section className="pt-8 md:py-20">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Is Your Website Working for Your Business?
          </h2>
          <p className="text-xl md:text-2xl text-gray-400 mb-12">
            Many small businesses struggle with websites that don&apos;t deliver results. 
            Let&apos;s change that.
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-neutral-800/40 rounded-xl p-8 backdrop-blur-sm">
            <div className="w-full md:w-14 h-14 relative flex-shrink-0 mb-4">
              <Image
                src="/icons/information.png"
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
                src="/icons/growth.png"
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
                src="/icons/ai-technology.png"
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
      </section>

    

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
