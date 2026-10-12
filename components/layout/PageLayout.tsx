import { FloatingNav } from "@/components/ui/FloatingNav";
import Footer from "@/components/Footer";
import { navItems } from "@/data";
import { ReactNode } from "react";

interface PageLayoutProps {
  children: ReactNode;
  className?: string;
  showFooterBlurb?: boolean;
}

export default function PageLayout({
  children,
  className = "",
  showFooterBlurb = true,
}: PageLayoutProps) {
  return (
    <main className="min-h-screen w-full overflow-x-clip">
      <FloatingNav navItems={navItems} alwaysVisible={true} />
      <div className={`w-[90%] max-w-7xl mx-auto ${className}`}>{children}</div>
      <Footer showBlurb={showFooterBlurb} />
    </main>
  );
}
