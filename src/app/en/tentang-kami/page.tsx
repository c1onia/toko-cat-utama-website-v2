import type { Metadata } from "next";
import { AboutPageContent } from "@/components/about/about-page-content";
import { getDictionary } from "@/i18n/dictionaries";
import "@/styles/about.css";

const dictionary = getDictionary("en");

export const metadata: Metadata = {
  title: dictionary.metadata.aboutTitle,
  description: dictionary.metadata.aboutDescription,
};

export default function EnglishAboutPage() {
  return <AboutPageContent content={dictionary.about} />;
}
