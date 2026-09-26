import { MapPin, MessageCircle } from "lucide-react";
import { ActionLink } from "@/components/ui/action-link";
import { productsCta } from "@/data/products";

type ProductCtaProps = {
  copy?: typeof productsCta;
};

export function ProductCta({ copy = productsCta }: ProductCtaProps) {
  return (
    <section className="section product-cta" aria-labelledby="product-cta-title">
      <div className="container product-cta__inner">
        <div>
          <h2 id="product-cta-title">{copy.title}</h2>
          <p>{copy.description}</p>
        </div>
        <div className="product-cta__actions">
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
