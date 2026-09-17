import Image from "next/image";
import { MapPin, MessageCircle } from "lucide-react";
import { ActionLink } from "@/components/ui/action-link";
import { whatsappUrl } from "@/data/site";
import { homeCopy } from "@/i18n/home";
import type { HeroCopy } from "@/types/i18n";

type HeroSectionProps = {
  copy?: HeroCopy;
};

export function HeroSection({ copy = homeCopy.id.hero }: HeroSectionProps) {
  return (
    <section className="hero" aria-labelledby="hero-title">
      <div className="container hero__stage">
        <Image
          className="hero__image"
          src="/brand/hero-house-v2.png"
          alt={copy.imageAlt}
          fill
          sizes="(max-width: 767px) calc(100vw - 32px), (max-width: 1399px) calc(100vw - 48px), 1320px"
          priority
        />
        <div className="hero__content">
          <p className="eyebrow">{copy.eyebrow}</p>
          <h1 id="hero-title">{copy.title}</h1>
          <p className="hero__lead">{copy.lead}</p>
          <div className="hero__actions">
            <ActionLink href={whatsappUrl} external>
              <MessageCircle aria-hidden="true" size={20} />
              {copy.primaryCta}
            </ActionLink>
            <ActionLink href="#lokasi-toko" variant="secondary">
              <MapPin aria-hidden="true" size={20} />
              {copy.secondaryCta}
            </ActionLink>
          </div>
        </div>
      </div>
    </section>
  );
}
