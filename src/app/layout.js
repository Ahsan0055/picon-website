import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from '../components/Navbar';
import FooterSection from '@/components/FooterSection';
import FloatingWhatsAppButton from '@/components/FloatingWhatsAppButton';

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
  metadataBase: new URL("https://picon.com.au"),
  openGraph: {
    title: "PICON Education & Visa Services",
    description: "Helping students achieve international education dreams.",
    url: "https://picon.com.au",
    siteName: "PICON",
    images: [
      {
        url: "https://picon.com.au/images/logo-remove.png",
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
    images: ["https://picon.com.au/images/logo-remove.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
  // ✅ Favicon setup
  icons: {
    icon: "/images/logo-remove.png", // path relative to public/
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        {/* ✅ JSON-LD structured data inside <body> is fine */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "PICON Education & Visa Services",
              url: "https://picon.com.au",
              logo: "https://picon.com.au/images/logo-remove.png",
              contactPoint: {
                "@type": "ContactPoint",
                telephone: "+92 309 1052430",
                contactType: "Customer Service",
              },
            }),
          }}
        />
        <Navbar />
        <div className="pt-20">{children}</div>
        <FooterSection />
        <FloatingWhatsAppButton />
      </body>
    </html>
  );
}
