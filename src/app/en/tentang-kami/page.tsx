import type { Metadata } from "next";
import { AboutPage } from "@/components/about/about-page";
import { aboutCopy } from "@/i18n/about";
import "@/styles/about.css";

export const metadata: Metadata = {
  title: "About Us | Toko Cat Utama",
  description:
    "For more than 70 years, Toko Cat Utama has provided painting solutions for homes, projects, and industries across Central Java.",
};

export default function EnglishAboutPage() {
  return <AboutPage copy={aboutCopy.en} />;
}
