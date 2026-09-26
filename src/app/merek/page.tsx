import type { Metadata } from "next";
import { BrandsPage as BrandsPageTemplate } from "@/components/brands/brands-page";
import { brandsCopy } from "@/i18n/brands";
import "@/styles/brands.css";

export const metadata: Metadata = {
  title: "Merek | Toko Cat Utama",
  description:
    "Berbagai merek cat dan material bangunan terpercaya untuk kebutuhan rumah, proyek, dan industri.",
};

export default function BrandsPage() {
  return <BrandsPageTemplate copy={brandsCopy.id} />;
}
