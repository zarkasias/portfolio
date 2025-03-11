import { Spotlight } from "./ui/Spotlight";
import { TextGenerateEffect } from "./ui/TextGenerateEffect";
import Image from "next/image";

export const Hero = () => {
  return (
    <div className="relative mt-12 md:mt-24 overflow-hidden">
      {/* Spotlights */}
      <Spotlight
        className="fixed -top-40 -left-10 md:-left-32 md:-top-20"
        fill="white"
      />
      <Spotlight
        className="fixed -right-20 top-10 md:right-0 h-[80vh] w-[50vw]"
        fill="purple"
      />
      <Spotlight
        className="fixed top-28 left-1/4 h-[80vh] w-[50vw]"
        fill="blue"
      />

      {/* Content */}
      <div className="relative h-auto pb-8 md:h-[56vh] w-full bg-gray-200/4 rounded-lg dark:bg-grid-white/[0.03] bg-grid-black/[0.2] flex items-start pt-4 md:pt-10 justify-start">
        <div className="relative flex justify-center mb-5 z-10 w-full">
          <div className="max-w-[90%] w-full flex flex-col md:flex-row justify-center items-center gap-8 md:gap-12">
            <div className="flex-1 min-w-0">
              <TextGenerateEffect
                className="text-[20px] mt-6 md:mt-10 md:text-4xl lg:text-5xl"
                words="Crafting Digital Experiences That Drive Business Growth"
              />
            </div>
            
            <div className="flex-1 min-w-0">
              <Image 
                src="/images/backgrounds/hero_new.jpg" 
                className="rounded-lg border-2 border-gray-900 w-full shadow-lg h-auto max-w-[600px] mx-auto" 
                width={646} 
                height={360}
                alt="Hero image showing modern web development"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
