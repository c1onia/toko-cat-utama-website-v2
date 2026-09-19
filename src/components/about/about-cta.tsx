import { MapPin, MessageCircle } from "lucide-react";
import { ActionLink } from "@/components/ui/action-link";
import { aboutCopy } from "@/i18n/about";
import { whatsappUrl } from "@/data/site";
import type { AboutCtaCopy } from "@/types/i18n";

type AboutCtaProps = {
  copy?: AboutCtaCopy;
};

export function AboutCta({ copy = aboutCopy.id.cta }: AboutCtaProps) {
  return (
    <section className="section about-cta" aria-labelledby="about-cta-title">
      <div className="container about-cta__inner">
        <h2 id="about-cta-title">{copy.title}</h2>
        <div className="about-cta__actions">
          <ActionLink href={whatsappUrl} external>
            <MessageCircle aria-hidden="true" size={20} />
            {copy.primaryLabel}
          </ActionLink>
          <ActionLink href={copy.secondaryHref} variant="secondary">
            <MapPin aria-hidden="true" size={20} />
            {copy.secondaryLabel}
          </ActionLink>
        </div>
      </div>
    </section>
  );
}
