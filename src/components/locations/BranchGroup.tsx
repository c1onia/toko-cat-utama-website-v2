import type { ComponentProps } from "react";
import type { Branch } from "@/types/branch";
import { BranchCard } from "./BranchCard";

type BranchGroupProps = {
  city: string;
  branches: Branch[];
  branchCountLabel?: (count: number) => string;
  cardCopy?: ComponentProps<typeof BranchCard>["copy"];
};

function cityId(city: string) {
  return `city-${city.toLowerCase().replace(/\s+/g, "-")}`;
}

export function BranchGroup({
  city,
  branches,
  branchCountLabel = (count) => `${count} cabang`,
  cardCopy,
}: BranchGroupProps) {
  const headingId = cityId(city);

  return (
    <section className="branch-group" aria-labelledby={headingId}>
      <div className="branch-group__heading">
        <h2 id={headingId}>{city}</h2>
        <p>{branchCountLabel(branches.length)}</p>
      </div>
      <div className="branch-grid">
        {branches.map((branch) => (
          <BranchCard branch={branch} copy={cardCopy} key={branch.id} />
        ))}
      </div>
    </section>
  );
}
