import { headOfficeContact } from "@/data/contact";

export function ContactMap() {
  return (
    <section className="section section--light contact-map" aria-labelledby="contact-map-title">
      <div className="container">
        <div className="section-heading">
          <p className="eyebrow">Google Map</p>
          <h2 id="contact-map-title">Kantor Pusat</h2>
          <p>{headOfficeContact.address}</p>
        </div>
        <div className="contact-map__frame">
          <iframe
            title={headOfficeContact.mapTitle}
            src={headOfficeContact.mapEmbedUrl}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            allowFullScreen
          />
        </div>
      </div>
    </section>
  );
}
