import type { CalculationType } from "@/types/paintCalculator";

type WallDimensions = {
  length: number;
  height: number;
};

type RoomDimensions = WallDimensions & {
  width: number;
};

type DimensionsFormProps = {
  calculationType: CalculationType;
  wall: WallDimensions;
  room: RoomDimensions;
  onWallChange: (value: WallDimensions) => void;
  onRoomChange: (value: RoomDimensions) => void;
  copy?: {
    step: string;
    title: string;
    wallDescription: string;
    roomDescription: string;
    wallLength: string;
    wallHeight: string;
    roomLength: string;
    roomWidth: string;
    roomHeight: string;
    error: string;
    meterUnit: string;
  };
};

export function DimensionsForm({
  calculationType,
  wall,
  room,
  onWallChange,
  onRoomChange,
  copy = {
    step: "2",
    title: "Masukkan ukuran",
    wallDescription: "Masukkan panjang dan tinggi bidang dinding yang akan dicat.",
    roomDescription: "Luas dinding dihitung dari keliling ruangan × tinggi ruangan.",
    wallLength: "Panjang dinding",
    wallHeight: "Tinggi dinding",
    roomLength: "Panjang ruangan",
    roomWidth: "Lebar ruangan",
    roomHeight: "Tinggi ruangan",
    error: "Nilai harus lebih dari 0.",
    meterUnit: "m",
  },
}: DimensionsFormProps) {
  const isWall = calculationType === "wall";

  return (
    <section className="calculator-panel" aria-labelledby="dimensions-title">
      <div className="calculator-panel__heading">
        <span className="calculator-step">{copy.step}</span>
        <div>
          <h2 id="dimensions-title">{copy.title}</h2>
          <p>{isWall ? copy.wallDescription : copy.roomDescription}</p>
        </div>
      </div>

      {isWall ? (
        <div className="calculator-field-grid">
          <MeasurementField
            id="wall-length"
            label={copy.wallLength}
            unit={copy.meterUnit}
            error={copy.error}
            value={wall.length}
            onChange={(length) => onWallChange({ ...wall, length })}
          />
          <MeasurementField
            id="wall-height"
            label={copy.wallHeight}
            unit={copy.meterUnit}
            error={copy.error}
            value={wall.height}
            onChange={(height) => onWallChange({ ...wall, height })}
          />
        </div>
      ) : (
        <div className="calculator-field-grid">
          <MeasurementField
            id="room-length"
            label={copy.roomLength}
            unit={copy.meterUnit}
            error={copy.error}
            value={room.length}
            onChange={(length) => onRoomChange({ ...room, length })}
          />
          <MeasurementField
            id="room-width"
            label={copy.roomWidth}
            unit={copy.meterUnit}
            error={copy.error}
            value={room.width}
            onChange={(width) => onRoomChange({ ...room, width })}
          />
          <MeasurementField
            id="room-height"
            label={copy.roomHeight}
            unit={copy.meterUnit}
            error={copy.error}
            value={room.height}
            onChange={(height) => onRoomChange({ ...room, height })}
          />
        </div>
      )}
    </section>
  );
}

type MeasurementFieldProps = {
  id: string;
  label: string;
  unit: string;
  error: string;
  value: number;
  onChange: (value: number) => void;
};

function MeasurementField({ id, label, unit, error, value, onChange }: MeasurementFieldProps) {
  const hasError = value <= 0;

  return (
    <label className="calculator-field" htmlFor={id}>
      <span>{label}</span>
      <div className="calculator-field__control">
        <input
          id={id}
          type="number"
          min="0"
          step="0.1"
          inputMode="decimal"
          value={value}
          aria-describedby={hasError ? `${id}-error` : undefined}
          onChange={(event) => onChange(Number(event.target.value))}
        />
        <small>{unit}</small>
      </div>
      {hasError ? <em id={`${id}-error`}>{error}</em> : null}
    </label>
  );
}
