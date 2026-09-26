import { loyaltyApp } from "@/data/loyalty";

type LoyaltyAppDownloadProps = {
  copy?: typeof loyaltyApp;
  eyebrow?: string;
  actionsLabel?: string;
};

export function LoyaltyAppDownload({
  copy = loyaltyApp,
  eyebrow = "Utama Loyalty App",
  actionsLabel = "Unduh aplikasi Utama Loyalty",
}: LoyaltyAppDownloadProps) {
  const Icon = copy.icon;

  return (
    <section
      className="section section--blue loyalty-app"
      id={copy.id}
      aria-labelledby="loyalty-app-title"
    >
      <div className="container loyalty-app__inner">
        <span className="loyalty-app__icon" aria-hidden="true">
          <Icon />
        </span>
        <div>
          <p className="eyebrow">{eyebrow}</p>
          <h2 id="loyalty-app-title">{copy.title}</h2>
          <p>{copy.description}</p>
        </div>
        <div className="loyalty-app__actions" aria-label={actionsLabel}>
          {copy.links.map((link) => (
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
