import { Boxes, DoorOpen, PaintBucket, SquareDashedMousePointer, Warehouse } from "lucide-react";
import type { CalculationType, PaintClassConfig } from "@/types/paintCalculator";

export const paintCalculatorHero = {
  eyebrow: "Kalkulator Cat Tembok",
  title: "Hitung Estimasi Kebutuhan Cat Tembok",
  description:
    "Gunakan kalkulator sederhana untuk memperkirakan kebutuhan cat tembok berdasarkan luas bidang, bukaan pintu dan jendela, serta kategori cat.",
};

export const paintCalculatorScopeNotice =
  "Saat ini Kalkulator Cat hanya dapat digunakan untuk menghitung kebutuhan cat tembok. Perhitungan untuk produk lainnya akan tersedia pada pembaruan berikutnya.";

export const paintCalculatorResultScopeNotice = "Saat ini perhitungan hanya berlaku untuk cat tembok.";

export const calculationTypes: Array<{
  id: CalculationType;
  title: string;
  description: string;
  icon: typeof SquareDashedMousePointer;
}> = [
  {
    id: "wall",
    title: "1 Bidang Dinding",
    description: "Hitung kebutuhan cat untuk satu bidang dinding.",
    icon: SquareDashedMousePointer,
  },
  {
    id: "room",
    title: "1 Ruangan",
    description: "Hitung kebutuhan cat untuk seluruh dinding dalam satu ruangan.",
    icon: Warehouse,
  },
];

export const paintClassConfigs: PaintClassConfig[] = [
  {
    id: "premium",
    label: "Premium",
    description: "Kemasan umum 2.5 L per galon, cocok untuk estimasi cat tembok premium.",
    gallonSize: 2.5,
    gallonUnit: "L",
    pailSize: 20,
    pailUnit: "L",
    gallonsPerPail: 8,
    coveragePerGallonForTwoCoats: 15,
    displayedCoverage: "15 m²",
  },
  {
    id: "medium",
    label: "Menengah",
    description: "Kemasan umum 5 kg per galon, cocok untuk estimasi cat tembok kelas menengah.",
    gallonSize: 5,
    gallonUnit: "kg",
    pailSize: 25,
    pailUnit: "kg",
    gallonsPerPail: 5,
    coveragePerGallonForTwoCoats: 12,
    displayedCoverage: "12–15 m²",
    calculationNote: "Perhitungan menggunakan asumsi konservatif 12 m² per galon.",
  },
];

export const defaultCalculatorValues = {
  calculationType: "wall" as CalculationType,
  wall: {
    length: 4,
    height: 3,
  },
  room: {
    length: 4,
    width: 3,
    height: 3,
  },
  paintClassId: "premium" as const,
};

export const defaultOpeningValues = {
  door: {
    width: 0.9,
    height: 2,
    quantity: 1,
    icon: DoorOpen,
  },
  window: {
    width: 1,
    height: 1.2,
    quantity: 1,
    icon: Boxes,
  },
};

export const paintCalculatorDisclaimer =
  "Hasil perhitungan merupakan estimasi. Pemakaian aktual dapat berbeda tergantung kondisi dan porositas permukaan, metode aplikasi, warna dasar, warna akhir, serta daya sebar masing-masing produk.";

export const paintCalculatorSecondaryDisclaimer =
  "Periksa informasi daya sebar pada kemasan atau lembar data produk sebelum membeli.";

export const productPageCta = {
  label: "Lihat Produk Cat",
  href: "/produk",
  icon: PaintBucket,
};
