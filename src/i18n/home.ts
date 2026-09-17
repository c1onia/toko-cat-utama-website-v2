import {
  BadgeCheck,
  PackageCheck,
  ShieldCheck,
  Sparkles,
  Truck,
} from "lucide-react";
import { categories, features } from "@/data/site";
import type { HomeCopy, Locale } from "@/types/i18n";

const translatedCategories = {
  id: categories,
  en: [
    {
      ...categories[0],
      title: "Decorative Paint",
      imageAlt: "Roller applying light blue decorative paint",
    },
    {
      ...categories[1],
      title: "Protective Paint",
      imageAlt: "Industrial tanks and fencing with protective coating",
    },
    {
      ...categories[2],
      title: "Marine Paint",
      imageAlt: "Sea vessel hull finished with marine paint",
    },
    {
      ...categories[3],
      title: "Floor Coating",
      imageAlt: "Roller applying white floor coating",
    },
    {
      ...categories[4],
      title: "Automotive Paint",
      imageAlt: "Blue car painted with a spray gun",
    },
    {
      ...categories[5],
      title: "Waterproofing",
      imageAlt: "Water droplets on a waterproofed surface",
    },
    {
      ...categories[6],
      title: "Instant Cement",
      imageAlt: "Stacked instant cement packaging",
    },
    {
      ...categories[7],
      title: "Painting Tools",
      imageAlt: "Rollers, brushes, bucket, and painting tools",
    },
  ],
  zh: [
    {
      ...categories[0],
      title: "装饰涂料",
      imageAlt: "滚筒正在涂刷浅蓝色装饰涂料",
    },
    {
      ...categories[1],
      title: "防护涂料",
      imageAlt: "工业储罐与围栏使用防护涂层",
    },
    {
      ...categories[2],
      title: "船舶涂料",
      imageAlt: "船体使用船舶涂料",
    },
    {
      ...categories[3],
      title: "地坪涂料",
      imageAlt: "滚筒正在涂刷白色地坪涂层",
    },
    {
      ...categories[4],
      title: "汽车涂料",
      imageAlt: "使用喷枪为蓝色汽车喷漆",
    },
    {
      ...categories[5],
      title: "防水材料",
      imageAlt: "防水表面上的水滴",
    },
    {
      ...categories[6],
      title: "速干水泥",
      imageAlt: "堆叠的速干水泥包装",
    },
    {
      ...categories[7],
      title: "涂装工具",
      imageAlt: "滚筒、刷子、桶和涂装工具",
    },
  ],
};

const translatedFeatures = {
  id: features,
  en: [
    { title: "Complete Products", icon: PackageCheck },
    { title: "Genuine Products", icon: BadgeCheck },
    { title: "Fast Delivery", icon: Truck },
    { title: "Product Consultation", icon: Sparkles },
    { title: "Trusted Since 1955", icon: ShieldCheck },
  ],
  zh: [
    { title: "产品齐全", icon: PackageCheck },
    { title: "正品保障", icon: BadgeCheck },
    { title: "快速配送", icon: Truck },
    { title: "产品咨询", icon: Sparkles },
    { title: "始于1955年的信赖", icon: ShieldCheck },
  ],
};

export const homeCopy: Record<Locale, HomeCopy> = {
  id: {
    hero: {
      imageAlt: "Rumah modern dengan fasad berwarna kuning, biru, dan merah sedang dicat",
      eyebrow: "Tercepat. Terlengkap. Terpercaya.",
      title: "Kami bukan sekadar menjual cat. Kami memberikan solusi pengecatan.",
      lead:
        "Membantu pelanggan menemukan solusi pengecatan yang tepat melalui rekomendasi yang jujur, produk yang lengkap, serta pelayanan yang profesional.",
      primaryCta: "Diskusikan Kebutuhan Anda",
      secondaryCta: "Cari Toko Terdekat",
    },
    trust: {
      eyebrow: "Mengapa Toko Cat Utama",
      title: "Mengapa Pelanggan Memilih Kami",
      features: translatedFeatures.id,
    },
    categories: {
      eyebrow: "Produk Lengkap",
      title: "Kategori Produk",
      categories: translatedCategories.id,
    },
    location: {
      eyebrowSuffix: "Cabang",
      title: "Lokasi Toko",
      branchCountLabel: "cabang di Jawa Tengah",
      cta: "Cari Cabang",
    },
    contact: {
      eyebrow: "Kontak",
      title: "Hubungi Kami",
      cta: "Hubungi Kami",
      whatsappLabel: "WhatsApp",
      emailLabel: "Email",
      headOfficeLabel: "Kantor Pusat",
    },
  },
  en: {
    hero: {
      imageAlt: "Modern house facade in yellow, blue, and red being painted",
      eyebrow: "Fastest. Most complete. Most trusted.",
      title: "We do more than sell paint. We provide painting solutions.",
      lead:
        "Helping customers find the right painting solutions through honest recommendations, complete products, and professional service.",
      primaryCta: "Discuss Your Needs",
      secondaryCta: "Find the Nearest Store",
    },
    trust: {
      eyebrow: "Why Toko Cat Utama",
      title: "Why Customers Choose Us",
      features: translatedFeatures.en,
    },
    categories: {
      eyebrow: "Complete Products",
      title: "Product Categories",
      categories: translatedCategories.en,
    },
    location: {
      eyebrowSuffix: "Branches",
      title: "Store Locations",
      branchCountLabel: "branches across Central Java",
      cta: "Find a Branch",
    },
    contact: {
      eyebrow: "Contact",
      title: "Contact Us",
      cta: "Contact Us",
      whatsappLabel: "WhatsApp",
      emailLabel: "Email",
      headOfficeLabel: "Head Office",
    },
  },
  zh: {
    hero: {
      imageAlt: "正在粉刷的现代住宅外墙，使用黄色、蓝色和红色",
      eyebrow: "更快速。更齐全。更可信赖。",
      title: "我们不只是销售涂料，也提供专业涂装解决方案。",
      lead:
        "通过诚实的建议、齐全的产品和专业的服务，帮助客户找到合适的涂装解决方案。",
      primaryCta: "咨询您的需求",
      secondaryCta: "查找附近门店",
    },
    trust: {
      eyebrow: "为什么选择 Toko Cat Utama",
      title: "客户选择我们的原因",
      features: translatedFeatures.zh,
    },
    categories: {
      eyebrow: "产品齐全",
      title: "产品分类",
      categories: translatedCategories.zh,
    },
    location: {
      eyebrowSuffix: "家分店",
      title: "门店位置",
      branchCountLabel: "家分店遍布中爪哇",
      cta: "查找分店",
    },
    contact: {
      eyebrow: "联系方式",
      title: "联系我们",
      cta: "联系我们",
      whatsappLabel: "WhatsApp",
      emailLabel: "电子邮箱",
      headOfficeLabel: "总部",
    },
  },
};
