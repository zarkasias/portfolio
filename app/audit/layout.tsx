import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Free Website Audit | Frontend Development Consulting",
  description: "Get a free website audit to improve your site's performance, accessibility, and user experience. Receive actionable insights to drive more conversions.",
  openGraph: {
    title: "Free Website Audit | Frontend Development Consulting",
    description: "Get a free website audit to improve your site's performance, accessibility, and user experience. Receive actionable insights to drive more conversions.",
    images: [
      {
        url: "/images/logos/cclogo-new.png",
        width: 32,
        height: 32,
      },
    ],
  },
};

export default function AuditLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
} 