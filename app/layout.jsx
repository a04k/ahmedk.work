import "./globals.css";
import "focus-visible";
import localFont from "next/font/local";

import { Analytics } from "@/components/Analytics";
import { ThemeProvider } from "@/components/ThemeProvider";
import { FloatNav } from "@/components/nav/FloatNav";
import Footer from "@/components/sections/Footer";
import { Suspense } from "react";

export const metadata = {
  metadataBase: new URL("https://ahmedk.work"),
  title: {
    default: "Ahmed Khaled - Computer Science Student & Developer",
    template: "%s | Ahmed Khaled",
  },
  description:
    "Computer Science student, chronically online. Building innovative solutions.",
  keywords: [
    "computer science, developer, student, Cairo, Egypt, Ahmed Khaled, portfolio, web development, AI, hackathon",
  ],
  openGraph: {
    title: "Ahmed Khaled",
    description:
      "Computer Science student, chronically online. Building innovative solutions.",
    url: "https://ahmedk.work",
    siteName: "Ahmed Khaled",
    locale: "en-US",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  twitter: {
    title: "Ahmed Khaled",
    card: "summary_large_image",
  },
  icons: {
    shortcut: "/favicon.ico",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`flex flex-col min-h-screen antialiased bg-top bg-no-repeat bg-cover bg-neutral-50 bg-bluenoise dark:bg-neutral-900 font-fustat`}
        suppressHydrationWarning
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <div className="flex-1">
            <div className="relative mb-16 sm:mb-32">
              <Suspense fallback={null}>
                <main>{children}</main>
                <FloatNav />
              </Suspense>
            </div>
          </div>
          <Footer />
          <Analytics />
        </ThemeProvider>
      </body>
    </html>
  );
}
