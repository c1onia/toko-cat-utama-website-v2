import type { Metadata } from "next";
import { PaintCalculator } from "@/components/paint-calculator/paint-calculator";
import { paintCalculatorHero } from "@/data/paintCalculator";
import "@/styles/paint-calculator.css";

export const metadata: Metadata = {
  title: "Kalkulator Cat Tembok | Toko Cat Utama",
  description:
    "Hitung estimasi kebutuhan cat tembok untuk satu bidang dinding atau satu ruangan, termasuk pengurangan pintu dan jendela.",
};

export default function PaintCalculatorPage() {
  return (
    <main id="main-content">
      <section className="calculator-hero" aria-labelledby="calculator-title">
        <div className="container calculator-hero__inner">
          <p className="eyebrow">{paintCalculatorHero.eyebrow}</p>
          <h1 id="calculator-title">{paintCalculatorHero.title}</h1>
          <p>{paintCalculatorHero.description}</p>
        </div>
      </section>
      <PaintCalculator />
    </main>
  );
}
