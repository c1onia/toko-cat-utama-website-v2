import type { OpeningEntry, PackageCombination, PaintClassConfig } from "@/types/paintCalculator";

export function calculateWallArea(length: number, height: number) {
  return sanitizeMeasurement(length) * sanitizeMeasurement(height);
}

export function calculateRoomWallArea(length: number, width: number, height: number) {
  const perimeter = 2 * (sanitizeMeasurement(length) + sanitizeMeasurement(width));
  return perimeter * sanitizeMeasurement(height);
}

export function calculateOpeningArea(openings: OpeningEntry[], type?: OpeningEntry["type"]) {
  return openings
    .filter((opening) => (type ? opening.type === type : true))
    .reduce(
      (total, opening) =>
        total +
        sanitizeMeasurement(opening.width) *
          sanitizeMeasurement(opening.height) *
          sanitizeQuantity(opening.quantity),
      0,
    );
}

export function calculatePaintableArea(grossArea: number, openingArea: number) {
  return Math.max(0, sanitizeMeasurement(grossArea) - sanitizeMeasurement(openingArea));
}

export function calculatePaintRequirement(
  paintableArea: number,
  coveragePerGallonForTwoCoats: number,
) {
  const rawGallons =
    coveragePerGallonForTwoCoats > 0
      ? sanitizeMeasurement(paintableArea) / coveragePerGallonForTwoCoats
      : 0;

  return {
    rawGallons,
    recommendedGallons: Math.ceil(rawGallons),
  };
}

export function calculatePackageCombination(
  recommendedGallons: number,
  gallonsPerPail: number,
): PackageCombination {
  const safeGallons = Math.max(0, Math.ceil(recommendedGallons));
  const safeGallonsPerPail = Math.max(1, Math.floor(gallonsPerPail));

  return {
    pailCount: Math.floor(safeGallons / safeGallonsPerPail),
    remainingGallons: safeGallons % safeGallonsPerPail,
  };
}

export function formatPackageRecommendation(
  combination: PackageCombination,
  config: PaintClassConfig,
) {
  const parts: string[] = [];

  if (combination.pailCount > 0) {
    parts.push(`${combination.pailCount} Pail ${formatSize(config.pailSize)} ${config.pailUnit}`);
  }

  if (combination.remainingGallons > 0) {
    parts.push(
      `${combination.remainingGallons} Galon ${formatSize(config.gallonSize)} ${config.gallonUnit}`,
    );
  }

  return parts.length > 0 ? parts.join(" + ") : "0 Galon";
}

export function formatArea(value: number) {
  return `${formatDecimal(value)} m²`;
}

export function formatGallons(value: number) {
  return `${formatDecimal(value)} galon`;
}

function sanitizeMeasurement(value: number) {
  return Number.isFinite(value) ? Math.max(0, value) : 0;
}

function sanitizeQuantity(value: number) {
  return Number.isFinite(value) ? Math.max(1, Math.floor(value)) : 1;
}

function formatDecimal(value: number) {
  return new Intl.NumberFormat("id-ID", {
    maximumFractionDigits: 1,
  }).format(value);
}

function formatSize(value: number) {
  return new Intl.NumberFormat("id-ID", {
    maximumFractionDigits: 1,
  }).format(value);
}
