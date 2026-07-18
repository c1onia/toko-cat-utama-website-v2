import {
  BadgeCheck,
  CalendarDays,
  ClipboardList,
  Coins,
  Download,
  Gift,
  MapPin,
  ShoppingBag,
  Smartphone,
  Trophy,
  UserPlus,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { branches } from "@/data/branches";

export type LoyaltyHighlight = {
  title: string;
  description: string;
  icon: LucideIcon;
};

export type LoyaltyStep = {
  label: string;
  title: string;
  description: string;
};

export type LoyaltyReward = {
  name: string;
  points: number;
};

export type LoyaltyRewardGroup = {
  title: string;
  description: string;
  icon: LucideIcon;
  rewards: LoyaltyReward[];
};

export type LoyaltyFaq = {
  question: string;
  answer: string;
};

export const loyaltyProgram = {
  branchCount: branches.length,
  pointValue: 1,
  purchaseValue: 100000,
  programEndDate: "31 Desember 2026",
  mascot: {
    src: "/images/loyalty/utama-mascot.png",
    alt: "Maskot Toko Cat Utama untuk program Loyalty Member Utama",
    width: 3059,
    height: 3334,
  },
};

export const loyaltyHero = {
  title: "Loyalty Member Utama",
  description:
    "Belanja, kumpulkan poin, dan tukarkan dengan berbagai hadiah menarik di seluruh cabang Toko Cat Utama.",
  primaryLabel: "Gabung Sekarang",
  primaryHref: "#registrasi",
  secondaryLabel: "Lihat Pilihan Hadiah",
  secondaryHref: "#hadiah",
};

export const loyaltyHighlights: LoyaltyHighlight[] = [
  {
    title: "Gratis Menjadi Member",
    description: "Daftar tanpa biaya dan tanpa minimum pembelian untuk transaksi pertama.",
    icon: BadgeCheck,
  },
  {
    title: "Kumpulkan Poin",
    description: "Dapatkan 1 poin untuk setiap Rp100.000 pembelian.",
    icon: Coins,
  },
  {
    title: "Pilihan Hadiah Menarik",
    description: "Tukarkan poin dengan voucher, merchandise, elektronik, hingga kendaraan.",
    icon: Gift,
  },
  {
    title: `Berlaku di ${loyaltyProgram.branchCount} Cabang`,
    description: "Program tersedia di seluruh cabang Toko Cat Utama.",
    icon: MapPin,
  },
];

export const loyaltyHighlightsSection = {
  eyebrow: "Keuntungan Program",
  title: "Belanja Lebih Bernilai",
};

export const loyaltySteps: LoyaltyStep[] = [
  {
    label: "Step 1",
    title: "Daftar Menjadi Member",
    description: "Isi formulir keikutsertaan dan lampirkan fotokopi KTP atau tanda pengenal.",
  },
  {
    label: "Step 2",
    title: "Belanja dan Kumpulkan Poin",
    description:
      "Gunakan nama dan nomor telepon yang sama dengan data pendaftaran saat bertransaksi.",
  },
  {
    label: "Step 3",
    title: "Tukarkan Poin",
    description: "Pilih hadiah sesuai jumlah poin yang telah terkumpul.",
  },
];

export const loyaltyPointConversion = {
  eyebrow: "Konversi Poin",
  title: "1 Poin = Rp100.000 Pembelian",
  description:
    "Berlaku untuk pembelian produk apa pun di Toko Utama Group selama periode program.",
};

export const loyaltyRewardGroups: LoyaltyRewardGroup[] = [
  {
    title: "Hadiah Praktis",
    description: "Pilihan hadiah ringan untuk mulai menukarkan poin.",
    icon: Gift,
    rewards: [
      { name: "Kuas 2,5 inci", points: 25 },
      { name: "Voucher UTAMA Rp25.000", points: 40 },
      { name: "Voucher UTAMA Rp50.000", points: 70 },
      { name: "Kaos UTAMA", points: 90 },
      { name: "Payung UTAMA", points: 130 },
      { name: "Jas Hujan UTAMA", points: 150 },
    ],
  },
  {
    title: "Peralatan Rumah Tangga",
    description: "Hadiah fungsional untuk kebutuhan harian di rumah.",
    icon: ShoppingBag,
    rewards: [
      { name: "Setrika", points: 280 },
      { name: "Magic Com", points: 425 },
      { name: "Kipas Angin", points: 460 },
      { name: "Kompor Rinnai 2 Tungku", points: 480 },
    ],
  },
  {
    title: "Hadiah Utama",
    description: "Reward bernilai besar untuk member dengan poin lebih tinggi.",
    icon: Trophy,
    rewards: [
      { name: "Audio Speaker", points: 1300 },
      { name: "Handphone Samsung Android", points: 3750 },
      { name: "Mesin Cuci", points: 3900 },
      { name: "Kulkas 2 Pintu", points: 4000 },
      { name: "Sepeda Motor", points: 11000 },
    ],
  },
];

export const loyaltyApp = {
  title: "Akses Loyalty Member melalui Aplikasi",
  description:
    "Unduh Utama Loyalty App untuk mengakses layanan membership dan informasi program loyalti.",
  id: "aplikasi",
  links: [
    {
      label: "Google Play",
      ariaLabel: "Unduh Utama Loyalty App di Google Play",
      href: "https://play.google.com/store/apps/details?id=com.at.ula&hl=id",
    },
    {
      label: "Apple App Store",
      ariaLabel: "Unduh Utama Loyalty App di Apple App Store",
      href: "https://apps.apple.com/id/app/utama-loyalty-app/id6737788767",
    },
  ],
  icon: Smartphone,
};

export const loyaltyRegistration = {
  id: "registrasi",
  title: "Cara Registrasi",
  rules: [
    "Isi formulir keikutsertaan Member UTAMA dan sertakan fotokopi KTP atau tanda pengenal.",
    "Lakukan transaksi tanpa minimum pembelian untuk mulai mengikuti program.",
    "Gunakan nama dan nomor telepon yang sama dengan data pendaftaran setiap kali bertransaksi.",
  ],
  note: "Registrasi dapat dilakukan di seluruh cabang Toko Cat Utama.",
  ctaLabel: "Cari Cabang Terdekat",
  ctaHref: "/#lokasi-toko",
  icon: ClipboardList,
};

export const loyaltyPeriod = {
  title: "Periode Program",
  description: `Perolehan dan penukaran poin berlaku sampai ${loyaltyProgram.programEndDate}.`,
  icon: CalendarDays,
};

export const loyaltyFaqs: LoyaltyFaq[] = [
  {
    question: "Apakah ada biaya untuk menjadi member?",
    answer: "Tidak. Pendaftaran member tidak dikenakan biaya.",
  },
  {
    question: "Apakah ada minimum pembelian untuk mendaftar?",
    answer: "Tidak. Member baru cukup melakukan transaksi tanpa minimum pembelian.",
  },
  {
    question: "Berapa nilai perolehan poin?",
    answer: "Setiap Rp100.000 pembelian mendapatkan 1 poin.",
  },
  {
    question: "Di mana program ini berlaku?",
    answer: `Program berlaku di seluruh ${loyaltyProgram.branchCount} cabang Toko Cat Utama.`,
  },
  {
    question: "Apa yang harus digunakan saat bertransaksi?",
    answer: "Gunakan nama dan nomor telepon yang sama dengan data pendaftaran member.",
  },
  {
    question: "Sampai kapan poin dapat dikumpulkan dan ditukarkan?",
    answer:
      "Perolehan dan penukaran poin pada periode program saat ini berlaku sampai 31 Desember 2026.",
  },
];

export const loyaltyFinalCta = {
  title: "Mulai Kumpulkan Poin Hari Ini",
  description:
    "Daftar sebagai Loyalty Member Utama di cabang terdekat dan nikmati berbagai pilihan hadiah dari setiap transaksi Anda.",
  primaryLabel: "Cari Cabang Terdekat",
  primaryHref: "/#lokasi-toko",
  secondaryLabel: "Unduh Aplikasi",
  secondaryHref: "#aplikasi",
  icon: Download,
};

export const loyaltyHowItWorks = {
  title: "Cara Kerja Loyalty Member",
  icon: UserPlus,
};

export const loyaltyRewards = {
  id: "hadiah",
  eyebrow: "Pilihan Hadiah",
  title: "Tukarkan Poin dengan Hadiah Menarik",
};

export const loyaltyFaqSection = {
  eyebrow: "FAQ",
  title: "Pertanyaan Umum",
};
