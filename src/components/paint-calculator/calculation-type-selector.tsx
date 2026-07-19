import { calculationTypes } from "@/data/paintCalculator";
import type { CalculationType } from "@/types/paintCalculator";

type CalculationTypeSelectorProps = {
  value: CalculationType;
  onChange: (value: CalculationType) => void;
};

export function CalculationTypeSelector({ value, onChange }: CalculationTypeSelectorProps) {
  return (
    <section className="calculator-panel" aria-labelledby="calculation-type-title">
      <div className="calculator-panel__heading">
        <span className="calculator-step">1</span>
        <div>
          <h2 id="calculation-type-title">Pilih jenis perhitungan</h2>
          <p>Tentukan apakah Anda ingin menghitung satu bidang atau seluruh dinding ruangan.</p>
        </div>
      </div>

      <div className="calculator-choice-grid">
        {calculationTypes.map((item) => {
          const Icon = item.icon;
          const isSelected = item.id === value;

          return (
            <button
              key={item.id}
              className="calculator-choice"
              type="button"
              aria-pressed={isSelected}
              data-selected={isSelected}
              onClick={() => onChange(item.id)}
            >
              <span className="calculator-choice__icon">
                <Icon aria-hidden="true" />
              </span>
              <span>
                <strong>{item.title}</strong>
                <small>{item.description}</small>
              </span>
            </button>
          );
        })}
      </div>
    </section>
  );
}
