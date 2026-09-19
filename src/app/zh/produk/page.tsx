import type { Metadata } from "next";
import { ProductsPage } from "@/components/products/products-page";
import { productsCopy } from "@/i18n/products";
import "@/styles/products.css";

export const metadata: Metadata = {
  title: "产品 | Toko Cat Utama",
  description: "Toko Cat Utama 为住宅、工程和工业需求提供完整的涂装解决方案。",
};

export default function ChineseProductsPage() {
  return <ProductsPage copy={productsCopy.zh} />;
}
