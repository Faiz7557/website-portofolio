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
import ParticlesBackground from "@/components/ParticlesBackground";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Faiz Iqbal Itishom | Data Analyst & Automation Practitioner",
  description: "Portfolio of Faiz Iqbal Itishom. Discover my journey navigating the data universe, blending statistical rigor with modern technology to deliver brilliant insights.",
  openGraph: {
    title: "Faiz Iqbal Itishom | Portfolio",
    description: "Data Analyst & Automation Practitioner based in Indonesia.",
    url: "https://faiziqbal.vercel.app", 
    siteName: "Faiz Iqbal Portfolio",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Faiz Iqbal Itishom Portfolio Preview",
      },
    ],
    locale: "en_ID",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Faiz Iqbal Itishom | Portfolio",
    description: "Data Analyst & Automation Practitioner based in Indonesia.",
    images: ["/og-image.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <body
        className={`${inter.variable} font-sans antialiased bg-background text-foreground min-h-screen flex flex-col relative`}
      >
        <ParticlesBackground />
        <BackgroundGlow />
        <ScrollReveal />
        <Navbar />
        <main className="flex-1 mt-24 max-w-7xl mx-auto w-full px-6 md:px-12 pb-10 relative z-10 shadow-none bg-transparent py-0">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
