import type { LucideIcon } from "lucide-react";

export type NavigationItem = {
  label: string;
  href: string;
};

export type FeatureItem = {
  title: string;
  icon: LucideIcon;
};

export type CategoryItem = {
  title: string;
  slug: string;
  image: string;
  imageAlt: string;
};

export type SearchItem = {
  label: string;
  type: "Kategori" | "Lokasi" | "Halaman";
  href: string;
  keywords: string;
};
