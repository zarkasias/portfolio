import type { Metadata } from "next";
import { DM_Sans, Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "./provider";
import RouteChangeTracker from "@/components/analytics/RouteChangeTracker";
import GoogleAnalytics from "@/components/analytics/GoogleAnalytics";
import CookieConsent from "@/components/analytics/CookieConsent";

const inter = Inter({
  subsets: ["latin"],
  variable: "--f-inter",
  display: "swap",
});
const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--f-dm",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://chambers-consulting.dev"),
  title: "Chambers Consulting | Website Redesigns for Small Businesses",
  description:
    "I help small businesses modernize the websites they already have, with better design, mobile fixes, and faster pages, without starting over.",
  icons: {
    icon: [
      { url: "/favicon/favicon.ico" },
      { url: "/favicon/favicon.svg", type: "image/svg+xml" },
      { url: "/favicon/favicon-96x96.png", sizes: "96x96", type: "image/png" },
    ],
    apple: [
      {
        url: "/favicon/apple-touch-icon.png",
        sizes: "180x180",
        type: "image/png",
      },
    ],
    other: [
      {
        url: "/favicon/web-app-manifest-192x192.png",
        sizes: "192x192",
        type: "image/png",
      },
      {
        url: "/favicon/web-app-manifest-512x512.png",
        sizes: "512x512",
        type: "image/png",
      },
    ],
  },
  keywords: [
    "Front-End UI Cleanup",
    "Website Improvement",
    "Web Accessibility",
    "Performance Optimization",
    "Small Business Websites",
    "Chambers Consulting",
  ],
  authors: [{ name: "Chambers Consulting" }],
  creator: "Chambers Consulting",
  openGraph: {
    type: "website",
    title: "Chambers Consulting | Website Redesigns for Small Businesses",
    description:
      "I help small businesses modernize the websites they already have, with better design, mobile fixes, and faster pages, without starting over.",
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
    title: "Chambers Consulting | Website Redesigns for Small Businesses",
    description:
      "I help small businesses modernize the websites they already have, without starting over.",
    images: ["/images/logos/cclogo-new.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      data-scroll-behavior="smooth"
      className={`${inter.variable} ${dmSans.variable} scroll-smooth motion-reduce:scroll-auto`}
      suppressHydrationWarning
    >
      <head></head>
      <body
        className="font-sans bg-background text-foreground"
        suppressHydrationWarning
      >
        <GoogleAnalytics />
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem={false}
          forcedTheme="light"
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
