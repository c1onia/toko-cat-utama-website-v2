import { loyaltyPointConversion } from "@/data/loyalty";

export function LoyaltyPointConversion() {
  return (
    <section className="loyalty-conversion" aria-labelledby="loyalty-conversion-title">
      <div className="container loyalty-conversion__inner">
        <p className="eyebrow">{loyaltyPointConversion.eyebrow}</p>
        <h2 id="loyalty-conversion-title">{loyaltyPointConversion.title}</h2>
        <p>{loyaltyPointConversion.description}</p>
      </div>
    </section>
  );
}
