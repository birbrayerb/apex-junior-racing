import type { Metadata, Viewport } from "next";
import { Space_Grotesk, Inter } from "next/font/google";
import { site } from "@/lib/site";
import "./globals.css";

// Display: Space Grotesk (geometric, for big numbers + wordmark).
const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["500", "700"],
  variable: "--font-display",
  display: "swap",
});

// Body: Inter (clean, high-legibility).
const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-body",
  display: "swap",
});

export const metadata: Metadata = {
  title: `${site.teamName} — ${site.discipline}`,
  description: site.heroSub,
  openGraph: {
    title: site.teamName,
    description: site.tagline,
    type: "website",
  },
};

export const viewport: Viewport = {
  themeColor: "#0A0A0F",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${spaceGrotesk.variable} ${inter.variable}`}>
      <body className="font-body antialiased">{children}</body>
    </html>
  );
}
