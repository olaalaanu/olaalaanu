import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import BackToTop from "@/components/BackToTop";
import ScrollProgress from "@/components/ScrollProgress";

export const metadata: Metadata = {
  title: "Lateef Ismaila | Data Analyst & Full Stack Data Developer",
  description: "Welcome to Lateef Ismaila Personal Website and Blog",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="text-gray-800 bg-white">
        <ScrollProgress />
        <Navbar />
        {children}
        <BackToTop />
        <Footer />
      </body>
    </html>
  );
}
