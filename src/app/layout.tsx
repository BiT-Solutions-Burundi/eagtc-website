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
  openGraph: {
    type: "website",
    locale: "fr_BI",
    url: "https://www.eagtc.bi",
    siteName: "EAGTC",
    title: "EAGTC | East African General Trade Company",
    description:
      "Votre partenaire de confiance pour le commerce général, l'électrification et la construction au Burundi.",
  },
  twitter: {
    card: "summary_large_image",
    title: "EAGTC | East African General Trade Company",
    description:
      "Votre partenaire de confiance pour le commerce général, l'électrification et la construction au Burundi.",
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
