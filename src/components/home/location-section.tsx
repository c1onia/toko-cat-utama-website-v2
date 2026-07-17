import { Building2, MapPin } from "lucide-react";
import { ActionLink } from "@/components/ui/action-link";

export function LocationSection() {
  return (
    <section className="section location" id="lokasi-toko" aria-labelledby="location-title">
      <div className="container location__grid">
        <div className="location__content">
          <p className="eyebrow">18 Cabang</p>
          <h2 id="location-title">Lokasi Toko</h2>
          <div className="location__count">
            <Building2 aria-hidden="true" />
            <strong>18</strong>
            <span>cabang di Jawa Tengah</span>
          </div>
          <ActionLink href="/lokasi-toko">
            <MapPin aria-hidden="true" size={20} />
            Cari Cabang
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
