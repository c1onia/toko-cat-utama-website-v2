import Image from "next/image";
import { storesSection } from "@/data/about";

export function StoresGallery() {
  return (
    <section className="section" aria-labelledby="stores-title">
      <div className="container">
        <div className="section-heading">
          <p className="eyebrow">{storesSection.eyebrow}</p>
          <h2 id="stores-title">{storesSection.title}</h2>
          <p>{storesSection.description}</p>
        </div>
        <div className="stores-gallery">
          {storesSection.images.map((image) => (
            <div className="stores-gallery__item" key={image.src}>
              <Image
                src={image.src}
                alt={image.alt}
                width={1600}
                height={900}
                sizes="(max-width: 767px) calc(100vw - 48px), (max-width: 1349px) calc((100vw - 120px) / 2), 588px"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
