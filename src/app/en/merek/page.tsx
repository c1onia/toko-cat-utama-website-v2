import type { Metadata } from "next";
import { BrandsPage } from "@/components/brands/brands-page";
import { brandsCopy } from "@/i18n/brands";
import "@/styles/brands.css";

export const metadata: Metadata = {
  title: "Brands | Toko Cat Utama",
  description:
    "A wide range of trusted paint and building material brands for homes, projects, and industrial needs.",
};

export default function EnglishBrandsPage() {
  return <BrandsPage copy={brandsCopy.en} />;
}
