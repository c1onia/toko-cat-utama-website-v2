import { historySection } from "@/data/about";

type HistoryTimelineContent = Omit<typeof historySection, "milestones"> & {
  milestones: ReadonlyArray<{ year: string; description: string }>;
};

type HistoryTimelineProps = {
  content?: HistoryTimelineContent;
};

export function HistoryTimeline({ content = historySection }: HistoryTimelineProps) {
  return (
    <section className="section section--light" aria-labelledby="history-title">
      <div className="container">
        <div className="section-heading section-heading--center">
          <p className="eyebrow">{content.eyebrow}</p>
          <h2 id="history-title">{content.title}</h2>
        </div>
        <ol className="about-timeline">
          {content.milestones.map((milestone) => (
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
