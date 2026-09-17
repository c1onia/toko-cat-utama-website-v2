import { CategoriesSection } from "@/components/home/categories-section";
import { ContactSection } from "@/components/home/contact-section";
import { HeroSection } from "@/components/home/hero-section";
import { LocationSection } from "@/components/home/location-section";
import { TrustSection } from "@/components/home/trust-section";
import type { Dictionary } from "@/i18n/dictionaries";

type HomePageContentProps = {
  content?: Dictionary["home"];
};

export function HomePageContent({ content }: HomePageContentProps) {
  return (
    <main id="main-content">
      <HeroSection content={content?.hero} />
      <TrustSection content={content?.trust} />
      <CategoriesSection content={content?.categories} />
      <LocationSection content={content?.location} />
      <ContactSection content={content?.contact} />
    </main>
  );
}
