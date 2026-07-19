import { categories, whatsappUrl } from "@/data/site";
import productBanner from "../../public/brand/product-banner.png";

const categoryDescriptions: Record<string, string> = {
  "cat-dekoratif":
    "Solusi cat untuk dinding interior dan eksterior yang menghadirkan perlindungan sekaligus mempercantik tampilan bangunan. Tersedia dalam berbagai pilihan warna, tekstur, dan finishing sesuai kebutuhan Anda.",
  "cat-protective":
    "Sistem pelapisan khusus untuk melindungi baja, beton, dan berbagai aset industri dari korosi, bahan kimia, cuaca, serta lingkungan ekstrem. Cocok untuk proyek industri, infrastruktur, dan manufaktur.",
  "marine-paint":
    "Cat berperforma tinggi yang dirancang untuk kapal, pelabuhan, dan struktur lepas pantai. Memberikan perlindungan maksimal terhadap air laut, korosi, dan kondisi lingkungan yang berat.",
  "floor-coating":
    "Pelapis lantai yang meningkatkan daya tahan terhadap abrasi, benturan, bahan kimia, dan lalu lintas berat. Ideal untuk pabrik, gudang, rumah sakit, area komersial, hingga parkiran.",
  "automotive-paint":
    "Sistem pengecatan otomotif untuk kendaraan roda dua, roda empat, maupun kendaraan komersial. Menghasilkan warna yang presisi, hasil akhir berkualitas tinggi, dan perlindungan yang tahan lama.",
  waterproofing:
    "Solusi pelindung untuk mencegah kebocoran dan rembesan air pada atap, dak, dinding, kamar mandi, hingga area bawah tanah. Membantu menjaga struktur bangunan tetap kuat dan awet.",
  "semen-instan":
    "Produk semen siap pakai untuk pemasangan keramik, plester, acian, perekat bata ringan, nat, hingga perbaikan beton. Praktis digunakan dengan kualitas yang konsisten.",
  "perlengkapan-pengecatan":
    "Berbagai perlengkapan pengecatan seperti kuas, roller, amplas, masking tape, dan aksesoris pendukung lainnya untuk membantu menghasilkan pekerjaan yang lebih rapi, efisien, dan profesional.",
};

export const productsHero = {
  title: "Produk",
  description:
    "Solusi pengecatan lengkap untuk rumah, proyek, dan kebutuhan industri. Temukan kategori produk yang sesuai dengan kebutuhan Anda.",
  image: productBanner,
  imageAlt:
    "Kolase solusi pengecatan untuk dinding, kapal, struktur baja, lantai, waterproofing, otomotif, semen instan, dan perlengkapan pengecatan",
};

export const productsIntroduction = {
  title: "Solusi untuk Berbagai Kebutuhan",
  description:
    "Kami menyediakan berbagai solusi pengecatan mulai dari hunian, bangunan komersial, proyek industri, hingga kebutuhan khusus seperti waterproofing, protective coating, marine coating, dan floor coating.",
};

export const productCategories = categories.map((category) => ({
  ...category,
  description: categoryDescriptions[category.slug],
  ctaLabel: "Diskusikan Kebutuhan Anda",
  ctaHref: "/#contact-title",
}));

export const productsHelp = {
  title: "Tidak Yakin Produk Mana yang Tepat?",
  description:
    "Setiap proyek memiliki kebutuhan yang berbeda. Tim kami siap membantu memilih sistem pengecatan yang sesuai dengan jenis permukaan, kondisi lingkungan, anggaran, dan target usia perlindungan.",
};

export const productsCta = {
  title: "Mari Diskusikan Proyek Anda",
  description:
    "Tim kami siap membantu memilih solusi terbaik untuk kebutuhan rumah, bangunan komersial, maupun proyek industri.",
  primaryLabel: "Diskusikan Kebutuhan Anda",
  primaryHref: whatsappUrl,
  secondaryLabel: "Hubungi Cabang Terdekat",
  secondaryHref: "/#lokasi-toko",
};
