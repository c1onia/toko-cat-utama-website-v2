import { openingHours } from "@/data/opening-hours";

export function OpeningHours() {
  return (
    <div className="opening-hours" aria-label="Jam operasional toko">
      <h4>Jam Operasional</h4>
      <dl>
        {openingHours.map((item) => (
          <div key={item.day}>
            <dt>{item.day}</dt>
            <dd>{item.time}</dd>
          </div>
        ))}
      </dl>
    </div>
  );
}
