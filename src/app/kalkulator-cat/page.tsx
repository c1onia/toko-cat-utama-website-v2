import type { Metadata } from "next";
import { PaintCalculatorPage as PaintCalculatorPageTemplate } from "@/components/paint-calculator/paint-calculator-page";
import "@/styles/paint-calculator.css";

export const metadata: Metadata = {
  title: "Kalkulator Cat Tembok | Toko Cat Utama",
  description:
    "Hitung estimasi kebutuhan cat tembok untuk satu bidang dinding atau satu ruangan, termasuk pengurangan pintu dan jendela.",
};

export default function PaintCalculatorPage() {
  return <PaintCalculatorPageTemplate locale="id" />;
}
