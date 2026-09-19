import type { Metadata } from "next";
import { ProductsPage } from "@/components/products/products-page";
import { productsCopy } from "@/i18n/products";
import "@/styles/products.css";

export const metadata: Metadata = {
  title: "Products | Toko Cat Utama",
  description:
    "Complete painting solutions for homes, projects, and industrial needs from Toko Cat Utama.",
};

export default function EnglishProductsPage() {
  return <ProductsPage copy={productsCopy.en} />;
}
