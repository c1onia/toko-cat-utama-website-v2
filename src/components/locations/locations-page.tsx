import { LocationHero } from "@/components/locations/LocationHero";
import { LocationSearch } from "@/components/locations/LocationSearch";
import { branches } from "@/data/branches";
import { locationsCopy } from "@/i18n/locations";
import type { Locale } from "@/types/i18n";

type LocationsPageProps = {
  locale: Locale;
};

export function LocationsPage({ locale }: LocationsPageProps) {
  const copy = locationsCopy[locale];

  return (
    <main id="main-content">
      <LocationHero copy={copy.hero} />
      <LocationSearch branches={branches} locale={locale} />
    </main>
  );
}
