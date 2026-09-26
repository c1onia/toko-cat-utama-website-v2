import type { Locale } from "@/types/i18n";

export type ProjectsCopy = {
  hero: {
    eyebrow: string;
    title: string;
    description: string;
  };
  gallery: {
    eyebrow: string;
    title: string;
    description: string;
  };
  other: {
    eyebrow: string;
    title: string;
    description: string;
  };
};

export const projectsCopy: Record<Locale, ProjectsCopy> = {
  id: {
    hero: {
      eyebrow: "Portofolio",
      title: "Galeri Proyek",
      description:
        "Berbagai proyek rumah tinggal, bangunan komersial, fasilitas pendidikan, hingga bangunan bersejarah yang telah kami dukung dengan produk dan solusi pengecatan.",
    },
    gallery: {
      eyebrow: "Dokumentasi Proyek",
      title: "Proyek Terdokumentasi",
      description: "Foto proyek berikut menggunakan dokumentasi asli yang tersedia dari Toko Cat Utama.",
    },
    other: {
      eyebrow: "Pengalaman Lainnya",
      title: "Proyek Lainnya",
      description:
        "Selain proyek yang terdokumentasi di atas, kami juga telah mendukung berbagai proyek komersial, pendidikan, industri, dan hospitality.",
    },
  },
  en: {
    hero: {
      eyebrow: "Portfolio",
      title: "Project Gallery",
      description:
        "Residential, commercial, educational, and heritage building projects supported by our paint products and coating solutions.",
    },
    gallery: {
      eyebrow: "Project Documentation",
      title: "Documented Projects",
      description: "The project photos below use original documentation available from Toko Cat Utama.",
    },
    other: {
      eyebrow: "Other Experience",
      title: "Other Projects",
      description:
        "Beyond the documented projects above, we have also supported commercial, educational, industrial, and hospitality projects.",
    },
  },
  zh: {
    hero: {
      eyebrow: "项目案例",
      title: "项目图库",
      description: "我们以涂料产品和涂装解决方案支持住宅、商业、教育以及历史建筑等多种项目。",
    },
    gallery: {
      eyebrow: "项目记录",
      title: "已记录项目",
      description: "以下项目照片使用 Toko Cat Utama 可用的真实项目记录。",
    },
    other: {
      eyebrow: "其他经验",
      title: "其他项目",
      description: "除上述已记录项目外，我们也支持过商业、教育、工业和酒店等多类型项目。",
    },
  },
};
