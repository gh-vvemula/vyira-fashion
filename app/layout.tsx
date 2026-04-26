import type { Metadata } from "next";

import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";

import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://vyira-fashion.example"),
  title: {
    default: "Vyira | Modern Western Fashion",
    template: "%s | Vyira"
  },
  description:
    "Vyira is a modern western fashion brand for women and men featuring dresses, tops, denim, trousers, outerwear, and activewear.",
  referrer: "strict-origin-when-cross-origin",
  openGraph: {
    title: "Vyira | Modern Western Fashion",
    description:
      "Modern wardrobes for women and men with a clean performance-inspired storefront and scalable architecture.",
    type: "website"
  }
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <head>
        <meta
          httpEquiv="Content-Security-Policy"
          content="default-src 'self'; img-src 'self' data:; style-src 'self' 'unsafe-inline'; script-src 'self' 'unsafe-inline'; font-src 'self' data:; connect-src 'self'; object-src 'none'; base-uri 'self'; form-action 'self'; frame-ancestors 'none'; upgrade-insecure-requests"
        />
        <meta httpEquiv="X-Content-Type-Options" content="nosniff" />
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
