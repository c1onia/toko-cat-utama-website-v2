import { loyaltyPointConversion } from "@/data/loyalty";

type LoyaltyPointConversionProps = {
  copy?: typeof loyaltyPointConversion;
};

export function LoyaltyPointConversion({ copy = loyaltyPointConversion }: LoyaltyPointConversionProps) {
  return (
    <section className="loyalty-conversion" aria-labelledby="loyalty-conversion-title">
      <div className="container loyalty-conversion__inner">
        <p className="eyebrow">{copy.eyebrow}</p>
        <h2 id="loyalty-conversion-title">{copy.title}</h2>
        <p>{copy.description}</p>
      </div>
    </section>
  );
}
