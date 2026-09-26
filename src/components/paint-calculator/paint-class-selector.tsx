import { paintClassConfigs } from "@/data/paintCalculator";
import type { PaintClassId } from "@/types/paintCalculator";
import type { PaintCalculatorCopy } from "@/i18n/paint-calculator";

type PaintClassSelectorProps = {
  value: PaintClassId;
  onChange: (value: PaintClassId) => void;
  copy?: PaintCalculatorCopy["paintClass"];
};

export function PaintClassSelector({
  value,
  onChange,
  copy = {
    step: "4",
    title: "Pilih kategori cat",
    description:
      "Asumsi daya sebar sudah dihitung untuk 2 lapis pengecatan dan bukan merupakan spesifikasi merek tertentu.",
    configs: paintClassConfigs,
    coverageSuffix: "/ galon / 2 lapis",
  },
}: PaintClassSelectorProps) {
  return (
    <section className="calculator-panel" aria-labelledby="paint-class-title">
      <div className="calculator-panel__heading">
        <span className="calculator-step">{copy.step}</span>
        <div>
          <h2 id="paint-class-title">{copy.title}</h2>
          <p>{copy.description}</p>
        </div>
      </div>

      <div className="calculator-choice-grid">
        {copy.configs.map((config) => {
          const isSelected = config.id === value;

          return (
            <button
              key={config.id}
              className="calculator-choice calculator-choice--stacked"
              type="button"
              aria-pressed={isSelected}
              data-selected={isSelected}
              onClick={() => onChange(config.id)}
            >
              <span>
                <strong>{config.label}</strong>
                <small>{config.description}</small>
              </span>
              <span className="calculator-choice__meta">
                ±{config.displayedCoverage} {copy.coverageSuffix}
              </span>
              {config.calculationNote ? (
                <small className="calculator-choice__note">{config.calculationNote}</small>
              ) : null}
            </button>
          );
        })}
      </div>
    </section>
  );
}
