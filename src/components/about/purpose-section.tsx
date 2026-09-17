import { purposeSection } from "@/data/about";

function renderHighlightedValueStatement() {
  const pattern = new RegExp(`(${purposeSection.values.join("|")})`, "gi");

  return purposeSection.valueStatement.split(pattern).map((part, index) => {
    const isCoreValue = purposeSection.values.some(
      (value) => value.toLowerCase() === part.toLowerCase(),
    );

    return isCoreValue ? <strong key={`${part}-${index}`}>{part}</strong> : part;
  });
}

export function PurposeSection() {
  return (
    <section className="section" aria-labelledby="purpose-title">
      <div className="container">
        <div className="section-heading">
          <p className="eyebrow">{purposeSection.eyebrow}</p>
          <h2 id="purpose-title">{purposeSection.title}</h2>
        </div>
        <div className="purpose-grid">
          <article>
            <h3>{purposeSection.vision.title}</h3>
            <p>{purposeSection.vision.description}</p>
          </article>
          <article>
            <h3>{purposeSection.mission.title}</h3>
            <p>{purposeSection.mission.description}</p>
          </article>
        </div>
        <div className="values" aria-labelledby="values-title">
          <h3 id="values-title">{purposeSection.valuesTitle}</h3>
          <p className="values__statement">{renderHighlightedValueStatement()}</p>
        </div>
      </div>
    </section>
  );
}
