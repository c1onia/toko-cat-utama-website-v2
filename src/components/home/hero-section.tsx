import Image from "next/image";
import { MapPin, MessageCircle } from "lucide-react";
import { ActionLink } from "@/components/ui/action-link";
import { whatsappUrl } from "@/data/site";

type HeroSectionContent = {
  eyebrow: string;
  title: string;
  lead: string;
  primaryLabel: string;
  secondaryLabel: string;
  image: string;
  imageAlt: string;
};

const defaultHeroContent: HeroSectionContent = {
  eyebrow: "Tercepat. Terlengkap. Terpercaya.",
  title: "Kami bukan sekadar menjual cat. Kami memberikan solusi pengecatan.",
  lead:
    "Membantu pelanggan menemukan solusi pengecatan yang tepat melalui rekomendasi yang jujur, produk yang lengkap, serta pelayanan yang profesional.",
  primaryLabel: "Diskusikan Kebutuhan Anda",
  secondaryLabel: "Cari Toko Terdekat",
  image: "/brand/hero-house-v2.png",
  imageAlt: "Rumah modern dengan fasad berwarna kuning, biru, dan merah sedang dicat",
};

type HeroSectionProps = {
  content?: HeroSectionContent;
};

export function HeroSection({ content = defaultHeroContent }: HeroSectionProps) {
  return (
    <section className="hero" aria-labelledby="hero-title">
      <div className="container hero__stage">
        <Image
          className="hero__image"
          src={content.image}
          alt={content.imageAlt}
          fill
          sizes="(max-width: 767px) calc(100vw - 32px), (max-width: 1399px) calc(100vw - 48px), 1320px"
          priority
        />
        <div className="hero__content">
          <p className="eyebrow">{content.eyebrow}</p>
          <h1 id="hero-title">{content.title}</h1>
          <p className="hero__lead">{content.lead}</p>
          <div className="hero__actions">
            <ActionLink href={whatsappUrl} external>
              <MessageCircle aria-hidden="true" size={20} />
              {content.primaryLabel}
            </ActionLink>
            <ActionLink href="#lokasi-toko" variant="secondary">
              <MapPin aria-hidden="true" size={20} />
              {content.secondaryLabel}
            </ActionLink>
          </div>
        </div>
      </div>
    </section>
  );
}
