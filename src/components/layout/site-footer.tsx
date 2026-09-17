"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Mail, MapPin, MessageCircle } from "lucide-react";
import { headOfficeAddress } from "@/data/branches";
import { whatsappUrl } from "@/data/site";
import { getLocaleFromPathname, localizePath } from "@/i18n/config";
import { getDictionary } from "@/i18n/dictionaries";
import { buildFooterNavigation } from "@/i18n/navigation";

export function SiteFooter() {
  const pathname = usePathname();
  const locale = getLocaleFromPathname(pathname);
  const dictionary = getDictionary(locale);
  const footerNavigation = buildFooterNavigation(locale, dictionary.layout.navigation);

  return (
    <footer className="site-footer">
      <div className="container site-footer__grid">
        <div className="site-footer__brand">
          <Link href={localizePath("/", locale)} aria-label={dictionary.layout.logoLabel}>
            <Image src="/brand/logo-white.png" alt="Toko Cat Utama" width={180} height={103} />
          </Link>
          <p>{dictionary.layout.tagline}</p>
        </div>

        <div>
          <h2>{dictionary.layout.quickMenu}</h2>
          <nav aria-label="Footer navigation">
            {footerNavigation.map((item) => (
              <Link key={item.href} href={item.href}>{item.label}</Link>
            ))}
          </nav>
        </div>

        <div className="site-footer__contact">
          <h2>{dictionary.layout.contactHeading}</h2>
          <a href={whatsappUrl} target="_blank" rel="noreferrer">
            <MessageCircle aria-hidden="true" />
            <span>WhatsApp<br />+62 812-6692-5000</span>
          </a>
          <a href="mailto:info@tokocatutama.com"><Mail aria-hidden="true" />info@tokocatutama.com</a>
          <p><MapPin aria-hidden="true" />{headOfficeAddress}</p>
          <a href="https://www.instagram.com/utamapaint" target="_blank" rel="noreferrer">Instagram @utamapaint</a>
        </div>
      </div>
      <div className="container site-footer__bottom">
        <p>© {new Date().getFullYear()} Toko Cat Utama. {dictionary.layout.rights}</p>
      </div>
    </footer>
  );
}
