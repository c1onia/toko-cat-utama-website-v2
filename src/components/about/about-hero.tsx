import Image from "next/image";
import { aboutCopy } from "@/i18n/about";
import type { AboutHeroCopy } from "@/types/i18n";

type AboutHeroProps = {
  copy?: AboutHeroCopy;
};

export function AboutHero({ copy = aboutCopy.id.hero }: AboutHeroProps) {
  return (
    <section className="about-hero" aria-labelledby="about-title">
      <div className="container about-hero__stage">
        <Image
          className="about-hero__image"
          src={copy.image}
          alt={copy.imageAlt}
          fill
          sizes="(max-width: 767px) calc(100vw - 48px), (max-width: 1349px) calc(100vw - 96px), 1200px"
          priority
        />
        <div className="about-hero__content">
          <h1 id="about-title">{copy.title}</h1>
          <p>{copy.description}</p>
        </div>
      </div>
    </section>
  );
}
