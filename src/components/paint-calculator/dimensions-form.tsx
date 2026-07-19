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
};

export function DimensionsForm({
  calculationType,
  wall,
  room,
  onWallChange,
  onRoomChange,
}: DimensionsFormProps) {
  const isWall = calculationType === "wall";

  return (
    <section className="calculator-panel" aria-labelledby="dimensions-title">
      <div className="calculator-panel__heading">
        <span className="calculator-step">2</span>
        <div>
          <h2 id="dimensions-title">Masukkan ukuran</h2>
          <p>
            {isWall
              ? "Masukkan panjang dan tinggi bidang dinding yang akan dicat."
              : "Luas dinding dihitung dari keliling ruangan × tinggi ruangan."}
          </p>
        </div>
      </div>

      {isWall ? (
        <div className="calculator-field-grid">
          <MeasurementField
            id="wall-length"
            label="Panjang dinding"
            value={wall.length}
            onChange={(length) => onWallChange({ ...wall, length })}
          />
          <MeasurementField
            id="wall-height"
            label="Tinggi dinding"
            value={wall.height}
            onChange={(height) => onWallChange({ ...wall, height })}
          />
        </div>
      ) : (
        <div className="calculator-field-grid">
          <MeasurementField
            id="room-length"
            label="Panjang ruangan"
            value={room.length}
            onChange={(length) => onRoomChange({ ...room, length })}
          />
          <MeasurementField
            id="room-width"
            label="Lebar ruangan"
            value={room.width}
            onChange={(width) => onRoomChange({ ...room, width })}
          />
          <MeasurementField
            id="room-height"
            label="Tinggi ruangan"
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
  value: number;
  onChange: (value: number) => void;
};

function MeasurementField({ id, label, value, onChange }: MeasurementFieldProps) {
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
        <small>m</small>
      </div>
      {hasError ? <em id={`${id}-error`}>Nilai harus lebih dari 0.</em> : null}
    </label>
  );
}
