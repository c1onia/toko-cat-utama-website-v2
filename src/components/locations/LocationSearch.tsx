"use client";

import { useMemo, useState } from "react";
import { locationsCopy } from "@/i18n/locations";
import type { Branch } from "@/types/branch";
import type { Locale } from "@/types/i18n";
import { BranchGroup } from "./BranchGroup";
import { CityFilter } from "./CityFilter";
import { EmptyState } from "./EmptyState";

type LocationSearchProps = {
  branches: Branch[];
  locale?: Locale;
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

export function LocationSearch({
  branches,
  locale = "id",
}: LocationSearchProps) {
  const copy = locationsCopy[locale].search;
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
        `${branch.name} ${branch.city} ${branch.address} ${
          branch.tintingMachines?.join(" ") ?? ""
        }`,
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
          <p className="eyebrow">{copy.eyebrow}</p>
          <h2>{copy.title}</h2>
          <p>{copy.description}</p>
        </div>

        <div className="location-controls">
          <div className="location-search-field">
            <label htmlFor="branch-query">{copy.searchLabel}</label>
            <input
              id="branch-query"
              type="search"
              placeholder={copy.searchPlaceholder}
              value={query}
              onChange={(event) => setQuery(event.target.value)}
            />
          </div>
          <CityFilter
            cities={cities}
            value={city}
            onChange={setCity}
            label={copy.cityFilterLabel}
            allCitiesLabel={copy.allCitiesLabel}
          />
        </div>

        {filteredBranches.length ? (
          <div className="branch-groups">
            {Object.entries(groupedBranches).map(([groupCity, groupBranches]) => (
              <BranchGroup
                city={groupCity}
                branches={groupBranches}
                branchCountLabel={copy.branchCountLabel}
                cardCopy={copy.card}
                key={groupCity}
              />
            ))}
          </div>
        ) : (
          <EmptyState title={copy.emptyTitle} description={copy.emptyDescription} />
        )}
      </div>
    </section>
  );
}
