import type { Metadata } from "next";

import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";

import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://vyira-fashion.example"),
  title: {
    default: "Vyira | Men and Women Fashion",
    template: "%s | Vyira"
  },
  description:
    "Vyira is a contemporary fashion brand for men and women featuring dresses, tops, denim, trousers, outerwear, activewear, footwear, bags, and accessories.",
  openGraph: {
    title: "Vyira | Men and Women Fashion",
    description:
      "Modern wardrobes for women and men with clean design, scalable collections, and performance-first storefront architecture.",
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
