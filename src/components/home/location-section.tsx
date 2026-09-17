import { Building2, MapPin } from "lucide-react";
import { ActionLink } from "@/components/ui/action-link";
import { branches } from "@/data/branches";

type LocationSectionContent = {
  eyebrow: string;
  title: string;
  countLabel: string;
  ctaLabel: string;
};

type LocationSectionProps = {
  content?: LocationSectionContent;
};

export function LocationSection({
  content = {
    eyebrow: `${branches.length} Cabang`,
    title: "Lokasi Toko",
    countLabel: "cabang di Jawa Tengah",
    ctaLabel: "Cari Cabang",
  },
}: LocationSectionProps) {
  return (
    <section className="section location" id="lokasi-toko" aria-labelledby="location-title">
      <div className="container location__grid">
        <div className="location__content">
          <p className="eyebrow">{content.eyebrow}</p>
          <h2 id="location-title">{content.title}</h2>
          <div className="location__count">
            <Building2 aria-hidden="true" />
            <strong>{branches.length}</strong>
            <span>{content.countLabel}</span>
          </div>
          <ActionLink href="/lokasi-toko">
            <MapPin aria-hidden="true" size={20} />
            {content.ctaLabel}
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
