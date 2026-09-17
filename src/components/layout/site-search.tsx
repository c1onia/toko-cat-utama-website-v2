"use client";

import Link from "next/link";
import { Search, X } from "lucide-react";
import { useMemo, useState } from "react";
import { searchItems } from "@/data/site";

type SiteSearchProps = {
  label?: string;
  placeholder?: string;
  resultsLabel?: string;
  emptyLabel?: string;
  clearLabel?: string;
};

export function SiteSearch({
  label = "Cari produk, merek, kategori, atau lokasi toko",
  placeholder = "Cari...",
  resultsLabel = "Hasil pencarian",
  emptyLabel = "Tidak ada hasil yang sesuai.",
  clearLabel = "Hapus pencarian",
}: SiteSearchProps) {
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
        <span className="sr-only">{label}</span>
        <Search aria-hidden="true" size={20} strokeWidth={2} />
        <input
          type="search"
          placeholder={placeholder}
          value={query}
          onChange={(event) => setQuery(event.target.value)}
          autoComplete="off"
        />
        {query ? (
          <button type="button" onClick={() => setQuery("")} aria-label={clearLabel}>
            <X aria-hidden="true" size={18} />
          </button>
        ) : null}
      </label>

      {normalizedQuery ? (
        <div className="site-search__results" role="region" aria-live="polite" aria-label={resultsLabel}>
          {results.length ? (
            results.map((item) => (
              <Link key={`${item.type}-${item.label}`} href={item.href} onClick={() => setQuery("")}>
                <span>{item.label}</span>
                <small>{item.type}</small>
              </Link>
            ))
          ) : (
            <p>{emptyLabel}</p>
          )}
        </div>
      ) : null}
    </div>
  );
}
