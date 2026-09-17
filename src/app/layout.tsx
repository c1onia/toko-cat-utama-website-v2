import type { Metadata } from "next";
import { Outfit, Poppins } from "next/font/google";
import { SiteFooter } from "@/components/layout/site-footer";
import { SiteHeader } from "@/components/layout/site-header";
import { SkipLink } from "@/components/layout/skip-link";
import { getDictionary } from "@/i18n/dictionaries";
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

const dictionary = getDictionary("id");

export const metadata: Metadata = {
  title: dictionary.metadata.homeTitle,
  description: dictionary.metadata.homeDescription,
  alternates: {
    languages: {
      id: "/",
      en: "/en",
      zh: "/zh",
    },
  },
  openGraph: {
    title: dictionary.metadata.homeTitle,
    description: dictionary.metadata.homeDescription,
    type: "website",
    locale: "id_ID",
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="id" className={`${outfit.variable} ${poppins.variable}`}>
      <body>
        <SkipLink />
        <SiteHeader />
        {children}
        <SiteFooter />
      </body>
    </html>
  );
}
