import { brandsHero } from "@/data/brands";

export function BrandsHero() {
  return (
    <section className="brands-hero" aria-labelledby="brands-title">
      <div className="container brands-hero__inner">
        <h1 id="brands-title">{brandsHero.title}</h1>
        <p>{brandsHero.description}</p>
      </div>
    </section>
  );
}
