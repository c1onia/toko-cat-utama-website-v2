import {
  BadgeCheck,
  PackageCheck,
  ShieldCheck,
  Sparkles,
  Truck,
} from "lucide-react";
import { branches } from "@/data/branches";
import { categories as defaultCategories } from "@/data/site";
import type { Locale } from "@/i18n/config";

const sharedImages = {
  hero: "/brand/hero-house-v2.png",
  aboutHero: "/images/about/setiabudi.jpeg",
  siliwangi: "/images/about/siliwangi.jpeg",
  marketingTeam: "/images/about/marketing-team.jpeg",
  csr: "/images/about/CSR.jpeg",
};

export const dictionaries = {
  id: {
    metadata: {
      homeTitle: "Toko Cat Utama | Tercepat. Terlengkap. Terpercaya.",
      homeDescription:
        "Membantu pelanggan menemukan solusi pengecatan yang tepat melalui rekomendasi yang jujur, produk yang lengkap, serta pelayanan yang profesional.",
      aboutTitle: "Tentang Kami | Toko Cat Utama",
      aboutDescription:
        "Lebih dari 70 tahun memberikan solusi pengecatan untuk rumah, proyek, dan industri di Jawa Tengah.",
    },
    layout: {
      skipLink: "Lewati ke konten utama",
      logoLabel: "Toko Cat Utama - Beranda",
      primaryNavigationLabel: "Navigasi utama",
      mobileNavigationLabel: "Navigasi mobile",
      openMenu: "Buka menu",
      closeMenu: "Tutup menu",
      contactCta: "Hubungi Kami",
      tagline: "Tercepat. Terlengkap. Terpercaya.",
      quickMenu: "Menu Cepat",
      contactHeading: "Kontak",
      rights: "Seluruh hak cipta dilindungi.",
      languageLabel: "Pilih bahasa",
      search: {
        label: "Cari produk, merek, kategori, atau lokasi toko",
        placeholder: "Cari...",
      },
      navigation: {
        home: "Beranda",
        about: "Tentang Kami",
        aboutStore: "Tentang Toko Cat Utama",
        whyChooseUs: "Mengapa Memilih Kami",
        loyalty: "Loyalty",
        products: "Produk",
        categories: "Kategori",
        allProducts: "Semua Produk",
        brands: "Merek",
        allBrands: "Semua Merek",
        solutions: "Solusi",
        calculator: "Kalkulator Cat",
        projectGallery: "Galeri Proyek",
        branchesContact: "Cabang & Kontak",
        branchLocations: "Lokasi Cabang",
        contactUs: "Hubungi Kami",
        whatsapp: "WhatsApp",
      },
    },
    home: {
      hero: {
        eyebrow: "Tercepat. Terlengkap. Terpercaya.",
        title: "Kami bukan sekadar menjual cat. Kami memberikan solusi pengecatan.",
        lead:
          "Membantu pelanggan menemukan solusi pengecatan yang tepat melalui rekomendasi yang jujur, produk yang lengkap, serta pelayanan yang profesional.",
        primaryLabel: "Diskusikan Kebutuhan Anda",
        secondaryLabel: "Cari Toko Terdekat",
        image: sharedImages.hero,
        imageAlt: "Rumah modern dengan fasad berwarna kuning, biru, dan merah sedang dicat",
      },
      trust: {
        eyebrow: "Mengapa Toko Cat Utama",
        title: "Mengapa Pelanggan Memilih Kami",
        features: [
          { title: "Produk Lengkap", icon: PackageCheck },
          { title: "Produk Asli", icon: BadgeCheck },
          { title: "Pengiriman Cepat", icon: Truck },
          { title: "Konsultasi Produk", icon: Sparkles },
          { title: "Dipercaya Sejak 1955", icon: ShieldCheck },
        ],
      },
      categories: {
        eyebrow: "Produk Lengkap",
        title: "Kategori Produk",
        items: defaultCategories,
      },
      location: {
        eyebrow: `${branches.length} Cabang`,
        title: "Lokasi Toko",
        countLabel: "cabang di Jawa Tengah",
        ctaLabel: "Cari Cabang",
      },
      contact: {
        eyebrow: "Kontak",
        title: "Hubungi Kami",
        ctaLabel: "Hubungi Kami",
        whatsappLabel: "WhatsApp",
        emailLabel: "Email",
        officeLabel: "Kantor Pusat",
      },
    },
    about: {
      hero: {
        title: "Tentang Kami",
        description:
          "Lebih dari 70 tahun memberikan solusi pengecatan untuk rumah, proyek, dan industri di Jawa Tengah.",
        image: sharedImages.aboutHero,
        imageAlt: "Fasad Toko Cat Utama cabang Setiabudi dengan berbagai merek cat",
      },
      introduction: {
        eyebrow: "Sejak 1955",
        title: "Tumbuh Bersama Kebutuhan Pelanggan",
        paragraphs: [
          "PT. Widautama telah dipercaya oleh para kontraktor, pemilik rumah, maupun toko cat dan bangunan lainnya di Semarang dan sekitarnya sejak tahun 1955.",
          "Didirikan oleh Alm. Bapak Widautama dengan nama PD UTAMA sebagai salah satu toko cat pertama di Semarang.",
          "Seiring perkembangan perusahaan, Toko Cat Utama memperluas solusi tidak hanya untuk pengecatan dekoratif, tetapi juga waterproofing, protective coating, epoxy, marine coating, floor coating, dan berbagai kebutuhan perlindungan bangunan.",
        ],
        image: sharedImages.siliwangi,
        imageAlt: "Toko Cat Utama cabang Siliwangi di Semarang",
      },
      history: {
        eyebrow: "Perjalanan Kami",
        title: "Sejarah Toko Cat Utama",
        milestones: [
          {
            year: "1955",
            description:
              "Didirikan oleh Alm. Bapak Widautama di Jalan Mataram, yang sekarang dikenal sebagai Jalan MT Haryono, Semarang.",
          },
          {
            year: "1995",
            description:
              "Cabang kedua dibuka di Jalan Setiabudi 82 Semarang oleh Alm. Bapak Agus Kurniawan dan Ibu Lilik Winarni dengan nama Toko Cat Utama Putra.",
          },
          {
            year: "2007",
            description:
              "Cabang ketiga dibuka di Jalan Jenderal Sudirman, Siliwangi, dengan nama Utama Paint Center.",
          },
          {
            year: "2026",
            description: `Toko Cat Utama telah berkembang menjadi ${branches.length} cabang yang tersebar di Jawa Tengah.`,
          },
        ],
      },
      purpose: {
        eyebrow: "Arah Perusahaan",
        title: "Visi, Misi, dan Value Utama",
        vision: {
          title: "Visi",
          description:
            "Menjadi perusahaan retail cat terpercaya yang merupakan pilihan Utama di Indonesia, didukung oleh SDM unggul dan tetap memperhatikan kepedulian sosial.",
        },
        mission: {
          title: "Misi",
          description:
            "Membangun keandalan, kredibilitas, dan hubungan yang baik dengan supplier dan customer melalui pengembangan SDM berkelanjutan serta memiliki dampak positif pada masyarakat sekitar.",
        },
        valuesTitle: "Value Utama",
        valueStatement:
          "Mari berkomitmen bersama Utama untuk melakukan kejujuran demi mencapai pertumbuhan, disertai rasa syukur dengan semangat kekeluargaan.",
        values: ["berkomitmen", "kejujuran", "pertumbuhan", "syukur", "kekeluargaan"],
      },
      team: {
        eyebrow: "Orang-Orang Kami",
        title: "Tim Toko Cat Utama",
        description:
          "Orang-orang di balik Toko Cat Utama yang membantu pelanggan menemukan solusi pengecatan sesuai kebutuhan.",
        image: sharedImages.marketingTeam,
        imageAlt: "Tim Toko Cat Utama dalam kegiatan perusahaan",
      },
      stores: {
        eyebrow: "Di Dalam Toko Kami",
        title: "Pengalaman Berbelanja di Toko Cat Utama",
        description:
          "Pelanggan dapat melihat pilihan produk, berkonsultasi, dan mendapatkan rekomendasi sesuai kebutuhan mereka di cabang Toko Cat Utama.",
      },
      community: {
        eyebrow: "Kepedulian Sosial",
        title: "Peduli dan Berbagi",
        description:
          "Toko Cat Utama berkomitmen memberikan dampak positif kepada masyarakat sekitar melalui berbagai kegiatan sosial dan program kepedulian.",
        image: sharedImages.csr,
        imageAlt: "Kegiatan CSR Toko Cat Utama bersama Dana Paint untuk pengecatan rumah ibadah",
      },
      trustSummary: {
        eyebrow: "Toko Cat Utama",
        title: "Kepercayaan yang Terus Bertumbuh",
        facts: [
          "Berdiri sejak 1955",
          `${branches.length} cabang`,
          "Produk lengkap",
          "Solusi untuk rumah, proyek, dan industri",
          "Pelayanan yang membantu dan terpercaya",
        ],
      },
      cta: {
        title: "Siap Membantu Kebutuhan Pengecatan Anda",
        primaryLabel: "Hubungi Kami",
        secondaryLabel: "Cari Toko Terdekat",
      },
    },
  },
  en: {
    metadata: {
      homeTitle: "Toko Cat Utama | Fast. Complete. Trusted.",
      homeDescription:
        "Helping customers find the right paint solution through honest recommendations, complete products, and professional service.",
      aboutTitle: "About Us | Toko Cat Utama",
      aboutDescription:
        "More than 70 years of paint solutions for homes, projects, and industries in Central Java.",
    },
    layout: {
      skipLink: "Skip to main content",
      logoLabel: "Toko Cat Utama - Home",
      primaryNavigationLabel: "Primary navigation",
      mobileNavigationLabel: "Mobile navigation",
      openMenu: "Open menu",
      closeMenu: "Close menu",
      contactCta: "Contact Us",
      tagline: "Fast. Complete. Trusted.",
      quickMenu: "Quick Menu",
      contactHeading: "Contact",
      rights: "All rights reserved.",
      languageLabel: "Choose language",
      search: {
        label: "Search products, brands, categories, or store locations",
        placeholder: "Search...",
      },
      navigation: {
        home: "Home",
        about: "About Us",
        aboutStore: "About Toko Cat Utama",
        whyChooseUs: "Why Choose Us",
        loyalty: "Loyalty",
        products: "Products",
        categories: "Categories",
        allProducts: "All Products",
        brands: "Brands",
        allBrands: "All Brands",
        solutions: "Solutions",
        calculator: "Paint Calculator",
        projectGallery: "Project Gallery",
        branchesContact: "Branches & Contact",
        branchLocations: "Branch Locations",
        contactUs: "Contact Us",
        whatsapp: "WhatsApp",
      },
    },
    home: {
      hero: {
        eyebrow: "Fast. Complete. Trusted.",
        title: "We do more than sell paint. We provide painting solutions.",
        lead:
          "Helping customers find the right painting solution through honest recommendations, complete product choices, and professional service.",
        primaryLabel: "Discuss Your Needs",
        secondaryLabel: "Find the Nearest Store",
        image: sharedImages.hero,
        imageAlt: "Modern house with yellow, blue, and red facade being painted",
      },
      trust: {
        eyebrow: "Why Toko Cat Utama",
        title: "Why Customers Choose Us",
        features: [
          { title: "Complete Products", icon: PackageCheck },
          { title: "Authentic Products", icon: BadgeCheck },
          { title: "Fast Delivery", icon: Truck },
          { title: "Product Consultation", icon: Sparkles },
          { title: "Trusted Since 1955", icon: ShieldCheck },
        ],
      },
      categories: {
        eyebrow: "Complete Product Range",
        title: "Product Categories",
        items: defaultCategories.map((category) => ({
          ...category,
          title:
            {
              "cat-dekoratif": "Decorative Paint",
              "cat-protective": "Protective Paint",
              "marine-paint": "Marine Paint",
              "floor-coating": "Floor Coating",
              "automotive-paint": "Automotive Paint",
              waterproofing: "Waterproofing",
              "semen-instan": "Instant Cement",
              "perlengkapan-pengecatan": "Painting Tools",
            }[category.slug] ?? category.title,
        })),
      },
      location: {
        eyebrow: `${branches.length} Branches`,
        title: "Store Locations",
        countLabel: "branches across Central Java",
        ctaLabel: "Find a Branch",
      },
      contact: {
        eyebrow: "Contact",
        title: "Contact Us",
        ctaLabel: "Contact Us",
        whatsappLabel: "WhatsApp",
        emailLabel: "Email",
        officeLabel: "Head Office",
      },
    },
    about: {
      hero: {
        title: "About Us",
        description:
          "More than 70 years of paint solutions for homes, projects, and industries in Central Java.",
        image: sharedImages.aboutHero,
        imageAlt: "Toko Cat Utama Setiabudi branch facade with various paint brands",
      },
      introduction: {
        eyebrow: "Since 1955",
        title: "Growing with Customer Needs",
        paragraphs: [
          "PT. Widautama has been trusted by contractors, homeowners, paint stores, and building material retailers in Semarang and surrounding areas since 1955.",
          "Founded by the late Mr. Widautama under the name PD UTAMA, it became one of the first paint stores in Semarang.",
          "As the company has grown, Toko Cat Utama has expanded its solutions beyond decorative paint to include waterproofing, protective coating, epoxy, marine coating, floor coating, and other building protection needs.",
        ],
        image: sharedImages.siliwangi,
        imageAlt: "Toko Cat Utama Siliwangi branch in Semarang",
      },
      history: {
        eyebrow: "Our Journey",
        title: "The History of Toko Cat Utama",
        milestones: [
          {
            year: "1955",
            description:
              "Founded by the late Mr. Widautama on Jalan Mataram, now known as Jalan MT Haryono, Semarang.",
          },
          {
            year: "1995",
            description:
              "The second branch opened at Jalan Setiabudi 82 Semarang by the late Mr. Agus Kurniawan and Mrs. Lilik Winarni under the name Toko Cat Utama Putra.",
          },
          {
            year: "2007",
            description:
              "The third branch opened on Jalan Jenderal Sudirman, Siliwangi, under the name Utama Paint Center.",
          },
          {
            year: "2026",
            description: `Toko Cat Utama has grown to ${branches.length} branches across Central Java.`,
          },
        ],
      },
      purpose: {
        eyebrow: "Company Direction",
        title: "Vision, Mission, and Utama Values",
        vision: {
          title: "Vision",
          description:
            "To become a trusted paint retail company and the Utama choice in Indonesia, supported by excellent human resources while continuing to care for social responsibility.",
        },
        mission: {
          title: "Mission",
          description:
            "To build reliability, credibility, and strong relationships with suppliers and customers through continuous human resource development while creating a positive impact on surrounding communities.",
        },
        valuesTitle: "Utama Values",
        valueStatement:
          "Together with Utama, let us commit to honesty in achieving growth, with gratitude and a spirit of togetherness.",
        values: ["commit", "honesty", "growth", "gratitude", "togetherness"],
      },
      team: {
        eyebrow: "Our People",
        title: "The Toko Cat Utama Team",
        description:
          "The people behind Toko Cat Utama help customers find painting solutions that match their needs.",
        image: sharedImages.marketingTeam,
        imageAlt: "Toko Cat Utama team at a company activity",
      },
      stores: {
        eyebrow: "Inside Our Stores",
        title: "The Shopping Experience at Toko Cat Utama",
        description:
          "Customers can explore product options, consult with our team, and receive recommendations tailored to their needs at Toko Cat Utama branches.",
      },
      community: {
        eyebrow: "Social Care",
        title: "Caring and Sharing",
        description:
          "Toko Cat Utama is committed to creating positive impact for surrounding communities through social activities and care programs.",
        image: sharedImages.csr,
        imageAlt:
          "Toko Cat Utama CSR activity with Dana Paint for painting a house of worship",
      },
      trustSummary: {
        eyebrow: "Toko Cat Utama",
        title: "Trust That Continues to Grow",
        facts: [
          "Established in 1955",
          `${branches.length} branches`,
          "Complete product range",
          "Solutions for homes, projects, and industries",
          "Helpful and trusted service",
        ],
      },
      cta: {
        title: "Ready to Help with Your Painting Needs",
        primaryLabel: "Contact Us",
        secondaryLabel: "Find the Nearest Store",
      },
    },
  },
  zh: {
    metadata: {
      homeTitle: "Toko Cat Utama | 快速、齐全、可信赖",
      homeDescription:
        "通过真诚建议、齐全产品与专业服务，帮助客户找到合适的涂装解决方案。",
      aboutTitle: "关于我们 | Toko Cat Utama",
      aboutDescription: "70 多年来，为中爪哇的住宅、项目和工业需求提供涂装解决方案。",
    },
    layout: {
      skipLink: "跳至主要内容",
      logoLabel: "Toko Cat Utama - 首页",
      primaryNavigationLabel: "主导航",
      mobileNavigationLabel: "移动导航",
      openMenu: "打开菜单",
      closeMenu: "关闭菜单",
      contactCta: "联系我们",
      tagline: "最快。最全。最可信赖。",
      quickMenu: "快捷菜单",
      contactHeading: "联系方式",
      rights: "版权所有。",
      languageLabel: "选择语言",
      search: {
        label: "搜索产品、品牌、类别或门店位置",
        placeholder: "搜索...",
      },
      navigation: {
        home: "首页",
        about: "关于我们",
        aboutStore: "关于 Toko Cat Utama",
        whyChooseUs: "为什么选择我们",
        loyalty: "会员计划",
        products: "产品",
        categories: "类别",
        allProducts: "所有产品",
        brands: "品牌",
        allBrands: "所有品牌",
        solutions: "解决方案",
        calculator: "涂料计算器",
        projectGallery: "项目图库",
        branchesContact: "门店与联系",
        branchLocations: "门店位置",
        contactUs: "联系我们",
        whatsapp: "WhatsApp",
      },
    },
    home: {
      hero: {
        eyebrow: "快速、齐全、可信赖",
        title: "我们不只是销售涂料。我们提供涂装解决方案。",
        lead: "通过真诚建议、齐全的产品选择与专业服务，帮助客户找到合适的涂装方案。",
        primaryLabel: "咨询您的需求",
        secondaryLabel: "查找最近门店",
        image: sharedImages.hero,
        imageAlt: "正在粉刷黄色、蓝色和红色外墙的现代住宅",
      },
      trust: {
        eyebrow: "为什么选择 Toko Cat Utama",
        title: "客户选择我们的原因",
        features: [
          { title: "产品齐全", icon: PackageCheck },
          { title: "正品保障", icon: BadgeCheck },
          { title: "配送快速", icon: Truck },
          { title: "产品咨询", icon: Sparkles },
          { title: "自 1955 年以来备受信赖", icon: ShieldCheck },
        ],
      },
      categories: {
        eyebrow: "齐全产品",
        title: "产品类别",
        items: defaultCategories.map((category) => ({
          ...category,
          title:
            {
              "cat-dekoratif": "装饰涂料",
              "cat-protective": "防护涂料",
              "marine-paint": "船舶涂料",
              "floor-coating": "地坪涂料",
              "automotive-paint": "汽车涂料",
              waterproofing: "防水材料",
              "semen-instan": "即用水泥",
              "perlengkapan-pengecatan": "涂装工具",
            }[category.slug] ?? category.title,
        })),
      },
      location: {
        eyebrow: `${branches.length} 家门店`,
        title: "门店位置",
        countLabel: "家门店遍布中爪哇",
        ctaLabel: "查找门店",
      },
      contact: {
        eyebrow: "联系",
        title: "联系我们",
        ctaLabel: "联系我们",
        whatsappLabel: "WhatsApp",
        emailLabel: "电子邮件",
        officeLabel: "总部",
      },
    },
    about: {
      hero: {
        title: "关于我们",
        description: "70 多年来，为中爪哇的住宅、项目和工业需求提供涂装解决方案。",
        image: sharedImages.aboutHero,
        imageAlt: "Toko Cat Utama Setiabudi 门店外观及多个涂料品牌",
      },
      introduction: {
        eyebrow: "始于 1955 年",
        title: "与客户需求共同成长",
        paragraphs: [
          "自 1955 年以来，PT. Widautama 一直受到三宝垄及周边地区承包商、屋主、涂料店和建材零售商的信赖。",
          "公司由已故 Widautama 先生创立，最初名为 PD UTAMA，是三宝垄最早的涂料店之一。",
          "随着公司的发展，Toko Cat Utama 的解决方案已从装饰涂料扩展到防水、防护涂层、环氧、船舶涂料、地坪涂料以及各种建筑保护需求。",
        ],
        image: sharedImages.siliwangi,
        imageAlt: "三宝垄 Toko Cat Utama Siliwangi 门店",
      },
      history: {
        eyebrow: "我们的历程",
        title: "Toko Cat Utama 的历史",
        milestones: [
          {
            year: "1955",
            description: "由已故 Widautama 先生在 Jalan Mataram 创立，该路现称为三宝垄 Jalan MT Haryono。",
          },
          {
            year: "1995",
            description:
              "第二家门店由已故 Agus Kurniawan 先生与 Lilik Winarni 女士在三宝垄 Jalan Setiabudi 82 开设，名为 Toko Cat Utama Putra。",
          },
          {
            year: "2007",
            description:
              "第三家门店在 Jalan Jenderal Sudirman, Siliwangi 开设，名为 Utama Paint Center。",
          },
          {
            year: "2026",
            description: `Toko Cat Utama 已发展为遍布中爪哇的 ${branches.length} 家门店。`,
          },
        ],
      },
      purpose: {
        eyebrow: "公司方向",
        title: "愿景、使命与 Utama 价值观",
        vision: {
          title: "愿景",
          description:
            "成为印度尼西亚值得信赖并成为首选的涂料零售企业，以优秀人才为支持，并持续关注社会关怀。",
        },
        mission: {
          title: "使命",
          description:
            "通过持续的人才发展，与供应商和客户建立可靠性、信誉和良好关系，同时为周边社区带来积极影响。",
        },
        valuesTitle: "Utama 价值观",
        valueStatement:
          "让我们与 Utama 一同承诺，以诚实实现成长，并怀着感恩之心保持家庭般的团结精神。",
        values: ["承诺", "诚实", "成长", "感恩", "团结"],
      },
      team: {
        eyebrow: "我们的团队",
        title: "Toko Cat Utama 团队",
        description: "Toko Cat Utama 背后的团队，帮助客户找到符合需求的涂装解决方案。",
        image: sharedImages.marketingTeam,
        imageAlt: "Toko Cat Utama 团队活动照片",
      },
      stores: {
        eyebrow: "走进我们的门店",
        title: "Toko Cat Utama 的购物体验",
        description:
          "客户可以在 Toko Cat Utama 各门店查看产品选择、咨询团队，并获得符合需求的建议。",
      },
      community: {
        eyebrow: "社会关怀",
        title: "关怀与分享",
        description: "Toko Cat Utama 致力于通过社会活动与关怀项目，为周边社区带来积极影响。",
        image: sharedImages.csr,
        imageAlt: "Toko Cat Utama 与 Dana Paint 共同开展宗教场所粉刷 CSR 活动",
      },
      trustSummary: {
        eyebrow: "Toko Cat Utama",
        title: "持续增长的信任",
        facts: [
          "创立于 1955 年",
          `${branches.length} 家门店`,
          "产品齐全",
          "服务住宅、项目与工业需求",
          "贴心且值得信赖的服务",
        ],
      },
      cta: {
        title: "准备好协助您的涂装需求",
        primaryLabel: "联系我们",
        secondaryLabel: "查找最近门店",
      },
    },
  },
} as const;

export type Dictionary = (typeof dictionaries)[Locale];

export function getDictionary(locale: Locale) {
  return dictionaries[locale];
}
