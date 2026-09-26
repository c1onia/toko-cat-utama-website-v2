import { PaintCalculator } from "@/components/paint-calculator/paint-calculator";
import { paintCalculatorCopy } from "@/i18n/paint-calculator";
import type { Locale } from "@/types/i18n";

type PaintCalculatorPageProps = {
  locale: Locale;
};

export function PaintCalculatorPage({ locale }: PaintCalculatorPageProps) {
  const copy = paintCalculatorCopy[locale];

  return (
    <main id="main-content">
      <section className="calculator-hero" aria-labelledby="calculator-title">
        <div className="container calculator-hero__inner">
          <p className="eyebrow">{copy.hero.eyebrow}</p>
          <h1 id="calculator-title">{copy.hero.title}</h1>
          <p>{copy.hero.description}</p>
        </div>
      </section>
      <PaintCalculator locale={locale} />
    </main>
  );
}
