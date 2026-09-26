import { aboutCopy } from "@/i18n/about";
import type { TrustSummaryCopy } from "@/types/i18n";

type TrustSummaryProps = {
  copy?: TrustSummaryCopy;
};

export function TrustSummary({ copy = aboutCopy.id.trustSummary }: TrustSummaryProps) {
  return (
    <section className="section" aria-labelledby="trust-summary-title">
      <div className="container">
        <div className="section-heading section-heading--center">
          <p className="eyebrow">{copy.eyebrow}</p>
          <h2 id="trust-summary-title">{copy.title}</h2>
        </div>
        <ul className="trust-summary">
          {copy.facts.map((fact) => (
            <li key={fact}>{fact}</li>
          ))}
        </ul>
      </div>
    </section>
  );
}
