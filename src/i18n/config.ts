export const locales = ["id", "en", "zh"] as const;

export type Locale = (typeof locales)[number];

export const defaultLocale: Locale = "id";

export const localeLabels: Record<Locale, string> = {
  id: "ID",
  en: "EN",
  zh: "中文",
};

export function isLocale(value: string | undefined): value is Locale {
  return locales.some((locale) => locale === value);
}

export function getLocaleFromPathname(pathname: string): Locale {
  const segment = pathname.split("/").filter(Boolean)[0];

  return isLocale(segment) ? segment : defaultLocale;
}

export function stripLocaleFromPathname(pathname: string) {
  const segments = pathname.split("/").filter(Boolean);

  if (isLocale(segments[0])) {
    return `/${segments.slice(1).join("/")}` || "/";
  }

  return pathname || "/";
}

export function localizePath(path: string, locale: Locale) {
  if (locale === defaultLocale) {
    return path;
  }

  if (path === "/") {
    return `/${locale}`;
  }

  return `/${locale}${path}`;
}

export function getLocalizedEquivalentPath(pathname: string, locale: Locale) {
  const basePath = stripLocaleFromPathname(pathname);
  const supportedPaths = ["/", "/tentang-kami"];
  const safePath = supportedPaths.includes(basePath) ? basePath : "/";

  return localizePath(safePath, locale);
}

export function localizeSupportedHref(href: string, locale: Locale) {
  if (!href.startsWith("/") || href.startsWith("//")) {
    return href;
  }

  const [path, hash] = href.split("#");
  const basePath = path || "/";
  const supportedPaths = ["/", "/tentang-kami"];

  if (!supportedPaths.includes(basePath)) {
    return href;
  }

  const localizedPath = localizePath(basePath, locale);

  return hash ? `${localizedPath}#${hash}` : localizedPath;
}
