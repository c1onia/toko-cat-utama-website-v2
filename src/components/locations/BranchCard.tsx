import Image from "next/image";
import { MapPin, Phone } from "lucide-react";
import { ActionLink } from "@/components/ui/action-link";
import type { Branch } from "@/types/branch";
import { whatsappHref } from "@/lib/whatsapp";
import { OpeningHours } from "./OpeningHours";
import { TintingMachine } from "./TintingMachine";

type BranchCardProps = {
  branch: Branch;
};

export function BranchCard({ branch }: BranchCardProps) {
  const contactUrl = whatsappHref(branch.whatsapp);

  return (
    <article className="branch-card" id={branch.slug}>
      {branch.image ? (
        <div className="branch-card__image">
          <Image
            src={branch.image}
            alt={`Tampak depan cabang Toko Cat Utama ${branch.name}`}
            width={1200}
            height={675}
            sizes="(max-width: 767px) calc(100vw - 48px), (max-width: 1023px) calc((100vw - 120px) / 2), 384px"
          />
        </div>
      ) : (
        <div className="branch-card__image branch-card__image--missing">
          Foto cabang belum tersedia
        </div>
      )}

      <div className="branch-card__content">
        <div>
          <p className="branch-card__city">{branch.city}</p>
          <h3>{branch.name}</h3>
          <p className="branch-card__address">
            <MapPin aria-hidden="true" />
            <span>{branch.address}</span>
          </p>
        </div>

        {branch.phone && (
          <p className="branch-card__phone">
            <Phone aria-hidden="true" />
            <span>{branch.phone}</span>
          </p>
        )}

        <OpeningHours />
        <TintingMachine machines={branch.tintingMachines} />

        <div className="branch-card__actions">
          {contactUrl && (
            <ActionLink href={contactUrl} external>
              Hubungi Cabang
            </ActionLink>
          )}
          {branch.googleMaps && (
            <ActionLink href={branch.googleMaps} variant="secondary" external>
              Google Maps
            </ActionLink>
          )}
        </div>
      </div>
    </article>
  );
}
