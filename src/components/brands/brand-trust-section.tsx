import { brandTrust } from "@/data/brands";

type BrandTrustSectionProps = {
  copy?: typeof brandTrust;
};

export function BrandTrustSection({ copy = brandTrust }: BrandTrustSectionProps) {
  return (
    <section className="section section--light" aria-labelledby="brand-trust-title">
      <div className="container">
        <div className="section-heading section-heading--center">
          <h2 id="brand-trust-title">{copy.title}</h2>
        </div>
        <div className="brand-trust-grid">
          {copy.items.map((item) => {
            const Icon = item.icon;
            return (
              <article className="brand-trust-card" key={item.title}>
                <span className="brand-trust-card__icon" aria-hidden="true">
                  <Icon />
                </span>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
