import { loyaltyPeriod, loyaltyRegistration } from "@/data/loyalty";
import { ActionLink } from "@/components/ui/action-link";

type LoyaltyRegistrationProps = {
  registration?: typeof loyaltyRegistration;
  period?: typeof loyaltyPeriod;
};

export function LoyaltyRegistration({
  registration = loyaltyRegistration,
  period = loyaltyPeriod,
}: LoyaltyRegistrationProps) {
  const RegistrationIcon = registration.icon;
  const PeriodIcon = period.icon;

  return (
    <section
      className="section loyalty-registration"
      id={registration.id}
      aria-labelledby="loyalty-registration-title"
    >
      <div className="container loyalty-registration__grid">
        <div className="loyalty-registration__content">
          <span className="loyalty-section-icon" aria-hidden="true">
            <RegistrationIcon />
          </span>
          <h2 id="loyalty-registration-title">{registration.title}</h2>
          <ol>
            {registration.rules.map((rule) => (
              <li key={rule}>{rule}</li>
            ))}
          </ol>
          <p>{registration.note}</p>
          <ActionLink href={registration.ctaHref}>{registration.ctaLabel}</ActionLink>
        </div>
        <aside className="loyalty-period" aria-labelledby="loyalty-period-title">
          <span className="loyalty-icon" aria-hidden="true">
            <PeriodIcon />
          </span>
          <h3 id="loyalty-period-title">{period.title}</h3>
          <p>{period.description}</p>
        </aside>
      </div>
    </section>
  );
}
