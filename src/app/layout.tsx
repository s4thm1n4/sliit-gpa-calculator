import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import "./design-system.css";
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    template: '%s | SLIIT GPA Calculator',
    default: 'SLIIT GPA Calculator | Official Sri Lanka Institute of Information Technology',
  },
  description: "Calculate your SLIIT GPA instantly with our comprehensive calculator. Supports all faculties: Computing, Engineering, Business, Law, Architecture & more.",
  keywords: "SLIIT GPA Calculator, SLIIT CGPA, Sri Lanka Institute of Information Technology, GPA Calculator, SLIIT Computing, SLIIT Business",
  authors: [{ name: 'SLIIT GPA Calculator Team' }],
  openGraph: {
    title: "SLIIT GPA Calculator - Official & Accurate",
    description: "The most accurate SLIIT GPA calculator for all faculties and programs.",
    url: "https://sliitgpacalculator.com",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <Header />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
