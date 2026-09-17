import Image from "next/image";
import { teamSection } from "@/data/about";

type TeamSectionContent = typeof teamSection;

type TeamSectionProps = {
  content?: TeamSectionContent;
};

export function TeamSection({ content = teamSection }: TeamSectionProps) {
  return (
    <section className="section section--light" aria-labelledby="team-title">
      <div className="container about-split about-split--reverse">
        <div className="about-split__media about-split__media--portrait">
          <Image
            src={content.image}
            alt={content.imageAlt}
            width={1600}
            height={1200}
            sizes="(max-width: 1023px) calc(100vw - 96px), 560px"
          />
        </div>
        <div className="about-split__content">
          <p className="eyebrow">{content.eyebrow}</p>
          <h2 id="team-title">{content.title}</h2>
          <p>{content.description}</p>
        </div>
      </div>
    </section>
  );
}
