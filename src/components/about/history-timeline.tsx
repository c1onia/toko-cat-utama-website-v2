import { aboutCopy } from "@/i18n/about";
import type { HistoryCopy } from "@/types/i18n";

type HistoryTimelineProps = {
  copy?: HistoryCopy;
};

export function HistoryTimeline({ copy = aboutCopy.id.history }: HistoryTimelineProps) {
  return (
    <section className="section section--light" aria-labelledby="history-title">
      <div className="container">
        <div className="section-heading section-heading--center">
          <p className="eyebrow">{copy.eyebrow}</p>
          <h2 id="history-title">{copy.title}</h2>
        </div>
        <ol className="about-timeline">
          {copy.milestones.map((milestone) => (
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
