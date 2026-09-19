import { MessageCircle, MapPin } from "lucide-react";
import { ActionLink } from "@/components/ui/action-link";
import { contactHero } from "@/data/contact";
import type { ContactHeroCopy } from "@/i18n/contact";

type ContactHeroProps = {
  copy?: ContactHeroCopy;
  eyebrow?: string;
  actionsLabel?: string;
};

export function ContactHero({
  copy = contactHero,
  eyebrow = "Kontak Kami",
  actionsLabel = "Aksi kontak utama",
}: ContactHeroProps) {
  return (
    <section className="contact-hero" aria-labelledby="contact-hero-title">
      <div className="container">
        <div className="contact-hero__content">
          <p className="eyebrow">{eyebrow}</p>
          <h1 id="contact-hero-title">{copy.title}</h1>
          <p>{copy.subtitle}</p>
          <div className="contact-hero__actions" aria-label={actionsLabel}>
            <ActionLink href={copy.primaryCta.href} external>
              <MessageCircle aria-hidden="true" size={20} />
              {copy.primaryCta.label}
            </ActionLink>
            <ActionLink href={copy.secondaryCta.href} variant="secondary">
              <MapPin aria-hidden="true" size={20} />
              {copy.secondaryCta.label}
            </ActionLink>
          </div>
        </div>
      </div>
    </section>
  );
}
