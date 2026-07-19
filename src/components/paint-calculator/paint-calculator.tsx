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
  paintCalculatorScopeNotice,
  paintClassConfigs,
} from "@/data/paintCalculator";
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

export function PaintCalculator() {
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
    const paintClass =
      paintClassConfigs.find((config) => config.id === paintClassId) ?? paintClassConfigs[0];
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
      packageRecommendation: formatPackageRecommendation(packageCombination, paintClass),
    };
  }, [calculationType, wall, room, openings, paintClassId]);

  function resetCalculator() {
    setCalculationType(defaultCalculatorValues.calculationType);
    setWall(defaultCalculatorValues.wall);
    setRoom(defaultCalculatorValues.room);
    setOpenings([]);
    setPaintClassId(defaultCalculatorValues.paintClassId);
  }

  return (
    <section className="section calculator-section" aria-label="Form kalkulator cat tembok">
      <div className="container calculator-layout">
        <div className="calculator-workspace">
          <div className="calculator-info-banner" role="note">
            <Info aria-hidden="true" />
            <p>{paintCalculatorScopeNotice}</p>
          </div>

          <CalculationTypeSelector value={calculationType} onChange={setCalculationType} />
          <DimensionsForm
            calculationType={calculationType}
            wall={wall}
            room={room}
            onWallChange={setWall}
            onRoomChange={setRoom}
          />
          <OpeningsEditor openings={openings} onChange={setOpenings} />
          <PaintClassSelector value={paintClassId} onChange={setPaintClassId} />
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
        />
      </div>
    </section>
  );
}
