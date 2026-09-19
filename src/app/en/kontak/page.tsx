import type { Metadata } from "next";
import { ContactPage } from "@/components/contact/contact-page";
import { contactCopy } from "@/i18n/contact";
import "@/styles/contact.css";

export const metadata: Metadata = {
  title: "Contact Us | Toko Cat Utama",
  description:
    "Contact Toko Cat Utama for home, business, and project painting needs via WhatsApp, email, or by visiting the head office.",
};

export default function EnglishContactPage() {
  return <ContactPage copy={contactCopy.en} />;
}
