type ProjectHeroCopy = {
  eyebrow: string;
  title: string;
  description: string;
};

type ProjectHeroProps = {
  copy?: ProjectHeroCopy;
};

const defaultCopy: ProjectHeroCopy = {
  eyebrow: "Portofolio",
  title: "Galeri Proyek",
  description:
    "Berbagai proyek rumah tinggal, bangunan komersial, fasilitas pendidikan, hingga bangunan bersejarah yang telah kami dukung dengan produk dan solusi pengecatan.",
};

export function ProjectHero({ copy = defaultCopy }: ProjectHeroProps) {
  return (
    <section className="project-hero">
      <div className="container">
        <div className="project-hero__content">
          <p className="eyebrow">{copy.eyebrow}</p>
          <h1>{copy.title}</h1>
          <p>{copy.description}</p>
        </div>
      </div>
    </section>
  );
}
