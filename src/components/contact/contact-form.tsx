import { contactForm } from "@/data/contact";
import type { ContactFormCopy } from "@/i18n/contact";

type ContactFormProps = {
  copy?: ContactFormCopy;
  eyebrow?: string;
  formAriaLabel?: string;
};

export function ContactForm({
  copy = contactForm,
  eyebrow = "Form Kontak",
  formAriaLabel = "Form kontak Toko Cat Utama",
}: ContactFormProps) {
  return (
    <section className="section contact-form-section" aria-labelledby="contact-form-title">
      <div className="container contact-form-section__grid">
        <div className="contact-form-section__intro">
          <p className="eyebrow">{eyebrow}</p>
          <h2 id="contact-form-title">{copy.title}</h2>
          <p>{copy.description}</p>
        </div>

        <form className="contact-form" aria-label={formAriaLabel}>
          <label>
            <span>{copy.fields.name}</span>
            <input name="name" type="text" autoComplete="name" />
          </label>
          <label>
            <span>{copy.fields.phone}</span>
            <input name="phone" type="tel" autoComplete="tel" />
          </label>
          <label>
            <span>{copy.fields.email}</span>
            <input name="email" type="email" autoComplete="email" />
          </label>
          <label>
            <span>{copy.fields.message}</span>
            <textarea name="message" rows={5} />
          </label>
          <button className="button button--primary" type="button">
            {copy.submitLabel}
          </button>
        </form>
      </div>
    </section>
  );
}
