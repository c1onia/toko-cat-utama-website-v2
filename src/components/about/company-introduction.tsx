import Image from "next/image";
import { companyIntroduction } from "@/data/about";

type CompanyIntroductionContent = Omit<typeof companyIntroduction, "paragraphs"> & {
  paragraphs: ReadonlyArray<string>;
};

type CompanyIntroductionProps = {
  content?: CompanyIntroductionContent;
};

export function CompanyIntroduction({ content = companyIntroduction }: CompanyIntroductionProps) {
  return (
    <section className="section" aria-labelledby="company-introduction-title">
      <div className="container about-split">
        <div className="about-split__media">
          <Image
            src={content.image}
            alt={content.imageAlt}
            width={1600}
            height={901}
            sizes="(max-width: 1023px) calc(100vw - 96px), 560px"
          />
        </div>
        <div className="about-split__content">
          <p className="eyebrow">{content.eyebrow}</p>
          <h2 id="company-introduction-title">{content.title}</h2>
          {content.paragraphs.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
      </div>
    </section>
  );
}
