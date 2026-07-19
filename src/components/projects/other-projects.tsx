import type { Project } from "@/data/projects";

type OtherProjectsProps = {
  projects: Project[];
};

export function OtherProjects({ projects }: OtherProjectsProps) {
  return (
    <section className="section section--light other-projects" aria-labelledby="other-projects-title">
      <div className="container">
        <div className="section-heading">
          <p className="eyebrow">Pengalaman Lainnya</p>
          <h2 id="other-projects-title">Proyek Lainnya</h2>
          <p>
            Selain proyek yang terdokumentasi di atas, kami juga telah mendukung berbagai
            proyek komersial, pendidikan, industri, dan hospitality.
          </p>
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
