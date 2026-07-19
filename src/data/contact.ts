import { headOfficeAddress } from "@/data/branches";
import { openingHours } from "@/data/opening-hours";
import { whatsappNumber, whatsappUrl } from "@/data/site";

export const contactHero = {
  title: "Hubungi Toko Cat Utama",
  subtitle:
    "Tim kami siap membantu kebutuhan pengecatan rumah, bisnis, maupun proyek Anda.",
  primaryCta: {
    label: "Chat via WhatsApp",
    href: whatsappUrl,
  },
  secondaryCta: {
    label: "Lihat Lokasi Toko",
    href: "/lokasi-toko",
  },
} as const;

export const headOfficeContact = {
  title: "Kantor Pusat",
  address: headOfficeAddress,
  whatsappLabel: "WhatsApp",
  whatsappNumber: "+62 812-6692-5000",
  whatsappHref: whatsappUrl,
  email: "info@tokocatutama.com",
  emailHref: "mailto:info@tokocatutama.com",
  mapTitle: "Peta Kantor Pusat Toko Cat Utama",
  mapEmbedUrl:
    "https://www.google.com/maps?q=Jl.%20Setiabudi%20No.%2082%2C%20Semarang&output=embed",
} as const;

export const customerServiceContact = {
  title: "WhatsApp Customer Service",
  whatsappLabel: "WhatsApp",
  whatsappNumber: "+62 812-6692-5000",
  whatsappRawNumber: whatsappNumber,
  whatsappHref: whatsappUrl,
  ctaLabel: "Chat WhatsApp",
} as const;

export const contactOpeningHours = {
  title: "Jam Operasional",
  items: openingHours,
} as const;

export const contactForm = {
  title: "Kirim Pesan",
  description:
    "Isi formulir singkat ini sebagai catatan awal. Untuk respons tercepat, silakan gunakan WhatsApp.",
  fields: {
    name: "Nama",
    phone: "Nomor HP",
    email: "Email (opsional)",
    message: "Pesan",
  },
  submitLabel: "Kirim Pesan",
} as const;
