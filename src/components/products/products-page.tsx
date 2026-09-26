import { ProductCategoryGrid } from "@/components/products/product-category-grid";
import { ProductCta } from "@/components/products/product-cta";
import { ProductHelp } from "@/components/products/product-help";
import { ProductHero } from "@/components/products/product-hero";
import type { ProductsCopy } from "@/i18n/products";

type ProductsPageProps = {
  copy: ProductsCopy;
};

export function ProductsPage({ copy }: ProductsPageProps) {
  return (
    <main id="main-content">
      <ProductHero copy={copy.hero} />
      <ProductCategoryGrid introduction={copy.introduction} categories={copy.categories} />
      <ProductHelp copy={copy.help} />
      <ProductCta copy={copy.cta} />
    </main>
  );
}
