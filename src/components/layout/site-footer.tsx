"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Mail, MapPin, MessageCircle } from "lucide-react";
import { headOfficeAddress } from "@/data/branches";
import { whatsappUrl } from "@/data/site";
import { getLocaleFromPathname, layoutCopy } from "@/i18n/layout";

export function SiteFooter() {
  const pathname = usePathname();
  const locale = getLocaleFromPathname(pathname);
  const copy = layoutCopy[locale].footer;

  return (
    <footer className="site-footer">
      <div className="container site-footer__grid">
        <div className="site-footer__brand">
          <Link href={locale === "id" ? "/" : `/${locale}`} aria-label={layoutCopy[locale].logoAriaLabel}>
            <Image src="/brand/logo-white.png" alt="Toko Cat Utama" width={180} height={103} />
          </Link>
          <p>{copy.tagline}</p>
        </div>

        <div>
          <h2>{copy.quickMenuTitle}</h2>
          <nav aria-label={copy.quickMenuAriaLabel}>
            {copy.navigation.map((item) => (
              <Link key={item.href} href={item.href}>{item.label}</Link>
            ))}
          </nav>
        </div>

        <div className="site-footer__contact">
          <h2>{copy.contactTitle}</h2>
          <a href={whatsappUrl} target="_blank" rel="noreferrer">
            <MessageCircle aria-hidden="true" />
            <span>{copy.whatsappLabel}<br />+62 812-6692-5000</span>
          </a>
          <a href="mailto:info@tokocatutama.com"><Mail aria-hidden="true" />{copy.emailLabel}: info@tokocatutama.com</a>
          <p><MapPin aria-hidden="true" /><span>{copy.headOfficeLabel}: {headOfficeAddress}</span></p>
          <a href="https://www.instagram.com/utamapaint" target="_blank" rel="noreferrer">{copy.instagramLabel}</a>
        </div>
      </div>
      <div className="container site-footer__bottom">
        <p>© {new Date().getFullYear()} {copy.copyright}</p>
      </div>
    </footer>
  );
}
