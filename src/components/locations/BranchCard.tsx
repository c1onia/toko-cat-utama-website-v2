import Image from "next/image";
import { MapPin, Phone } from "lucide-react";
import { ActionLink } from "@/components/ui/action-link";
import type { Branch } from "@/types/branch";
import { whatsappHref } from "@/lib/whatsapp";
import { OpeningHours } from "./OpeningHours";
import { TintingMachine } from "./TintingMachine";


const ngaliyanJotunHours = [
  { day: "Senin–Jumat", time: "08.00–16.00" },
  { day: "Sabtu", time: "09.00–15.00" },
  { day: "Minggu", time: "Tutup" },
] as const;


type BranchCardProps = {
  branch: Branch;
  copy?: {
    imageAltPrefix: string;
    missingImage: string;
    contactLabel: string;
    openingHoursTitle: string;
    openingHoursAriaLabel: string;
    openingHoursItems: ReadonlyArray<{ day: string; time: string }>;
    tintingTitle: string;
  };
};

export function BranchCard({
  branch,
  copy = {
    imageAltPrefix: "Tampak depan cabang Toko Cat Utama",
    missingImage: "Foto cabang belum tersedia",
    contactLabel: "Hubungi Cabang",
    openingHoursTitle: "Jam Operasional",
    openingHoursAriaLabel: "Jam operasional toko",
    openingHoursItems: [],
    tintingTitle: "Sistem Tinting Tersedia",
  },
}: BranchCardProps) {
  const contactUrl = whatsappHref(branch.whatsapp);

  return (
    <article className="branch-card" id={branch.slug}>
      {branch.image ? (
        <div className="branch-card__image">
          <Image
            src={branch.image}
            alt={`${copy.imageAltPrefix} ${branch.name}`}
            width={1200}
            height={675}
            sizes="(max-width: 767px) calc(100vw - 48px), (max-width: 1023px) calc((100vw - 120px) / 2), 384px"
          />
        </div>
      ) : (
        <div className="branch-card__image branch-card__image--missing">
          {copy.missingImage}
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

        <OpeningHours
          title={copy.openingHoursTitle}
          ariaLabel={copy.openingHoursAriaLabel}
          
          items={
            branch.slug === "ngaliyan-jotun"
              ? ngaliyanJotunHours
              : copy.openingHoursItems.length
                ? copy.openingHoursItems
                : undefined
          }

        />
        <TintingMachine machines={branch.tintingMachines} title={copy.tintingTitle} />

        <div className="branch-card__actions">
          {contactUrl && (
            <ActionLink href={contactUrl} external>
              {copy.contactLabel}
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
