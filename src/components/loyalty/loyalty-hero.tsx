import Image from "next/image";
import { loyaltyHero, loyaltyProgram } from "@/data/loyalty";
import { ActionLink } from "@/components/ui/action-link";

type LoyaltyHeroProps = {
  copy?: typeof loyaltyHero;
  eyebrow?: string;
  actionsLabel?: string;
  mascotAlt?: string;
};

export function LoyaltyHero({
  copy = loyaltyHero,
  eyebrow = "Program Member",
  actionsLabel = "Aksi Loyalty Member",
  mascotAlt = loyaltyProgram.mascot.alt,
}: LoyaltyHeroProps) {
  return (
    <section className="loyalty-hero" aria-labelledby="loyalty-title">
      <div className="container loyalty-hero__inner">
        <div className="loyalty-hero__content">
          <p className="eyebrow">{eyebrow}</p>
          <h1 id="loyalty-title">{copy.title}</h1>
          <p>{copy.description}</p>
          <div className="loyalty-hero__actions" aria-label={actionsLabel}>
            <ActionLink href={copy.primaryHref}>{copy.primaryLabel}</ActionLink>
            <ActionLink href={copy.secondaryHref} variant="secondary">
              {copy.secondaryLabel}
            </ActionLink>
          </div>
        </div>
        <div className="loyalty-hero__mascot">
          <Image
            src={loyaltyProgram.mascot.src}
            alt={mascotAlt}
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
