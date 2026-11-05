import Image from "next/image";
import { Linkedin, Mail } from "lucide-react";
import { CookieSettingsButton } from "@/components/analytics/CookieSettingsButton";

const Footer = ({ spaced = true }: { spaced?: boolean }) => {
  return (
    <footer className={`${spaced ? "mt-24 " : ""}border-t border-border py-10`}>
      <div className="page-width flex flex-col gap-8 md:flex-row md:items-start md:justify-between">
        <div>
          <div className="flex items-center gap-2">
            <Image
              src="/images/logos/cclogo-new.png"
              alt=""
              width={40}
              height={40}
              className="h-10 w-auto rounded-full bg-gray-300/80 p-1"
            />
            <p className="font-heading text-lg font-semibold">
              Chambers Consulting
            </p>
          </div>
          <p className="mt-2 max-w-md text-muted-foreground">
            Helping small businesses improve the websites they already have.
            Based in Northern Virginia, working with businesses anywhere.
          </p>
          <p className="mt-4 text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()} Chambers Consulting. All rights
            reserved.
          </p>
        </div>

        <div className="flex flex-col gap-4 md:items-end">
          <div className="flex gap-4">
            <a
              href="https://linkedin.com/in/davidmachambers"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="David Chambers on LinkedIn"
              className="p-1 text-foreground transition-colors hover:text-primary"
            >
              <Linkedin aria-hidden="true" className="h-5 w-5" />
            </a>
            <a
              href="mailto:david@chambers-consulting.dev"
              aria-label="Email David Chambers"
              className="p-1 text-foreground transition-colors hover:text-primary"
            >
              <Mail aria-hidden="true" className="h-5 w-5" />
            </a>
          </div>

          <nav aria-label="Legal">
            <ul className="flex flex-wrap gap-x-6 gap-y-2 text-sm text-muted-foreground">
              <li>
                <a
                  href="/privacy-policy"
                  className="underline-offset-4 hover:text-foreground hover:underline"
                >
                  Privacy Policy
                </a>
              </li>
              <li>
                <a
                  href="/terms-conditions"
                  className="underline-offset-4 hover:text-foreground hover:underline"
                >
                  Terms of Use
                </a>
              </li>
              <li>
                <CookieSettingsButton />
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
