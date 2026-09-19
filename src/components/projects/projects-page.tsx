import { OtherProjects } from "@/components/projects/other-projects";
import { ProjectGallery } from "@/components/projects/project-gallery";
import { ProjectHero } from "@/components/projects/project-hero";
import type { ProjectsCopy } from "@/i18n/projects";
import { otherProjects, photographedProjects } from "@/data/projects";

type ProjectsPageProps = {
  copy: ProjectsCopy;
};

export function ProjectsPage({ copy }: ProjectsPageProps) {
  return (
    <main id="main-content">
      <ProjectHero copy={copy.hero} />
      <ProjectGallery projects={photographedProjects} copy={copy.gallery} />
      <OtherProjects projects={otherProjects} copy={copy.other} />
    </main>
  );
}
