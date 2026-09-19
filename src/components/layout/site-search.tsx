"use client";

import Link from "next/link";
import { Search, X } from "lucide-react";
import { useMemo, useState } from "react";
import { searchItems } from "@/data/site";
import { layoutCopy } from "@/i18n/layout";
import type { SearchCopy } from "@/types/i18n";

type SiteSearchProps = {
  copy?: SearchCopy;
};

export function SiteSearch({ copy = layoutCopy.id.search }: SiteSearchProps) {
  const [query, setQuery] = useState("");
  const normalizedQuery = query.trim().toLocaleLowerCase("id-ID");

  const results = useMemo(() => {
    if (!normalizedQuery) return [];

    return searchItems
      .filter((item) => `${item.label} ${item.keywords}`.toLocaleLowerCase("id-ID").includes(normalizedQuery))
      .slice(0, 6);
  }, [normalizedQuery]);

  return (
    <div className="site-search">
      <label className="site-search__field">
        <span className="sr-only">{copy.srLabel}</span>
        <Search aria-hidden="true" size={20} strokeWidth={2} />
        <input
          type="search"
          placeholder={copy.placeholder}
          value={query}
          onChange={(event) => setQuery(event.target.value)}
          autoComplete="off"
        />
        {query ? (
          <button type="button" onClick={() => setQuery("")} aria-label={copy.clearLabel}>
            <X aria-hidden="true" size={18} />
          </button>
        ) : null}
      </label>

      {normalizedQuery ? (
        <div className="site-search__results" role="region" aria-live="polite" aria-label={copy.resultsLabel}>
          {results.length ? (
            results.map((item) => (
              <Link key={`${item.type}-${item.label}`} href={item.href} onClick={() => setQuery("")}>
                <span>{item.label}</span>
                <small>{copy.typeLabels[item.type]}</small>
              </Link>
            ))
          ) : (
            <p>{copy.emptyState}</p>
          )}
        </div>
      ) : null}
    </div>
  );
}
