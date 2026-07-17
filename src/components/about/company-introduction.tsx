import Image from "next/image";
import { companyIntroduction } from "@/data/about";

export function CompanyIntroduction() {
  return (
    <section className="section" aria-labelledby="company-introduction-title">
      <div className="container about-split">
        <div className="about-split__media">
          <Image
            src={companyIntroduction.image}
            alt={companyIntroduction.imageAlt}
            width={1600}
            height={901}
            sizes="(max-width: 1023px) calc(100vw - 96px), 560px"
          />
        </div>
        <div className="about-split__content">
          <p className="eyebrow">{companyIntroduction.eyebrow}</p>
          <h2 id="company-introduction-title">{companyIntroduction.title}</h2>
          {companyIntroduction.paragraphs.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
      </div>
    </section>
  );
}
