import type { Metadata } from "next";
import { Outfit, Poppins } from "next/font/google";
import { SiteFooter } from "@/components/layout/site-footer";
import { SiteHeader } from "@/components/layout/site-header";
import "@/app/globals.css";
import "@/styles/home.css";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  weight: ["600", "700"],
  display: "swap",
});

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Toko Cat Utama | Tercepat. Terlengkap. Terpercaya.",
  description: "Membantu pelanggan menemukan solusi pengecatan yang tepat melalui rekomendasi yang jujur, produk yang lengkap, serta pelayanan yang profesional.",
  openGraph: {
    title: "Toko Cat Utama | Tercepat. Terlengkap. Terpercaya.",
    description: "Membantu pelanggan menemukan solusi pengecatan yang tepat melalui rekomendasi yang jujur, produk yang lengkap, serta pelayanan yang profesional.",
    type: "website",
    locale: "id_ID",
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="id" className={`${outfit.variable} ${poppins.variable}`}>
      <body>
        <a className="skip-link" href="#main-content">Lewati ke konten utama</a>
        <SiteHeader />
        {children}
        <SiteFooter />
      </body>
    </html>
  );
}
