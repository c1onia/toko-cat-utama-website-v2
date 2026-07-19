export type ProjectCategory =
  | "Bangunan Bersejarah"
  | "Komersial"
  | "Pendidikan"
  | "Hunian"
  | "Industri"
  | "Hospitality"
  | "Retail";

export type Project = {
  id: string;
  name: string;
  location: string;
  category?: ProjectCategory;
  image?: string;
  hasImage: boolean;
  objectPosition?: string;
};

export const photographedProjects: Project[] = [
  {
    id: "bimbel-sahabat-pintar",
    name: "Bimbel Sahabat Pintar",
    location: "Semarang",
    category: "Pendidikan",
    image: "/images/projects/bimbel-sahabat-pintar-semarang.jpeg",
    hasImage: true,
    objectPosition: "center 52%",
  },
  {
    id: "gereja-blenduk",
    name: "Gereja Blenduk",
    location: "Semarang",
    category: "Bangunan Bersejarah",
    image: "/images/projects/gereja-blenduk-semarang.jpeg",
    hasImage: true,
    objectPosition: "center 38%",
  },
  {
    id: "kostel",
    name: "Kostel",
    location: "Semarang",
    category: "Hunian",
    image: "/images/projects/kostel-semarang.jpeg",
    hasImage: true,
    objectPosition: "center 42%",
  },
  {
    id: "kostel-2",
    name: "Kostel 2",
    location: "Semarang",
    category: "Hunian",
    image: "/images/projects/kostel-2-semarang.jpeg",
    hasImage: true,
    objectPosition: "center 45%",
  },
  {
    id: "metro-sport",
    name: "Metro Sport",
    location: "Semarang",
    category: "Komersial",
    image: "/images/projects/metro-sport-semarang.jpeg",
    hasImage: true,
    objectPosition: "center 48%",
  },
  {
    id: "nexroom",
    name: "Nexroom",
    location: "Semarang",
    category: "Komersial",
    image: "/images/projects/nexroom-semarang.jpeg",
    hasImage: true,
    objectPosition: "center 34%",
  },
  {
    id: "perumahan-kendal",
    name: "Perumahan Kendal",
    location: "Kendal",
    category: "Hunian",
    image: "/images/projects/perumahan-kendal.jpeg",
    hasImage: true,
    objectPosition: "center 45%",
  },
  {
    id: "perumahan-pesona-griya",
    name: "Perumahan Pesona Griya",
    location: "Batang",
    category: "Hunian",
    image: "/images/projects/perumahan-pesona-griya-batang.jpeg",
    hasImage: true,
    objectPosition: "center 48%",
  },
  {
    id: "rumah-tinggal",
    name: "Rumah Tinggal",
    location: "Semarang",
    category: "Hunian",
    image: "/images/projects/rumah-tinggal-semarang.jpeg",
    hasImage: true,
    objectPosition: "center 36%",
  },
  {
    id: "rumah-tinggal-2",
    name: "Rumah Tinggal 2",
    location: "Semarang",
    category: "Hunian",
    image: "/images/projects/rumah-tinggal-2-semarang.jpeg",
    hasImage: true,
    objectPosition: "center 46%",
  },
  {
    id: "sd-negeri-kradenan",
    name: "SD Negeri Kradenan",
    location: "Pekalongan",
    category: "Pendidikan",
    image: "/images/projects/sd-negeri-kradenan-pekalongan.jpeg",
    hasImage: true,
    objectPosition: "center 42%",
  },
  {
    id: "sd-negeri-pabean",
    name: "SD Negeri Pabean",
    location: "Pekalongan",
    category: "Pendidikan",
    image: "/images/projects/sd-negeri-pabean-pekalongan.jpeg",
    hasImage: true,
    objectPosition: "center 48%",
  },
  {
    id: "smk-keseki",
    name: "SMK Keseki",
    location: "Kabupaten Pekalongan",
    category: "Pendidikan",
    image: "/images/projects/smk-keseki-kabupaten-pekalongan.jpeg",
    hasImage: true,
    objectPosition: "center 48%",
  },
  {
    id: "smp-negeri-1-tirto",
    name: "SMP Negeri 1 Tirto",
    location: "Pekalongan",
    category: "Pendidikan",
    image: "/images/projects/smp-negeri-1-tirto-pekalongan.jpeg",
    hasImage: true,
    objectPosition: "center 52%",
  },
];

export const otherProjects: Project[] = [
  { id: "djarum", name: "Djarum", location: "Kudus", hasImage: false },
  { id: "mall-23", name: "Mall 23", location: "Semarang", hasImage: false },
  { id: "arus-hotel", name: "Arus Hotel", location: "Semarang", hasImage: false },
  { id: "mall-ciputra", name: "Mall Ciputra", location: "Semarang", hasImage: false },
  { id: "bsb", name: "BSB", location: "Semarang", hasImage: false },
  { id: "undip", name: "UNDIP", location: "Semarang", hasImage: false },
  { id: "udinus", name: "UDINUS", location: "Semarang", hasImage: false },
  { id: "aime-cosmetic", name: "Aime Cosmetic", location: "Semarang", hasImage: false },
];
