// app/layout.tsx
import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import Script from 'next/script';              // NEW
import './globals.css';
import './design-system.css';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';

const geistSans = Geist({ variable: '--font-geist-sans', subsets: ['latin'] });
const geistMono = Geist_Mono({ variable: '--font-geist-mono', subsets: ['latin'] });

export const metadata: Metadata = {
  /* ---------- BASIC ---------- */
  title: {
    template: '%s | SLIIT GPA Calculator',
    default: 'SLIIT GPA Calculator | The Most Accurate SLIIT GPA Calculator Sri Lanka',
  },
  description:
    'Calculate your SLIIT GPA instantly with our comprehensive calculator. Supports all faculties: Computing, Engineering, Business, Law, Architecture & more.',
  keywords:
    'SLIIT GPA Calculator, SLIIT CGPA, Sri Lanka Institute of Information Technology, GPA Calculator, SLIIT Computing, SLIIT Business',
  authors: [{ name: 'Sathmina Dissanayake' }],
  metadataBase: new URL('https://www.sliitgpacalculator.com'),
  alternates: {
    canonical: '/',
  },
  /* ---------- ROBOTS ---------- */
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
      'max-video-preview': -1,
    },
  },

  /* ---------- OPEN GRAPH ---------- */
  openGraph: {
    title: 'SLIIT GPA Calculator - 100 % Free & Accurate',
    description: 'The most accurate SLIIT GPA calculator for all faculties and programs.',
    url: 'https://sliitgpacalculator.com',
    type: 'website',
    images: [
      {
        url: '/images/og-banner.jpg',          // add the image to /public/images
        width: 1200,
        height: 630,
        alt: 'SLIIT GPA Calculator interface',
      },
    ],
  },

  /* ---------- TWITTER CARD ---------- */
  twitter: {
    card: 'summary_large_image',
    site: '@yourHandle',                       // optional
    creator: '@yourHandle',                    // optional
    title: 'SLIIT GPA Calculator - 100 % Free & Accurate',
    description:
      'Calculate your GPA & CGPA with official SLIIT grading rules. Works for Computing, Business, Engineering, Law and more.',
    images: ['/images/og-banner.jpg'],
  },

  /* ---------- VIEWPORT ---------- */
  viewport:
    'width=device-width, initial-scale=1, maximum-scale=5, viewport-fit=cover',

  /* ---------- ICONS ---------- */
  icons: {
    icon: '/favicon.ico',
    apple: '/apple-touch-icon.png',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-slate-50`}
      >
        <Header />

        <main className="min-h-screen">{children}</main>

        <Footer />
   {/* 2. Add the Google Tag Scripts here */}
        <Script 
          strategy="afterInteractive"
          src="https://www.googletagmanager.com/gtag/js?id=G-R7CZVLDGNQ" 
        />
        <Script 
          id="google-analytics"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-R7CZVLDGNQ');
            `,
          }}
        />
        {/* ---------- JSON-LD FAQ SCHEMA (only possible via <Script>) ---------- */}
        <Script
          id="ld-json-faq"
          type="application/ld+json"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'FAQPage',
              mainEntity: [
                {
                  '@type': 'Question',
                  name: 'How does the SLIIT GPA Calculator convert percentage marks to letter grades?',
                  acceptedAnswer: {
                    '@type': 'Answer',
                    text:
                      'It applies SLIIT’s official grading scale (e.g., 90–100 =A+, 80–89 =A) and then maps each letter to grade points before calculating GPA.',
                  },
                },
                {
                  '@type': 'Question',
                  name: 'Can I calculate Semester GPA separately from CGPA?',
                  acceptedAnswer: {
                    '@type': 'Answer',
                    text:
                      'Yes. Select “Semester” mode, enter module details, and the tool shows both Semester GPA and cumulative CGPA.',
                  },
                },
              ],
            }),
          }}
        />
      </body>
    </html>
  );
}
