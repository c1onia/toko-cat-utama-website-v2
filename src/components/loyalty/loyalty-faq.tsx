import { loyaltyFaqSection, loyaltyFaqs } from "@/data/loyalty";

type LoyaltyFaqProps = {
  section?: typeof loyaltyFaqSection;
  faqs?: typeof loyaltyFaqs;
};

export function LoyaltyFaq({ section = loyaltyFaqSection, faqs = loyaltyFaqs }: LoyaltyFaqProps) {
  return (
    <section className="section section--light loyalty-faq" aria-labelledby="loyalty-faq-title">
      <div className="container loyalty-faq__inner">
        <div className="section-heading">
          <p className="eyebrow">{section.eyebrow}</p>
          <h2 id="loyalty-faq-title">{section.title}</h2>
        </div>
        <div className="loyalty-faq__list">
          {faqs.map((item) => (
            <details className="loyalty-faq__item" key={item.question}>
              <summary>{item.question}</summary>
              <p>{item.answer}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
