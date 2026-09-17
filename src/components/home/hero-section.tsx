import Image from "next/image";
import { MapPin, MessageCircle } from "lucide-react";
import { ActionLink } from "@/components/ui/action-link";
import { whatsappUrl } from "@/data/site";

export function HeroSection() {
  return (
    <section className="hero" aria-labelledby="hero-title">
      <div className="container hero__stage">
        <Image
          className="hero__image"
          src="/brand/hero-house-v2.png"
          alt="Rumah modern dengan fasad berwarna kuning, biru, dan merah sedang dicat"
          fill
          sizes="(max-width: 767px) calc(100vw - 32px), (max-width: 1399px) calc(100vw - 48px), 1320px"
          priority
        />
        <div className="hero__content">
          <p className="eyebrow">Tercepat. Terlengkap. Terpercaya.</p>
          <h1 id="hero-title">Kami bukan sekadar menjual cat. Kami memberikan solusi pengecatan.</h1>
          <p className="hero__lead">
            Membantu pelanggan menemukan solusi pengecatan yang tepat melalui rekomendasi yang jujur,
            produk yang lengkap, serta pelayanan yang profesional.
          </p>
          <div className="hero__actions">
            <ActionLink href={whatsappUrl} external>
              <MessageCircle aria-hidden="true" size={20} />
              Diskusikan Kebutuhan Anda
            </ActionLink>
            <ActionLink href="#lokasi-toko" variant="secondary">
              <MapPin aria-hidden="true" size={20} />
              Cari Toko Terdekat
            </ActionLink>
          </div>
        </div>
      </div>
    </section>
  );
}
