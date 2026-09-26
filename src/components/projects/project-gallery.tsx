import type { Project } from "@/data/projects";
import { ProjectCard } from "@/components/projects/project-card";

type ProjectGalleryProps = {
  projects: Project[];
  copy?: {
    eyebrow: string;
    title: string;
    description: string;
  };
};

const defaultCopy = {
  eyebrow: "Dokumentasi Proyek",
  title: "Proyek Terdokumentasi",
  description: "Foto proyek berikut menggunakan dokumentasi asli yang tersedia dari Toko Cat Utama.",
};

export function ProjectGallery({ projects, copy = defaultCopy }: ProjectGalleryProps) {
  return (
    <section className="section project-gallery" aria-labelledby="project-gallery-title">
      <div className="container">
        <div className="section-heading">
          <p className="eyebrow">{copy.eyebrow}</p>
          <h2 id="project-gallery-title">{copy.title}</h2>
          <p>{copy.description}</p>
        </div>

        <div className="project-gallery__grid">
          {projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} priority={index < 3} />
          ))}
        </div>
      </div>
    </section>
  );
}
