"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChevronDown, Menu, MessageCircle, X } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { whatsappUrl } from "@/data/site";
import { SiteSearch } from "@/components/layout/site-search";
import {
  getLocaleFromPathname,
  getLocalizedEquivalentPath,
  localeLabels,
  locales,
  localizePath,
  stripLocaleFromPathname,
} from "@/i18n/config";
import { getDictionary } from "@/i18n/dictionaries";
import { buildNavigation } from "@/i18n/navigation";
import type { NavigationItem, PrimaryNavigationItem } from "@/types/site";

export function SiteHeader() {
  const [isOpen, setIsOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [openMobileGroup, setOpenMobileGroup] = useState<string | null>(null);
  const headerRef = useRef<HTMLElement>(null);
  const pathname = usePathname();
  const locale = getLocaleFromPathname(pathname);
  const dictionary = getDictionary(locale);
  const navigation = buildNavigation(locale, dictionary.layout.navigation);

  useEffect(() => {
    function closeOnOutsideClick(event: MouseEvent) {
      if (!headerRef.current?.contains(event.target as Node)) {
        setOpenDropdown(null);
      }
    }

    function closeOnEscape(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setOpenDropdown(null);
        setIsOpen(false);
        setOpenMobileGroup(null);
      }
    }

    document.addEventListener("mousedown", closeOnOutsideClick);
    document.addEventListener("keydown", closeOnEscape);

    return () => {
      document.removeEventListener("mousedown", closeOnOutsideClick);
      document.removeEventListener("keydown", closeOnEscape);
    };
  }, []);

  function closeMenus() {
    setOpenDropdown(null);
    setIsOpen(false);
    setOpenMobileGroup(null);
  }

  return (
    <header className="site-header" ref={headerRef}>
      <div className="container site-header__inner">
        <Link className="site-header__logo" href={localizePath("/", locale)} aria-label={dictionary.layout.logoLabel}>
          <Image src="/brand/logo-primary.png" alt="Toko Cat Utama" width={240} height={137} priority />
        </Link>

        <nav className="site-header__desktop-nav" aria-label={dictionary.layout.primaryNavigationLabel}>
          {navigation.map((item) => (
            <DesktopNavigationItem
              item={item}
              isActive={isNavigationItemActive(item, pathname)}
              isOpen={openDropdown === item.label}
              key={item.label}
              onClose={() => setOpenDropdown(null)}
              onToggle={() =>
                setOpenDropdown((current) => (current === item.label ? null : item.label))
              }
            />
          ))}
        </nav>

        <div className="site-header__actions">
          <SiteSearch label={dictionary.layout.search.label} placeholder={dictionary.layout.search.placeholder} />
          <LanguageSwitcher
            currentLocale={locale}
            label={dictionary.layout.languageLabel}
            pathname={pathname}
          />
          <a className="button button--primary site-header__cta" href={whatsappUrl} target="_blank" rel="noreferrer">
            <MessageCircle aria-hidden="true" size={20} />
            {dictionary.layout.contactCta}
          </a>
          <button
            className="site-header__menu-button"
            type="button"
            aria-expanded={isOpen}
            aria-controls="mobile-navigation"
            aria-label={isOpen ? dictionary.layout.closeMenu : dictionary.layout.openMenu}
            onClick={() => setIsOpen((current) => !current)}
          >
            {isOpen ? <X aria-hidden="true" /> : <Menu aria-hidden="true" />}
          </button>
        </div>
      </div>

      {isOpen ? (
        <div className="site-header__mobile-panel" id="mobile-navigation">
          <div className="container">
            <SiteSearch label={dictionary.layout.search.label} placeholder={dictionary.layout.search.placeholder} />
            <LanguageSwitcher
              currentLocale={locale}
              label={dictionary.layout.languageLabel}
              pathname={pathname}
            />
            <nav aria-label={dictionary.layout.mobileNavigationLabel}>
              {navigation.map((item) => (
                <MobileNavigationItem
                  item={item}
                  isActive={isNavigationItemActive(item, pathname)}
                  isOpen={openMobileGroup === item.label}
                  key={item.label}
                  onClose={closeMenus}
                  onToggle={() =>
                    setOpenMobileGroup((current) => (current === item.label ? null : item.label))
                  }
                />
              ))}
            </nav>
            <a className="button button--primary" href={whatsappUrl} target="_blank" rel="noreferrer">
              <MessageCircle aria-hidden="true" size={20} />
              {dictionary.layout.contactCta}
            </a>
          </div>
        </div>
      ) : null}
    </header>
  );
}

