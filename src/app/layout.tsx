import "./globals.css";
import type { Metadata } from "next";
import Navbar from "@/components/layout/Navbar";

export const metadata: Metadata = {
  title: "Kyries Ventures",
  description: "E-commerce powered by Kyries Ventures",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="pt-16"> {/* padding so content not hidden behind navbar */}
        <Navbar />
        {children}
      </body>
    </html>
  );
}
