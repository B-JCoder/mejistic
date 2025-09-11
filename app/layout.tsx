import type React from "react"
import type { Metadata } from "next"
import { Playfair_Display, Poppins } from "next/font/google"
import "./globals.css"

const playfair = Playfair_Display({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-playfair",
  preload: true,
})

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
  variable: "--font-poppins",
  preload: true,
})

export const metadata: Metadata = {
  title: {
    default: "Grand Majestic Banquet and Convention Centre | Premier Event Venue in GTA",
    template: "%s | Grand Majestic Banquet Centre",
  },
  description:
    "Premier luxury event venue in Greater Toronto Area. Elegant banquet halls for weddings, corporate events, and celebrations. Professional catering, stunning decor, and exceptional service.",
  keywords: [
    "wedding venue GTA",
    "banquet hall Toronto",
    "event venue",
    "wedding reception",
    "corporate events",
    "party venue",
    "catering services",
    "Eglinton Avenue",
    "luxury venue",
    "event planning",
  ],
  authors: [{ name: "Grand Majestic Banquet Centre" }],
  creator: "Grand Majestic Banquet Centre",
  publisher: "Grand Majestic Banquet Centre",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://grandmajesticbanquet.com"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Grand Majestic Banquet and Convention Centre",
    description:
      "Premier luxury event venue in Greater Toronto Area. Elegant banquet halls for weddings, corporate events, and celebrations.",
    url: "https://grandmajesticbanquet.com",
    siteName: "Grand Majestic Banquet Centre",
    images: [
      {
        url: "/images/hero-banquet-hall.png",
        width: 1200,
        height: 630,
        alt: "Grand Majestic Banquet Hall Interior",
      },
    ],
    locale: "en_CA",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Grand Majestic Banquet and Convention Centre",
    description:
      "Premier luxury event venue in Greater Toronto Area. Elegant banquet halls for weddings, corporate events, and celebrations.",
    images: ["/images/hero-banquet-hall.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "your-google-verification-code",
    yandex: "your-yandex-verification-code",
  },
  category: "business",
    generator: 'v0.app'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "EventVenue",
              name: "Grand Majestic Banquet and Convention Centre",
              description:
                "Premier luxury event venue in Greater Toronto Area specializing in weddings, corporate events, and celebrations.",
              url: "https://grandmajesticbanquet.com",
              telephone: "+1-416 269 0292",
              email: "gmbanquet@bellnet.ca",
              address: {
                "@type": "PostalAddress",
                streetAddress: "2648 Eglinton Ave East",
                addressLocality: "Toronto",
                addressRegion: "ON",
                addressCountry: "CA",
              },
              geo: {
                "@type": "GeoCoordinates",
                latitude: "43.7315",
                longitude: "-79.2896",
              },
              openingHours: ["Mo-Fr 09:00-20:00", "Sa 10:00-18:00", "Su 12:00-17:00"],
              priceRange: "$$$$",
              servesCuisine: ["International", "Canadian"],
              amenityFeature: [
                {
                  "@type": "LocationFeatureSpecification",
                  name: "Parking",
                  value: true,
                },
                {
                  "@type": "LocationFeatureSpecification",
                  name: "Wheelchair Accessible",
                  value: true,
                },
                {
                  "@type": "LocationFeatureSpecification",
                  name: "Air Conditioning",
                  value: true,
                },
              ],
              maximumAttendeeCapacity: 300,
              image: [
                "https://grandmajesticbanquet.com/images/hero-banquet-hall.png",
                "https://grandmajesticbanquet.com/images/wedding-setup.png",
                "https://grandmajesticbanquet.com/images/corporate-event.png",
              ],
              sameAs: [
                "https://www.facebook.com/grandmajesticbanquet",
                "https://www.instagram.com/grandmajesticbanquet",
              ],
            }),
          }}
        />
        <meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover" />
        <meta name="theme-color" content="#c3922e" />
        <meta name="color-scheme" content="dark" />
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/icon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <meta name="format-detection" content="telephone=no" />
      </head>
      <body className={`font-sans ${playfair.variable} ${poppins.variable} antialiased`}>{children}</body>
    </html>
  )
}
