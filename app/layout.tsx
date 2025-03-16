import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "./provider";
import RouteChangeTracker from "@/components/analytics/RouteChangeTracker";
import GoogleAnalytics from "@/components/analytics/GoogleAnalytics";
import CookieConsent from "@/components/analytics/CookieConsent";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL('https://chambers-consulting.dev'),
  title: "David Chambers | Web Development Consultant",
  description:
    "Expert Web Development & Technical Consulting by David Chambers. Specializing in React, TypeScript, and creating seamless user experiences.",
  icons: {
    icon: [
      { url: '/favicon/favicon.ico' },
      { url: '/favicon/favicon.svg', type: 'image/svg+xml' },
      { url: '/favicon/favicon-96x96.png', sizes: '96x96', type: 'image/png' },
    ],
    apple: [
      { url: '/favicon/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
    ],
    other: [
      { url: '/favicon/web-app-manifest-192x192.png', sizes: '192x192', type: 'image/png' },
      { url: '/favicon/web-app-manifest-512x512.png', sizes: '512x512', type: 'image/png' },
    ],
  },
  keywords: [
    "Web Development",
    "React",
    "TypeScript",
    "Technical Consulting",
    "David Chambers",
    "Software Engineering",
  ],
  authors: [{ name: "David Chambers" }],
  creator: "David Chambers",
  openGraph: {
    type: "website",
    title: "David Chambers | Web Development Consultant",
    description:
      "Expert Web Development & Technical Consulting by David Chambers. Specializing in React, TypeScript, and creating seamless user experiences.",
    images: [
      {
        url: "/images/logos/cclogo-new.png",
        width: 32,
        height: 32,
      },
    ],
  },
  twitter: {
    card: "summary",
    title: "David Chambers | Web Development Consultant",
    description:
      "Expert Web Development & Technical Consulting by David Chambers",
    images: ["/images/logos/cclogo-new.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <body className={`${inter.className} dark:bg-[#04071D] bg-[#04071D]`} suppressHydrationWarning>
        <GoogleAnalytics />
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem={false}
          forcedTheme="dark"
          disableTransitionOnChange
        >
          <RouteChangeTracker />
          {children}
          <CookieConsent />
        </ThemeProvider>
      </body>
    </html>
  );
}
