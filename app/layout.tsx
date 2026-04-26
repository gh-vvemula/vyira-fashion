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
    "Vyira is a modern western fashion brand for women and men featuring dresses, tops, denim, trousers, outerwear, activewear, footwear, bags, and accessories.",
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
