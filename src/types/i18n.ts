import type { CategoryItem, FeatureItem, NavigationItem, PrimaryNavigationItem, SearchItem } from "@/types/site";

export type Locale = "id" | "en" | "zh";

export type SearchCopy = {
  srLabel: string;
  placeholder: string;
  clearLabel: string;
  resultsLabel: string;
  emptyState: string;
  items?: SearchItem[];
  typeLabels: {
    Kategori: string;
    Lokasi: string;
    Halaman: string;
  };
};

export type LayoutCopy = {
  logoAriaLabel: string;
  desktopNavAriaLabel: string;
  mobileNavAriaLabel: string;
  openMenuLabel: string;
  closeMenuLabel: string;
  contactCta: string;
  navigation: PrimaryNavigationItem[];
  search: SearchCopy;
  footer: {
    tagline: string;
    quickMenuTitle: string;
    quickMenuAriaLabel: string;
    contactTitle: string;
    whatsappLabel: string;
    emailLabel: string;
    headOfficeLabel: string;
    instagramLabel: string;
    copyright: string;
    navigation: NavigationItem[];
  };
};

export type HeroCopy = {
  imageAlt: string;
  eyebrow: string;
  title: string;
  lead: string;
  primaryCta: string;
  secondaryCta: string;
};

export type TrustCopy = {
  eyebrow: string;
  title: string;
  features: FeatureItem[];
};

export type CategoriesCopy = {
  eyebrow: string;
  title: string;
  categories: CategoryItem[];
};

export type LocationCopy = {
  eyebrowSuffix: string;
  title: string;
  branchCountLabel: string;
  cta: string;
  href: string;
};

export type ContactCopy = {
  eyebrow: string;
  title: string;
  cta: string;
  whatsappLabel: string;
  emailLabel: string;
  headOfficeLabel: string;
};

export type HomeCopy = {
  hero: HeroCopy;
  trust: TrustCopy;
  categories: CategoriesCopy;
  location: LocationCopy;
  contact: ContactCopy;
};

export type AboutHeroCopy = {
  title: string;
  description: string;
  image: string;
  imageAlt: string;
};

export type CompanyIntroductionCopy = {
  eyebrow: string;
  title: string;
  paragraphs: string[];
  image: string;
  imageAlt: string;
};

export type HistoryCopy = {
  eyebrow: string;
  title: string;
  milestones: Array<{
    year: string;
    description: string;
  }>;
};

export type PurposeCopy = {
  eyebrow: string;
  title: string;
  vision: {
    title: string;
    description: string;
  };
  mission: {
    title: string;
    description: string;
  };
  valuesTitle: string;
  valueStatement: string;
  values: string[];
};

export type ImageCopy = {
  src: string;
  alt: string;
};

export type MediaSectionCopy = {
  eyebrow: string;
  title: string;
  description: string;
  image: string;
  imageAlt: string;
};

export type StoresCopy = {
  eyebrow: string;
  title: string;
  description: string;
  images: ImageCopy[];
};

export type TrustSummaryCopy = {
  eyebrow: string;
  title: string;
  facts: string[];
};

export type AboutCtaCopy = {
  title: string;
  primaryLabel: string;
  secondaryLabel: string;
  secondaryHref: string;
};

export type AboutCopy = {
  hero: AboutHeroCopy;
  companyIntroduction: CompanyIntroductionCopy;
  history: HistoryCopy;
  purpose: PurposeCopy;
  team: MediaSectionCopy;
  stores: StoresCopy;
  community: MediaSectionCopy;
  trustSummary: TrustSummaryCopy;
  cta: AboutCtaCopy;
};
