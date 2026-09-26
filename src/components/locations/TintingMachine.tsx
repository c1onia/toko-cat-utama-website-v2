type TintingMachineProps = {
  machines?: string[];
  title?: string;
};

export function TintingMachine({ machines, title = "Sistem Tinting Tersedia" }: TintingMachineProps) {
  if (!machines?.length) {
    return null;
  }

  return (
    <div className="tinting-machine">
      <h4>{title}</h4>
      <ul>
        {machines.map((machine) => (
          <li key={machine}>{machine}</li>
        ))}
      </ul>
    </div>
  );
}
