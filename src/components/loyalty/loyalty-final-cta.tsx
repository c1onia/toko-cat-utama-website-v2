import { loyaltyFinalCta } from "@/data/loyalty";
import { ActionLink } from "@/components/ui/action-link";

type LoyaltyFinalCtaProps = {
  copy?: typeof loyaltyFinalCta;
};

export function LoyaltyFinalCta({ copy = loyaltyFinalCta }: LoyaltyFinalCtaProps) {
  const Icon = copy.icon;

  return (
    <section className="section loyalty-final-cta" aria-labelledby="loyalty-final-title">
      <div className="container loyalty-final-cta__inner">
        <span className="loyalty-section-icon" aria-hidden="true">
          <Icon />
        </span>
        <div>
          <h2 id="loyalty-final-title">{copy.title}</h2>
          <p>{copy.description}</p>
        </div>
        <div className="loyalty-final-cta__actions">
          <ActionLink href={copy.primaryHref}>{copy.primaryLabel}</ActionLink>
          <ActionLink href={copy.secondaryHref} variant="secondary">
            {copy.secondaryLabel}
          </ActionLink>
        </div>
      </div>
    </section>
  );
}
