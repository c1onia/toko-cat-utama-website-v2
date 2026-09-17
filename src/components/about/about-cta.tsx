import { MapPin, MessageCircle } from "lucide-react";
import { ActionLink } from "@/components/ui/action-link";
import { aboutCta } from "@/data/about";
import { whatsappUrl } from "@/data/site";

export function AboutCta() {
  return (
    <section className="section about-cta" aria-labelledby="about-cta-title">
      <div className="container about-cta__inner">
        <h2 id="about-cta-title">{aboutCta.title}</h2>
        <div className="about-cta__actions">
          <ActionLink href={whatsappUrl} external>
            <MessageCircle aria-hidden="true" size={20} />
            {aboutCta.primaryLabel}
          </ActionLink>
          <ActionLink href="/#lokasi-toko" variant="secondary">
            <MapPin aria-hidden="true" size={20} />
            {aboutCta.secondaryLabel}
          </ActionLink>
        </div>
      </div>
    </section>
  );
}
