import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useState } from "react";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const scrollToSection = (id: string) => {
    setIsOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border/50">
      <div className="container mx-auto px-6 h-16 flex items-center justify-between">
        <Link href="/">
          <a className="text-xl font-heading font-bold tracking-tight text-foreground flex items-center gap-2">
            <span className="w-8 h-8 bg-primary text-primary-foreground flex items-center justify-center rounded-md font-mono text-sm">CC</span>
            Chambers Consulting
          </a>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          <button onClick={() => scrollToSection("services")} className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">Services</button>
          <button onClick={() => scrollToSection("process")} className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">Process</button>
          <button onClick={() => scrollToSection("about")} className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">About</button>
          <Button onClick={() => scrollToSection("contact")} size="sm" className="font-medium bg-primary hover:bg-primary/90 text-primary-foreground shadow-sm">
            Request Review
          </Button>
        </div>

        {/* Mobile Menu Toggle */}
        <button className="md:hidden p-2 text-foreground" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <div className="md:hidden bg-background border-b border-border p-6 flex flex-col gap-4 shadow-lg animate-in slide-in-from-top-5">
          <button onClick={() => scrollToSection("services")} className="text-left text-sm font-medium text-muted-foreground hover:text-foreground">Services</button>
          <button onClick={() => scrollToSection("process")} className="text-left text-base font-medium text-muted-foreground hover:text-foreground">Process</button>
          <button onClick={() => scrollToSection("about")} className="text-left text-base font-medium text-muted-foreground hover:text-foreground">About</button>
          <Button onClick={() => scrollToSection("contact")} className="w-full justify-center">Request Review</Button>
        </div>
      )}
    </nav>
  );
}