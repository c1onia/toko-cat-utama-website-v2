import type { Metadata } from "next";
import { AboutPage } from "@/components/about/about-page";
import { aboutCopy } from "@/i18n/about";
import "@/styles/about.css";

export const metadata: Metadata = {
  title: "Tentang Kami | Toko Cat Utama",
  description:
    "Lebih dari 70 tahun memberikan solusi pengecatan untuk rumah, proyek, dan industri di Jawa Tengah.",
};

export default function TentangKamiPage() {
  return <AboutPage copy={aboutCopy.id} />;
}
