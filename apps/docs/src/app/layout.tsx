import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "@stateglyph/transitions/styles.css";
import "./globals.css";

import { SiteFooter } from "@/components/site-footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "StateGlyph — Stateful icons for React",
  description:
    "Typed, accessible React icons for every visual state of an interface action.",
  icons: {
    icon: "/stateglyph-sg-favicon.png",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <body className="min-h-full flex flex-col">
        <div className="flex-1">{children}</div>
        <SiteFooter />
      </body>
    </html>
  );
}
