import { ContactForm } from "@/components/contact/contact-form";
import { ContactHero } from "@/components/contact/contact-hero";
import { ContactInfoSection } from "@/components/contact/contact-info-section";
import { ContactMap } from "@/components/contact/contact-map";
import type { ContactCopy } from "@/i18n/contact";

type ContactPageProps = {
  copy: ContactCopy;
};

export function ContactPage({ copy }: ContactPageProps) {
  return (
    <main id="main-content">
      <ContactHero
        copy={copy.hero}
        eyebrow={copy.heroEyebrow}
        actionsLabel={copy.heroActionsLabel}
      />
      <ContactInfoSection copy={copy.info} />
      <ContactMap copy={copy.map} />
      <ContactForm
        copy={copy.form}
        eyebrow={copy.formEyebrow}
        formAriaLabel={copy.formAriaLabel}
      />
    </main>
  );
}
