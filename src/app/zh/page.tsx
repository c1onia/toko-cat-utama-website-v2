import type { Metadata } from "next";
import { HomePageContent } from "@/components/home/home-page-content";
import { getDictionary } from "@/i18n/dictionaries";

const dictionary = getDictionary("zh");

export const metadata: Metadata = {
  title: dictionary.metadata.homeTitle,
  description: dictionary.metadata.homeDescription,
};

export default function ChineseHomePage() {
  return <HomePageContent content={dictionary.home} />;
}
