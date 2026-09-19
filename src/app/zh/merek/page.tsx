import type { Metadata } from "next";
import { BrandsPage } from "@/components/brands/brands-page";
import { brandsCopy } from "@/i18n/brands";
import "@/styles/brands.css";

export const metadata: Metadata = {
  title: "品牌 | Toko Cat Utama",
  description: "多种可靠的涂料与建材品牌，满足住宅、工程和工业需求。",
};

export default function ChineseBrandsPage() {
  return <BrandsPage copy={brandsCopy.zh} />;
}
