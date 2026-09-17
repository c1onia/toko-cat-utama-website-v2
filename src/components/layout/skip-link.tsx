"use client";

import { usePathname } from "next/navigation";
import { getLocaleFromPathname } from "@/i18n/config";
import { getDictionary } from "@/i18n/dictionaries";

export function SkipLink() {
  const pathname = usePathname();
  const locale = getLocaleFromPathname(pathname);
  const dictionary = getDictionary(locale);

  return (
    <a className="skip-link" href="#main-content">
      {dictionary.layout.skipLink}
    </a>
  );
}
