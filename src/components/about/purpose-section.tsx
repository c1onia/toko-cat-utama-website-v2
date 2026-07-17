import { purposeSection } from "@/data/about";

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
          <ul>
            {purposeSection.values.map((value) => (
              <li key={value}>{value}</li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
