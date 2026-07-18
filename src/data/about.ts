import { branches } from "@/data/branches";

export const aboutHero = {
  title: "Tentang Kami",
  description:
    "Lebih dari 70 tahun memberikan solusi pengecatan untuk rumah, proyek, dan industri di Jawa Tengah.",
  image: "/images/about/setiabudi.jpeg",
  imageAlt: "Fasad Toko Cat Utama cabang Setiabudi dengan berbagai merek cat",
};

export const companyIntroduction = {
  eyebrow: "Sejak 1955",
  title: "Tumbuh Bersama Kebutuhan Pelanggan",
  paragraphs: [
    "PT. Widautama telah dipercaya oleh para kontraktor, pemilik rumah, maupun toko cat dan bangunan lainnya di Semarang dan sekitarnya sejak tahun 1955.",
    "Didirikan oleh Alm. Bapak Widautama dengan nama PD UTAMA sebagai salah satu toko cat pertama di Semarang.",
    "Seiring perkembangan perusahaan, Toko Cat Utama memperluas solusi tidak hanya untuk pengecatan dekoratif, tetapi juga waterproofing, protective coating, epoxy, marine coating, floor coating, dan berbagai kebutuhan perlindungan bangunan.",
  ],
  image: "/images/about/siliwangi.jpeg",
  imageAlt: "Toko Cat Utama cabang Siliwangi di Semarang",
};

export const historySection = {
  eyebrow: "Perjalanan Kami",
  title: "Sejarah Toko Cat Utama",
  milestones: [
    {
      year: "1955",
      description:
        "Didirikan oleh Alm. Bapak Widautama di Jalan Mataram, yang sekarang dikenal sebagai Jalan MT Haryono, Semarang.",
    },
    {
      year: "1995",
      description:
        "Cabang kedua dibuka di Jalan Setiabudi 82 Semarang oleh Alm. Bapak Agus Kurniawan dan Ibu Lilik Winarni dengan nama Toko Cat Utama Putra.",
    },
    {
      year: "2007",
      description:
        "Cabang ketiga dibuka di Jalan Jenderal Sudirman, Siliwangi, dengan nama Utama Paint Center.",
    },
    {
      year: "2026",
      description:
        `Toko Cat Utama telah berkembang menjadi ${branches.length} cabang yang tersebar di Jawa Tengah.`,
    },
  ],
};

export const purposeSection = {
  eyebrow: "Arah Perusahaan",
  title: "Visi, Misi, dan Nilai",
  vision: {
    title: "Visi",
    description:
      "Menjadi perusahaan retail cat terpercaya yang merupakan pilihan Utama di Indonesia, didukung oleh SDM unggul dan tetap memperhatikan kepedulian sosial.",
  },
  mission: {
    title: "Misi",
    description:
      "Membangun kehandalan, kredibilitas, dan hubungan yang baik dengan supplier dan customer melalui pengembangan SDM berkelanjutan serta memiliki dampak positif pada masyarakat sekitar.",
  },
  valuesTitle: "Nilai Perusahaan",
  values: ["Komitmen", "Kejujuran", "Pertumbuhan", "Bersyukur", "Kekeluargaan"],
};

export const teamSection = {
  eyebrow: "Orang-Orang Kami",
  title: "Tim Toko Cat Utama",
  description:
    "Orang-orang di balik Toko Cat Utama yang membantu pelanggan menemukan solusi pengecatan sesuai kebutuhan.",
  image: "/images/about/marketing-team.jpeg",
  imageAlt: "Tim Toko Cat Utama dalam kegiatan perusahaan",
};

export const storesSection = {
  eyebrow: "Di Dalam Toko Kami",
  title: "Pengalaman Berbelanja di Toko Cat Utama",
  description:
    "Pelanggan dapat melihat pilihan produk, berkonsultasi, dan mendapatkan rekomendasi sesuai kebutuhan mereka di cabang Toko Cat Utama.",
  images: [
    {
      src: "/images/about/interior-setiabudi.jpeg",
      alt: "Area pelayanan pelanggan di Toko Cat Utama cabang Setiabudi",
    },
    {
      src: "/images/about/interior1.jpeg",
      alt: "Interior cabang Toko Cat Utama dengan area konsultasi dan produk cat",
    },
    {
      src: "/images/about/interior2.jpeg",
      alt: "Area kasir dan display produk di cabang Toko Cat Utama",
    },
    {
      src: "/images/about/interior3.jpeg",
      alt: "Pelanggan sedang dilayani di meja konsultasi Toko Cat Utama",
    },
  ],
};

export const communitySection = {
  eyebrow: "Kepedulian Sosial",
  title: "Peduli dan Berbagi",
  description:
    "Toko Cat Utama berkomitmen memberikan dampak positif kepada masyarakat sekitar melalui berbagai kegiatan sosial dan program kepedulian.",
  image: "/images/about/CSR.jpeg",
  imageAlt: "Kegiatan CSR Toko Cat Utama bersama Dana Paint untuk pengecatan rumah ibadah",
};

export const trustSummary = {
  eyebrow: "Toko Cat Utama",
  title: "Kepercayaan yang Terus Bertumbuh",
  facts: [
    "Berdiri sejak 1955",
    `${branches.length} cabang`,
    "Produk lengkap",
    "Solusi untuk rumah, proyek, dan industri",
    "Pelayanan yang membantu dan terpercaya",
  ],
};

export const aboutCta = {
  title: "Siap Membantu Kebutuhan Pengecatan Anda",
  primaryLabel: "Hubungi Kami",
  secondaryLabel: "Cari Toko Terdekat",
};
