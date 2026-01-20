import type { Metadata } from "next";
import { Inter, Lalezar } from "next/font/google";
import "./globals.css";

/**
 * Body font: Inter for clean, readable text
 */
const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

/**
 * Heading font: Lalezar for headers
 */
const lalezar = Lalezar({
  variable: "--font-lalezar",
  subsets: ["latin"],
  weight: "400",
});

/**
 * Site metadata for SEO - French language
 */
export const metadata: Metadata = {
  title: "EAGTC | East African General Trade Company",
  description:
    "EAGTC - Votre partenaire de confiance pour le commerce général, l'électrification, les travaux solaires, l'import-export et la construction au Burundi. Plus de 14 ans d'expérience.",
  keywords: [
    "EAGTC",
    "Burundi",
    "électrification",
    "commerce général",
    "import-export",
    "construction",
    "énergie solaire",
    "engrais",
    "Bujumbura",
  ],
  authors: [{ name: "EAGTC SPRL" }],
  creator: "East African General Trade Company SPRL",
  publisher: "EAGTC",
  robots: "index, follow",
  alternates: {
    canonical: "https://www.eagtc.bi",
  },
  category: "Business & Trade",
  classification: "General Trade Company",
  viewport: "width=device-width, initial-scale=1",
  openGraph: {
    type: "website",
    locale: "fr_BI",
    url: "https://www.eagtc.bi",
    siteName: "EAGTC",
    title: "EAGTC | East African General Trade Company",
    description:
      "Votre partenaire de confiance pour le commerce général, l'électrification et la construction au Burundi.",
    images: [
      {
        url: "/images/logo-full.svg",
        width: 139,
        height: 53,
        alt: "EAGTC Logo - East African General Trade Company",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "EAGTC | East African General Trade Company",
    description:
      "Votre partenaire de confiance pour le commerce général, l'électrification et la construction au Burundi.",
    images: ["/images/logo-full.svg"],
  },
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
  other: {
    "msapplication-TileColor": "#FFC94A",
    "theme-color": "#FFC94A",
  },
};

/**
 * Root layout component wrapping all pages
 */
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <head>
        <link rel="icon" href="/images/logo-min.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/images/logo-min.svg" />
        <meta name="msapplication-TileColor" content="#FFC94A" />
        <meta name="theme-color" content="#FFC94A" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "East African General Trade Company",
              "alternateName": "EAGTC",
              "url": "https://www.eagtc.bi",
              "logo": "https://www.eagtc.bi/images/logo-full.svg",
              "description": "Votre partenaire de confiance pour le commerce général, l'électrification, les travaux solaires, l'import-export et la construction au Burundi. Plus de 14 ans d'expérience.",
              "address": {
                "@type": "PostalAddress",
                "addressCountry": "BI",
                "addressLocality": "Bujumbura",
                "addressRegion": "Bujumbura Mairie"
              },
              "contactPoint": {
                "@type": "ContactPoint",
                "contactType": "customer service",
                "availableLanguage": "fr"
              },
              "sameAs": [
                "https://www.eagtc.bi"
              ],
              "foundingDate": "2010",
              "industry": "General Trade",
              "keywords": "électrification, commerce général, import-export, construction, énergie solaire, engrais, Burundi"
            })
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              "name": "EAGTC - East African General Trade Company",
              "url": "https://www.eagtc.bi",
              "description": "Votre partenaire de confiance pour le commerce général, l'électrification et la construction au Burundi.",
              "publisher": {
                "@type": "Organization",
                "name": "EAGTC SPRL"
              },
              "inLanguage": "fr-BI"
            })
          }}
        />
      </head>
      <body
        className={`${inter.className} ${lalezar.variable} antialiased`}
      >
        {/* Skip link for accessibility */}
        <a href="#main-content" className="skip-link">
          Aller au contenu principal
        </a>
        {children}
      </body>
    </html>
  );
}
