import type { Metadata } from "next";
import { ProductsPage as ProductsPageTemplate } from "@/components/products/products-page";
import { productsCopy } from "@/i18n/products";
import "@/styles/products.css";

export const metadata: Metadata = {
  title: "Produk | Toko Cat Utama",
  description:
    "Solusi pengecatan lengkap untuk rumah, proyek, dan kebutuhan industri dari Toko Cat Utama.",
};

export default function ProductsPage() {
  return <ProductsPageTemplate copy={productsCopy.id} />;
}
