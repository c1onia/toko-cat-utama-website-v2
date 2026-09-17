import { trustSummary } from "@/data/about";

export function TrustSummary() {
  return (
    <section className="section" aria-labelledby="trust-summary-title">
      <div className="container">
        <div className="section-heading section-heading--center">
          <p className="eyebrow">{trustSummary.eyebrow}</p>
          <h2 id="trust-summary-title">{trustSummary.title}</h2>
        </div>
        <ul className="trust-summary">
          {trustSummary.facts.map((fact) => (
            <li key={fact}>{fact}</li>
          ))}
        </ul>
      </div>
    </section>
  );
}
