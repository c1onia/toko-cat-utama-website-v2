import Image from "next/image";
import { ActionLink } from "@/components/ui/action-link";
import { productCategories, productsIntroduction } from "@/data/products";

type ProductCategoryGridProps = {
  introduction?: typeof productsIntroduction;
  categories?: typeof productCategories;
};

export function ProductCategoryGrid({
  introduction = productsIntroduction,
  categories = productCategories,
}: ProductCategoryGridProps) {
  return (
    <section className="section section--light product-categories" aria-labelledby="product-categories-title">
      <div className="container">
        <div className="product-categories__introduction">
          <h2 id="product-categories-title">{introduction.title}</h2>
          <p>{introduction.description}</p>
        </div>
        <div className="product-category-grid">
          {categories.map((category) => (
            <article className="product-solution-card" id={category.slug} key={category.slug}>
              <div className="product-solution-card__image">
                <Image
                  src={category.image}
                  alt={category.imageAlt}
                  width={1536}
                  height={1024}
                  sizes="(max-width: 767px) calc(100vw - 48px), (max-width: 1023px) calc((100vw - 120px) / 2), 276px"
                />
              </div>
              <div className="product-solution-card__content">
                <h3>{category.title}</h3>
                <p>{category.description}</p>
                <ActionLink href={category.ctaHref} variant="secondary">
                  {category.ctaLabel}
                </ActionLink>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
