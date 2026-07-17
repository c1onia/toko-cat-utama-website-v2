import { MessageCircle } from "lucide-react";
import { productsHelp } from "@/data/products";

export function ProductHelp() {
  return (
    <section className="section" aria-labelledby="product-help-title">
      <div className="container product-help">
        <div className="product-help__icon" aria-hidden="true">
          <MessageCircle />
        </div>
        <div className="product-help__content">
          <h2 id="product-help-title">{productsHelp.title}</h2>
          <p>{productsHelp.description}</p>
        </div>
      </div>
    </section>
  );
}
