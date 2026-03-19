import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

import Navbar from "@/components/Navbar";
import BackgroundGlow from "@/components/BackgroundGlow";
import ScrollReveal from "@/components/ScrollReveal";

export const metadata: Metadata = {
  title: "Faiz Iqbal Itishom | Portfolio",
  description: "Data Science & Technology Student Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <body
        className={`${inter.variable} font-sans antialiased bg-background text-foreground min-h-screen flex flex-col`}
      >
        <BackgroundGlow />
        <ScrollReveal />
        <Navbar />
        <main className="flex-1 mt-24 max-w-7xl mx-auto w-full px-6 md:px-12 pb-24">
          {children}
        </main>
      </body>
    </html>
  );
}
