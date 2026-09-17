import { Mail, MapPin, MessageCircle } from "lucide-react";
import { ActionLink } from "@/components/ui/action-link";
import { headOfficeAddress } from "@/data/branches";
import { whatsappUrl } from "@/data/site";

type ContactSectionContent = {
  eyebrow: string;
  title: string;
  ctaLabel: string;
  whatsappLabel: string;
  emailLabel: string;
  officeLabel: string;
};

type ContactSectionProps = {
  content?: ContactSectionContent;
};

export function ContactSection({
  content = {
    eyebrow: "Kontak",
    title: "Hubungi Kami",
    ctaLabel: "Hubungi Kami",
    whatsappLabel: "WhatsApp",
    emailLabel: "Email",
    officeLabel: "Kantor Pusat",
  },
}: ContactSectionProps) {
  return (
    <section className="section section--light contact" aria-labelledby="contact-title">
      <div className="container contact__card">
        <div className="contact__intro">
          <p className="eyebrow">{content.eyebrow}</p>
          <h2 id="contact-title">{content.title}</h2>
          <ActionLink href={whatsappUrl} external>
            <MessageCircle aria-hidden="true" size={20} />
            {content.ctaLabel}
          </ActionLink>
        </div>
        <div className="contact__details">
          <a href={whatsappUrl} target="_blank" rel="noreferrer"><MessageCircle aria-hidden="true" /><span>{content.whatsappLabel}<strong>+62 812-6692-5000</strong></span></a>
          <a href="mailto:info@tokocatutama.com"><Mail aria-hidden="true" /><span>{content.emailLabel}<strong>info@tokocatutama.com</strong></span></a>
          <p><MapPin aria-hidden="true" /><span>{content.officeLabel}<strong>{headOfficeAddress}</strong></span></p>
        </div>
      </div>
    </section>
  );
}
