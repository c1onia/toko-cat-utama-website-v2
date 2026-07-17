import { MapPin, MessageCircle } from "lucide-react";
import { ActionLink } from "@/components/ui/action-link";
import { productsCta } from "@/data/products";

export function ProductCta() {
  return (
    <section className="section product-cta" aria-labelledby="product-cta-title">
      <div className="container product-cta__inner">
        <div>
          <h2 id="product-cta-title">{productsCta.title}</h2>
          <p>{productsCta.description}</p>
        </div>
        <div className="product-cta__actions">
          <ActionLink href={productsCta.primaryHref} external>
            <MessageCircle aria-hidden="true" size={20} />
            {productsCta.primaryLabel}
          </ActionLink>
          <ActionLink href={productsCta.secondaryHref} variant="secondary">
            <MapPin aria-hidden="true" size={20} />
            {productsCta.secondaryLabel}
          </ActionLink>
        </div>
      </div>
    </section>
  );
}
