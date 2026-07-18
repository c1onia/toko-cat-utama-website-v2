import { MessageCircle, MapPin } from "lucide-react";
import { ActionLink } from "@/components/ui/action-link";
import { contactHero } from "@/data/contact";

export function ContactHero() {
  return (
    <section className="contact-hero" aria-labelledby="contact-hero-title">
      <div className="container">
        <div className="contact-hero__content">
          <p className="eyebrow">Kontak Kami</p>
          <h1 id="contact-hero-title">{contactHero.title}</h1>
          <p>{contactHero.subtitle}</p>
          <div className="contact-hero__actions" aria-label="Aksi kontak utama">
            <ActionLink href={contactHero.primaryCta.href} external>
              <MessageCircle aria-hidden="true" size={20} />
              {contactHero.primaryCta.label}
            </ActionLink>
            <ActionLink href={contactHero.secondaryCta.href} variant="secondary">
              <MapPin aria-hidden="true" size={20} />
              {contactHero.secondaryCta.label}
            </ActionLink>
          </div>
        </div>
      </div>
    </section>
  );
}
