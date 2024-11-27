import { FaLocationArrow } from "react-icons/fa6";
import MagicButton from "./ui/MagicButton";
import Copyright from "./ui/Copyright";

const Footer = () => {
  return (
    <footer className="w-full pt-10 pb-10" id="contact">
      <div className="flex flex-col items-center">
        <h1 className="heading lg:max-w-[45vw]">
          Ready to take <span className="text-purple">your</span> project to the
          next level?
        </h1>
        <p className="text-white-200 md:mt-10 my-5 text-center">
          Contact me and we can discuss how I can assist you in achieving your
          goals.
        </p>
        <a href="mailto:david@chambers-consulting.dev">
          <MagicButton
            title="Contact Me"
            icon={<FaLocationArrow />}
            position="right"
          />
        </a>
      </div>
      <Copyright />
    </footer>
  );
};

export default Footer;
