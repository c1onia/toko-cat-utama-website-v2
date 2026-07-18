import type { Branch } from "@/types/branch";
import { BranchCard } from "./BranchCard";

type BranchGroupProps = {
  city: string;
  branches: Branch[];
};

function cityId(city: string) {
  return `city-${city.toLowerCase().replace(/\s+/g, "-")}`;
}

export function BranchGroup({ city, branches }: BranchGroupProps) {
  const headingId = cityId(city);

  return (
    <section className="branch-group" aria-labelledby={headingId}>
      <div className="branch-group__heading">
        <h2 id={headingId}>{city}</h2>
        <p>{branches.length} cabang</p>
      </div>
      <div className="branch-grid">
        {branches.map((branch) => (
          <BranchCard branch={branch} key={branch.id} />
        ))}
      </div>
    </section>
  );
}
