import { BadgeCheck, Boxes, MapPin, MessagesSquare } from "lucide-react";
import { whatsappUrl } from "@/data/site";
import { branches } from "@/data/branches";
import { brandList } from "@/data/brand-list";

export const brandsHero = {
  title: "Merek Terpercaya",
  description:
    "Kami menyediakan berbagai merek cat dan material bangunan terpercaya untuk kebutuhan rumah, proyek, dan industri.",
};

export const brandsIntroduction = {
  title: "Pilihan Merek untuk Setiap Kebutuhan",
  description:
    "Kami bekerja sama dengan berbagai produsen cat dan material bangunan terpercaya untuk menghadirkan pilihan produk yang lengkap, berkualitas, dan sesuai dengan kebutuhan pelanggan.",
};

export const brands = brandList.map((brand, index) => ({ ...brand, featured: index < 4 }));

export const brandTrust = {
  title: "Mengapa Memilih Produk dari Toko Cat Utama?",
  items: [
    {
      title: "Produk Asli",
      description: "Seluruh produk berasal dari distributor dan principal resmi.",
      icon: BadgeCheck,
    },
    {
      title: "Pilihan Lengkap",
      description: "Berbagai merek untuk kebutuhan rumah, proyek, dan industri.",
      icon: Boxes,
    },
    {
      title: "Konsultasi Produk",
      description: "Tim kami membantu memilih produk sesuai kebutuhan.",
      icon: MessagesSquare,
    },
    {
      title: `${branches.length} Cabang`,
      description: "Mudah ditemukan di berbagai kota di Jawa Tengah.",
      icon: MapPin,
    },
  ],
};

export const brandsCta = {
  title: "Butuh Bantuan Memilih Merek yang Tepat?",
  description:
    "Tim kami siap membantu memilih merek dan sistem produk yang paling sesuai dengan kebutuhan Anda.",
  primaryLabel: "Diskusikan Kebutuhan Anda",
  primaryHref: whatsappUrl,
  secondaryLabel: "Cari Toko Terdekat",
  secondaryHref: "/#lokasi-toko",
};
