import { FaLocationArrow } from "react-icons/fa6";
import MagicButton from "./ui/MagicButton";
import { Spotlight } from "./ui/Spotlight";
import { TextGenerateEffect } from "./ui/TextGenerateEffect";

export const Hero = () => {
  return (
    <div className="relative pb-20">
      <div className="relative">
        <Spotlight
          className="absolute -top-40 -left-10 md:-left-32 md:-top-20 h-screen"
          fill="white"
        />
        <Spotlight
          className="absolute top-10 left-full h-[80vh] w-[50vw]"
          fill="purple"
        />
        <Spotlight
          className="absolute top-28 left-80 h-[80vh] w-[50vw]"
          fill="blue"
        />
      </div>

      <div className="relative h-screen w-full dark:bg-black-100 bg-white dark:bg-grid-white/[0.03] bg-grid-black/[0.2] flex items-center justify-center">
        {/* Radial gradient for the container to give a faded look */}
        <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black-100 bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />

        <div className="relative flex justify-center mb-10 z-10">
          <div className="max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col justify-center items-center">
            <div className="flex items-center w-[70%] justify-between mb-5">
              <img src="/cclogo-new.png" width="90px" height="90px" />
              <p className="uppercase text-center text-blue-200 md:tracking-widest font-bold text-lg lg:text-4xl pop-effect">
                Chambers Consulting
              </p>
            </div>

            <TextGenerateEffect
              className="text-center text-[40px] md:text-5xl lg:text-6xl"
              words="Creating Seamless and Interactive User Experiences"
            />

            <h2 className="uppercase tracking-widest text-xs text-center text-blue-100 max-w-80">
              A seasoned developer who thrives on collaboration
            </h2>

            <a href="#about">
              <MagicButton
                title="More About Us"
                icon={<FaLocationArrow />}
                position="right"
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
