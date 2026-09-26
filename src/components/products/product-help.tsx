import { MessageCircle } from "lucide-react";
import { productsHelp } from "@/data/products";

type ProductHelpProps = {
  copy?: typeof productsHelp;
};

export function ProductHelp({ copy = productsHelp }: ProductHelpProps) {
  return (
    <section className="section" aria-labelledby="product-help-title">
      <div className="container product-help">
        <div className="product-help__icon" aria-hidden="true">
          <MessageCircle />
        </div>
        <div className="product-help__content">
          <h2 id="product-help-title">{copy.title}</h2>
          <p>{copy.description}</p>
        </div>
      </div>
    </section>
  );
}
