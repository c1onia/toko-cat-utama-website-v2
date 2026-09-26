import { brandsHero } from "@/data/brands";

type BrandsHeroProps = {
  copy?: typeof brandsHero;
};

export function BrandsHero({ copy = brandsHero }: BrandsHeroProps) {
  return (
    <section className="brands-hero" aria-labelledby="brands-title">
      <div className="container brands-hero__inner">
        <h1 id="brands-title">{copy.title}</h1>
        <p>{copy.description}</p>
      </div>
    </section>
  );
}
