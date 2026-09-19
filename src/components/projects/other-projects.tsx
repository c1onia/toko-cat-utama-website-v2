import type { Project } from "@/data/projects";

type OtherProjectsProps = {
  projects: Project[];
  copy?: {
    eyebrow: string;
    title: string;
    description: string;
  };
};

const defaultCopy = {
  eyebrow: "Pengalaman Lainnya",
  title: "Proyek Lainnya",
  description:
    "Selain proyek yang terdokumentasi di atas, kami juga telah mendukung berbagai proyek komersial, pendidikan, industri, dan hospitality.",
};

export function OtherProjects({ projects, copy = defaultCopy }: OtherProjectsProps) {
  return (
    <section className="section section--light other-projects" aria-labelledby="other-projects-title">
      <div className="container">
        <div className="section-heading">
          <p className="eyebrow">{copy.eyebrow}</p>
          <h2 id="other-projects-title">{copy.title}</h2>
          <p>{copy.description}</p>
        </div>

        <div className="other-projects__grid">
          {projects.map((project) => (
            <article className="other-project-card" key={project.id}>
              <h3>{project.name}</h3>
              <p>{project.location}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
