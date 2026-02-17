import { Code2, Github, Linkedin, Mail } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-secondary/50 border-t border-border mt-24 py-12">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          <div className="md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <span className="w-8 h-8 bg-primary text-primary-foreground flex items-center justify-center rounded-md font-mono text-sm">CC</span>
              <span className="text-xl font-heading font-bold">Chambers Consulting</span>
            </div>
            <p className="text-muted-foreground max-w-sm mb-6">
              Specializing in Front-End UI Cleanup & Improvement for existing web applications. Making the web clearer, faster, and more accessible.
            </p>
            <div className="flex gap-4">
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors"><Github className="w-5 h-5" /></a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors"><Linkedin className="w-5 h-5" /></a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors"><Mail className="w-5 h-5" /></a>
            </div>
          </div>
          
          <div>
            <h4 className="font-heading font-semibold mb-4">Services</h4>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li><a href="#" className="hover:text-foreground transition-colors">UI Audit & Review</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors">Accessibility Fixes</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors">Performance Optimization</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors">Component Refactoring</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-heading font-semibold mb-4">Legal</h4>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li><a href="#" className="hover:text-foreground transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors">Terms of Service</a></li>
            </ul>
          </div>
        </div>
        
        <div className="pt-8 border-t border-border/50 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} Chambers Consulting. All rights reserved.</p>
          <div className="flex items-center gap-2">
            <Code2 className="w-4 h-4" />
            <span>Built with clean code and purpose.</span>
          </div>
        </div>
      </div>
    </footer>
  );
}