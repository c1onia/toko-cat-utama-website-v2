import { purposeSection } from "@/data/about";

type PurposeSectionContent = Omit<typeof purposeSection, "values"> & {
  values: ReadonlyArray<string>;
};

type PurposeSectionProps = {
  content?: PurposeSectionContent;
};

function escapeRegExp(value: string) {
  return value.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

function renderHighlightedValueStatement(content: PurposeSectionContent) {
  const pattern = new RegExp(`(${content.values.map(escapeRegExp).join("|")})`, "gi");

  return content.valueStatement.split(pattern).map((part, index) => {
    const isCoreValue = content.values.some(
      (value) => value.toLowerCase() === part.toLowerCase(),
    );

    return isCoreValue ? <strong key={`${part}-${index}`}>{part}</strong> : part;
  });
}

export function PurposeSection({ content = purposeSection }: PurposeSectionProps) {
  return (
    <section className="section" aria-labelledby="purpose-title">
      <div className="container">
        <div className="section-heading">
          <p className="eyebrow">{content.eyebrow}</p>
          <h2 id="purpose-title">{content.title}</h2>
        </div>
        <div className="purpose-grid">
          <article>
            <h3>{content.vision.title}</h3>
            <p>{content.vision.description}</p>
          </article>
          <article>
            <h3>{content.mission.title}</h3>
            <p>{content.mission.description}</p>
          </article>
        </div>
        <div className="values" aria-labelledby="values-title">
          <h3 id="values-title">{content.valuesTitle}</h3>
          <p className="values__statement">{renderHighlightedValueStatement(content)}</p>
        </div>
      </div>
    </section>
  );
}
