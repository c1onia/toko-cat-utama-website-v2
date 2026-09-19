import { brandList } from "@/data/brand-list";
import { whatsappUrl } from "@/data/site";
import type { LayoutCopy, Locale } from "@/types/i18n";
import type { NavigationItem, PrimaryNavigationItem } from "@/types/site";

const productCategoryLinks = {
  id: [
    { label: "Semua Produk", href: "/produk" },
    { label: "Cat Dekoratif", href: "/produk#cat-dekoratif" },
    { label: "Cat Protective", href: "/produk#cat-protective" },
    { label: "Marine Paint", href: "/produk#marine-paint" },
    { label: "Floor Coating", href: "/produk#floor-coating" },
    { label: "Waterproofing", href: "/produk#waterproofing" },
    { label: "Semen Instan", href: "/produk#semen-instan" },
    { label: "Perlengkapan Pengecatan", href: "/produk#perlengkapan-pengecatan" },
  ],
  en: [
    { label: "All Products", href: "/produk" },
    { label: "Decorative Paint", href: "/produk#cat-dekoratif" },
    { label: "Protective Paint", href: "/produk#cat-protective" },
    { label: "Marine Paint", href: "/produk#marine-paint" },
    { label: "Floor Coating", href: "/produk#floor-coating" },
    { label: "Waterproofing", href: "/produk#waterproofing" },
    { label: "Instant Cement", href: "/produk#semen-instan" },
    { label: "Painting Tools", href: "/produk#perlengkapan-pengecatan" },
  ],
  zh: [
    { label: "全部产品", href: "/produk" },
    { label: "装饰涂料", href: "/produk#cat-dekoratif" },
    { label: "防护涂料", href: "/produk#cat-protective" },
    { label: "船舶涂料", href: "/produk#marine-paint" },
    { label: "地坪涂料", href: "/produk#floor-coating" },
    { label: "防水材料", href: "/produk#waterproofing" },
    { label: "即用水泥", href: "/produk#semen-instan" },
    { label: "涂装工具", href: "/produk#perlengkapan-pengecatan" },
  ],
} satisfies Record<Locale, NavigationItem[]>;

const brandLinks = brandList.map((brand) => ({
  label: brand.name,
  href: "/merek#brand-portfolio-title",
}));

function createNavigation(locale: Locale): PrimaryNavigationItem[] {
  const homeHref = locale === "id" ? "/" : `/${locale}`;
  const whyChooseUsHref = locale === "id" ? "/#mengapa-kami" : `/${locale}#mengapa-kami`;

  const labels = {
    id: {
      home: "Beranda",
      about: "Tentang Kami",
      aboutSection: "Tentang Kami",
      aboutCompany: "Tentang Toko Cat Utama",
      whyChooseUs: "Mengapa Memilih Kami",
      loyalty: "Loyalty",
      products: "Produk",
      category: "Kategori",
      brand: "Merek",
      allBrands: "Semua Merek",
      solutions: "Solusi",
      calculator: "Kalkulator Cat",
      gallery: "Galeri Proyek",
      branchesContact: "Cabang & Kontak",
      storeLocations: "Lokasi Cabang",
      contactUs: "Hubungi Kami",
      whatsapp: "WhatsApp",
    },
    en: {
      home: "Home",
      about: "About Us",
      aboutSection: "About Us",
      aboutCompany: "About Toko Cat Utama",
      whyChooseUs: "Why Choose Us",
      loyalty: "Loyalty",
      products: "Products",
      category: "Categories",
      brand: "Brands",
      allBrands: "All Brands",
      solutions: "Solutions",
      calculator: "Paint Calculator",
      gallery: "Project Gallery",
      branchesContact: "Branches & Contact",
      storeLocations: "Branch Locations",
      contactUs: "Contact Us",
      whatsapp: "WhatsApp",
    },
    zh: {
      home: "首页",
      about: "关于我们",
      aboutSection: "关于我们",
      aboutCompany: "关于 Toko Cat Utama",
      whyChooseUs: "为什么选择我们",
      loyalty: "会员计划",
      products: "产品",
      category: "产品分类",
      brand: "品牌",
      allBrands: "全部品牌",
      solutions: "解决方案",
      calculator: "涂料计算器",
      gallery: "项目图库",
      branchesContact: "门店与联系",
      storeLocations: "门店位置",
      contactUs: "联系我们",
      whatsapp: "WhatsApp",
    },
  }[locale];

  return [
    { label: labels.home, href: homeHref },
    {
      label: labels.about,
      href: "/tentang-kami",
      sections: [
        {
          title: labels.aboutSection,
          items: [
            { label: labels.aboutCompany, href: "/tentang-kami" },
            { label: labels.whyChooseUs, href: whyChooseUsHref },
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
          title: labels.category,
          items: productCategoryLinks[locale],
        },
        {
          title: labels.brand,
          items: [{ label: labels.allBrands, href: "/merek" }, ...brandLinks],
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
            { label: labels.gallery, href: "/galeri-proyek" },
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
            { label: labels.storeLocations, href: "/lokasi-toko" },
            { label: labels.contactUs, href: "/kontak" },
            { label: labels.whatsapp, href: whatsappUrl },
          ],
        },
      ],
    },
  ];
}

