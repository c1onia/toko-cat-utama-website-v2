import { defaultOpeningValues } from "@/data/paintCalculator";
import type { OpeningEntry, OpeningType } from "@/types/paintCalculator";

type OpeningsEditorProps = {
  openings: OpeningEntry[];
  onChange: (openings: OpeningEntry[]) => void;
};

export function OpeningsEditor({ openings, onChange }: OpeningsEditorProps) {
  const doors = openings.filter((opening) => opening.type === "door");
  const windows = openings.filter((opening) => opening.type === "window");

  function addOpening(type: OpeningType) {
    const defaults = defaultOpeningValues[type];
    onChange([
      ...openings,
      {
        id: `${type}-${Date.now()}-${openings.length}`,
        type,
        width: defaults.width,
        height: defaults.height,
        quantity: defaults.quantity,
      },
    ]);
  }

  function updateOpening(id: string, patch: Partial<OpeningEntry>) {
    onChange(openings.map((opening) => (opening.id === id ? { ...opening, ...patch } : opening)));
  }

  function removeOpening(id: string) {
    onChange(openings.filter((opening) => opening.id !== id));
  }

  return (
    <section className="calculator-panel" aria-labelledby="openings-title">
      <div className="calculator-panel__heading">
        <span className="calculator-step">3</span>
        <div>
          <h2 id="openings-title">Kurangi pintu dan jendela</h2>
          <p>Tambahkan bukaan hanya jika area tersebut tidak perlu dicat.</p>
        </div>
      </div>

      <OpeningGroup
        title="Pintu"
        emptyText="Belum ada pintu yang dikurangi."
        entries={doors}
        onAdd={() => addOpening("door")}
        onUpdate={updateOpening}
        onRemove={removeOpening}
      />

      <OpeningGroup
        title="Jendela"
        emptyText="Belum ada jendela yang dikurangi."
        entries={windows}
        onAdd={() => addOpening("window")}
        onUpdate={updateOpening}
        onRemove={removeOpening}
      />
    </section>
  );
}

type OpeningGroupProps = {
  title: string;
  emptyText: string;
  entries: OpeningEntry[];
  onAdd: () => void;
  onUpdate: (id: string, patch: Partial<OpeningEntry>) => void;
  onRemove: (id: string) => void;
};

function OpeningGroup({ title, emptyText, entries, onAdd, onUpdate, onRemove }: OpeningGroupProps) {
  return (
    <div className="opening-group">
      <div className="opening-group__header">
        <h3>{title}</h3>
        <button className="button button--secondary" type="button" onClick={onAdd}>
          Tambah {title.toLowerCase()}
        </button>
      </div>

      {entries.length > 0 ? (
        <div className="opening-list">
          {entries.map((entry, index) => (
            <OpeningRow
              key={entry.id}
              entry={entry}
              index={index}
              title={title}
              onUpdate={onUpdate}
              onRemove={onRemove}
            />
          ))}
        </div>
      ) : (
        <p className="opening-group__empty">{emptyText}</p>
      )}
    </div>
  );
}

type OpeningRowProps = {
  entry: OpeningEntry;
  index: number;
  title: string;
  onUpdate: (id: string, patch: Partial<OpeningEntry>) => void;
  onRemove: (id: string) => void;
};

function OpeningRow({ entry, index, title, onUpdate, onRemove }: OpeningRowProps) {
  return (
    <div className="opening-row">
      <strong>
        {title} {index + 1}
      </strong>
      <OpeningField
        label="Lebar"
        value={entry.width}
        min="0"
        step="0.1"
        unit="m"
        onChange={(width) => onUpdate(entry.id, { width })}
      />
      <OpeningField
        label="Tinggi"
        value={entry.height}
        min="0"
        step="0.1"
        unit="m"
        onChange={(height) => onUpdate(entry.id, { height })}
      />
      <OpeningField
        label="Jumlah"
        value={entry.quantity}
        min="1"
        step="1"
        unit="unit"
        onChange={(quantity) => onUpdate(entry.id, { quantity })}
      />
      <button className="opening-row__remove" type="button" onClick={() => onRemove(entry.id)}>
        Hapus
      </button>
    </div>
  );
}

type OpeningFieldProps = {
  label: string;
  value: number;
  min: string;
  step: string;
  unit: string;
  onChange: (value: number) => void;
};

function OpeningField({ label, value, min, step, unit, onChange }: OpeningFieldProps) {
  return (
    <label className="opening-field">
      <span>{label}</span>
      <div className="calculator-field__control">
        <input
          type="number"
          min={min}
          step={step}
          inputMode="decimal"
          value={value}
          onChange={(event) => onChange(Number(event.target.value))}
        />
        <small>{unit}</small>
      </div>
    </label>
  );
}
