import type { Metadata } from "next";
import { BrandGrid } from "@/components/brands/brand-grid";
import { BrandTrustSection } from "@/components/brands/brand-trust-section";
import { BrandsCta } from "@/components/brands/brands-cta";
import { BrandsHero } from "@/components/brands/brands-hero";
import "@/styles/brands.css";

export const metadata: Metadata = {
  title: "Merek | Toko Cat Utama",
  description:
    "Berbagai merek cat dan material bangunan terpercaya untuk kebutuhan rumah, proyek, dan industri.",
};

export default function BrandsPage() {
  return (
    <main id="main-content">
      <BrandsHero />
      <BrandGrid />
      <BrandTrustSection />
      <BrandsCta />
    </main>
  );
}
