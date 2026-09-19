import Image from "next/image";
import { branches } from "@/data/branches";

type LocationHeroProps = {
  copy?: {
    eyebrow: string;
    title: string;
    description: string;
    ctaLabel: string;
    imageAlt: string;
  };
};

export function LocationHero({
  copy = {
    eyebrow: `${branches.length} Cabang di Jawa Tengah`,
    title: "Temukan Toko Cat Utama Terdekat",
    description:
      "Cari cabang berdasarkan nama toko atau kota, kemudian hubungi cabang yang paling sesuai dengan kebutuhan Anda.",
    ctaLabel: "Cari Cabang",
    imageAlt: "Tampak depan cabang Toko Cat Utama Setiabudi",
  },
}: LocationHeroProps) {
  return (
    <section className="location-hero" aria-labelledby="location-hero-title">
      <div className="container">
        <div className="location-hero__stage">
          <Image
            className="location-hero__image"
            src="/images/branches/setiabudi.jpg"
            alt={copy.imageAlt}
            fill
            loading="eager"
            sizes="(max-width: 767px) calc(100vw - 48px), 1200px"
          />
          <div className="location-hero__content">
            <p className="eyebrow location-hero__eyebrow">{copy.eyebrow}</p>
            <h1 id="location-hero-title">{copy.title}</h1>
            <p>{copy.description}</p>
            <a className="button button--primary" href="#branch-search">
              {copy.ctaLabel}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
