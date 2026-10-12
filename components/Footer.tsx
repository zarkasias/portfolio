import Image from "next/image";
import { Code2, Linkedin, Mail } from "lucide-react";

const Footer = ({ showBlurb = true }: { showBlurb?: boolean }) => {
  return (
    <footer className="bg-secondary/50 border-t border-border mt-24 py-12">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-4">
          <div className="md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <Image
                src="/images/logos/cclogo-new.png"
                alt="Logo"
                width={40}
                height={40}
                className="h-10 w-auto bg-gray-300/80 p-1 rounded-full"
              />
              <span className="text-lg font-heading font-bold">
                Chambers Consulting
              </span>
            </div>
            <p className="text-muted-foreground max-w-sm mb-6">
              Specializing in Front-End UI Cleanup & Improvement for existing
              web applications. Making the web clearer, faster, and more
              accessible.
            </p>
            <div className="flex gap-4">
              <a
                href="https://linkedin.com/in/davidmachambers"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="mailto:david@chambers-consulting.dev"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-8 md:col-span-2 md:gap-12">
            <nav aria-label="Footer navigation">
              <ul className="space-y-2 md:space-y-3 text-sm text-muted-foreground">
                {[
                  { name: "Approach", href: "/#approach" },
                  { name: "Services", href: "/#services" },
                  { name: "Process", href: "/#process" },
                  { name: "Contact", href: "/contact" },
                ].map((item) => (
                  <li key={item.href}>
                    <a
                      href={item.href}
                      className="transition-colors hover:text-foreground"
                    >
                      {item.name}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>

            <nav aria-label="Legal">
              <ul className="space-y-2 md:space-y-3 text-sm text-muted-foreground">
                <li>
                  <a
                    href="/privacy-policy"
                    className="transition-colors hover:text-foreground"
                  >
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a
                    href="/terms-conditions"
                    className="transition-colors hover:text-foreground"
                  >
                    Terms of Service
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>

        <div className="pt-4 border-t border-border/50 flex flex-col md:flex-row justify-between items-start md:items-center gap-4 text-sm text-muted-foreground">
          <p>
            &copy; {new Date().getFullYear()} Chambers Consulting. All rights
            reserved.
          </p>
          <div className="flex items-center gap-2">
            <Code2 className="w-4 h-4" />
            <span>Built with clean code and purpose.</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
