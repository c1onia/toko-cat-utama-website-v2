import { features } from "@/data/site";

export function TrustSection() {
  return (
    <section className="section section--light" id="mengapa-kami" aria-labelledby="trust-title">
      <div className="container">
        <div className="section-heading section-heading--center">
          <p className="eyebrow">Mengapa Toko Cat Utama</p>
          <h2 id="trust-title">Mengapa Pelanggan Memilih Kami</h2>
        </div>
        <div className="trust-grid">
          {features.map(({ title, icon: Icon }) => (
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
