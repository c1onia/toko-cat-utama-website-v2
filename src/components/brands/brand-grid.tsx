import Image from "next/image";
import { brands, brandsIntroduction } from "@/data/brands";

type BrandGridProps = {
  introduction?: typeof brandsIntroduction;
  ariaLabel?: string;
};

export function BrandGrid({
  introduction = brandsIntroduction,
  ariaLabel = "Daftar merek tersedia",
}: BrandGridProps) {
  return (
    <section className="section brand-portfolio" aria-labelledby="brand-portfolio-title">
      <div className="container">
        <div className="brand-portfolio__introduction">
          <h2 id="brand-portfolio-title">{introduction.title}</h2>
          <p>{introduction.description}</p>
        </div>
        <ul className="brand-grid" aria-label={ariaLabel}>
          {brands.map((brand) => (
            <li className={`brand-card${brand.featured ? " brand-card--featured" : ""}`} key={brand.name}>
              <Image
                src={brand.image}
                alt={`Logo ${brand.name}`}
                width={brand.width}
                height={brand.height}
                sizes="(max-width: 767px) calc((100vw - 64px) / 2), (max-width: 1023px) calc((100vw - 144px) / 3), 276px"
              />
              <span className="sr-only">{brand.name}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
