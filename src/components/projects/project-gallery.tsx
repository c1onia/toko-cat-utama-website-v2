import type { Project } from "@/data/projects";
import { ProjectCard } from "@/components/projects/project-card";

type ProjectGalleryProps = {
  projects: Project[];
};

export function ProjectGallery({ projects }: ProjectGalleryProps) {
  return (
    <section className="section project-gallery" aria-labelledby="project-gallery-title">
      <div className="container">
        <div className="section-heading">
          <p className="eyebrow">Dokumentasi Proyek</p>
          <h2 id="project-gallery-title">Proyek Terdokumentasi</h2>
          <p>
            Foto proyek berikut menggunakan dokumentasi asli yang tersedia dari Toko Cat Utama.
          </p>
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
