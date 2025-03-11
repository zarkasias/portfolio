import { Metadata } from "next";
import Image from "next/image";
import PageLayout from "@/components/layout/PageLayout";
import { improvedExperience } from "@/data";

export const metadata: Metadata = {
  title: "About David Chambers | Senior Frontend Development Consultant",
  description: "With over 27 years of experience in web development, David Chambers specializes in building accessible, high-performance web applications that drive business growth.",
  openGraph: {
    title: "About David Chambers | Senior Frontend Development Consultant",
    description: "With over 27 years of experience in web development, David Chambers specializes in building accessible, high-performance web applications that drive business growth.",
    images: [
      {
        url: "/images/logos/cclogo-new.png",
        width: 32,
        height: 32,
      },
    ],
  },
};

export default function AboutPage() {
  return (
    <PageLayout className="pt-24 md:w-[80%] mx-auto">
      {/* Hero Section */}
      <section className="text-center mb-12 px-4">
        <h1 className="text-4xl font-bold tracking-tight text-gray-100 mb-4">
          Accessibility First Development
        </h1>
        <p className="text-xl text-gray-400 mb-12">
          Building Modern Web Experiences That Work for Everyone
        </p>
      </section>

      {/* Introduction Section */}
      <section className="mb-12 md:mb-16 px-4">
        <div className="flex flex-col md:flex-row md:items-start gap-8 md:gap-12 lg:gap-16">
          {/* Profile Section */}
          <div className="flex flex-col items-center md:items-start md:w-1/3 lg:w-1/4">
            <div className="w-48 h-48 md:w-full md:h-auto md:aspect-square max-w-[246px] relative rounded-full overflow-hidden mb-4 border-4 border-neutral-200">
              <Image 
                src="/dave2.png" 
                alt="David Chambers" 
                fill
                className="object-cover"
                sizes="(max-width: 768px) 192px, (max-width: 1280px) 33vw, 25vw"
              />
            </div>
            <h2 className="text-xl font-bold mb-1">David Chambers</h2>
            <p className="text-gray-400 text-md mb-4">Founder, Chambers Consulting</p>
          </div>

          {/* Bio Section */}
          <div className="md:w-2/3 lg:w-3/4 md:pt-8">
            <div className="space-y-6">
              <p className="text-lg text-gray-400">
                Founded in 2023, Chambers Consulting leverages over 27 years of experience in web development, 
                helping businesses build high-performance, accessible digital solutions.
              </p>
              <p className="text-lg text-gray-400">
                Today, we focus on helping businesses build modern, accessible web applications 
                that reach their full audience potential. Our approach combines technical excellence 
                with a deep understanding of business needs.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="mb-12 md:mb-16 px-4">
        <h2 className="text-2xl font-bold mb-8 md:mb-12 text-center">Our Values</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 2xl:grid-cols-4 gap-6">
          <div className="bg-neutral-800/50 rounded-xl p-6 backdrop-blur-sm min-w-[280px]">
            <div className="flex flex-row items-center gap-4 mb-4">
                <img src="/images/icons/techno-excellence.png" alt="Technical Excellence" className="w-10 h-10" />
                <h3 className="text-xl font-bold">Technical Excellence</h3>
            </div>
            <p className="text-gray-400">
              We believe in writing clean, maintainable code that stands the test of time. 
              Every project deserves attention to detail and performance optimization.
            </p>
          </div>
          <div className="bg-neutral-800/50 rounded-xl p-6 backdrop-blur-sm min-w-[280px]">
            <div className="flex flex-row items-center gap-4 mb-4">
                <img src="/images/icons/mobile-access.png" alt="Accessibility First" className="w-10 h-10" />
                <h3 className="text-xl font-bold">Accessibility First</h3>
            </div>
            <p className="text-gray-400">
              Web applications should be accessible to everyone. We build with accessibility 
              in mind from the start, not as an afterthought.
            </p>
          </div>
          <div className="bg-neutral-800/50 rounded-xl p-6 backdrop-blur-sm min-w-[280px]">
            <div className="flex flex-row items-center gap-4 mb-4">
                <img src="/images/icons/forecasting.png" alt="Business Focus" className="w-10 h-10" />
                <h3 className="text-xl font-bold">Business Focus</h3>
            </div>
            <p className="text-gray-400">
              Technology should drive business growth. We focus on solutions that not only 
              work well technically but also deliver measurable business results.
            </p>
          </div>
          <div className="bg-neutral-800/50 rounded-xl p-6 backdrop-blur-sm min-w-[280px]">
            <div className="flex flex-row items-center gap-4 mb-4">
                <img src="/images/icons/online-learning.png" alt="Continuous Learning" className="w-10 h-10" />
                <h3 className="text-xl font-bold">Continuous Learning</h3>
            </div>
            <p className="text-gray-400">
              The web evolves constantly, and so do we. We stay current with the latest 
              technologies and best practices to deliver modern solutions.
            </p>
          </div>
        </div>
      </section>

      {/* Experience Timeline */}
      <section className="mb-12 md:mb-20 px-4">
        <h2 className="text-2xl font-bold mb-8 md:mb-12 text-center">Professional Journey</h2>
        <div className="space-y-8 md:space-y-12">
          {improvedExperience.map((exp) => (
            <div key={exp.id} className="bg-neutral-800/50 rounded-xl p-6 md:p-8 backdrop-blur-sm">
              <div className="flex items-start gap-4 md:gap-6 mb-6">
                <div className="w-12 h-12 md:w-16 md:h-16 relative flex-shrink-0">
                  <Image
                    src={exp.thumbnail}
                    alt={exp.title}
                    fill
                    className="object-contain"
                  />
                </div>
                <h3 className="text-xl md:text-2xl font-bold break-words">{exp.title}</h3>
              </div>
              {exp.clients && (
                <div className="space-y-6">
                  {exp.clients.map((client, index) => (
                    <div key={index} className="break-words">
                      <h4 className="text-lg md:text-xl font-semibold mb-3">{client.name}</h4>
                      <ul className="list-disc space-y-2 text-gray-400 ml-4">
                        {client.desc.map((item, i) => (
                          <li key={i} className="text-base md:text-lg pl-2">{item}</li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              )}
              {exp.roles && (
                <div className="space-y-6">
                  {exp.roles.map((role, index) => (
                    <div key={index} className="break-words">
                      <h4 className="text-lg md:text-xl font-semibold mb-3">{role.name}</h4>
                      <ul className="list-disc space-y-2 text-gray-400 ml-4">
                        {role.desc.map((item, i) => (
                          <li key={i} className="text-base md:text-lg pl-2">{item}</li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              )}
              {exp.desc && (
                <ul className="list-disc space-y-2 text-gray-400 ml-4">
                  {exp.desc.map((item, index) => (
                    <li key={index} className="text-base md:text-lg pl-2 break-words">{item}</li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>
      </section>
    </PageLayout>
  );
}
