import { socialMedia } from "@/data";
import Link from "next/link";

const Copyright = () => {
  const currentYear = new Date().getFullYear();

  return (
    <div className="flex mt-10 w-full">
      <div className="grid md:grid-cols-3 grid-cols-1 items-center w-full">
        <div className="md:text-left text-center">
          <p className="md:text-base text-sm md:font-normal font-light opacity-70 md:mb-0 mb-4">
            Copyright © {currentYear} Chambers Consulting
          </p>
        </div>

        <nav className="flex justify-center space-x-6 md:mb-0 mb-4">
          <Link 
            href="/privacy-policy" 
            className="text-sm text-gray-400 hover:text-white transition-colors"
          >
            Privacy Policy
          </Link>
          <Link 
            href="/terms-conditions" 
            className="text-sm text-gray-400 hover:text-white transition-colors"
          >
            Terms & Conditions
          </Link>
        </nav>

        <div className="flex md:justify-end justify-center items-center md:gap-3 gap-6">
          {socialMedia.map((info) => (
            <div
              key={info.id}
              className="w-10 h-10 cursor-pointer flex justify-center items-center backdrop-filter backdrop-blur-lg saturate-180 bg-opacity-75 bg-black-200 rounded-lg border border-black-300"
            >
              <a href={info.link} target="_blank">
                <img src={info.img} alt="icons" width={20} height={20} />
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Copyright;
