"use client";

import Link from "next/link";
import { Search, X } from "lucide-react";
import { useMemo, useState } from "react";
import { searchItems } from "@/data/site";

export function SiteSearch() {
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
        <span className="sr-only">Cari produk, merek, kategori, atau lokasi toko</span>
        <Search aria-hidden="true" size={20} strokeWidth={2} />
        <input
          type="search"
          placeholder="Cari..."
          value={query}
          onChange={(event) => setQuery(event.target.value)}
          autoComplete="off"
        />
        {query ? (
          <button type="button" onClick={() => setQuery("")} aria-label="Hapus pencarian">
            <X aria-hidden="true" size={18} />
          </button>
        ) : null}
      </label>

      {normalizedQuery ? (
        <div className="site-search__results" role="region" aria-live="polite" aria-label="Hasil pencarian">
          {results.length ? (
            results.map((item) => (
              <Link key={`${item.type}-${item.label}`} href={item.href} onClick={() => setQuery("")}>
                <span>{item.label}</span>
                <small>{item.type}</small>
              </Link>
            ))
          ) : (
            <p>Tidak ada hasil yang sesuai.</p>
          )}
        </div>
      ) : null}
    </div>
  );
}
