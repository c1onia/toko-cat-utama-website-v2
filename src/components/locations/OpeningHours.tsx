import { openingHours } from "@/data/opening-hours";

type OpeningHoursProps = {
  title?: string;
  ariaLabel?: string;
  items?: ReadonlyArray<{ day: string; time: string }>;
};

export function OpeningHours({
  title = "Jam Operasional",
  ariaLabel = "Jam operasional toko",
  items = openingHours,
}: OpeningHoursProps) {
  return (
    <div className="opening-hours" aria-label={ariaLabel}>
      <h4>{title}</h4>
      <dl>
        {items.map((item) => (
          <div key={item.day}>
            <dt>{item.day}</dt>
            <dd>{item.time}</dd>
          </div>
        ))}
      </dl>
    </div>
  );
}