type DesktopNavigationItemProps = {
  item: PrimaryNavigationItem;
  isActive: boolean;
  isOpen: boolean;
  onClose: () => void;
  onToggle: () => void;
};

function DesktopNavigationItem({
  item,
  isActive,
  isOpen,
  onClose,
  onToggle,
}: DesktopNavigationItemProps) {
  if (!item.sections?.length) {
    return (
      <Link href={item.href} aria-current={isActive ? "page" : undefined}>
        {item.label}
      </Link>
    );
  }

  return (
    <div
      className="site-header__nav-group"
      data-align={item.href === "/lokasi-toko" ? "end" : undefined}
      data-open={isOpen}
    >
      <button
        className="site-header__nav-trigger"
        type="button"
        aria-expanded={isOpen}
        aria-haspopup="true"
        data-active={isActive}
        onClick={onToggle}
      >
        {item.label}
        <ChevronDown aria-hidden="true" size={16} />
      </button>
      <div className="site-header__dropdown" role="menu">
        {item.sections.map((section) => (
          <div className="site-header__dropdown-section" key={section.title}>
            <p>{section.title}</p>
            {section.items.map((sectionItem) => (
              <NavigationLink
                item={sectionItem}
                isMenuItem
                key={`${section.title}-${sectionItem.label}`}
                onClick={onClose}
              />
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

type MobileNavigationItemProps = {
  item: PrimaryNavigationItem;
  isActive: boolean;
  isOpen: boolean;
  onClose: () => void;
  onToggle: () => void;
};

function MobileNavigationItem({
  item,
  isActive,
  isOpen,
  onClose,
  onToggle,
}: MobileNavigationItemProps) {
  if (!item.sections?.length) {
    return (
      <Link href={item.href} aria-current={isActive ? "page" : undefined} onClick={onClose}>
        {item.label}
      </Link>
    );
  }

  return (
    <div className="site-header__mobile-group" data-open={isOpen}>
      <button type="button" aria-expanded={isOpen} data-active={isActive} onClick={onToggle}>
        {item.label}
        <ChevronDown aria-hidden="true" size={18} />
      </button>
      {isOpen ? (
        <div className="site-header__mobile-subnav">
          {item.sections.map((section) => (
            <div key={section.title}>
              <p>{section.title}</p>
              {section.items.map((sectionItem) => (
                <NavigationLink
                  item={sectionItem}
                  key={`${section.title}-${sectionItem.label}`}
                  onClick={onClose}
                />
              ))}
            </div>
          ))}
        </div>
      ) : null}
    </div>
  );
}

type NavigationLinkProps = {
  item: NavigationItem;
  isMenuItem?: boolean;
  onClick: () => void;
};

function NavigationLink({ item, isMenuItem = false, onClick }: NavigationLinkProps) {
  const isExternal = item.href.startsWith("http");
  const role = isMenuItem ? "menuitem" : undefined;

  if (isExternal) {
    return (
      <a href={item.href} target="_blank" rel="noreferrer" role={role} onClick={onClick}>
        {item.label}
      </a>
    );
  }

  return (
    <Link href={item.href} role={role} onClick={onClick}>
      {item.label}
    </Link>
  );
}

function isNavigationItemActive(item: PrimaryNavigationItem, pathname: string) {
  const currentPath = stripLocaleFromPathname(pathname);
  const itemPaths = [item.href, ...(item.sections?.flatMap((section) => section.items.map(({ href }) => href)) ?? [])]
    .filter((href) => href.startsWith("/"))
    .map((href) => stripLocaleFromPathname(href.split("#")[0]));

  return itemPaths.some((href) => (href === "/" ? currentPath === "/" : currentPath === href));
}

type LanguageSwitcherProps = {
  currentLocale: ReturnType<typeof getLocaleFromPathname>;
  label: string;
  pathname: string;
};

function LanguageSwitcher({ currentLocale, label, pathname }: LanguageSwitcherProps) {
  return (
    <div className="language-switcher" aria-label={label}>
      {locales.map((locale) => (
        <Link
          aria-current={locale === currentLocale ? "page" : undefined}
          className="language-switcher__link"
          href={getLocalizedEquivalentPath(pathname, locale)}
          key={locale}
        >
          {localeLabels[locale]}
        </Link>
      ))}
    </div>
  );
}
