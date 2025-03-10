import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "./provider";

const inter = Inter({ subsets: ["latin"] });

// export const metadata: Metadata = {
//   title: "Chambers Consulting",
//   description: "Creating Seamless and Interactive User Experiences",
// };

export const metadata: Metadata = {
  metadataBase: new URL('https://chambers-consulting.dev'),
  title: "David Chambers | Front End Development Consultant",
  description:
    "Expert Front End Development & Technical Consulting by David Chambers. Specializing in React, TypeScript, and creating seamless user experiences.",
  keywords: [
    "Front End Development",
    "React",
    "TypeScript",
    "Technical Consulting",
    "Web Development",
    "David Chambers",
    "Software Engineering",
  ],
  authors: [{ name: "David Chambers" }],
  creator: "David Chambers",
  openGraph: {
    type: "website",
    title: "David Chambers | Front End Development Consultant",
    description:
      "Expert Front End Development & Technical Consulting by David Chambers. Specializing in React, TypeScript, and creating seamless user experiences.",
    images: [
      {
        url: "/cclogo-new.png",
        width: 32,
        height: 32,
      },
    ],
  },
  twitter: {
    card: "summary",
    title: "David Chambers | Front End Development Consultant",
    description:
      "Expert Front End Development & Technical Consulting by David Chambers",
    images: ["/cclogo-new.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <head>
        <link rel="icon" href="/logo.png" sizes="any" />
      </head>
      <body className={`${inter.className} dark:bg-[#04071D] bg-[#04071D]`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem={false}
          forcedTheme="dark"
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
