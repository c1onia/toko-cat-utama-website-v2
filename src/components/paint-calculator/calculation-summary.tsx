import Link from "next/link";
import {
  paintCalculatorDisclaimer,
  paintCalculatorResultScopeNotice,
  paintCalculatorSecondaryDisclaimer,
  productPageCta,
} from "@/data/paintCalculator";
import { formatArea, formatGallons } from "@/lib/paintCalculator";
import type { PaintClassConfig } from "@/types/paintCalculator";

type CalculationSummaryProps = {
  grossArea: number;
  doorArea: number;
  windowArea: number;
  paintableArea: number;
  paintClass: PaintClassConfig;
  rawGallons: number;
  recommendedGallons: number;
  packageRecommendation: string;
  onReset: () => void;
};

export function CalculationSummary({
  grossArea,
  doorArea,
  windowArea,
  paintableArea,
  paintClass,
  rawGallons,
  recommendedGallons,
  packageRecommendation,
  onReset,
}: CalculationSummaryProps) {
  const ProductIcon = productPageCta.icon;

  return (
    <aside className="calculator-result" aria-labelledby="calculation-result-title">
      <div className="calculator-result__eyebrow">Hasil otomatis</div>
      <h2 id="calculation-result-title">Ringkasan Perhitungan</h2>

      <dl className="calculation-list">
        <SummaryItem label="Luas dinding awal" value={formatArea(grossArea)} />
        <SummaryItem label="Luas pintu" value={formatArea(doorArea)} />
        <SummaryItem label="Luas jendela" value={formatArea(windowArea)} />
        <SummaryItem label="Luas yang dicat" value={formatArea(paintableArea)} />
        <SummaryItem label="Kategori cat" value={paintClass.label} />
        <SummaryItem label="Asumsi pengecatan" value="2 lapis" />
        <SummaryItem
          label="Daya sebar asumsi"
          value={`±${paintClass.displayedCoverage} / galon / 2 lapis`}
        />
      </dl>

      <div className="estimate-card estimate-card--primary">
        <span>Estimasi pemakaian</span>
        <strong>±{formatGallons(rawGallons)}</strong>
      </div>
      <div className="estimate-card">
        <span>Rekomendasi pembelian</span>
        <strong>{packageRecommendation}</strong>
        <small>Setara {recommendedGallons} galon, dibulatkan ke atas.</small>
      </div>

      <div className="calculator-result__actions">
        <button className="button button--secondary" type="button" onClick={onReset}>
          Hitung ulang
        </button>
        <Link className="button button--primary" href={productPageCta.href}>
          <ProductIcon aria-hidden="true" size={20} />
          {productPageCta.label}
        </Link>
      </div>

      <div className="calculator-disclaimer">
        <p>{paintCalculatorResultScopeNotice}</p>
        <p>{paintCalculatorDisclaimer}</p>
        <p>{paintCalculatorSecondaryDisclaimer}</p>
      </div>
    </aside>
  );
}

type SummaryItemProps = {
  label: string;
  value: string;
};

function SummaryItem({ label, value }: SummaryItemProps) {
  return (
    <div>
      <dt>{label}</dt>
      <dd>{value}</dd>
    </div>
  );
}
