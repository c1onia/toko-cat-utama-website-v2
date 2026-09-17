import { features } from "@/data/site";
import type { FeatureItem } from "@/types/site";

type TrustSectionContent = {
  eyebrow: string;
  title: string;
  features: ReadonlyArray<FeatureItem>;
};

type TrustSectionProps = {
  content?: TrustSectionContent;
};

export function TrustSection({
  content = {
    eyebrow: "Mengapa Toko Cat Utama",
    title: "Mengapa Pelanggan Memilih Kami",
    features,
  },
}: TrustSectionProps) {
  return (
    <section className="section section--light" id="mengapa-kami" aria-labelledby="trust-title">
      <div className="container">
        <div className="section-heading section-heading--center">
          <p className="eyebrow">{content.eyebrow}</p>
          <h2 id="trust-title">{content.title}</h2>
        </div>
        <div className="trust-grid">
          {content.features.map(({ title, icon: Icon }) => (
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
