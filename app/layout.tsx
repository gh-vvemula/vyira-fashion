import type { Metadata } from "next";

import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";

import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://vyira.com"),
  title: {
    default: "Vyira | Modern Western Fashion",
    template: "%s | Vyira"
  },
  description:
    "Vyira is a modern western fashion brand for women and men featuring dresses, tops, denim, trousers, outerwear, and activewear.",
  referrer: "strict-origin-when-cross-origin",
  keywords: [
    "Vyira",
    "women's western wear",
    "men's western wear",
    "dresses",
    "tops",
    "denim",
    "trousers",
    "outerwear",
    "activewear",
    "fashion India"
  ],
  openGraph: {
    title: "Vyira | Modern Western Fashion",
    description:
      "Modern wardrobes for women and men with a clean performance-inspired storefront and scalable architecture.",
    url: "https://vyira.com",
    siteName: "Vyira",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Vyira | Modern Western Fashion",
    description:
      "Modern wardrobes for women and men across dresses, tops, denim, trousers, outerwear, and activewear."
  }
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <head>
        <meta
          httpEquiv="Content-Security-Policy"
          content="default-src 'self'; img-src 'self' data: https:; style-src 'self' 'unsafe-inline'; script-src 'self' 'unsafe-inline'; font-src 'self' data:; connect-src 'self'; object-src 'none'; base-uri 'self'; form-action 'self' mailto:; frame-ancestors 'none'; upgrade-insecure-requests"
        />
        <meta httpEquiv="X-Content-Type-Options" content="nosniff" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "Vyira",
              url: "https://vyira.com",
              email: "vyirainternational@gmail.com",
              telephone: "+91 90300 00876",
              sameAs: ["https://wa.me/919030000876"]
            })
          }}
        />
      </head>
      <body>
        <div className="page-wrap">
          <SiteHeader />
          <main>{children}</main>
          <SiteFooter />
        </div>
      </body>
    </html>
  );
}
