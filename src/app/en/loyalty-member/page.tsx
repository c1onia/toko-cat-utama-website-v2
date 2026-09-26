import type { Metadata } from "next";
import { LoyaltyPage } from "@/components/loyalty/loyalty-page";
import { loyaltyCopy } from "@/i18n/loyalty";
import "@/styles/loyalty.css";

export const metadata: Metadata = {
  title: "Loyalty Member | Toko Cat Utama",
  description:
    "Utama Loyalty Member program for collecting shopping points and redeeming rewards at Toko Cat Utama.",
};

export default function EnglishLoyaltyMemberPage() {
  return <LoyaltyPage copy={loyaltyCopy.en} />;
}
