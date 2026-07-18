import { loyaltyApp } from "@/data/loyalty";

export function LoyaltyAppDownload() {
  const Icon = loyaltyApp.icon;

  return (
    <section
      className="section section--blue loyalty-app"
      id={loyaltyApp.id}
      aria-labelledby="loyalty-app-title"
    >
      <div className="container loyalty-app__inner">
        <span className="loyalty-app__icon" aria-hidden="true">
          <Icon />
        </span>
        <div>
          <p className="eyebrow">Utama Loyalty App</p>
          <h2 id="loyalty-app-title">{loyaltyApp.title}</h2>
          <p>{loyaltyApp.description}</p>
        </div>
        <div className="loyalty-app__actions" aria-label="Unduh aplikasi Utama Loyalty">
          {loyaltyApp.links.map((link) => (
            <a
              className="button button--light"
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={link.ariaLabel}
              key={link.href}
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
