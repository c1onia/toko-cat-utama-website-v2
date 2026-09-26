import Image from "next/image";
import { aboutCopy } from "@/i18n/about";
import type { MediaSectionCopy } from "@/types/i18n";

type CommunitySectionProps = {
  copy?: MediaSectionCopy;
};

export function CommunitySection({ copy = aboutCopy.id.community }: CommunitySectionProps) {
  return (
    <section className="section section--light" aria-labelledby="community-title">
      <div className="container about-split">
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
          <h2 id="community-title">{copy.title}</h2>
          <p>{copy.description}</p>
        </div>
      </div>
    </section>
  );
}
