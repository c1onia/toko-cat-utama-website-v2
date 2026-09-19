import { loyaltyHighlights, loyaltyHighlightsSection } from "@/data/loyalty";

type LoyaltyHighlightsProps = {
  section?: typeof loyaltyHighlightsSection;
  highlights?: typeof loyaltyHighlights;
};

export function LoyaltyHighlights({
  section = loyaltyHighlightsSection,
  highlights = loyaltyHighlights,
}: LoyaltyHighlightsProps) {
  return (
    <section className="section loyalty-highlights" aria-labelledby="loyalty-highlights-title">
      <div className="container">
        <div className="section-heading">
          <p className="eyebrow">{section.eyebrow}</p>
          <h2 id="loyalty-highlights-title">{section.title}</h2>
        </div>
        <div className="loyalty-highlight-grid">
          {highlights.map((item) => {
            const Icon = item.icon;

            return (
              <article className="loyalty-highlight-card" key={item.title}>
                <span className="loyalty-icon" aria-hidden="true">
                  <Icon />
                </span>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
