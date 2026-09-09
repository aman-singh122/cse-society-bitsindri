import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "CSE Society | BIT Sindri",
  description:
    "Computer Science and Engineering Society at Birla Institute of Technology, Sindri. Where ideas become impact through technology, collaboration, and engineering excellence.",
  keywords: [
    "CSE Society",
    "BIT Sindri",
    "Computer Science",
    "Engineering",
    "Hackathon",
    "Web Development",
    "AI",
    "Open Source",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${inter.variable} ${jetbrainsMono.variable} min-h-screen bg-[#f5f3ee] text-[#141413] antialiased selection:bg-[#141413] selection:text-[#f5f3ee]`}
      >
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}