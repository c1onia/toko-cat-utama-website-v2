import { Mail, MapPin, MessageCircle, Phone } from "lucide-react";
import { ActionLink } from "@/components/ui/action-link";
import { headOfficeAddress } from "@/data/branches";
import { whatsappUrl } from "@/data/site";

export function ContactSection() {
  return (
    <section className="section section--light contact" aria-labelledby="contact-title">
      <div className="container contact__card">
        <div className="contact__intro">
          <p className="eyebrow">Kontak</p>
          <h2 id="contact-title">Hubungi Kami</h2>
          <ActionLink href={whatsappUrl} external>
            <MessageCircle aria-hidden="true" size={20} />
            Hubungi Kami
          </ActionLink>
        </div>
        <div className="contact__details">
          <a href={whatsappUrl} target="_blank" rel="noreferrer"><MessageCircle aria-hidden="true" /><span>WhatsApp<strong>+62 812-6692-5000</strong></span></a>
          <a href="tel:+6281266925000"><Phone aria-hidden="true" /><span>Telepon<strong>+62 812-6692-5000</strong></span></a>
          <a href="mailto:info@tokocatutama.com"><Mail aria-hidden="true" /><span>Email<strong>info@tokocatutama.com</strong></span></a>
          <p><MapPin aria-hidden="true" /><span>Kantor Pusat<strong>{headOfficeAddress}</strong></span></p>
        </div>
      </div>
    </section>
  );
}
