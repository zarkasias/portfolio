import type { Metadata } from "next";
import { Inter, DM_Sans, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "./provider";
import RouteChangeTracker from "@/components/analytics/RouteChangeTracker";
import GoogleAnalytics from "@/components/analytics/GoogleAnalytics";
import CookieConsent from "@/components/analytics/CookieConsent";

const inter = Inter({ subsets: ["latin"], variable: "--font-sans", display: "swap" });
const dmSans = DM_Sans({ subsets: ["latin"], variable: "--font-heading", display: "swap" });
const jetbrainsMono = JetBrains_Mono({ subsets: ["latin"], variable: "--font-mono", display: "swap" });

export const metadata: Metadata = {
  metadataBase: new URL('https://chambers-consulting.dev'),
  title: "Chambers Consulting | Front-End UI Cleanup for Small Businesses",
  description:
    "We help small businesses clean up and improve their existing websites. Clearer, faster, and more accessible front-end UIs, without a full rebuild.",
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
    title: "Chambers Consulting | Front-End UI Cleanup for Small Businesses",
    description:
      "We help small businesses clean up and improve their existing websites. Clearer, faster, and more accessible front-end UIs, without a full rebuild.",
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
    title: "Chambers Consulting | Front-End UI Cleanup for Small Businesses",
    description:
      "We help small businesses clean up and improve their existing websites, without a full rebuild.",
    images: ["/images/logos/cclogo-new.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head> 
      </head>
      <body className={`${inter.variable} ${dmSans.variable} ${jetbrainsMono.variable} font-sans bg-background text-foreground`} suppressHydrationWarning>
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
