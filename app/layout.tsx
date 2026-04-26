import type { Metadata } from "next";

import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";

import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://vyira-fashion.example"),
  title: {
    default: "Vyira | Legacy. Luxury. Limitless.",
    template: "%s | Vyira"
  },
  description:
    "Vyira is a luxury western fashion brand for women and men featuring dresses, tops, denim, trousers, outerwear, activewear, footwear, bags, and accessories.",
  openGraph: {
    title: "Vyira | Legacy. Luxury. Limitless.",
    description:
      "Luxury western wardrobes for women and men with a premium black-and-gold identity and scalable storefront architecture.",
    type: "website"
  }
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
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
