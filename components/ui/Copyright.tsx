import { socialMedia } from "@/data";

const Copyright = () => {
  const currentYear = new Date().getFullYear();

  return (
    <div className="flex mt-6 md:flex-row flex-col justify-between items-center">
      <p className="md:text-base text-sm md:font-normal font-light opacity-70">
        Copyright © {currentYear} Chambers Consulting
      </p>

      <div className="flex items-center md:gap-3 gap-6">
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
  );
};

export default Copyright;
