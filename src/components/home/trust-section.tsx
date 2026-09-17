import { homeCopy } from "@/i18n/home";
import type { TrustCopy } from "@/types/i18n";

type TrustSectionProps = {
  copy?: TrustCopy;
};

export function TrustSection({ copy = homeCopy.id.trust }: TrustSectionProps) {
  return (
    <section className="section section--light" id="mengapa-kami" aria-labelledby="trust-title">
      <div className="container">
        <div className="section-heading section-heading--center">
          <p className="eyebrow">{copy.eyebrow}</p>
          <h2 id="trust-title">{copy.title}</h2>
        </div>
        <div className="trust-grid">
          {copy.features.map(({ title, icon: Icon }) => (
            <article className="trust-card" key={title}>
              <span className="icon-box"><Icon aria-hidden="true" /></span>
              <h3>{title}</h3>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
