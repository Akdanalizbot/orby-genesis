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
    default: "MARDYZ — The Universe Is Awakening",
    template: "%s | MARDYZ",
  },

  description:
    "Enter MARDYZ — a growing digital universe shaped by story, identity, community and evolution.",

  applicationName: "MARDYZ",

  keywords: [
    "MARDYZ",
    "ORBI",
    "digital universe",
    "Web3",
    "community",
    "digital identity",
    "blockchain",
  ],

  authors: [
    {
      name: "MARDYZ",
    },
  ],

  creator: "MARDYZ",
  publisher: "MARDYZ",

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
    siteName: "MARDYZ",
    title: "MARDYZ — The Universe Is Awakening",
    description:
      "Enter MARDYZ — a growing digital universe shaped by story, identity, community and evolution.",
  },

  twitter: {
    card: "summary_large_image",
    title: "MARDYZ — The Universe Is Awakening",
    description:
      "Enter MARDYZ — a growing digital universe shaped by story, identity, community and evolution.",
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