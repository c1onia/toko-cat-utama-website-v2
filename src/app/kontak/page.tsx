import type { Metadata } from "next";
import { ContactForm } from "@/components/contact/contact-form";
import { ContactHero } from "@/components/contact/contact-hero";
import { ContactInfoSection } from "@/components/contact/contact-info-section";
import { ContactMap } from "@/components/contact/contact-map";
import "@/styles/contact.css";

export const metadata: Metadata = {
  title: "Kontak Kami | Toko Cat Utama",
  description:
    "Hubungi Toko Cat Utama untuk kebutuhan pengecatan rumah, bisnis, maupun proyek Anda melalui WhatsApp, email, atau kunjungi kantor pusat.",
};

export default function ContactPage() {
  return (
    <main id="main-content">
      <ContactHero />
      <ContactInfoSection />
      <ContactMap />
      <ContactForm />
    </main>
  );
}
