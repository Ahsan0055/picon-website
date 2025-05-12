import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from '../components/Navbar';
import FooterSection from '@/components/FooterSection';
import FloatingWhatsAppButton from '@/components/FloatingWhatsAppButton';
import Head from 'next/head';

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: {
    default: "PICON Education & Visa Services",
    template: "%s | PICON",
  },
  description: "We help students study abroad in the UK, Australia, Canada, and USA.",
  keywords: "Study Abroad, Visa Application, Immigration, UK, Australia, Canada, USA",
  metadataBase: new URL("https://picon.com.au"), // Updated to your real domain
  openGraph: {
    title: "PICON Education & Visa Services",
    description: "Helping students achieve international education dreams.",
    url: "https://picon.com.au",
    siteName: "PICON",
    images: [
      {
        url: "https://picon.com.au/images/logo-remove.png", // Updated to point to the correct path
        width: 800,
        height: 600,
        alt: "PICON Logo",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "PICON Education & Visa Services",
    description: "Helping students achieve international education dreams.",
    images: ["https://picon.com.au/images/logo-remove.png"], // Updated to the correct path
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
        {/* JSON-LD Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "PICON Education & Visa Services",
              url: "https://picon.com.au", // Updated to your real domain
              logo: "https://picon.com.au/images/logo-remove.png", // Updated to the correct path
              contactPoint: {
                "@type": "ContactPoint",
                telephone: "+92 309 1052430",
                contactType: "Customer Service",
              },
            }),
          }}
        />
      </Head>

      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
       
        <Navbar />
        <div className="pt-20">
          {children}
        </div>
        <FooterSection />
        <FloatingWhatsAppButton />
      </body>
    </html>
  );
}
