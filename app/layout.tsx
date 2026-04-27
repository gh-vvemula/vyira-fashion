import type { Metadata } from "next";

import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";

import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://vyira.com"),
  title: {
    default: "Vyira | Elegance Made Effortless",
    template: "%s | Vyira"
  },
  description:
    "Vyira is a design-led fashion brand for women and men, built on Padmashali textile heritage and focused on effortless elegance, premium finish, and sustainable fabrics.",
  referrer: "strict-origin-when-cross-origin",
  alternates: {
    canonical: "https://vyira.com"
  },
  keywords: [
    "Vyira",
    "Vyira fashion",
    "Vyira brand",
    "Vyira clothing",
    "Vyira International",
    "Vinay Vemula",
    "Padmashali fashion brand",
    "Padmashali textile heritage",
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
    title: "Vyira | Elegance Made Effortless",
    description:
      "Discover Vyira, a design-led apparel brand shaped by Padmashali textile heritage, effortless elegance, and sustainable premium fabrics.",
    url: "https://vyira.com",
    siteName: "Vyira",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Vyira | Elegance Made Effortless",
    description:
      "Design-led apparel for women and men by Vyira, built with thoughtful materials, premium finish, and a responsible long-term vision."
  }
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <head>
        <meta
          httpEquiv="Content-Security-Policy"
          content="default-src 'self'; img-src 'self' data: https:; style-src 'self' 'unsafe-inline'; script-src 'self' 'unsafe-inline'; font-src 'self' data:; connect-src 'self'; object-src 'none'; base-uri 'self'; form-action 'self' mailto:; frame-ancestors 'none'; manifest-src 'self'; media-src 'self'; worker-src 'none'; child-src 'none'; block-all-mixed-content; upgrade-insecure-requests"
        />
        <meta httpEquiv="X-Content-Type-Options" content="nosniff" />
        <meta httpEquiv="Referrer-Policy" content="strict-origin-when-cross-origin" />
        <meta
          httpEquiv="Permissions-Policy"
          content="accelerometer=(), camera=(), geolocation=(), gyroscope=(), magnetometer=(), microphone=(), payment=(), usb=()"
        />
        <meta httpEquiv="Cross-Origin-Opener-Policy" content="same-origin" />
        <meta httpEquiv="Cross-Origin-Resource-Policy" content="same-origin" />
        <meta httpEquiv="X-DNS-Prefetch-Control" content="off" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@graph": [
                {
                  "@type": "Organization",
                  "@id": "https://vyira.com/#organization",
                  name: "Vyira",
                  url: "https://vyira.com",
                  description:
                    "Vyira is a design-led fashion brand for women and men, inspired by Padmashali textile heritage and built around effortless elegance, premium finish, and sustainable fabrics.",
                  email: "vyirainternational@gmail.com",
                  telephone: "+91 90300 00876",
                  sameAs: ["https://wa.me/919030000876"]
                },
                {
                  "@type": "Brand",
                  "@id": "https://vyira.com/#brand",
                  name: "Vyira",
                  slogan: "Elegance Made Effortless",
                  description:
                    "Vyira is an apparel brand for women and men that blends heritage, sustainability, premium design, and comfort-led materials at an accessible price.",
                  brand: {
                    "@id": "https://vyira.com/#organization"
                  }
                },
                {
                  "@type": "WebSite",
                  "@id": "https://vyira.com/#website",
                  name: "Vyira",
                  url: "https://vyira.com",
                  publisher: {
                    "@id": "https://vyira.com/#organization"
                  }
                }
              ]
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
