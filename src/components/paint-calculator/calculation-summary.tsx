import Link from "next/link";
import { productPageCta } from "@/data/paintCalculator";
import type { PaintCalculatorCopy } from "@/i18n/paint-calculator";
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
  copy?: PaintCalculatorCopy["summary"];
  coverageSuffix?: string;
  gallonLabel?: string;
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
  copy = {
    eyebrow: "Hasil otomatis",
    title: "Ringkasan Perhitungan",
    grossArea: "Luas dinding awal",
    doorArea: "Luas pintu",
    windowArea: "Luas jendela",
    paintableArea: "Luas yang dicat",
    paintClass: "Kategori cat",
    coatAssumption: "Asumsi pengecatan",
    coatAssumptionValue: "2 lapis",
    coverageAssumption: "Daya sebar asumsi",
    usageEstimate: "Estimasi pemakaian",
    purchaseRecommendation: "Rekomendasi pembelian",
    equivalentPrefix: "Setara",
    equivalentSuffix: "galon, dibulatkan ke atas.",
    resetLabel: "Hitung ulang",
    resultScopeNotice: "Saat ini perhitungan hanya berlaku untuk cat tembok.",
    disclaimer:
      "Hasil perhitungan merupakan estimasi. Pemakaian aktual dapat berbeda tergantung kondisi dan porositas permukaan, metode aplikasi, warna dasar, warna akhir, serta daya sebar masing-masing produk.",
    secondaryDisclaimer: "Periksa informasi daya sebar pada kemasan atau lembar data produk sebelum membeli.",
    productCta: productPageCta,
  },
  coverageSuffix = "/ galon / 2 lapis",
  gallonLabel = "galon",
}: CalculationSummaryProps) {
  const ProductIcon = copy.productCta.icon;

  return (
    <aside className="calculator-result" aria-labelledby="calculation-result-title">
      <div className="calculator-result__eyebrow">{copy.eyebrow}</div>
      <h2 id="calculation-result-title">{copy.title}</h2>

      <dl className="calculation-list">
        <SummaryItem label={copy.grossArea} value={formatArea(grossArea)} />
        <SummaryItem label={copy.doorArea} value={formatArea(doorArea)} />
        <SummaryItem label={copy.windowArea} value={formatArea(windowArea)} />
        <SummaryItem label={copy.paintableArea} value={formatArea(paintableArea)} />
        <SummaryItem label={copy.paintClass} value={paintClass.label} />
        <SummaryItem label={copy.coatAssumption} value={copy.coatAssumptionValue} />
        <SummaryItem
          label={copy.coverageAssumption}
          value={`±${paintClass.displayedCoverage} ${coverageSuffix}`}
        />
      </dl>

      <div className="estimate-card estimate-card--primary">
        <span>{copy.usageEstimate}</span>
        <strong>±{formatGallons(rawGallons, gallonLabel)}</strong>
      </div>
      <div className="estimate-card">
        <span>{copy.purchaseRecommendation}</span>
        <strong>{packageRecommendation}</strong>
        <small>
          {copy.equivalentPrefix} {recommendedGallons} {copy.equivalentSuffix}
        </small>
      </div>

      <div className="calculator-result__actions">
        <button className="button button--secondary" type="button" onClick={onReset}>
          {copy.resetLabel}
        </button>
        <Link className="button button--primary" href={copy.productCta.href}>
          <ProductIcon aria-hidden="true" size={20} />
          {copy.productCta.label}
        </Link>
      </div>

      <div className="calculator-disclaimer">
        <p>{copy.resultScopeNotice}</p>
        <p>{copy.disclaimer}</p>
        <p>{copy.secondaryDisclaimer}</p>
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
