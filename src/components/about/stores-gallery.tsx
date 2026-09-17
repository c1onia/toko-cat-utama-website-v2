import Image from "next/image";
import { storesSection } from "@/data/about";

type StoresGalleryContent = Omit<typeof storesSection, "images"> & {
  images?: ReadonlyArray<(typeof storesSection.images)[number]>;
};

type StoresGalleryProps = {
  content?: StoresGalleryContent;
};

export function StoresGallery({ content = storesSection }: StoresGalleryProps) {
  const images = content.images ?? storesSection.images;

  return (
    <section className="section" aria-labelledby="stores-title">
      <div className="container">
        <div className="section-heading">
          <p className="eyebrow">{content.eyebrow}</p>
          <h2 id="stores-title">{content.title}</h2>
          <p>{content.description}</p>
        </div>
        <div className="stores-gallery">
          {images.map((image) => (
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
