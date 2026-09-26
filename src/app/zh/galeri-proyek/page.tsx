import type { Metadata } from "next";
import { ProjectsPage } from "@/components/projects/projects-page";
import { projectsCopy } from "@/i18n/projects";
import "@/styles/projects.css";

export const metadata: Metadata = {
  title: "项目图库 | Toko Cat Utama",
  description: "Toko Cat Utama 支持的住宅、商业、教育和历史建筑项目图库。",
};

export default function ChineseProjectGalleryPage() {
  return <ProjectsPage copy={projectsCopy.zh} />;
}
