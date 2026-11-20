import { FloatingNav } from "@/components/ui/FloatingNav";
import Footer from "@/components/Footer";
import { navItems } from "@/data";
import { ReactNode } from "react";

interface PageLayoutProps {
  children: ReactNode;
  className?: string;
  /** Sections manage their own width and run edge to edge. */
  fullWidth?: boolean;
}

export default function PageLayout({
  children,
  className = "",
  fullWidth = false,
}: PageLayoutProps) {
  return (
    <>
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-3 focus:z-[6000] focus:rounded-lg focus:bg-cta focus:px-4 focus:py-2 focus:font-semibold focus:text-cta-foreground"
      >
        Skip to main content
      </a>
      <FloatingNav navItems={navItems} />
      <main id="main" className="min-h-screen w-full overflow-x-clip">
        {fullWidth ? (
          children
        ) : (
          <div className={`page-width ${className}`}>{children}</div>
        )}
      </main>
      <Footer spaced={!fullWidth} />
    </>
  );
}
