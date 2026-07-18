import { loyaltyFinalCta } from "@/data/loyalty";
import { ActionLink } from "@/components/ui/action-link";

export function LoyaltyFinalCta() {
  const Icon = loyaltyFinalCta.icon;

  return (
    <section className="section loyalty-final-cta" aria-labelledby="loyalty-final-title">
      <div className="container loyalty-final-cta__inner">
        <span className="loyalty-section-icon" aria-hidden="true">
          <Icon />
        </span>
        <div>
          <h2 id="loyalty-final-title">{loyaltyFinalCta.title}</h2>
          <p>{loyaltyFinalCta.description}</p>
        </div>
        <div className="loyalty-final-cta__actions">
          <ActionLink href={loyaltyFinalCta.primaryHref}>{loyaltyFinalCta.primaryLabel}</ActionLink>
          <ActionLink href={loyaltyFinalCta.secondaryHref} variant="secondary">
            {loyaltyFinalCta.secondaryLabel}
          </ActionLink>
        </div>
      </div>
    </section>
  );
}
