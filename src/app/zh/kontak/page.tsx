import type { Metadata } from "next";
import { ContactPage } from "@/components/contact/contact-page";
import { contactCopy } from "@/i18n/contact";
import "@/styles/contact.css";

export const metadata: Metadata = {
  title: "联系我们 | Toko Cat Utama",
  description: "通过 WhatsApp、电子邮件或总部办公室联系 Toko Cat Utama，咨询住宅、商业和项目涂装需求。",
};

export default function ChineseContactPage() {
  return <ContactPage copy={contactCopy.zh} />;
}
