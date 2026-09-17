import type { CategoryItem, FeatureItem } from "@/types/site";

export type Locale = "id" | "en" | "zh";

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
