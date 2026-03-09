import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Direct Heating Ltd | Gas Safe Boiler Installation & Plumbing Services North London",
  description: "Gas Safe registered boiler installation, servicing & repairs in North London. 24/7 emergency callouts. Commercial & domestic heating engineers. Get a free quote today.",
  keywords: "boiler installation, gas safe engineer, heating engineer, plumber north london, boiler repair, emergency plumber, vaillant, glow worm, worcester bosch",
  openGraph: {
    title: "Direct Heating Ltd | Gas Safe Boiler Installation North London",
    description: "Reliable Gas Safe heating engineers for boiler installation, servicing & repairs. 24/7 emergency service available.",
    images: ["https://directheatingltd.com/og-image.jpg"],
    url: "https://directheatingltd.com",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              "name": "Direct Heating Ltd",
              "image": "https://directheatingltd.com/Direct Heating logo alternate.JPG",
              "telephone": "0204 600 8746",
              "email": "info@directheatingltd.com",
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "North London",
                "addressRegion": "London",
                "addressCountry": "UK"
              },
              "url": "https://directheatingltd.com",
              "priceRange": "££",
              "openingHours": "Mo-Su 00:00-23:59",
              "serviceType": ["Boiler Installation", "Boiler Repair", "Plumbing", "Heating Services"]
            }),
          }}
        />
      </head>
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
        <div className="sticky-cta">
          <a href="tel:02046008746" className="btn btn-primary">📞 Call Now</a>
          <Link href="/contact" className="btn btn-secondary" style={{ borderColor: 'var(--primary)', color: 'var(--primary)' }}>Get Quote</Link>
        </div>
      </body>
    </html>
  );
}

import Link from "next/link";
