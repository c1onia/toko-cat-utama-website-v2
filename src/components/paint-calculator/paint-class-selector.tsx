import { paintClassConfigs } from "@/data/paintCalculator";
import type { PaintClassId } from "@/types/paintCalculator";

type PaintClassSelectorProps = {
  value: PaintClassId;
  onChange: (value: PaintClassId) => void;
};

export function PaintClassSelector({ value, onChange }: PaintClassSelectorProps) {
  return (
    <section className="calculator-panel" aria-labelledby="paint-class-title">
      <div className="calculator-panel__heading">
        <span className="calculator-step">4</span>
        <div>
          <h2 id="paint-class-title">Pilih kategori cat</h2>
          <p>
            Asumsi daya sebar sudah dihitung untuk 2 lapis pengecatan dan bukan merupakan
            spesifikasi merek tertentu.
          </p>
        </div>
      </div>

      <div className="calculator-choice-grid">
        {paintClassConfigs.map((config) => {
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
                ±{config.displayedCoverage} / galon / 2 lapis
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
