import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Chatbot from "@/components/Chatbot";

export const metadata: Metadata = {
  title: "FSIT | On-Site AI. Real Results. Built Capability.",
  description: "FSIT - Pioneering AI transformation across Saudi Arabia and the Middle East. AI-native teams delivering production-ready systems across government and enterprise since 2020.",
  keywords: "AI consulting, AI transformation, Saudi Arabia, Middle East, AI engineers, machine learning, enterprise AI, Vision 2030",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="font-sans antialiased">
        <Navbar />
        <main>{children}</main>
        <Footer />
        <Chatbot />
      </body>
    </html>
  );
}
