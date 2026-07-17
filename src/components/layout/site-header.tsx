"use client";

import Image from "next/image";
import Link from "next/link";
import { Menu, MessageCircle, X } from "lucide-react";
import { useState } from "react";
import { navigation, whatsappUrl } from "@/data/site";
import { SiteSearch } from "@/components/layout/site-search";

export function SiteHeader() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="site-header">
      <div className="container site-header__inner">
        <Link className="site-header__logo" href="/" aria-label="Toko Cat Utama - Beranda">
          <Image src="/brand/logo-primary.png" alt="Toko Cat Utama" width={240} height={137} priority />
        </Link>

        <nav className="site-header__desktop-nav" aria-label="Navigasi utama">
          {navigation.map((item) => (
            <Link key={item.href} href={item.href} aria-current={item.href === "/" ? "page" : undefined}>
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="site-header__actions">
          <SiteSearch />
          <a className="button button--primary site-header__cta" href={whatsappUrl} target="_blank" rel="noreferrer">
            <MessageCircle aria-hidden="true" size={20} />
            Hubungi Kami
          </a>
          <button
            className="site-header__menu-button"
            type="button"
            aria-expanded={isOpen}
            aria-controls="mobile-navigation"
            aria-label={isOpen ? "Tutup menu" : "Buka menu"}
            onClick={() => setIsOpen((current) => !current)}
          >
            {isOpen ? <X aria-hidden="true" /> : <Menu aria-hidden="true" />}
          </button>
        </div>
      </div>

      {isOpen ? (
        <div className="site-header__mobile-panel" id="mobile-navigation">
          <div className="container">
            <SiteSearch />
            <nav aria-label="Navigasi mobile">
              {navigation.map((item) => (
                <Link key={item.href} href={item.href} onClick={() => setIsOpen(false)}>
                  {item.label}
                </Link>
              ))}
            </nav>
            <a className="button button--primary" href={whatsappUrl} target="_blank" rel="noreferrer">
              <MessageCircle aria-hidden="true" size={20} />
              Hubungi Kami
            </a>
          </div>
        </div>
      ) : null}
    </header>
  );
}
