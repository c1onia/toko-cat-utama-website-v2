import Image from "next/image";
import Link from "next/link";
import { Mail, MapPin, MessageCircle, Phone } from "lucide-react";
import { headOfficeAddress } from "@/data/branches";
import { navigation, whatsappUrl } from "@/data/site";

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="container site-footer__grid">
        <div className="site-footer__brand">
          <Link href="/" aria-label="Toko Cat Utama - Beranda">
            <Image src="/brand/logo-white.png" alt="Toko Cat Utama" width={180} height={103} />
          </Link>
          <p>Tercepat. Terlengkap. Terpercaya.</p>
        </div>

        <div>
          <h2>Menu Cepat</h2>
          <nav aria-label="Navigasi footer">
            {navigation.map((item) => (
              <Link key={item.href} href={item.href}>{item.label}</Link>
            ))}
          </nav>
        </div>

        <div className="site-footer__contact">
          <h2>Kontak</h2>
          <a href={whatsappUrl} target="_blank" rel="noreferrer"><MessageCircle aria-hidden="true" />+62 812-6692-5000</a>
          <a href="tel:+6281266925000"><Phone aria-hidden="true" />+62 812-6692-5000</a>
          <a href="mailto:info@tokocatutama.com"><Mail aria-hidden="true" />info@tokocatutama.com</a>
          <p><MapPin aria-hidden="true" />{headOfficeAddress}</p>
          <a href="https://www.instagram.com/utamapaint" target="_blank" rel="noreferrer">Instagram @utamapaint</a>
        </div>
      </div>
      <div className="container site-footer__bottom">
        <p>© {new Date().getFullYear()} Toko Cat Utama. Seluruh hak cipta dilindungi.</p>
      </div>
    </footer>
  );
}
