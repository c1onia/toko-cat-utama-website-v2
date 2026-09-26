import type { Metadata } from "next";
import { LoyaltyPage as LoyaltyPageTemplate } from "@/components/loyalty/loyalty-page";
import { loyaltyCopy } from "@/i18n/loyalty";
import "@/styles/loyalty.css";

export const metadata: Metadata = {
  title: "Loyalty Member | Toko Cat Utama",
  description:
    "Program Loyalty Member Utama untuk mengumpulkan poin belanja dan menukarkannya dengan hadiah menarik di Toko Cat Utama.",
};

export default function LoyaltyMemberPage() {
  return <LoyaltyPageTemplate copy={loyaltyCopy.id} />;
}
