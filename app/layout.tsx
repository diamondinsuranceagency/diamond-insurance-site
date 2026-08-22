import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { GoogleAnalytics } from "@next/third-parties/google";

import "./globals.css";
import Footer from "./components/Footer";
import OrganizationSchema from "./components/OrganizationSchema";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://diamondconsultingadvisory.com"),

  title: {
    default: "Diamond Insurance Agency",
    template: "%s | Diamond Insurance Agency",
  },

  description:
    "Life insurance, living benefits, and supplemental coverage guidance for individuals and families.",

  applicationName: "Diamond Insurance Agency",

  icons: {
    icon: [
      {
        url: "/favicon.ico",
      },
      {
        url: "/favicon.svg",
        type: "image/svg+xml",
      },
      {
        url: "/favicon-96x96.png",
        sizes: "96x96",
        type: "image/png",
      },
    ],
    shortcut: "/favicon.ico",
    apple: [
      {
        url: "/apple-touch-icon.png",
        sizes: "180x180",
        type: "image/png",
      },
    ],
  },

  manifest: "/site.webmanifest",

  appleWebApp: {
    capable: true,
    title: "Diamond Insurance Agency",
    statusBarStyle: "default",
  },

  openGraph: {
    title: "Diamond Insurance Agency",
    description:
      "Life insurance, living benefits, and supplemental coverage guidance for individuals and families.",
    url: "https://diamondconsultingadvisory.com",
    siteName: "Diamond Insurance Agency",
    type: "website",
    locale: "en_US",
  },

  twitter: {
    card: "summary_large_image",
    title: "Diamond Insurance Agency",
    description:
      "Life insurance, living benefits, and supplemental coverage guidance for individuals and families.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const gaId = process.env.NEXT_PUBLIC_GA_ID;

  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} antialiased`}
    >
      <body className="flex min-h-screen flex-col">
        <OrganizationSchema />

        <div className="flex-1">{children}</div>

        <Footer />

        {gaId ? <GoogleAnalytics gaId={gaId} /> : null}
      </body>
    </html>
  );
}