import { historySection } from "@/data/about";

export function HistoryTimeline() {
  return (
    <section className="section section--light" aria-labelledby="history-title">
      <div className="container">
        <div className="section-heading section-heading--center">
          <p className="eyebrow">{historySection.eyebrow}</p>
          <h2 id="history-title">{historySection.title}</h2>
        </div>
        <ol className="about-timeline">
          {historySection.milestones.map((milestone) => (
            <li key={milestone.year}>
              <strong>{milestone.year}</strong>
              <p>{milestone.description}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
