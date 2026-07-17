import { CategoriesSection } from "@/components/home/categories-section";
import { ContactSection } from "@/components/home/contact-section";
import { HeroSection } from "@/components/home/hero-section";
import { LocationSection } from "@/components/home/location-section";
import { TrustSection } from "@/components/home/trust-section";

export default function HomePage() {
  return (
    <main id="main-content">
      <HeroSection />
      <TrustSection />
      <CategoriesSection />
      <LocationSection />
      <ContactSection />
    </main>
  );
}
