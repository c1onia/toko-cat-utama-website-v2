import { brandList } from "@/data/brand-list";
import { categories, productNavigationCategories, whatsappUrl } from "@/data/site";
import { localizeSupportedHref } from "@/i18n/config";
import type { Locale } from "@/i18n/config";
import type { Dictionary } from "@/i18n/dictionaries";
import type { NavigationItem, PrimaryNavigationItem } from "@/types/site";

type NavigationLabels = Dictionary["layout"]["navigation"];

function localizeItem(item: NavigationItem, locale: Locale): NavigationItem {
  return {
    ...item,
    href: localizeSupportedHref(item.href, locale),
  };
}

export function buildNavigation(locale: Locale, labels: NavigationLabels): PrimaryNavigationItem[] {
  const productCategoryItems = categories
    .filter((category) => productNavigationCategories.includes(category.slug))
    .map((category) => ({
      label: category.title,
      href: `/produk#${category.slug}`,
    }));

  return [
    localizeItem({ label: labels.home, href: "/" }, locale),
    {
      ...localizeItem({ label: labels.about, href: "/tentang-kami" }, locale),
      sections: [
        {
          title: labels.about,
          items: [
            localizeItem({ label: labels.aboutStore, href: "/tentang-kami" }, locale),
            localizeItem({ label: labels.whyChooseUs, href: "/#mengapa-kami" }, locale),
            { label: labels.loyalty, href: "/loyalty-member" },
          ],
        },
      ],
    },
    {
      label: labels.products,
      href: "/produk",
      sections: [
        {
          title: labels.categories,
          items: [
            { label: labels.allProducts, href: "/produk" },
            ...productCategoryItems,
          ],
        },
        {
          title: labels.brands,
          items: [
            { label: labels.allBrands, href: "/merek" },
            ...brandList.map((brand) => ({
              label: brand.name,
              href: "/merek#brand-portfolio-title",
            })),
          ],
        },
      ],
    },
    {
      label: labels.solutions,
      href: "/kalkulator-cat",
      sections: [
        {
          title: labels.solutions,
          items: [
            { label: labels.calculator, href: "/kalkulator-cat" },
            { label: labels.projectGallery, href: "/galeri-proyek" },
          ],
        },
      ],
    },
    {
      label: labels.branchesContact,
      href: "/lokasi-toko",
      sections: [
        {
          title: labels.branchesContact,
          items: [
            { label: labels.branchLocations, href: "/lokasi-toko" },
            { label: labels.contactUs, href: "/kontak" },
            { label: labels.whatsapp, href: whatsappUrl },
          ],
        },
      ],
    },
  ];
}

export function buildFooterNavigation(locale: Locale, labels: NavigationLabels): NavigationItem[] {
  return [
    localizeItem({ label: labels.home, href: "/" }, locale),
    localizeItem({ label: labels.about, href: "/tentang-kami" }, locale),
    { label: labels.products, href: "/produk" },
    { label: labels.calculator, href: "/kalkulator-cat" },
    { label: labels.brands, href: "/merek" },
    { label: labels.loyalty, href: "/loyalty-member" },
    { label: labels.projectGallery, href: "/galeri-proyek" },
    { label: labels.branchLocations, href: "/lokasi-toko" },
    { label: labels.contactUs, href: "/kontak" },
  ];
}
