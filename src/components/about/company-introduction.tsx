import Image from "next/image";
import { aboutCopy } from "@/i18n/about";
import type { CompanyIntroductionCopy } from "@/types/i18n";

type CompanyIntroductionProps = {
  copy?: CompanyIntroductionCopy;
};

export function CompanyIntroduction({
  copy = aboutCopy.id.companyIntroduction,
}: CompanyIntroductionProps) {
  return (
    <section className="section" aria-labelledby="company-introduction-title">
      <div className="container about-split">
        <div className="about-split__media">
          <Image
            src={copy.image}
            alt={copy.imageAlt}
            width={1600}
            height={901}
            sizes="(max-width: 1023px) calc(100vw - 96px), 560px"
          />
        </div>
        <div className="about-split__content">
          <p className="eyebrow">{copy.eyebrow}</p>
          <h2 id="company-introduction-title">{copy.title}</h2>
          {copy.paragraphs.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
      </div>
    </section>
  );
}
