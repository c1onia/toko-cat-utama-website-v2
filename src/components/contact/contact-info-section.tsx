import { Clock, Mail, MapPin, MessageCircle, Phone } from "lucide-react";
import { ActionLink } from "@/components/ui/action-link";
import {
  contactOpeningHours,
  customerServiceContact,
  headOfficeContact,
} from "@/data/contact";

export function ContactInfoSection() {
  return (
    <section className="section contact-info" aria-labelledby="contact-info-title">
      <div className="container">
        <div className="section-heading section-heading--center">
          <p className="eyebrow">Informasi Kontak</p>
          <h2 id="contact-info-title">Cara Menghubungi Kami</h2>
        </div>

        <div className="contact-info__grid">
          <article className="contact-card">
            <div className="contact-card__icon">
              <MapPin aria-hidden="true" />
            </div>
            <h3>{headOfficeContact.title}</h3>
            <div className="contact-card__details">
              <p>
                <MapPin aria-hidden="true" />
                <span>{headOfficeContact.address}</span>
              </p>
              <a href={headOfficeContact.phoneHref}>
                <Phone aria-hidden="true" />
                <span>{headOfficeContact.phone}</span>
              </a>
              <a href={headOfficeContact.emailHref}>
                <Mail aria-hidden="true" />
                <span>{headOfficeContact.email}</span>
              </a>
            </div>
          </article>

          <article className="contact-card">
            <div className="contact-card__icon">
              <MessageCircle aria-hidden="true" />
            </div>
            <h3>{customerServiceContact.title}</h3>
            <div className="contact-card__details">
              <a href={customerServiceContact.whatsappHref} target="_blank" rel="noreferrer">
                <MessageCircle aria-hidden="true" />
                <span>{customerServiceContact.whatsappNumber}</span>
              </a>
            </div>
            <ActionLink href={customerServiceContact.whatsappHref} external>
              <MessageCircle aria-hidden="true" size={20} />
              {customerServiceContact.ctaLabel}
            </ActionLink>
          </article>

          <article className="contact-card">
            <div className="contact-card__icon">
              <Clock aria-hidden="true" />
            </div>
            <h3>{contactOpeningHours.title}</h3>
            <dl className="contact-hours" aria-label="Jam operasional">
              {contactOpeningHours.items.map((item) => (
                <div key={item.day}>
                  <dt>{item.day}</dt>
                  <dd>{item.time}</dd>
                </div>
              ))}
            </dl>
          </article>
        </div>
      </div>
    </section>
  );
}
