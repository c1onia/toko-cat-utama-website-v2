import { contactForm } from "@/data/contact";

export function ContactForm() {
  return (
    <section className="section contact-form-section" aria-labelledby="contact-form-title">
      <div className="container contact-form-section__grid">
        <div className="contact-form-section__intro">
          <p className="eyebrow">Form Kontak</p>
          <h2 id="contact-form-title">{contactForm.title}</h2>
          <p>{contactForm.description}</p>
        </div>

        <form className="contact-form" aria-label="Form kontak Toko Cat Utama">
          <label>
            <span>{contactForm.fields.name}</span>
            <input name="name" type="text" autoComplete="name" />
          </label>
          <label>
            <span>{contactForm.fields.phone}</span>
            <input name="phone" type="tel" autoComplete="tel" />
          </label>
          <label>
            <span>{contactForm.fields.email}</span>
            <input name="email" type="email" autoComplete="email" />
          </label>
          <label>
            <span>{contactForm.fields.message}</span>
            <textarea name="message" rows={5} />
          </label>
          <button className="button button--primary" type="button">
            {contactForm.submitLabel}
          </button>
        </form>
      </div>
    </section>
  );
}
