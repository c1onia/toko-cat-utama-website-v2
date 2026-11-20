import type { Metadata } from "next";
import { AboutPage } from "@/components/about/about-page";
import { aboutCopy } from "@/i18n/about";
import "@/styles/about.css";

export const metadata: Metadata = {
  title: "关于我们 | Toko Cat Utama",
  description:
    "70多年来，Toko Cat Utama 为印度尼西亚的住宅、项目和工业需求提供涂装解决方案。",
};

export default function ChineseAboutPage() {
  return <AboutPage copy={aboutCopy.zh} />;
}
