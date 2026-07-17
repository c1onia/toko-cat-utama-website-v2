import { MapPin, MessageCircle } from "lucide-react";
import { ActionLink } from "@/components/ui/action-link";
import { brandsCta } from "@/data/brands";

export function BrandsCta() {
  return (
    <section className="section brands-cta" aria-labelledby="brands-cta-title">
      <div className="container brands-cta__inner">
        <div>
          <h2 id="brands-cta-title">{brandsCta.title}</h2>
          <p>{brandsCta.description}</p>
        </div>
        <div className="brands-cta__actions">
          <ActionLink href={brandsCta.primaryHref} external>
            <MessageCircle aria-hidden="true" size={20} />
            {brandsCta.primaryLabel}
          </ActionLink>
          <ActionLink href={brandsCta.secondaryHref} variant="secondary">
            <MapPin aria-hidden="true" size={20} />
            {brandsCta.secondaryLabel}
          </ActionLink>
        </div>
      </div>
    </section>
  );
}
