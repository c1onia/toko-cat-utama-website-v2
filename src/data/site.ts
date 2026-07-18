import {
  BadgeCheck,
  PackageCheck,
  ShieldCheck,
  Sparkles,
  Truck,
} from "lucide-react";
import { branchNames } from "@/data/branches";
import type { CategoryItem, FeatureItem, NavigationItem, SearchItem } from "@/types/site";

export const whatsappNumber = "6281266925000";
export const whatsappUrl = `https://wa.me/${whatsappNumber}`;

export const navigation: NavigationItem[] = [
  { label: "Beranda", href: "/" },
  { label: "Tentang Kami", href: "/tentang-kami" },
  { label: "Produk", href: "/produk" },
  { label: "Merek", href: "/merek" },
  { label: "Loyalty Member", href: "/loyalty-member" },
  { label: "Galeri Proyek", href: "/galeri-proyek" },
  { label: "Lokasi Toko", href: "/lokasi-toko" },
  { label: "Kontak", href: "/kontak" },
];

export const features: FeatureItem[] = [
  { title: "Produk Lengkap", icon: PackageCheck },
  { title: "Produk Asli", icon: BadgeCheck },
  { title: "Pengiriman Cepat", icon: Truck },
  { title: "Konsultasi Produk", icon: Sparkles },
  { title: "Dipercaya Sejak 1955", icon: ShieldCheck },
];

export const categories: CategoryItem[] = [
  {
    title: "Cat Dekoratif",
    slug: "cat-dekoratif",
    image: "/categories/cat-dekoratif.png",
    imageAlt: "Roller mengaplikasikan cat dekoratif berwarna biru muda",
  },
  {
    title: "Cat Protective",
    slug: "cat-protective",
    image: "/categories/cat-protective.png",
    imageAlt: "Tangki dan pagar industri dengan lapisan cat protective",
  },
  {
    title: "Marine Paint",
    slug: "marine-paint",
    image: "/categories/marine-paint.png",
    imageAlt: "Kapal laut dengan lambung berlapis marine paint",
  },
  {
    title: "Floor Coating",
    slug: "floor-coating",
    image: "/categories/floor-coating.png",
    imageAlt: "Roller mengaplikasikan lapisan floor coating putih",
  },
  {
    title: "Automotive Paint",
    slug: "automotive-paint",
    image: "/categories/automotive-paint.png",
    imageAlt: "Pengecatan mobil biru menggunakan spray gun",
  },
  {
    title: "Waterproofing",
    slug: "waterproofing",
    image: "/categories/waterproofing.png",
    imageAlt: "Tetesan air di atas permukaan berlapis waterproofing",
  },
  {
    title: "Semen Instan",
    slug: "semen-instan",
    image: "/categories/semen-instan.png",
    imageAlt: "Tumpukan kemasan semen instan",
  },
  {
    title: "Perlengkapan Pengecatan",
    slug: "perlengkapan-pengecatan",
    image: "/categories/perlengkapan-pengecatan.png",
    imageAlt: "Roller, kuas, ember, dan perlengkapan pengecatan",
  },
];

export const projects = ["Djarum", "UNDIP", "BSB", "MBG Kitchen", "UDINUS", "Aruss Hotel"];

const categorySearch: SearchItem[] = categories.map((category) => ({
  label: category.title,
  type: "Kategori",
  href: `/produk#${category.slug}`,
  keywords: `${category.title} produk cat coating waterproofing`,
}));

const branchSearch: SearchItem[] = branchNames.map((branch) => ({
  label: `Toko ${branch}`,
  type: "Lokasi",
  href: "/lokasi-toko",
  keywords: `${branch} cabang alamat toko lokasi`,
}));

export const searchItems: SearchItem[] = [
  ...categorySearch,
  ...branchSearch,
  { label: "Halaman Merek", type: "Halaman", href: "/merek", keywords: "merek brand" },
];
