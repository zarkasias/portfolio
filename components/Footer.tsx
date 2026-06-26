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
                  className="h-10 w-auto bg-primary p-1 rounded-lg"
                />
              <span className="text-lg font-heading font-bold">Chambers Consulting</span>
            </div>
            <p className="text-muted-foreground max-w-sm mb-6">
              Specializing in Front-End UI Cleanup & Improvement for existing web applications. Making the web clearer, faster, and more accessible.
            </p>
            <div className="flex gap-4">
              <a href="https://linkedin.com/in/davidmachambers" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors"><Linkedin className="w-5 h-5" /></a>
              <a href="mailto:david@chambers-consulting.dev" className="text-muted-foreground hover:text-primary transition-colors"><Mail className="w-5 h-5" /></a>
            </div>
          </div>
          
          <div className="md:col-span-2 grid grid-cols-2 md:grid-cols-2 gap-8 md:gap-12">
            <div>
              <ul className="space-y-3 text-sm text-muted-foreground">
                <li><a href="/about" className="hover:text-foreground transition-colors">About</a></li>
                <li><a href="/services" className="hover:text-foreground transition-colors">Services</a></li>
                <li><a href="/contact" className="hover:text-foreground transition-colors">Contact</a></li>
              </ul>
            </div>

            <div>
              <ul className="space-y-3 text-sm text-muted-foreground">
                <li><a href="/start-project" className="hover:text-foreground transition-colors">Start a Project</a></li>
                <li><a href="/audit" className="hover:text-foreground transition-colors">Audit</a></li>
                <li><a href="/privacy-policy" className="hover:text-foreground transition-colors">Privacy Policy</a></li>
                <li><a href="/terms-conditions" className="hover:text-foreground transition-colors">Terms of Service</a></li>
              </ul>
            </div>
          </div>
        </div>
        
        <div className="pt-4 border-t border-border/50 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} Chambers Consulting. All rights reserved.</p>
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
