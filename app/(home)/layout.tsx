import { Metadata } from "next";

export const metadata: Metadata = {
  title: "David Chambers | Frontend Development & Technical Consulting",
  description: "Expert frontend development consulting specializing in React, TypeScript, and accessible web applications. Over 27 years of experience creating exceptional digital experiences.",
  openGraph: {
    title: "David Chambers | Frontend Development & Technical Consulting",
    description: "Expert frontend development consulting specializing in React, TypeScript, and accessible web applications. Over 27 years of experience creating exceptional digital experiences.",
    images: [
      {
        url: "/images/logos/cclogo-new.png",
        width: 32,
        height: 32,
      },
    ],
  },
};

export default function HomeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
} 