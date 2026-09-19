import { brandTrust, brandsCta, brandsHero, brandsIntroduction } from "@/data/brands";
import type { Locale } from "@/types/i18n";

export type BrandsCopy = {
  hero: typeof brandsHero;
  introduction: typeof brandsIntroduction;
  brandGridAriaLabel: string;
  trust: typeof brandTrust;
  cta: typeof brandsCta;
};

export const brandsCopy: Record<Locale, BrandsCopy> = {
  id: {
    hero: brandsHero,
    introduction: brandsIntroduction,
    brandGridAriaLabel: "Daftar merek tersedia",
    trust: brandTrust,
    cta: brandsCta,
  },
  en: {
    hero: {
      title: "Trusted Brands",
      description:
        "We provide a wide range of trusted paint and building material brands for homes, projects, and industrial needs.",
    },
    introduction: {
      title: "Brand Choices for Every Need",
      description:
        "We work with trusted paint and building material manufacturers to provide complete, quality product choices that match customer needs.",
    },
    brandGridAriaLabel: "Available brand list",
    trust: {
      title: "Why Choose Products from Toko Cat Utama?",
      items: brandTrust.items.map((item) => {
        const copy = {
          "Produk Asli": {
            title: "Authentic Products",
            description: "All products come from official distributors and principals.",
          },
          "Pilihan Lengkap": {
            title: "Complete Selection",
            description: "A wide range of brands for homes, projects, and industrial needs.",
          },
          "Konsultasi Produk": {
            title: "Product Consultation",
            description: "Our team helps choose products that fit your needs.",
          },
        }[item.title];

        return {
          ...item,
          title: copy?.title ?? item.title.replace("Cabang", "Branches"),
          description: copy?.description ?? "Easy to find across multiple cities in Central Java.",
        };
      }),
    },
    cta: {
      ...brandsCta,
      title: "Need Help Choosing the Right Brand?",
      description:
        "Our team is ready to help choose the brand and product system that best fits your needs.",
      primaryLabel: "Discuss Your Needs",
      secondaryLabel: "Find the Nearest Store",
    },
  },
  zh: {
    hero: {
      title: "值得信赖的品牌",
      description: "我们提供多种可靠的涂料与建材品牌，满足住宅、工程和工业需求。",
    },
    introduction: {
      title: "满足不同需求的品牌选择",
      description:
        "我们与值得信赖的涂料和建材制造商合作，为客户提供完整、优质且适合需求的产品选择。",
    },
    brandGridAriaLabel: "可选品牌列表",
    trust: {
      title: "为什么选择 Toko Cat Utama 的产品？",
      items: brandTrust.items.map((item) => {
        const copy = {
          "Produk Asli": {
            title: "正品保障",
            description: "所有产品均来自官方经销商和品牌方。",
          },
          "Pilihan Lengkap": {
            title: "选择完整",
            description: "多种品牌可满足住宅、工程和工业需求。",
          },
          "Konsultasi Produk": {
            title: "产品咨询",
            description: "我们的团队协助您选择符合需求的产品。",
          },
        }[item.title];

        return {
          ...item,
          title: copy?.title ?? item.title.replace("Cabang", "家分店"),
          description: copy?.description ?? "在中爪哇多个城市都能方便找到我们。",
        };
      }),
    },
    cta: {
      ...brandsCta,
      title: "需要帮助选择合适品牌？",
      description: "我们的团队可协助选择最符合您需求的品牌与产品系统。",
      primaryLabel: "咨询您的需求",
      secondaryLabel: "查找最近门店",
    },
  },
};
