import type { Metadata } from "next";
import { ProductCategoryGrid } from "@/components/products/product-category-grid";
import { ProductCta } from "@/components/products/product-cta";
import { ProductHelp } from "@/components/products/product-help";
import { ProductHero } from "@/components/products/product-hero";
import "@/styles/products.css";

export const metadata: Metadata = {
  title: "Produk | Toko Cat Utama",
  description:
    "Solusi pengecatan lengkap untuk rumah, proyek, dan kebutuhan industri dari Toko Cat Utama.",
};

export default function ProductsPage() {
  return (
    <main id="main-content">
      <ProductHero />
      <ProductCategoryGrid />
      <ProductHelp />
      <ProductCta />
    </main>
  );
}
