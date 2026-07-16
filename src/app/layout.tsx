import type { Metadata, Viewport } from "next";
import "./globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { StickyMobileCta } from "@/components/layout/StickyMobileCta";
import { business } from "@/data/business";

const siteUrl = "https://barbeariafreguesia.com.br";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: `${business.name} — Barbearia em Nova Angra, Angra dos Reis`,
    template: `%s | ${business.name}`,
  },
  description:
    "Barbearia Freguesia: corte, barba e cuidado completo em Nova Angra, Angra dos Reis - RJ. Avaliação 4,9 com mais de 300 clientes. Agende on-line.",
  keywords: [
    "barbearia Angra dos Reis",
    "barbearia Nova Angra",
    "corte de cabelo Angra dos Reis",
    "barba Angra dos Reis",
    "Barbearia Freguesia",
  ],
  authors: [{ name: business.name }],
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: siteUrl,
    siteName: business.name,
    title: `${business.name} — Barbearia em Nova Angra, Angra dos Reis`,
    description:
      "Corte, barba e cuidado completo em Nova Angra, Angra dos Reis - RJ. Avaliação 4,9 com mais de 300 clientes.",
  },
  twitter: {
    card: "summary_large_image",
    title: `${business.name} — Barbearia em Nova Angra, Angra dos Reis`,
    description:
      "Corte, barba e cuidado completo em Nova Angra, Angra dos Reis - RJ.",
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: "#14110f",
  width: "device-width",
  initialScale: 1,
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "HairSalon",
  name: business.name,
  image: `${siteUrl}/opengraph-image`,
  telephone: business.phoneDisplay,
  priceRange: "$$",
  address: {
    "@type": "PostalAddress",
    streetAddress: business.address.line1,
    addressLocality: business.address.city,
    addressRegion: business.address.state,
    postalCode: business.address.zip,
    addressCountry: "BR",
  },
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: business.rating,
    reviewCount: business.reviewCount,
  },
  url: siteUrl,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className="h-full">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        {/* eslint-disable-next-line @next/next/no-page-custom-font -- App Router
            root layout has no _document.js; next/font/google could not reach
            fonts.googleapis.com during this sandbox's build (see docs/04-DESIGN-SYSTEM.md) */}
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Playfair+Display:wght@500;600;700&display=swap"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="flex min-h-full flex-col bg-cream text-[--color-text-on-light] antialiased">
        <a
          href="#conteudo"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-full focus:bg-gold focus:px-5 focus:py-3 focus:text-ink"
        >
          Pular para o conteúdo
        </a>
        <Header />
        <main id="conteudo" className="flex-1">
          {children}
        </main>
        <Footer />
        <StickyMobileCta />
        <div className="h-16 md:hidden" aria-hidden />
      </body>
    </html>
  );
}
