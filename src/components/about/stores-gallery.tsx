import Image from "next/image";
import { aboutCopy } from "@/i18n/about";
import type { StoresCopy } from "@/types/i18n";

type StoresGalleryProps = {
  copy?: StoresCopy;
};

export function StoresGallery({ copy = aboutCopy.id.stores }: StoresGalleryProps) {
  return (
    <section className="section" aria-labelledby="stores-title">
      <div className="container">
        <div className="section-heading">
          <p className="eyebrow">{copy.eyebrow}</p>
          <h2 id="stores-title">{copy.title}</h2>
          <p>{copy.description}</p>
        </div>
        <div className="stores-gallery">
          {copy.images.map((image) => (
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
