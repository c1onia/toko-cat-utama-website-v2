import type { Metadata } from "next";
import { ContactPage as ContactPageTemplate } from "@/components/contact/contact-page";
import { contactCopy } from "@/i18n/contact";
import "@/styles/contact.css";

export const metadata: Metadata = {
  title: "Kontak Kami | Toko Cat Utama",
  description:
    "Hubungi Toko Cat Utama untuk kebutuhan pengecatan rumah, bisnis, maupun proyek Anda melalui WhatsApp, email, atau kunjungi kantor pusat.",
};

export default function ContactPage() {
  return <ContactPageTemplate copy={contactCopy.id} />;
}
