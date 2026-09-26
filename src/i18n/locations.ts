import { branches } from "@/data/branches";
import { openingHours } from "@/data/opening-hours";
import type { Locale } from "@/types/i18n";

export type LocationsCopy = {
  hero: {
    eyebrow: string;
    title: string;
    description: string;
    ctaLabel: string;
    imageAlt: string;
  };
  search: {
    eyebrow: string;
    title: string;
    description: string;
    searchLabel: string;
    searchPlaceholder: string;
    cityFilterLabel: string;
    allCitiesLabel: string;
    branchCountLabel: (count: number) => string;
    emptyTitle: string;
    emptyDescription: string;
    card: {
      imageAltPrefix: string;
      missingImage: string;
      contactLabel: string;
      openingHoursTitle: string;
      openingHoursAriaLabel: string;
      openingHoursItems: ReadonlyArray<{ day: string; time: string }>;
      tintingTitle: string;
    };
  };
};

function localizedOpeningHours(locale: Locale) {
  if (locale === "id") {
    return openingHours;
  }

  const translations = {
    en: ["Monday – Friday", "Saturday", "Sunday / Public Holiday"],
    zh: ["周一至周五", "周六", "周日 / 公共假日"],
  }[locale];

  return openingHours.map((item, index) => ({
    ...item,
    day: translations[index] ?? item.day,
  }));
}

export const locationsCopy: Record<Locale, LocationsCopy> = {
  id: {
    hero: {
      eyebrow: `${branches.length} Cabang di Jawa Tengah`,
      title: "Temukan Toko Cat Utama Terdekat",
      description:
        "Cari cabang berdasarkan nama toko atau kota, kemudian hubungi cabang yang paling sesuai dengan kebutuhan Anda.",
      ctaLabel: "Cari Cabang",
      imageAlt: "Tampak depan cabang Toko Cat Utama Setiabudi",
    },
    search: {
      eyebrow: "Cari Cabang",
      title: "Lokasi Toko Cat Utama",
      description:
        "Gunakan nama cabang, kota, atau alamat untuk menemukan toko yang paling dekat dengan Anda.",
      searchLabel: "Cari cabang",
      searchPlaceholder: "Cari nama toko, kota, alamat, atau merek mesin tinting",
      cityFilterLabel: "Filter kota",
      allCitiesLabel: "Semua Kota",
      branchCountLabel: (count) => `${count} cabang`,
      emptyTitle: "Cabang tidak ditemukan.",
      emptyDescription: "Coba gunakan nama kota atau nama cabang yang berbeda.",
      card: {
        imageAltPrefix: "Tampak depan cabang Toko Cat Utama",
        missingImage: "Foto cabang belum tersedia",
        contactLabel: "Hubungi Cabang",
        openingHoursTitle: "Jam Operasional",
        openingHoursAriaLabel: "Jam operasional toko",
        openingHoursItems: openingHours,
        tintingTitle: "Sistem Tinting Tersedia",
      },
    },
  },
  en: {
    hero: {
      eyebrow: `${branches.length} Branches in Central Java`,
      title: "Find the Nearest Toko Cat Utama Store",
      description:
        "Search by store name or city, then contact the branch that best fits your needs.",
      ctaLabel: "Find a Branch",
      imageAlt: "Front view of Toko Cat Utama Setiabudi branch",
    },
    search: {
      eyebrow: "Find a Branch",
      title: "Toko Cat Utama Store Locations",
      description:
        "Use a branch name, city, address, or tinting machine brand to find the store closest to you.",
      searchLabel: "Search branch",
      searchPlaceholder: "Search store name, city, address, or tinting machine brand",
      cityFilterLabel: "Filter by city",
      allCitiesLabel: "All Cities",
      branchCountLabel: (count) => `${count} ${count === 1 ? "branch" : "branches"}`,
      emptyTitle: "No branch found.",
      emptyDescription: "Try another city name or branch name.",
      card: {
        imageAltPrefix: "Front view of Toko Cat Utama branch",
        missingImage: "Branch photo is not available yet",
        contactLabel: "Contact Branch",
        openingHoursTitle: "Opening Hours",
        openingHoursAriaLabel: "Store opening hours",
        openingHoursItems: localizedOpeningHours("en"),
        tintingTitle: "Available Tinting Systems",
      },
    },
  },
  zh: {
    hero: {
      eyebrow: `中爪哇 ${branches.length} 家分店`,
      title: "查找最近的 Toko Cat Utama 门店",
      description: "可按门店名称或城市搜索，并联系最符合您需求的分店。",
      ctaLabel: "查找分店",
      imageAlt: "Toko Cat Utama Setiabudi 分店正面",
    },
    search: {
      eyebrow: "查找分店",
      title: "Toko Cat Utama 门店位置",
      description: "输入分店名称、城市、地址或调色机品牌，查找离您最近的门店。",
      searchLabel: "搜索分店",
      searchPlaceholder: "搜索门店名称、城市、地址或调色机品牌",
      cityFilterLabel: "按城市筛选",
      allCitiesLabel: "所有城市",
      branchCountLabel: (count) => `${count} 家分店`,
      emptyTitle: "未找到分店。",
      emptyDescription: "请尝试其他城市名称或分店名称。",
      card: {
        imageAltPrefix: "Toko Cat Utama 分店正面",
        missingImage: "分店照片暂未提供",
        contactLabel: "联系分店",
        openingHoursTitle: "营业时间",
        openingHoursAriaLabel: "门店营业时间",
        openingHoursItems: localizedOpeningHours("zh"),
        tintingTitle: "可用调色系统",
      },
    },
  },
};
