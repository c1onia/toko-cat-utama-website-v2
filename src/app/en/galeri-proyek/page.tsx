import type { Metadata } from "next";
import { ProjectsPage } from "@/components/projects/projects-page";
import { projectsCopy } from "@/i18n/projects";
import "@/styles/projects.css";

export const metadata: Metadata = {
  title: "Project Gallery | Toko Cat Utama",
  description:
    "A gallery of residential, commercial, educational, and heritage building projects supported by Toko Cat Utama.",
};

export default function EnglishProjectGalleryPage() {
  return <ProjectsPage copy={projectsCopy.en} />;
}
