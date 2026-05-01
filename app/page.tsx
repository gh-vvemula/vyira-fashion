import type { Metadata } from "next";

import { ComingSoonHero } from "@/components/coming-soon-hero";
import { EnquiryForm } from "@/components/enquiry-form";
import { Newsletter } from "@/components/newsletter";

export const metadata: Metadata = {
  title: {
    absolute: "VYÍRA"
  },
  description:
    "VYÍRA is coming soon with a new launch experience for premium women’s and men’s fashion shaped by heritage, effortless elegance, and natural-feel fabrics.",
  openGraph: {
    title: "VYÍRA | Coming soon",
    description:
      "A new VYÍRA launch experience is on the way. Join member access for first look updates and launch news."
  },
  twitter: {
    card: "summary_large_image",
    title: "VYÍRA | Coming soon",
    description:
      "Join member access for first look launch updates from VYÍRA."
  }
};

export default function HomePage() {
  return (
    <>
      <ComingSoonHero />
      <EnquiryForm />
      <Newsletter />
    </>
  );
}
