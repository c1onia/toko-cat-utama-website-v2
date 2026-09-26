import { branches } from "@/data/branches";
import type { AboutCopy, Locale } from "@/types/i18n";

const aboutImages = {
  hero: {
    image: "/images/about/setiabudi.jpeg",
    imageAlt: "Fasad Toko Cat Utama cabang Setiabudi dengan berbagai merek cat",
  },
  company: {
    image: "/images/about/siliwangi.jpeg",
    imageAlt: "Toko Cat Utama cabang Siliwangi di Semarang",
  },
  team: {
    image: "/images/about/marketing-team.jpeg",
    imageAlt: "Tim Toko Cat Utama dalam kegiatan perusahaan",
  },
  community: {
    image: "/images/about/CSR.jpeg",
    imageAlt: "Kegiatan CSR Toko Cat Utama bersama Dana Paint untuk pengecatan rumah ibadah",
  },
  stores: [
    {
      src: "/images/about/interior-setiabudi.jpeg",
      alt: "Area pelayanan pelanggan di Toko Cat Utama cabang Setiabudi",
    },
    {
      src: "/images/about/interior1.jpeg",
      alt: "Interior cabang Toko Cat Utama dengan area konsultasi dan produk cat",
    },
    {
      src: "/images/about/interior2.jpeg",
      alt: "Area kasir dan display produk di cabang Toko Cat Utama",
    },
    {
      src: "/images/about/interior3.jpeg",
      alt: "Pelanggan sedang dilayani di meja konsultasi Toko Cat Utama",
    },
  ],
};

