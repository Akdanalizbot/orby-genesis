import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "ORBY | The Future Starts Here",
  description:
    "ORBY is a next-generation Web3 ecosystem built for speed, community and innovation.",
  keywords: [
    "ORBY",
    "Crypto",
    "Web3",
    "Blockchain",
    "Robinhood Chain",
    "Meme Coin"
  ],
  authors: [
    {
      name: "ORBY Team"
    }
  ],
  openGraph: {
    title: "ORBY",
    description:
      "The Future Starts Here.",
    siteName: "ORBY",
    type: "website"
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
