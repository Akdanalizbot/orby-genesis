import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "MORDYZ — The Universe Is Awakening",
    template: "%s | MORDYZ",
  },

  description:
    "Enter MORDYZ — a growing digital universe shaped by story, identity, community and evolution.",

  applicationName: "MORDYZ",

  keywords: [
    "MORDYZ",
    "ORBI",
    "digital universe",
    "Web3",
    "community",
    "digital identity",
    "blockchain",
  ],

  authors: [
    {
      name: "MORDYZ",
    },
  ],

  creator: "MORDYZ",
  publisher: "MORDYZ",

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },

  openGraph: {
    type: "website",
    siteName: "MORDYZ",
    title: "MORDYZ — The Universe Is Awakening",
    description:
      "Enter MORDYZ — a growing digital universe shaped by story, identity, community and evolution.",
  },

  twitter: {
    card: "summary_large_image",
    title: "MORDYZ — The Universe Is Awakening",
    description:
      "Enter MORDYZ — a growing digital universe shaped by story, identity, community and evolution.",
  },

  category: "technology",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        {children}
      </body>
    </html>
  );
}