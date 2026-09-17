import Image from "next/image";
import { communitySection } from "@/data/about";

export function CommunitySection() {
  return (
    <section className="section section--light" aria-labelledby="community-title">
      <div className="container about-split">
        <div className="about-split__media about-split__media--portrait">
          <Image
            src={communitySection.image}
            alt={communitySection.imageAlt}
            width={1600}
            height={1200}
            sizes="(max-width: 1023px) calc(100vw - 96px), 560px"
          />
        </div>
        <div className="about-split__content">
          <p className="eyebrow">{communitySection.eyebrow}</p>
          <h2 id="community-title">{communitySection.title}</h2>
          <p>{communitySection.description}</p>
        </div>
      </div>
    </section>
  );
}
