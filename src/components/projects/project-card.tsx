import Image from "next/image";
import type { Project } from "@/data/projects";

type ProjectCardProps = {
  project: Project;
  priority?: boolean;
};

export function ProjectCard({ project, priority = false }: ProjectCardProps) {
  if (!project.image || !project.category) {
    return null;
  }

  return (
    <article className="project-card">
      <div className="project-card__image">
        <Image
          src={project.image}
          alt={`${project.name} di ${project.location}`}
          fill
          priority={priority}
          sizes="(max-width: 767px) 100vw, (max-width: 1023px) 50vw, 33vw"
          style={{ objectPosition: project.objectPosition ?? "center" }}
        />
      </div>
      <div className="project-card__body">
        <span>{project.category}</span>
        <h2>{project.name}</h2>
        <p>{project.location}</p>
      </div>
    </article>
  );
}
