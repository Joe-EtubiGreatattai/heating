import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import StickyCTA from "@/components/StickyCTA";

export const metadata: Metadata = {
  metadataBase: new URL("https://directheatingltd.com"),
  title: {
    default: "Direct Heating Ltd | Gas Safe Boiler Installation & Plumbing North London",
    template: "%s | Direct Heating Ltd"
  },
  description: "Gas Safe registered heating engineers in North London. Specialized in boiler installation, servicing, and emergency repairs. Get a free quote today.",
  keywords: ["boiler installation North London", "Gas Safe engineer London", "emergency boiler repair", "heating engineering North London", "boiler servicing", "Vaillant installer", "Worcester Bosch repairs"],
  authors: [{ name: "Direct Heating Ltd" }],
  creator: "Direct Heating Ltd",
  publisher: "Direct Heating Ltd",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "en_GB",
    url: "https://directheatingltd.com",
    siteName: "Direct Heating Ltd",
    title: "Direct Heating Ltd | Gas Safe Boiler Installation & Plumbing North London",
    description: "Expert Gas Safe heating engineers providing reliable boiler services and emergency repairs across North London.",
    images: [
      {
        url: "/Logo tsp white.png",
        width: 800,
        height: 600,
        alt: "Direct Heating Ltd Logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Direct Heating Ltd | Gas Safe Boiler Installation North London",
    description: "Reliable Gas Safe heating engineers for boiler installation, servicing & repairs. Prompt emergency callouts.",
    images: ["/Logo tsp white.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
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
              "@graph": [
                {
                  "@type": "LocalBusiness",
                  "@id": "https://directheatingltd.com/#organization",
                  "name": "Direct Heating Ltd",
                  "image": "https://directheatingltd.com/Logo tsp white.png",
                  "telephone": "0204 600 8746",
                  "email": "info@directheatingltd.com",
                  "url": "https://directheatingltd.com",
                  "priceRange": "££",
                  "address": {
                    "@type": "PostalAddress",
                    "addressLocality": "North London",
                    "addressRegion": "London",
                    "addressCountry": "GB"
                  },
                  "geo": {
                    "@type": "GeoCoordinates",
                    "latitude": 51.5074,
                    "longitude": -0.1278
                  },
                  "openingHoursSpecification": [
                    {
                      "@type": "OpeningHoursSpecification",
                      "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
                      "opens": "08:00",
                      "closes": "18:00"
                    },
                    {
                      "@type": "OpeningHoursSpecification",
                      "dayOfWeek": ["Saturday"],
                      "opens": "08:00",
                      "closes": "13:00"
                    }
                  ],
                  "sameAs": [
                    "https://www.instagram.com/directheatingltd/"
                  ]
                },
                {
                  "@type": "Service",
                  "serviceType": "Boiler Installation",
                  "provider": { "@id": "https://directheatingltd.com/#organization" },
                  "areaServed": "North London"
                },
                {
                  "@type": "Service",
                  "serviceType": "Emergency Boiler Repair",
                  "provider": { "@id": "https://directheatingltd.com/#organization" },
                  "areaServed": "North London"
                }
              ]
            }),
          }}
        />
      </head>
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
        <StickyCTA />
      </body>
    </html>
  );
}