export function getLocaleFromPathname(pathname: string): Locale {
  if (pathname === "/en" || pathname.startsWith("/en/")) return "en";
  if (pathname === "/zh" || pathname.startsWith("/zh/")) return "zh";
  return "id";
}

export const layoutCopy: Record<Locale, LayoutCopy> = {
  id: {
    logoAriaLabel: "Toko Cat Utama - Beranda",
    desktopNavAriaLabel: "Navigasi utama",
    mobileNavAriaLabel: "Navigasi mobile",
    openMenuLabel: "Buka menu",
    closeMenuLabel: "Tutup menu",
    contactCta: "Hubungi Kami",
    navigation: createNavigation("id"),
    search: {
      srLabel: "Cari produk, merek, kategori, atau lokasi toko",
      placeholder: "Cari...",
      clearLabel: "Hapus pencarian",
      resultsLabel: "Hasil pencarian",
      emptyState: "Tidak ada hasil yang sesuai.",
      typeLabels: {
        Kategori: "Kategori",
        Lokasi: "Lokasi",
        Halaman: "Halaman",
      },
    },
    footer: {
      tagline: "Tercepat. Terlengkap. Terpercaya.",
      quickMenuTitle: "Menu Cepat",
      quickMenuAriaLabel: "Navigasi footer",
      contactTitle: "Kontak",
      whatsappLabel: "WhatsApp",
      emailLabel: "Email",
      headOfficeLabel: "Kantor Pusat",
      instagramLabel: "Instagram @utamapaint",
      copyright: "Toko Cat Utama. Seluruh hak cipta dilindungi.",
      navigation: [
        { label: "Beranda", href: "/" },
        { label: "Tentang Kami", href: "/tentang-kami" },
        { label: "Produk", href: "/produk" },
        { label: "Kalkulator Cat", href: "/kalkulator-cat" },
        { label: "Merek", href: "/merek" },
        { label: "Loyalty Member", href: "/loyalty-member" },
        { label: "Galeri Proyek", href: "/galeri-proyek" },
        { label: "Lokasi Toko", href: "/lokasi-toko" },
        { label: "Kontak", href: "/kontak" },
      ],
    },
  },
  en: {
    logoAriaLabel: "Toko Cat Utama - Home",
    desktopNavAriaLabel: "Main navigation",
    mobileNavAriaLabel: "Mobile navigation",
    openMenuLabel: "Open menu",
    closeMenuLabel: "Close menu",
    contactCta: "Contact Us",
    navigation: createNavigation("en"),
    search: {
      srLabel: "Search products, brands, categories, or store locations",
      placeholder: "Search...",
      clearLabel: "Clear search",
      resultsLabel: "Search results",
      emptyState: "No matching results.",
      typeLabels: {
        Kategori: "Category",
        Lokasi: "Location",
        Halaman: "Page",
      },
    },
    footer: {
      tagline: "Fastest. Most complete. Most trusted.",
      quickMenuTitle: "Quick Menu",
      quickMenuAriaLabel: "Footer navigation",
      contactTitle: "Contact",
      whatsappLabel: "WhatsApp",
      emailLabel: "Email",
      headOfficeLabel: "Head Office",
      instagramLabel: "Instagram @utamapaint",
      copyright: "Toko Cat Utama. All rights reserved.",
      navigation: [
        { label: "Home", href: "/en" },
        { label: "About Us", href: "/tentang-kami" },
        { label: "Products", href: "/produk" },
        { label: "Paint Calculator", href: "/kalkulator-cat" },
        { label: "Brands", href: "/merek" },
        { label: "Loyalty Member", href: "/loyalty-member" },
        { label: "Project Gallery", href: "/galeri-proyek" },
        { label: "Store Locations", href: "/lokasi-toko" },
        { label: "Contact", href: "/kontak" },
      ],
    },
  },
  zh: {
    logoAriaLabel: "Toko Cat Utama - 首页",
    desktopNavAriaLabel: "主导航",
    mobileNavAriaLabel: "移动导航",
    openMenuLabel: "打开菜单",
    closeMenuLabel: "关闭菜单",
    contactCta: "联系我们",
    navigation: createNavigation("zh"),
    search: {
      srLabel: "搜索产品、品牌、分类或门店位置",
      placeholder: "搜索...",
      clearLabel: "清除搜索",
      resultsLabel: "搜索结果",
      emptyState: "没有匹配的结果。",
      typeLabels: {
        Kategori: "分类",
        Lokasi: "位置",
        Halaman: "页面",
      },
    },
    footer: {
      tagline: "最快。最齐全。最值得信赖。",
      quickMenuTitle: "快捷菜单",
      quickMenuAriaLabel: "页脚导航",
      contactTitle: "联系方式",
      whatsappLabel: "WhatsApp",
      emailLabel: "电子邮件",
      headOfficeLabel: "总部",
      instagramLabel: "Instagram @utamapaint",
      copyright: "Toko Cat Utama. 版权所有。",
      navigation: [
        { label: "首页", href: "/zh" },
        { label: "关于我们", href: "/tentang-kami" },
        { label: "产品", href: "/produk" },
        { label: "涂料计算器", href: "/kalkulator-cat" },
        { label: "品牌", href: "/merek" },
        { label: "会员计划", href: "/loyalty-member" },
        { label: "项目图库", href: "/galeri-proyek" },
        { label: "门店位置", href: "/lokasi-toko" },
        { label: "联系", href: "/kontak" },
      ],
    },
  },
};
