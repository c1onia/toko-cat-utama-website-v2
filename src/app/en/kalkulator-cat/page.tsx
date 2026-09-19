import type { Metadata } from "next";
import { PaintCalculatorPage as PaintCalculatorPageTemplate } from "@/components/paint-calculator/paint-calculator-page";
import "@/styles/paint-calculator.css";

export const metadata: Metadata = {
  title: "Wall Paint Calculator | Toko Cat Utama",
  description:
    "Estimate wall paint needs for a wall plane or room, including door and window deductions.",
};

export default function EnglishPaintCalculatorPage() {
  return <PaintCalculatorPageTemplate locale="en" />;
}
