import type { Metadata } from "next";
import { LoyaltyAppDownload } from "@/components/loyalty/loyalty-app-download";
import { LoyaltyFaq } from "@/components/loyalty/loyalty-faq";
import { LoyaltyFinalCta } from "@/components/loyalty/loyalty-final-cta";
import { LoyaltyHero } from "@/components/loyalty/loyalty-hero";
import { LoyaltyHighlights } from "@/components/loyalty/loyalty-highlights";
import { LoyaltyPointConversion } from "@/components/loyalty/loyalty-point-conversion";
import { LoyaltyRegistration } from "@/components/loyalty/loyalty-registration";
import { LoyaltyRewards } from "@/components/loyalty/loyalty-rewards";
import { LoyaltySteps } from "@/components/loyalty/loyalty-steps";
import "@/styles/loyalty.css";

export const metadata: Metadata = {
  title: "Loyalty Member | Toko Cat Utama",
  description:
    "Program Loyalty Member Utama untuk mengumpulkan poin belanja dan menukarkannya dengan hadiah menarik di Toko Cat Utama.",
};

export default function LoyaltyMemberPage() {
  return (
    <main id="main-content">
      <LoyaltyHero />
      <LoyaltyHighlights />
      <LoyaltySteps />
      <LoyaltyPointConversion />
      <LoyaltyRewards />
      <LoyaltyAppDownload />
      <LoyaltyRegistration />
      <LoyaltyFaq />
      <LoyaltyFinalCta />
    </main>
  );
}
