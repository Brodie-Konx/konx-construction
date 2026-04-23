import GoogleAnalytics from "./GoogleAnalytics"
import GoogleTagManager from "./GoogleTagManager"
import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const geist = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Konx Construction Group PTY LTD | Perth Commercial Construction",
    template: "%s | Konx Construction Group",
  },
  description:
    "Perth's commercial construction specialists. Tilt panel repair, commercial fit out, and concrete works. Fast turnaround, free site assessments.",
  keywords: [
    "commercial construction Perth",
    "tilt panel repair Perth",
    "commercial fit out Perth",
    "concrete works Perth",
    "construction company Perth WA",
  ],
  authors: [{ name: "Konx Construction Group PTY LTD" }],
  openGraph: {
    type: "website",
    locale: "en_AU",
    siteName: "Konx Construction Group",
  },
  verification: {
    google: "Cb2OHyMFqA-h2F2Wbq2AuASM6VTzTS8-xuaOa2DnfFU",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${geist.variable} h-full`}>
      <body className="min-h-full flex flex-col bg-[#0a0a0a] text-white antialiased">
        <GoogleTagManager />
        <GoogleAnalytics />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              name: "Konx Construction Group PTY LTD",
              description:
                "Perth's commercial construction specialists. Tilt panel repair, commercial fit out, and concrete works.",
              url: "https://www.konxconstructiongroup.com",
              telephone: "0478 530 664",
              email: "Info@konxconstructiongroup.com",
              address: {
                "@type": "PostalAddress",
                addressLocality: "Perth",
                addressRegion: "WA",
                addressCountry: "AU",
              },
              areaServed: {
                "@type": "GeoCircle",
                geoMidpoint: {
                  "@type": "GeoCoordinates",
                  latitude: -31.9505,
                  longitude: 115.8605,
                },
                geoRadius: "100000",
              },
              openingHours: "Mo-Fr 07:00-17:00",
              priceRange: "$$",
              hasOfferCatalog: {
                "@type": "OfferCatalog",
                name: "Construction Services",
                itemListElement: [
                  {
                    "@type": "Offer",
                    itemOffered: {
                      "@type": "Service",
                      name: "Tilt Panel Repair",
                      description:
                        "Expert repair of cracked, spalled, and deteriorating tilt panel structures in Perth.",
                    },
                  },
                  {
                    "@type": "Offer",
                    itemOffered: {
                      "@type": "Service",
                      name: "Commercial Fit Out",
                      description:
                        "Full commercial interior fit outs from shell to finished space across Perth.",
                    },
                  },
                  {
                    "@type": "Offer",
                    itemOffered: {
                      "@type": "Service",
                      name: "Concrete Works",
                      description:
                        "Structural concrete — slabs, footings, hardstand, and more in Perth.",
                    },
                  },
                ],
              },
            }),
          }}
        />
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
