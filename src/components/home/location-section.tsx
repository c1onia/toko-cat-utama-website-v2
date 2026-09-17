import { Building2, MapPin } from "lucide-react";
import { ActionLink } from "@/components/ui/action-link";
import { branches } from "@/data/branches";
import { homeCopy } from "@/i18n/home";
import type { LocationCopy } from "@/types/i18n";

type LocationSectionProps = {
  copy?: LocationCopy;
};

export function LocationSection({ copy = homeCopy.id.location }: LocationSectionProps) {
  return (
    <section className="section location" id="lokasi-toko" aria-labelledby="location-title">
      <div className="container location__grid">
        <div className="location__content">
          <p className="eyebrow">{branches.length} {copy.eyebrowSuffix}</p>
          <h2 id="location-title">{copy.title}</h2>
          <div className="location__count">
            <Building2 aria-hidden="true" />
            <strong>{branches.length}</strong>
            <span>{copy.branchCountLabel}</span>
          </div>
          <ActionLink href="/lokasi-toko">
            <MapPin aria-hidden="true" size={20} />
            {copy.cta}
          </ActionLink>
        </div>
        <div className="location__graphic" aria-hidden="true">
          <span className="location__pin location__pin--one"><MapPin /></span>
          <span className="location__pin location__pin--two"><MapPin /></span>
          <span className="location__pin location__pin--three"><MapPin /></span>
          <span className="location__pin location__pin--four"><MapPin /></span>
          <div className="location__line location__line--one" />
          <div className="location__line location__line--two" />
        </div>
      </div>
    </section>
  );
}
