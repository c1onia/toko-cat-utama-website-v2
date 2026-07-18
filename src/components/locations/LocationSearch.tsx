"use client";

import { useMemo, useState } from "react";
import type { Branch } from "@/types/branch";
import { BranchGroup } from "./BranchGroup";
import { CityFilter } from "./CityFilter";
import { EmptyState } from "./EmptyState";

type LocationSearchProps = {
  branches: Branch[];
};

function normalize(value: string) {
  return value.toLowerCase().trim();
}

function groupByCity(items: Branch[]) {
  return items.reduce<Record<string, Branch[]>>((groups, branch) => {
    if (!groups[branch.city]) {
      groups[branch.city] = [];
    }

    groups[branch.city].push(branch);
    return groups;
  }, {});
}

export function LocationSearch({ branches }: LocationSearchProps) {
  const [query, setQuery] = useState("");
  const [city, setCity] = useState("");

  const cities = useMemo(
    () => Array.from(new Set(branches.map((branch) => branch.city))),
    [branches],
  );

  const filteredBranches = useMemo(() => {
    const normalizedQuery = normalize(query);

    return branches.filter((branch) => {
      const matchesCity = city ? branch.city === city : true;
      const searchableText = normalize(
        `${branch.name} ${branch.city} ${branch.address}`,
      );
      const matchesQuery = normalizedQuery
        ? searchableText.includes(normalizedQuery)
        : true;

      return matchesCity && matchesQuery;
    });
  }, [branches, city, query]);

  const groupedBranches = groupByCity(filteredBranches);

  return (
    <section className="section section--light location-directory" id="branch-search">
      <div className="container">
        <div className="location-directory__intro">
          <p className="eyebrow">Cari Cabang</p>
          <h2>Lokasi Toko Cat Utama</h2>
          <p>
            Gunakan nama cabang, kota, atau alamat untuk menemukan toko yang
            paling dekat dengan Anda.
          </p>
        </div>

        <div className="location-controls">
          <div className="location-search-field">
            <label htmlFor="branch-query">Cari cabang</label>
            <input
              id="branch-query"
              type="search"
              placeholder="Cari nama toko, kota, atau alamat"
              value={query}
              onChange={(event) => setQuery(event.target.value)}
            />
          </div>
          <CityFilter cities={cities} value={city} onChange={setCity} />
        </div>

        {filteredBranches.length ? (
          <div className="branch-groups">
            {Object.entries(groupedBranches).map(([groupCity, groupBranches]) => (
              <BranchGroup
                city={groupCity}
                branches={groupBranches}
                key={groupCity}
              />
            ))}
          </div>
        ) : (
          <EmptyState />
        )}
      </div>
    </section>
  );
}
