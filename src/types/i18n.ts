import type { CategoryItem, FeatureItem, NavigationItem, PrimaryNavigationItem } from "@/types/site";

export type Locale = "id" | "en" | "zh";

export type SearchCopy = {
  srLabel: string;
  placeholder: string;
  clearLabel: string;
  resultsLabel: string;
  emptyState: string;
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
