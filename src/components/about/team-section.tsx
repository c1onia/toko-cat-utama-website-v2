import Image from "next/image";
import { aboutCopy } from "@/i18n/about";
import type { MediaSectionCopy } from "@/types/i18n";

type TeamSectionProps = {
  copy?: MediaSectionCopy;
};

export function TeamSection({ copy = aboutCopy.id.team }: TeamSectionProps) {
  return (
    <section className="section section--light" aria-labelledby="team-title">
      <div className="container about-split about-split--reverse">
        <div className="about-split__media about-split__media--portrait">
          <Image
            src={copy.image}
            alt={copy.imageAlt}
            width={1600}
            height={1200}
            sizes="(max-width: 1023px) calc(100vw - 96px), 560px"
          />
        </div>
        <div className="about-split__content">
          <p className="eyebrow">{copy.eyebrow}</p>
          <h2 id="team-title">{copy.title}</h2>
          <p>{copy.description}</p>
        </div>
      </div>
    </section>
  );
}
