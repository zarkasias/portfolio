import type { Metadata } from "next";
import { Hanken_Grotesk, Newsreader } from "next/font/google";
import "./globals.css";
import { heroBootScript } from "@/lib/heroImages";
import { ThemeProvider } from "./provider";
import RouteChangeTracker from "@/components/analytics/RouteChangeTracker";
import GoogleAnalytics from "@/components/analytics/GoogleAnalytics";
import CookieConsent from "@/components/analytics/CookieConsent";

// Newsreader for headings (the warmth), Hanken Grotesk for everything else.
const newsreader = Newsreader({
  subsets: ["latin"],
  axes: ["opsz"],
  variable: "--f-newsreader",
  display: "swap",
});

const hanken = Hanken_Grotesk({
  subsets: ["latin"],
  variable: "--f-hanken",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.chambers-consulting.dev"),
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
  },
  twitter: {
    card: "summary_large_image",
    title: "Chambers Consulting | Website Redesigns for Small Businesses",
    description:
      "I help small businesses modernize the websites they already have, without starting over.",
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
      className={`${newsreader.variable} ${hanken.variable} scroll-smooth motion-reduce:scroll-auto`}
      suppressHydrationWarning
    >
      <head>
        {/* Picks the saved hero photo before first paint (see lib/heroImages). */}
        <script dangerouslySetInnerHTML={{ __html: heroBootScript() }} />
      </head>
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
