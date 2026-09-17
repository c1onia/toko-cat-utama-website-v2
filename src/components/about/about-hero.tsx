import Image from "next/image";
import { aboutHero } from "@/data/about";

export function AboutHero() {
  return (
    <section className="about-hero" aria-labelledby="about-title">
      <div className="container about-hero__stage">
        <Image
          className="about-hero__image"
          src={aboutHero.image}
          alt={aboutHero.imageAlt}
          fill
          sizes="(max-width: 767px) calc(100vw - 48px), (max-width: 1349px) calc(100vw - 96px), 1200px"
          priority
        />
        <div className="about-hero__content">
          <h1 id="about-title">{aboutHero.title}</h1>
          <p>{aboutHero.description}</p>
        </div>
      </div>
    </section>
  );
}
