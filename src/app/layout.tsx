import type { Metadata } from "next";
import { Bebas_Neue, Space_Grotesk } from "next/font/google";
import "./globals.css";

const bebasNeue = Bebas_Neue({
  weight: "400",
  variable: "--font-bebas-neue",
  subsets: ["latin"],
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "BLKOUT Energy | Uyandıran Enerji",
  description:
    "BLKOUT Energy Drink - Geceyi fethet, limitlerini aş, enerjiyi hisset.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="tr"
      className={`${bebasNeue.variable} ${spaceGrotesk.variable} antialiased`}
    >
      <body className="min-h-screen bg-bg text-text">{children}</body>
    </html>
  );
}
