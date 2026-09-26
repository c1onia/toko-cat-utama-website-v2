import { MapPin, MessageCircle } from "lucide-react";
import { ActionLink } from "@/components/ui/action-link";
import { brandsCta } from "@/data/brands";

type BrandsCtaProps = {
  copy?: typeof brandsCta;
};

export function BrandsCta({ copy = brandsCta }: BrandsCtaProps) {
  return (
    <section className="section brands-cta" aria-labelledby="brands-cta-title">
      <div className="container brands-cta__inner">
        <div>
          <h2 id="brands-cta-title">{copy.title}</h2>
          <p>{copy.description}</p>
        </div>
        <div className="brands-cta__actions">
          <ActionLink href={copy.primaryHref} external>
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
