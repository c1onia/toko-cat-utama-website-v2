type TintingMachineProps = {
  machines?: string[];
};

export function TintingMachine({ machines }: TintingMachineProps) {
  if (!machines?.length) {
    return null;
  }

  return (
    <div className="tinting-machine">
      <h4>Sistem Tinting Tersedia</h4>
      <ul>
        {machines.map((machine) => (
          <li key={machine}>{machine}</li>
        ))}
      </ul>
    </div>
  );
}
