import { headOfficeContact } from "@/data/contact";
import type { ContactOfficeCopy } from "@/i18n/contact";

type ContactMapProps = {
  copy?: {
    eyebrow: string;
    title: string;
    contact: ContactOfficeCopy;
  };
};

export function ContactMap({
  copy = {
    eyebrow: "Google Map",
    title: "Kantor Pusat",
    contact: headOfficeContact,
  },
}: ContactMapProps) {
  return (
    <section className="section section--light contact-map" aria-labelledby="contact-map-title">
      <div className="container">
        <div className="section-heading">
          <p className="eyebrow">{copy.eyebrow}</p>
          <h2 id="contact-map-title">{copy.title}</h2>
          <p>{copy.contact.address}</p>
        </div>
        <div className="contact-map__frame">
          <iframe
            title={copy.contact.mapTitle}
            src={copy.contact.mapEmbedUrl}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            allowFullScreen
          />
        </div>
      </div>
    </section>
  );
}
