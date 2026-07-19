import type { Metadata } from "next";
import { OtherProjects } from "@/components/projects/other-projects";
import { ProjectGallery } from "@/components/projects/project-gallery";
import { ProjectHero } from "@/components/projects/project-hero";
import { otherProjects, photographedProjects } from "@/data/projects";
import "@/styles/projects.css";

export const metadata: Metadata = {
  title: "Galeri Proyek | Toko Cat Utama",
  description:
    "Galeri proyek rumah tinggal, bangunan komersial, fasilitas pendidikan, dan bangunan bersejarah yang didukung Toko Cat Utama.",
};

export default function ProjectGalleryPage() {
  return (
    <main id="main-content">
      <ProjectHero />
      <ProjectGallery projects={photographedProjects} />
      <OtherProjects projects={otherProjects} />
    </main>
  );
}
