import { loyaltyHowItWorks, loyaltySteps } from "@/data/loyalty";

export function LoyaltySteps() {
  const Icon = loyaltyHowItWorks.icon;

  return (
    <section className="section section--light loyalty-steps" aria-labelledby="loyalty-steps-title">
      <div className="container">
        <div className="section-heading section-heading--center">
          <span className="loyalty-section-icon" aria-hidden="true">
            <Icon />
          </span>
          <h2 id="loyalty-steps-title">{loyaltyHowItWorks.title}</h2>
        </div>
        <ol className="loyalty-step-list">
          {loyaltySteps.map((step) => (
            <li className="loyalty-step-card" key={step.label}>
              <span>{step.label}</span>
              <h3>{step.title}</h3>
              <p>{step.description}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