export const aboutCopy: Record<Locale, AboutCopy> = {
  id: {
    hero: {
      title: "Tentang Kami",
      description:
        "Lebih dari 70 tahun memberikan solusi pengecatan untuk rumah, proyek, dan industri di Jawa Tengah.",
      ...aboutImages.hero,
    },
    companyIntroduction: {
      eyebrow: "Sejak 1955",
      title: "Tumbuh Bersama Kebutuhan Pelanggan",
      paragraphs: [
        "PT. Widautama telah dipercaya oleh para kontraktor, pemilik rumah, maupun toko cat dan bangunan lainnya di Semarang dan sekitarnya sejak tahun 1955.",
        "Didirikan oleh Alm. Bapak Widautama dengan nama PD UTAMA sebagai salah satu toko cat pertama di Semarang.",
        "Seiring perkembangan perusahaan, Toko Cat Utama memperluas solusi tidak hanya untuk pengecatan dekoratif, tetapi juga waterproofing, protective coating, epoxy, marine coating, floor coating, dan berbagai kebutuhan perlindungan bangunan.",
      ],
      ...aboutImages.company,
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
          description:
            `Toko Cat Utama telah berkembang menjadi ${branches.length} cabang yang tersebar di Jawa Tengah.`,
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
      ...aboutImages.team,
    },
    stores: {
      eyebrow: "Di Dalam Toko Kami",
      title: "Pengalaman Berbelanja di Toko Cat Utama",
      description:
        "Pelanggan dapat melihat pilihan produk, berkonsultasi, dan mendapatkan rekomendasi sesuai kebutuhan mereka di cabang Toko Cat Utama.",
      images: aboutImages.stores,
    },
    community: {
      eyebrow: "Kepedulian Sosial",
      title: "Peduli dan Berbagi",
      description:
        "Toko Cat Utama berkomitmen memberikan dampak positif kepada masyarakat sekitar melalui berbagai kegiatan sosial dan program kepedulian.",
      ...aboutImages.community,
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
      secondaryHref: "/#lokasi-toko",
    },
  },
  en: {
    hero: {
      title: "About Us",
      description:
        "For more than 70 years, we have provided painting solutions for homes, projects, and industries across Central Java.",
      ...aboutImages.hero,
      imageAlt: "Toko Cat Utama Setiabudi branch facade with various paint brands",
    },
    companyIntroduction: {
      eyebrow: "Since 1955",
      title: "Growing with Customer Needs",
      paragraphs: [
        "PT. Widautama has been trusted by contractors, homeowners, paint stores, and building material businesses in Semarang and surrounding areas since 1955.",
        "Founded by the late Mr. Widautama under the name PD UTAMA, it became one of the first paint stores in Semarang.",
        "As the company grew, Toko Cat Utama expanded its solutions beyond decorative paint to include waterproofing, protective coating, epoxy, marine coating, floor coating, and various building protection needs.",
      ],
      ...aboutImages.company,
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
            "The second branch opened on Jalan Setiabudi 82 Semarang by the late Mr. Agus Kurniawan and Mrs. Lilik Winarni under the name Toko Cat Utama Putra.",
        },
        {
          year: "2007",
          description:
            "The third branch opened on Jalan Jenderal Sudirman, Siliwangi, under the name Utama Paint Center.",
        },
        {
          year: "2026",
          description:
            `Toko Cat Utama has grown into ${branches.length} branches across Central Java.`,
        },
      ],
    },
    purpose: {
      eyebrow: "Company Direction",
      title: "Vision, Mission, and Utama Values",
      vision: {
        title: "Vision",
        description:
          "To become a trusted paint retail company and the preferred choice in Indonesia, supported by excellent human resources while maintaining social care.",
      },
      mission: {
        title: "Mission",
        description:
          "To build reliability, credibility, and strong relationships with suppliers and customers through continuous human resource development while creating a positive impact on surrounding communities.",
      },
      valuesTitle: "Utama Values",
      valueStatement:
        "Let us commit together with Utama to practice honesty in achieving growth, with gratitude and a spirit of togetherness.",
      values: ["commit", "honesty", "growth", "gratitude", "togetherness"],
    },
    team: {
      eyebrow: "Our People",
      title: "The Toko Cat Utama Team",
      description:
        "The people behind Toko Cat Utama help customers find painting solutions that match their needs.",
      ...aboutImages.team,
      imageAlt: "Toko Cat Utama team during a company activity",
    },
    stores: {
      eyebrow: "Inside Our Stores",
      title: "The Shopping Experience at Toko Cat Utama",
      description:
        "Customers can explore product options, consult with our team, and receive recommendations that match their needs at Toko Cat Utama branches.",
      images: aboutImages.stores.map((image) => ({ ...image })),
    },
    community: {
      eyebrow: "Social Care",
      title: "Caring and Sharing",
      description:
        "Toko Cat Utama is committed to creating a positive impact for surrounding communities through social initiatives and care programs.",
      ...aboutImages.community,
      imageAlt: "Toko Cat Utama CSR activity with Dana Paint for repainting a place of worship",
    },
    trustSummary: {
      eyebrow: "Toko Cat Utama",
      title: "Trust That Continues to Grow",
      facts: [
        "Established in 1955",
        `${branches.length} branches`,
        "Complete products",
        "Solutions for homes, projects, and industries",
        "Helpful and trusted service",
      ],
    },
    cta: {
      title: "Ready to Help with Your Painting Needs",
      primaryLabel: "Contact Us",
      secondaryLabel: "Find the Nearest Store",
      secondaryHref: "/lokasi-toko",
    },
  },
  zh: {
    hero: {
      title: "关于我们",
      description:
        "70多年来，我们为中爪哇的住宅、项目和工业需求提供涂装解决方案。",
      ...aboutImages.hero,
      imageAlt: "Toko Cat Utama Setiabudi 分店外观，展示多个涂料品牌",
    },
    companyIntroduction: {
      eyebrow: "始于1955年",
      title: "与客户需求共同成长",
      paragraphs: [
        "自1955年以来，PT. Widautama 一直受到三宝垄及周边地区承包商、屋主、涂料店和建材商家的信赖。",
        "公司由已故 Widautama 先生创立，最初名为 PD UTAMA，是三宝垄最早的涂料店之一。",
        "随着公司发展，Toko Cat Utama 的解决方案已从装饰涂料扩展到防水、防护涂层、环氧、船舶涂料、地坪涂料以及多种建筑保护需求。",
      ],
      ...aboutImages.company,
      imageAlt: "位于三宝垄的 Toko Cat Utama Siliwangi 分店",
    },
    history: {
      eyebrow: "我们的历程",
      title: "Toko Cat Utama 的历史",
      milestones: [
        {
          year: "1955",
          description:
            "由已故 Widautama 先生在三宝垄 Jalan Mataram 创立，该道路现称为 Jalan MT Haryono。",
        },
        {
          year: "1995",
          description:
            "第二家分店由已故 Agus Kurniawan 先生与 Lilik Winarni 女士在三宝垄 Jalan Setiabudi 82 开设，名为 Toko Cat Utama Putra。",
        },
        {
          year: "2007",
          description:
            "第三家分店在 Siliwangi 的 Jalan Jenderal Sudirman 开设，名为 Utama Paint Center。",
        },
        {
          year: "2026",
          description:
            `Toko Cat Utama 已发展为遍布中爪哇的 ${branches.length} 家分店。`,
        },
      ],
    },
    purpose: {
      eyebrow: "公司方向",
      title: "愿景、使命与 Utama 价值观",
      vision: {
        title: "愿景",
        description:
          "成为印尼值得信赖并成为首选的涂料零售公司，由优秀人才支持，同时持续关注社会关怀。",
      },
      mission: {
        title: "使命",
        description:
          "通过持续的人才发展，建立可靠性、信誉以及与供应商和客户的良好关系，并为周边社区带来积极影响。",
      },
      valuesTitle: "Utama 价值观",
      valueStatement:
        "让我们与 Utama 一起承诺，以诚信实现成长，并怀着感恩与家庭般的团结精神前行。",
      values: ["承诺", "诚信", "成长", "感恩", "团结"],
    },
    team: {
      eyebrow: "我们的团队",
      title: "Toko Cat Utama 团队",
      description:
        "Toko Cat Utama 背后的团队帮助客户找到符合需求的涂装解决方案。",
      ...aboutImages.team,
      imageAlt: "Toko Cat Utama 团队参与公司活动",
    },
    stores: {
      eyebrow: "我们的门店",
      title: "在 Toko Cat Utama 的购物体验",
      description:
        "客户可在 Toko Cat Utama 各分店查看产品选择、咨询团队，并获得符合需求的推荐。",
      images: aboutImages.stores.map((image) => ({ ...image })),
    },
    community: {
      eyebrow: "社会关怀",
      title: "关怀与分享",
      description:
        "Toko Cat Utama 致力于通过各类社会活动和关怀项目，为周边社区带来积极影响。",
      ...aboutImages.community,
      imageAlt: "Toko Cat Utama 与 Dana Paint 合作进行宗教场所粉刷 CSR 活动",
    },
    trustSummary: {
      eyebrow: "Toko Cat Utama",
      title: "持续增长的信任",
      facts: [
        "创立于1955年",
        `${branches.length} 家分店`,
        "产品齐全",
        "服务住宅、项目与工业需求",
        "贴心且值得信赖的服务",
      ],
    },
    cta: {
      title: "准备协助您的涂装需求",
      primaryLabel: "联系我们",
      secondaryLabel: "查找附近门店",
      secondaryHref: "/lokasi-toko",
    },
  },
};
