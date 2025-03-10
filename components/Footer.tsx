import Link from "next/link";
import Copyright from "./ui/Copyright";

const Footer = ({ showBlurb = true }: { showBlurb?: boolean }) => {
  return (
    <footer className="w-[90%] mx-auto pt-10 pb-4" id="contact">
      {showBlurb && (
        <div className="flex flex-col items-center">
        <h2 className="heading lg:max-w-[45vw]">
          Ready to take <span className="text-green-500">your</span> business to the
          next level?
        </h2>
        <p className="text-white-200 md:mt-4 my-5 text-center">
          Contact us and discuss how we can assist you in achieving your goals.
        </p>
        <Link 
              href="/contact"
              className="inline-block bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded-lg transition-colors text-sm"
            >
              Contact Us
            </Link>
      </div>
      )}
      <Copyright />
    </footer>
  );
};

export default Footer;
