export type CalculationType = "wall" | "room";

export type PaintClassId = "premium" | "medium";

export type OpeningType = "door" | "window";

export type OpeningEntry = {
  id: string;
  type: OpeningType;
  width: number;
  height: number;
  quantity: number;
};

export type PaintClassConfig = {
  id: PaintClassId;
  label: string;
  description: string;
  gallonSize: number;
  gallonUnit: "L" | "kg";
  pailSize: number;
  pailUnit: "L" | "kg";
  gallonsPerPail: number;
  coveragePerGallonForTwoCoats: number;
  displayedCoverage: string;
  calculationNote?: string;
};

export type PackageCombination = {
  pailCount: number;
  remainingGallons: number;
};
