import { loyaltyFaqSection, loyaltyFaqs } from "@/data/loyalty";

export function LoyaltyFaq() {
  return (
    <section className="section section--light loyalty-faq" aria-labelledby="loyalty-faq-title">
      <div className="container loyalty-faq__inner">
        <div className="section-heading">
          <p className="eyebrow">{loyaltyFaqSection.eyebrow}</p>
          <h2 id="loyalty-faq-title">{loyaltyFaqSection.title}</h2>
        </div>
        <div className="loyalty-faq__list">
          {loyaltyFaqs.map((item) => (
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
