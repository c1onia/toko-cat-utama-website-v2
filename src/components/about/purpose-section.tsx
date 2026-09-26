import { aboutCopy } from "@/i18n/about";
import type { PurposeCopy } from "@/types/i18n";

function renderHighlightedValueStatement(copy: PurposeCopy) {
  const pattern = new RegExp(`(${copy.values.join("|")})`, "gi");

  return copy.valueStatement.split(pattern).map((part, index) => {
    const isCoreValue = copy.values.some(
      (value) => value.toLowerCase() === part.toLowerCase(),
    );

    return isCoreValue ? <strong key={`${part}-${index}`}>{part}</strong> : part;
  });
}

type PurposeSectionProps = {
  copy?: PurposeCopy;
};

export function PurposeSection({ copy = aboutCopy.id.purpose }: PurposeSectionProps) {
  return (
    <section className="section" aria-labelledby="purpose-title">
      <div className="container">
        <div className="section-heading">
          <p className="eyebrow">{copy.eyebrow}</p>
          <h2 id="purpose-title">{copy.title}</h2>
        </div>
        <div className="purpose-grid">
          <article>
            <h3>{copy.vision.title}</h3>
            <p>{copy.vision.description}</p>
          </article>
          <article>
            <h3>{copy.mission.title}</h3>
            <p>{copy.mission.description}</p>
          </article>
        </div>
        <div className="values" aria-labelledby="values-title">
          <h3 id="values-title">{copy.valuesTitle}</h3>
          <p className="values__statement">{renderHighlightedValueStatement(copy)}</p>
        </div>
      </div>
    </section>
  );
}
