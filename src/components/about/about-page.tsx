import { AboutCta } from "@/components/about/about-cta";
import { AboutHero } from "@/components/about/about-hero";
import { CommunitySection } from "@/components/about/community-section";
import { CompanyIntroduction } from "@/components/about/company-introduction";
import { HistoryTimeline } from "@/components/about/history-timeline";
import { PurposeSection } from "@/components/about/purpose-section";
import { StoresGallery } from "@/components/about/stores-gallery";
import { TeamSection } from "@/components/about/team-section";
import { TrustSummary } from "@/components/about/trust-summary";
import type { AboutCopy } from "@/types/i18n";

type AboutPageProps = {
  copy: AboutCopy;
};

export function AboutPage({ copy }: AboutPageProps) {
  return (
    <main id="main-content">
      <AboutHero copy={copy.hero} />
      <CompanyIntroduction copy={copy.companyIntroduction} />
      <HistoryTimeline copy={copy.history} />
      <PurposeSection copy={copy.purpose} />
      <TeamSection copy={copy.team} />
      <StoresGallery copy={copy.stores} />
      <CommunitySection copy={copy.community} />
      <TrustSummary copy={copy.trustSummary} />
      <AboutCta copy={copy.cta} />
    </main>
  );
}
