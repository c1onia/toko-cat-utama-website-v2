import Image from "next/image";
import { productsHero } from "@/data/products";

export function ProductHero() {
  return (
    <section className="product-hero" aria-labelledby="products-title">
      <div className="container product-hero__stage">
        <Image
          className="product-hero__image"
          src={productsHero.image}
          alt={productsHero.imageAlt}
          fill
          sizes="(max-width: 767px) calc(100vw - 48px), (max-width: 1349px) calc(100vw - 96px), 1200px"
          priority
        />
        <div className="product-hero__content">
          <h1 id="products-title">{productsHero.title}</h1>
          <p>{productsHero.description}</p>
        </div>
      </div>
    </section>
  );
}
