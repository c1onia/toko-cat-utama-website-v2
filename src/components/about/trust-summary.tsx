import { trustSummary } from "@/data/about";

type TrustSummaryContent = Omit<typeof trustSummary, "facts"> & {
  facts: ReadonlyArray<string>;
};

type TrustSummaryProps = {
  content?: TrustSummaryContent;
};

export function TrustSummary({ content = trustSummary }: TrustSummaryProps) {
  return (
    <section className="section" aria-labelledby="trust-summary-title">
      <div className="container">
        <div className="section-heading section-heading--center">
          <p className="eyebrow">{content.eyebrow}</p>
          <h2 id="trust-summary-title">{content.title}</h2>
        </div>
        <ul className="trust-summary">
          {content.facts.map((fact) => (
            <li key={fact}>{fact}</li>
          ))}
        </ul>
      </div>
    </section>
  );
}
