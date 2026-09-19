import type { Metadata } from "next";
import { LoyaltyPage } from "@/components/loyalty/loyalty-page";
import { loyaltyCopy } from "@/i18n/loyalty";
import "@/styles/loyalty.css";

export const metadata: Metadata = {
  title: "会员计划 | Toko Cat Utama",
  description:
    "Utama 会员计划，可在 Toko Cat Utama 累积购物积分并兑换精美礼品。",
};

export default function ChineseLoyaltyMemberPage() {
  return <LoyaltyPage copy={loyaltyCopy.zh} />;
}
