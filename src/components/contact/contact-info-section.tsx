import { Clock, Mail, MapPin, MessageCircle } from "lucide-react";
import { ActionLink } from "@/components/ui/action-link";
import {
  contactOpeningHours,
  customerServiceContact,
  headOfficeContact,
} from "@/data/contact";
import type {
  ContactCustomerServiceCopy,
  ContactOfficeCopy,
  ContactOpeningHoursCopy,
} from "@/i18n/contact";

type ContactInfoSectionProps = {
  copy?: {
    eyebrow: string;
    title: string;
    headOffice: ContactOfficeCopy;
    customerService: ContactCustomerServiceCopy;
    openingHours: ContactOpeningHoursCopy;
    hoursAriaLabel: string;
  };
};

export function ContactInfoSection({
  copy = {
    eyebrow: "Informasi Kontak",
    title: "Cara Menghubungi Kami",
    headOffice: headOfficeContact,
    customerService: customerServiceContact,
    openingHours: contactOpeningHours,
    hoursAriaLabel: "Jam operasional",
  },
}: ContactInfoSectionProps) {
  return (
    <section className="section contact-info" aria-labelledby="contact-info-title">
      <div className="container">
        <div className="section-heading section-heading--center">
          <p className="eyebrow">{copy.eyebrow}</p>
          <h2 id="contact-info-title">{copy.title}</h2>
        </div>

        <div className="contact-info__grid">
          <article className="contact-card">
            <div className="contact-card__icon">
              <MapPin aria-hidden="true" />
            </div>
            <h3>{copy.headOffice.title}</h3>
            <div className="contact-card__details">
              <p>
                <MapPin aria-hidden="true" />
                <span>{copy.headOffice.address}</span>
              </p>
              <a href={copy.headOffice.whatsappHref} target="_blank" rel="noreferrer">
                <MessageCircle aria-hidden="true" />
                <span>
                  <span className="contact-card__label">{copy.headOffice.whatsappLabel}</span>
                  {copy.headOffice.whatsappNumber}
                </span>
              </a>
              <a href={copy.headOffice.emailHref}>
                <Mail aria-hidden="true" />
                <span>{copy.headOffice.email}</span>
              </a>
            </div>
          </article>

          <article className="contact-card">
            <div className="contact-card__icon">
              <MessageCircle aria-hidden="true" />
            </div>
            <h3>{copy.customerService.title}</h3>
            <div className="contact-card__details">
              <a href={copy.customerService.whatsappHref} target="_blank" rel="noreferrer">
                <MessageCircle aria-hidden="true" />
                <span>
                  <span className="contact-card__label">{copy.customerService.whatsappLabel}</span>
                  {copy.customerService.whatsappNumber}
                </span>
              </a>
            </div>
            <ActionLink href={copy.customerService.whatsappHref} external>
              <MessageCircle aria-hidden="true" size={20} />
              {copy.customerService.ctaLabel}
            </ActionLink>
          </article>

          <article className="contact-card">
            <div className="contact-card__icon">
              <Clock aria-hidden="true" />
            </div>
            <h3>{copy.openingHours.title}</h3>
            <dl className="contact-hours" aria-label={copy.hoursAriaLabel}>
              {copy.openingHours.items.map((item) => (
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
