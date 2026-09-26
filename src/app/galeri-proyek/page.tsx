import type { Metadata } from "next";
import { ProjectsPage as ProjectsPageTemplate } from "@/components/projects/projects-page";
import { projectsCopy } from "@/i18n/projects";
import "@/styles/projects.css";

export const metadata: Metadata = {
  title: "Galeri Proyek | Toko Cat Utama",
  description:
    "Galeri proyek rumah tinggal, bangunan komersial, fasilitas pendidikan, dan bangunan bersejarah yang didukung Toko Cat Utama.",
};

export default function ProjectGalleryPage() {
  return <ProjectsPageTemplate copy={projectsCopy.id} />;
}
