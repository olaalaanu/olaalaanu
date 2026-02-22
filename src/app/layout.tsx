import type { Metadata } from "next";
import { Inter, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import BackToTop from "@/components/layout/BackToTop";
import ScrollProgress from "@/components/layout/ScrollProgress";

// Fonts
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const geistMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
});

// Meta Data
export const metadata: Metadata = {
  title: "Lateef Ismaila | Data Analyst & Full Stack Data Developer",
  description: "Welcome to Lateef Ismaila Personal Website and Blog",
};

// Root Layout
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${geistMono.variable}`}>
      <body className="antialiased font-sans text-gray-800 bg-white">
        <ScrollProgress />
        <Header />
        <main>{children}</main>
        <BackToTop />
        <Footer />
      </body>
    </html>
  );
}
