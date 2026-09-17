import type { Metadata } from "next";
import { AboutCta } from "@/components/about/about-cta";
import { AboutHero } from "@/components/about/about-hero";
import { CommunitySection } from "@/components/about/community-section";
import { CompanyIntroduction } from "@/components/about/company-introduction";
import { HistoryTimeline } from "@/components/about/history-timeline";
import { PurposeSection } from "@/components/about/purpose-section";
import { StoresGallery } from "@/components/about/stores-gallery";
import { TeamSection } from "@/components/about/team-section";
import { TrustSummary } from "@/components/about/trust-summary";
import "@/styles/about.css";

export const metadata: Metadata = {
  title: "Tentang Kami | Toko Cat Utama",
  description:
    "Lebih dari 70 tahun memberikan solusi pengecatan untuk rumah, proyek, dan industri di Jawa Tengah.",
};

export default function AboutPage() {
  return (
    <main id="main-content">
      <AboutHero />
      <CompanyIntroduction />
      <HistoryTimeline />
      <PurposeSection />
      <TeamSection />
      <StoresGallery />
      <CommunitySection />
      <TrustSummary />
      <AboutCta />
    </main>
  );
}
