import Image from "next/image";
import { loyaltyHero, loyaltyProgram } from "@/data/loyalty";
import { ActionLink } from "@/components/ui/action-link";

export function LoyaltyHero() {
  return (
    <section className="loyalty-hero" aria-labelledby="loyalty-title">
      <div className="container loyalty-hero__inner">
        <div className="loyalty-hero__content">
          <p className="eyebrow">Program Member</p>
          <h1 id="loyalty-title">{loyaltyHero.title}</h1>
          <p>{loyaltyHero.description}</p>
          <div className="loyalty-hero__actions" aria-label="Aksi Loyalty Member">
            <ActionLink href={loyaltyHero.primaryHref}>{loyaltyHero.primaryLabel}</ActionLink>
            <ActionLink href={loyaltyHero.secondaryHref} variant="secondary">
              {loyaltyHero.secondaryLabel}
            </ActionLink>
          </div>
        </div>
        <div className="loyalty-hero__mascot">
          <Image
            src={loyaltyProgram.mascot.src}
            alt={loyaltyProgram.mascot.alt}
            width={loyaltyProgram.mascot.width}
            height={loyaltyProgram.mascot.height}
            priority
            sizes="(max-width: 767px) 190px, (max-width: 1023px) 260px, 340px"
          />
        </div>
      </div>
    </section>
  );
}
