const tintingSystemNames: Record<string, string> = {
  altex: "Altex",
  avian: "Avian",
  bital: "Bital",
  danapaint: "Dana Paint",
  "dana paint": "Dana Paint",
  dulux: "Dulux",
  indaco: "Indaco",
  jotun: "Jotun",
  "jotun protective & marine": "Jotun Protective & Marine",
  kansai: "Kansai Paint",
  "kansai paint": "Kansai Paint",
  kemtone: "Kemtone",
  lenkote: "Lenkote",
  mowilex: "Mowilex",
  "nippon ccm": "Nippon CCM",
  "nippon cc pro": "Nippon CC Pro",
  "nippon paint": "Nippon Paint",
  nippon: "Nippon Paint",
  nodrop: "No Drop",
  "no drop": "No Drop",
  "pacific paint": "Pacific Paint",
  premio: "Premio",
  propan: "Propan Waterbase",
  "propan waterbase": "Propan Waterbase",
  "propan solvent": "Propan Solvent",
  sanlex: "Sanlex",
  spectrum: "Spectrum",
  toa: "TOA",
  "warna agung": "Warna Agung",
};

const compoundNames: Record<string, string[]> = {
  "avian danapaint": ["Avian", "Dana Paint"],
  "sanlex danapaint": ["Sanlex", "Dana Paint"],
  "spectrum dulux": ["Spectrum", "Dulux"],
  "lenkote decolith": ["Lenkote", "Decolith"],
};

function cleanTintingName(value: string) {
  return value
    .replace(/\.+$/g, "")
    .replace(/\s+/g, " ")
    .replace(/\s*,\s*/g, ", ")
    .trim();
}

function toTitleCase(value: string) {
  return value
    .toLowerCase()
    .split(" ")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
}

function normalizeSingleTintingSystem(value: string) {
  const cleaned = cleanTintingName(value);
  const key = cleaned.toLowerCase();

  return tintingSystemNames[key] ?? toTitleCase(cleaned);
}

export function normalizeTintingSystems(value?: string) {
  if (!value) {
    return undefined;
  }

  const systems = value
    .split(",")
    .flatMap((entry) => {
      const cleaned = cleanTintingName(entry);
      const compound = compoundNames[cleaned.toLowerCase()];

      return compound ?? [normalizeSingleTintingSystem(cleaned)];
    })
    .filter(Boolean);

  return Array.from(new Set(systems)).sort((first, second) =>
    first.localeCompare(second, "id"),
  );
}
