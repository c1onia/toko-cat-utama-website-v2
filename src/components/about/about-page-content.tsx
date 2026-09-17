import { AboutCta } from "@/components/about/about-cta";
import { AboutHero } from "@/components/about/about-hero";
import { CommunitySection } from "@/components/about/community-section";
import { CompanyIntroduction } from "@/components/about/company-introduction";
import { HistoryTimeline } from "@/components/about/history-timeline";
import { PurposeSection } from "@/components/about/purpose-section";
import { StoresGallery } from "@/components/about/stores-gallery";
import { TeamSection } from "@/components/about/team-section";
import { TrustSummary } from "@/components/about/trust-summary";
import type { Dictionary } from "@/i18n/dictionaries";

type AboutPageContentProps = {
  content?: Dictionary["about"];
};

export function AboutPageContent({ content }: AboutPageContentProps) {
  return (
    <main id="main-content">
      <AboutHero content={content?.hero} />
      <CompanyIntroduction content={content?.introduction} />
      <HistoryTimeline content={content?.history} />
      <PurposeSection content={content?.purpose} />
      <TeamSection content={content?.team} />
      <StoresGallery content={content?.stores} />
      <CommunitySection content={content?.community} />
      <TrustSummary content={content?.trustSummary} />
      <AboutCta content={content?.cta} />
    </main>
  );
}
