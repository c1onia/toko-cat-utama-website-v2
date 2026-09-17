import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { categories } from "@/data/site";
import type { CategoryItem } from "@/types/site";

type CategoriesSectionContent = {
  eyebrow: string;
  title: string;
  items: ReadonlyArray<CategoryItem>;
};

type CategoriesSectionProps = {
  content?: CategoriesSectionContent;
};

export function CategoriesSection({
  content = {
    eyebrow: "Produk Lengkap",
    title: "Kategori Produk",
    items: categories,
  },
}: CategoriesSectionProps) {
  return (
    <section className="section" id="kategori-produk" aria-labelledby="categories-title">
      <div className="container">
        <div className="section-heading">
          <p className="eyebrow">{content.eyebrow}</p>
          <h2 id="categories-title">{content.title}</h2>
        </div>
        <div className="category-grid">
          {content.items.map(({ title, slug, image, imageAlt }) => (
            <Link className="category-card" href={`/produk#${slug}`} key={slug}>
              <span className="category-card__image">
                <Image
                  src={image}
                  alt={imageAlt}
                  width={1536}
                  height={1024}
                  sizes="(max-width: 767px) calc(100vw - 96px), (max-width: 1023px) 42vw, 260px"
                />
              </span>
              <h3>{title}</h3>
              <ArrowUpRight aria-hidden="true" />
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
