import { ArrowRight } from "lucide-react";
import { ActionLink } from "@/components/ui/action-link";
import { projects } from "@/data/site";

export function ProjectsSection() {
  return (
    <section className="section section--blue" aria-labelledby="projects-title">
      <div className="container">
        <div className="section-heading section-heading--inverse">
          <p className="eyebrow">Galeri Proyek</p>
          <h2 id="projects-title">Proyek Pilihan</h2>
        </div>
        <div className="project-grid">
          {projects.map((project, index) => (
            <article className="project-card" key={project}>
              <span>{String(index + 1).padStart(2, "0")}</span>
              <h3>{project}</h3>
            </article>
          ))}
        </div>
        <ActionLink href="/galeri-proyek" variant="light">
          Lihat Semua Proyek
          <ArrowRight aria-hidden="true" size={20} />
        </ActionLink>
      </div>
    </section>
  );
}
