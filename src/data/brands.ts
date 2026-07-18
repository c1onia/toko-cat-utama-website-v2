import { BadgeCheck, Boxes, MapPin, MessagesSquare } from "lucide-react";
import { whatsappUrl } from "@/data/site";
import { branches } from "@/data/branches";

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

export const brands = [
  { name: "Dulux", image: "/images/brands/dulux.jpg", width: 941, height: 941 },
  { name: "Mowilex", image: "/images/brands/mowilex.png", width: 447, height: 447 },
  { name: "Avian", image: "/images/brands/avian.jpg", width: 400, height: 400 },
  { name: "Nippon Paint", image: "/images/brands/nippon-paint.png", width: 447, height: 447 },
  { name: "Jotun", image: "/images/brands/jotun.jpg", width: 900, height: 900 },
  { name: "TOA Paint", image: "/images/brands/toa-paint.png", width: 447, height: 447 },
  { name: "Propan", image: "/images/brands/propan.jpg", width: 447, height: 447 },
  { name: "Kansai Paint", image: "/images/brands/kansai-paint.png", width: 447, height: 447 },
  { name: "Aquaproof", image: "/images/brands/aquaproof.png", width: 447, height: 447 },
  { name: "Catylac", image: "/images/brands/catylac.png", width: 300, height: 300 },
  { name: "Spectrum", image: "/images/brands/spectrum.png", width: 447, height: 447 },
  { name: "Warna Agung", image: "/images/brands/warna-agung.png", width: 447, height: 447 },
  { name: "Kem-Tone", image: "/images/brands/kem-tone.png", width: 2156, height: 1724 },
  { name: "Altex", image: "/images/brands/altex.jpg", width: 447, height: 447 },
  { name: "Mortar Utama", image: "/images/brands/mortar-utama.jpg", width: 900, height: 900 },
  { name: "Bital", image: "/images/brands/bital.jpg", width: 1024, height: 1024 },
].map((brand, index) => ({ ...brand, featured: index < 4 }));

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
