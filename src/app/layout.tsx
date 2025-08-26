import "./globals.css";
import type { Metadata } from "next";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer"; 

export const metadata: Metadata = {
  title: "Kyries Ventures",
  description: "E-commerce powered by Kyries Ventures",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="pt-16 flex flex-col min-h-screen"> 
        {/* Navbar fixed at top */}
        <Navbar />

        {/* Main content */}
        <main className="flex-1">{children}</main>

        {/* Footer always at bottom */}
        <Footer />
      </body>
    </html>
  );
}
