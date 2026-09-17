import { CategoriesSection } from "@/components/home/categories-section";
import { ContactSection } from "@/components/home/contact-section";
import { HeroSection } from "@/components/home/hero-section";
import { LocationSection } from "@/components/home/location-section";
import { TrustSection } from "@/components/home/trust-section";
import type { HomeCopy } from "@/types/i18n";

type HomePageProps = {
  copy: HomeCopy;
};

export function HomePage({ copy }: HomePageProps) {
  return (
    <main id="main-content">
      <HeroSection copy={copy.hero} />
      <TrustSection copy={copy.trust} />
      <CategoriesSection copy={copy.categories} />
      <LocationSection copy={copy.location} />
      <ContactSection copy={copy.contact} />
    </main>
  );
}
