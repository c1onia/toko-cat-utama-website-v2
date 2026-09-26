import { Mail, MapPin, MessageCircle } from "lucide-react";
import { ActionLink } from "@/components/ui/action-link";
import { headOfficeAddress } from "@/data/branches";
import { whatsappUrl } from "@/data/site";
import { homeCopy } from "@/i18n/home";
import type { ContactCopy } from "@/types/i18n";

type ContactSectionProps = {
  copy?: ContactCopy;
};

export function ContactSection({ copy = homeCopy.id.contact }: ContactSectionProps) {
  return (
    <section className="section section--light contact" aria-labelledby="contact-title">
      <div className="container contact__card">
        <div className="contact__intro">
          <p className="eyebrow">{copy.eyebrow}</p>
          <h2 id="contact-title">{copy.title}</h2>
          <ActionLink href={whatsappUrl} external>
            <MessageCircle aria-hidden="true" size={20} />
            {copy.cta}
          </ActionLink>
        </div>
        <div className="contact__details">
          <a href={whatsappUrl} target="_blank" rel="noreferrer"><MessageCircle aria-hidden="true" /><span>{copy.whatsappLabel}<strong>+62 812-6692-5000</strong></span></a>
          <a href="mailto:info@tokocatutama.com"><Mail aria-hidden="true" /><span>{copy.emailLabel}<strong>info@tokocatutama.com</strong></span></a>
          <p><MapPin aria-hidden="true" /><span>{copy.headOfficeLabel}<strong>{headOfficeAddress}</strong></span></p>
        </div>
      </div>
    </section>
  );
}
