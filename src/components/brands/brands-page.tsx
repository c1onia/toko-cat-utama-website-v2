import { BrandGrid } from "@/components/brands/brand-grid";
import { BrandTrustSection } from "@/components/brands/brand-trust-section";
import { BrandsCta } from "@/components/brands/brands-cta";
import { BrandsHero } from "@/components/brands/brands-hero";
import type { BrandsCopy } from "@/i18n/brands";

type BrandsPageProps = {
  copy: BrandsCopy;
};

export function BrandsPage({ copy }: BrandsPageProps) {
  return (
    <main id="main-content">
      <BrandsHero copy={copy.hero} />
      <BrandGrid introduction={copy.introduction} ariaLabel={copy.brandGridAriaLabel} />
      <BrandTrustSection copy={copy.trust} />
      <BrandsCta copy={copy.cta} />
    </main>
  );
}
