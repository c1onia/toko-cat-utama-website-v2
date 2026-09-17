import type { Metadata } from "next";
import { AboutPageContent } from "@/components/about/about-page-content";
import "@/styles/about.css";

export const metadata: Metadata = {
  title: "Tentang Kami | Toko Cat Utama",
  description:
    "Lebih dari 70 tahun memberikan solusi pengecatan untuk rumah, proyek, dan industri di Jawa Tengah.",
};

export default function AboutPage() {
  return <AboutPageContent />;
}
