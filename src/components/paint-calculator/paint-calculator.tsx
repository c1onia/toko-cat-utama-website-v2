"use client";

import { Info } from "lucide-react";
import { useMemo, useState } from "react";
import { CalculationSummary } from "@/components/paint-calculator/calculation-summary";
import { CalculationTypeSelector } from "@/components/paint-calculator/calculation-type-selector";
import { DimensionsForm } from "@/components/paint-calculator/dimensions-form";
import { OpeningsEditor } from "@/components/paint-calculator/openings-editor";
import { PaintClassSelector } from "@/components/paint-calculator/paint-class-selector";
import {
  defaultCalculatorValues,
} from "@/data/paintCalculator";
import {
  getPaintClassConfig,
  paintCalculatorCopy,
  type PaintCalculatorCopy,
} from "@/i18n/paint-calculator";
import {
  calculateOpeningArea,
  calculatePackageCombination,
  calculatePaintRequirement,
  calculatePaintableArea,
  calculateRoomWallArea,
  calculateWallArea,
  formatPackageRecommendation,
} from "@/lib/paintCalculator";
import type { CalculationType, OpeningEntry, PaintClassId } from "@/types/paintCalculator";
import type { Locale } from "@/types/i18n";

type PaintCalculatorProps = {
  copy?: PaintCalculatorCopy;
  locale?: Locale;
};

export function PaintCalculator({ copy, locale = "id" }: PaintCalculatorProps) {
  const localizedCopy = copy ?? paintCalculatorCopy[locale];
  const [calculationType, setCalculationType] = useState<CalculationType>(
    defaultCalculatorValues.calculationType,
  );
  const [wall, setWall] = useState(defaultCalculatorValues.wall);
  const [room, setRoom] = useState(defaultCalculatorValues.room);
  const [openings, setOpenings] = useState<OpeningEntry[]>([]);
  const [paintClassId, setPaintClassId] = useState<PaintClassId>(
    defaultCalculatorValues.paintClassId,
  );

  const result = useMemo(() => {
    const paintClass = getPaintClassConfig(localizedCopy.paintClass.configs, paintClassId);
    const grossArea =
      calculationType === "wall"
        ? calculateWallArea(wall.length, wall.height)
        : calculateRoomWallArea(room.length, room.width, room.height);
    const doorArea = calculateOpeningArea(openings, "door");
    const windowArea = calculateOpeningArea(openings, "window");
    const paintableArea = calculatePaintableArea(grossArea, doorArea + windowArea);
    const requirement = calculatePaintRequirement(
      paintableArea,
      paintClass.coveragePerGallonForTwoCoats,
    );
    const packageCombination = calculatePackageCombination(
      requirement.recommendedGallons,
      paintClass.gallonsPerPail,
    );

    return {
      paintClass,
      grossArea,
      doorArea,
      windowArea,
      paintableArea,
      ...requirement,
      packageRecommendation: formatPackageRecommendation(
        packageCombination,
        paintClass,
        localizedCopy.packageLabels,
      ),
    };
  }, [calculationType, wall, room, openings, paintClassId, localizedCopy]);

  function resetCalculator() {
    setCalculationType(defaultCalculatorValues.calculationType);
    setWall(defaultCalculatorValues.wall);
    setRoom(defaultCalculatorValues.room);
    setOpenings([]);
    setPaintClassId(defaultCalculatorValues.paintClassId);
  }

  return (
    <section className="section calculator-section" aria-label={localizedCopy.sectionAriaLabel}>
      <div className="container calculator-layout">
        <div className="calculator-workspace">
          <div className="calculator-info-banner" role="note">
            <Info aria-hidden="true" />
            <p>{localizedCopy.scopeNotice}</p>
          </div>

          <CalculationTypeSelector
            value={calculationType}
            onChange={setCalculationType}
            copy={localizedCopy.calculationType}
          />
          <DimensionsForm
            calculationType={calculationType}
            wall={wall}
            room={room}
            onWallChange={setWall}
            onRoomChange={setRoom}
            copy={localizedCopy.dimensions}
          />
          <OpeningsEditor
            openings={openings}
            onChange={setOpenings}
            copy={localizedCopy.openings}
          />
          <PaintClassSelector
            value={paintClassId}
            onChange={setPaintClassId}
            copy={localizedCopy.paintClass}
          />
        </div>

        <CalculationSummary
          grossArea={result.grossArea}
          doorArea={result.doorArea}
          windowArea={result.windowArea}
          paintableArea={result.paintableArea}
          paintClass={result.paintClass}
          rawGallons={result.rawGallons}
          recommendedGallons={result.recommendedGallons}
          packageRecommendation={result.packageRecommendation}
          onReset={resetCalculator}
          copy={localizedCopy.summary}
          coverageSuffix={localizedCopy.paintClass.coverageSuffix}
          gallonLabel={localizedCopy.packageLabels.gallon.toLowerCase()}
        />
      </div>
    </section>
  );
}
