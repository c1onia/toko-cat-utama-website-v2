import { loyaltyPeriod, loyaltyRegistration } from "@/data/loyalty";
import { ActionLink } from "@/components/ui/action-link";

export function LoyaltyRegistration() {
  const RegistrationIcon = loyaltyRegistration.icon;
  const PeriodIcon = loyaltyPeriod.icon;

  return (
    <section
      className="section loyalty-registration"
      id={loyaltyRegistration.id}
      aria-labelledby="loyalty-registration-title"
    >
      <div className="container loyalty-registration__grid">
        <div className="loyalty-registration__content">
          <span className="loyalty-section-icon" aria-hidden="true">
            <RegistrationIcon />
          </span>
          <h2 id="loyalty-registration-title">{loyaltyRegistration.title}</h2>
          <ol>
            {loyaltyRegistration.rules.map((rule) => (
              <li key={rule}>{rule}</li>
            ))}
          </ol>
          <p>{loyaltyRegistration.note}</p>
          <ActionLink href={loyaltyRegistration.ctaHref}>{loyaltyRegistration.ctaLabel}</ActionLink>
        </div>
        <aside className="loyalty-period" aria-labelledby="loyalty-period-title">
          <span className="loyalty-icon" aria-hidden="true">
            <PeriodIcon />
          </span>
          <h3 id="loyalty-period-title">{loyaltyPeriod.title}</h3>
          <p>{loyaltyPeriod.description}</p>
        </aside>
      </div>
    </section>
  );
}
