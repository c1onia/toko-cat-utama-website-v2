import { LoyaltyAppDownload } from "@/components/loyalty/loyalty-app-download";
import { LoyaltyFaq } from "@/components/loyalty/loyalty-faq";
import { LoyaltyFinalCta } from "@/components/loyalty/loyalty-final-cta";
import { LoyaltyHero } from "@/components/loyalty/loyalty-hero";
import { LoyaltyHighlights } from "@/components/loyalty/loyalty-highlights";
import { LoyaltyPointConversion } from "@/components/loyalty/loyalty-point-conversion";
import { LoyaltyRegistration } from "@/components/loyalty/loyalty-registration";
import { LoyaltyRewards } from "@/components/loyalty/loyalty-rewards";
import { LoyaltySteps } from "@/components/loyalty/loyalty-steps";
import type { LoyaltyCopy } from "@/i18n/loyalty";

type LoyaltyPageProps = {
  copy: LoyaltyCopy;
};

export function LoyaltyPage({ copy }: LoyaltyPageProps) {
  return (
    <main id="main-content">
      <LoyaltyHero
        copy={copy.hero}
        eyebrow={copy.heroEyebrow}
        actionsLabel={copy.heroActionsLabel}
        mascotAlt={copy.mascotAlt}
      />
      <LoyaltyHighlights section={copy.highlightsSection} highlights={copy.highlights} />
      <LoyaltySteps section={copy.howItWorks} steps={copy.steps} />
      <LoyaltyPointConversion copy={copy.pointConversion} />
      <LoyaltyRewards
        section={copy.rewardsSection}
        groups={copy.rewardGroups}
        pointsLabel={copy.pointsLabel}
      />
      <LoyaltyAppDownload
        copy={copy.app}
        eyebrow={copy.appEyebrow}
        actionsLabel={copy.appActionsLabel}
      />
      <LoyaltyRegistration registration={copy.registration} period={copy.period} />
      <LoyaltyFaq section={copy.faqSection} faqs={copy.faqs} />
      <LoyaltyFinalCta copy={copy.finalCta} />
    </main>
  );
}
