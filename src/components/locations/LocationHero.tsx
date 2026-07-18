import Image from "next/image";
import { branches } from "@/data/branches";

export function LocationHero() {
  return (
    <section className="location-hero" aria-labelledby="location-hero-title">
      <div className="container">
        <div className="location-hero__stage">
          <Image
            className="location-hero__image"
            src="/images/branches/setiabudi.jpg"
            alt="Tampak depan cabang Toko Cat Utama Setiabudi"
            fill
            loading="eager"
            sizes="(max-width: 767px) calc(100vw - 48px), 1200px"
          />
          <div className="location-hero__content">
            <p className="eyebrow location-hero__eyebrow">
              {branches.length} Cabang di Jawa Tengah
            </p>
            <h1 id="location-hero-title">Temukan Toko Cat Utama Terdekat</h1>
            <p>
              Cari cabang berdasarkan nama toko atau kota, kemudian hubungi
              cabang yang paling sesuai dengan kebutuhan Anda.
            </p>
            <a className="button button--primary" href="#branch-search">
              Cari Cabang
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
