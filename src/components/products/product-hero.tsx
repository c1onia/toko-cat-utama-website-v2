import Image from "next/image";
import { productsHero } from "@/data/products";

type ProductHeroCopy = typeof productsHero;

type ProductHeroProps = {
  copy?: ProductHeroCopy;
};

export function ProductHero({ copy = productsHero }: ProductHeroProps) {
  return (
    <section className="product-hero" aria-labelledby="products-title">
      <div className="container product-hero__stage">
        <Image
          className="product-hero__image"
          src={copy.image}
          alt={copy.imageAlt}
          fill
          sizes="(max-width: 767px) calc(100vw - 48px), (max-width: 1349px) calc(100vw - 96px), 1200px"
          priority
        />
        <div className="product-hero__content">
          <h1 id="products-title">{copy.title}</h1>
          <p>{copy.description}</p>
        </div>
      </div>
    </section>
  );
}
