import { FloatingNav } from "@/components/ui/FloatingNav";
import Footer from "@/components/Footer";
import { navItems } from "@/data";
import { ReactNode } from "react";

interface PageLayoutProps {
  children: ReactNode;
  className?: string;
  showFooterBlurb?: boolean;
}

export default function PageLayout({ children, className = "", showFooterBlurb = true }: PageLayoutProps) {
  return (
    <main className="min-h-screen w-full">
      <FloatingNav navItems={navItems} alwaysVisible={true} />
      <div className={`w-[90%] max-w-[1920px] mx-auto ${className}`}>
        {children}
      </div>
      <Footer showBlurb={showFooterBlurb} />
    </main>
  );
} 