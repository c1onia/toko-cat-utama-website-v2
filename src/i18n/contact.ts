import {
  contactForm,
  contactHero,
  contactOpeningHours,
  customerServiceContact,
  headOfficeContact,
} from "@/data/contact";
import type { Locale } from "@/types/i18n";

export type ContactHeroCopy = {
  title: string;
  subtitle: string;
  primaryCta: {
    label: string;
    href: string;
  };
  secondaryCta: {
    label: string;
    href: string;
  };
};

export type ContactOfficeCopy = {
  title: string;
  address: string;
  whatsappLabel: string;
  whatsappNumber: string;
  whatsappHref: string;
  email: string;
  emailHref: string;
  mapTitle: string;
  mapEmbedUrl: string;
};

export type ContactCustomerServiceCopy = {
  title: string;
  whatsappLabel: string;
  whatsappNumber: string;
  whatsappHref: string;
  ctaLabel: string;
};

export type ContactOpeningHoursCopy = {
  title: string;
  items: ReadonlyArray<{
    day: string;
    time: string;
  }>;
};

export type ContactFormCopy = {
  title: string;
  description: string;
  fields: {
    name: string;
    phone: string;
    email: string;
    message: string;
  };
  submitLabel: string;
};

export type ContactCopy = {
  hero: ContactHeroCopy;
  heroEyebrow: string;
  heroActionsLabel: string;
  info: {
    eyebrow: string;
    title: string;
    headOffice: ContactOfficeCopy;
    customerService: ContactCustomerServiceCopy;
    openingHours: ContactOpeningHoursCopy;
    hoursAriaLabel: string;
  };
  map: {
    eyebrow: string;
    title: string;
    contact: ContactOfficeCopy;
  };
  form: ContactFormCopy;
  formEyebrow: string;
  formAriaLabel: string;
};

function localizedHours(locale: Locale) {
  if (locale === "id") {
    return contactOpeningHours;
  }

  const translations = {
    en: ["Monday – Friday", "Saturday", "Sunday / Public Holiday"],
    zh: ["周一至周五", "周六", "周日 / 公共假日"],
  }[locale];

  return {
    ...contactOpeningHours,
    title: locale === "en" ? "Opening Hours" : "营业时间",
    items: contactOpeningHours.items.map((item, index) => ({
      ...item,
      day: translations[index] ?? item.day,
    })),
  };
}

export const contactCopy: Record<Locale, ContactCopy> = {
  id: {
    hero: contactHero,
    heroEyebrow: "Kontak Kami",
    heroActionsLabel: "Aksi kontak utama",
    info: {
      eyebrow: "Informasi Kontak",
      title: "Cara Menghubungi Kami",
      headOffice: headOfficeContact,
      customerService: customerServiceContact,
      openingHours: contactOpeningHours,
      hoursAriaLabel: "Jam operasional",
    },
    map: {
      eyebrow: "Google Map",
      title: "Kantor Pusat",
      contact: headOfficeContact,
    },
    form: contactForm,
    formEyebrow: "Form Kontak",
    formAriaLabel: "Form kontak Toko Cat Utama",
  },
  en: {
    hero: {
      ...contactHero,
      title: "Contact Toko Cat Utama",
      subtitle:
        "Our team is ready to help with painting needs for homes, businesses, and projects.",
      primaryCta: { ...contactHero.primaryCta, label: "Chat via WhatsApp" },
      secondaryCta: { ...contactHero.secondaryCta, label: "View Store Locations" },
    },
    heroEyebrow: "Contact Us",
    heroActionsLabel: "Main contact actions",
    info: {
      eyebrow: "Contact Information",
      title: "How to Reach Us",
      headOffice: {
        ...headOfficeContact,
        title: "Head Office",
        mapTitle: "Toko Cat Utama head office map",
      },
      customerService: {
        ...customerServiceContact,
        title: "WhatsApp Customer Service",
        ctaLabel: "Chat on WhatsApp",
      },
      openingHours: localizedHours("en"),
      hoursAriaLabel: "Opening hours",
    },
    map: {
      eyebrow: "Google Map",
      title: "Head Office",
      contact: {
        ...headOfficeContact,
        title: "Head Office",
        mapTitle: "Toko Cat Utama head office map",
      },
    },
    form: {
      title: "Send a Message",
      description:
        "Fill in this short form as an initial note. For the fastest response, please use WhatsApp.",
      fields: {
        name: "Name",
        phone: "Mobile Number",
        email: "Email (optional)",
        message: "Message",
      },
      submitLabel: "Send Message",
    },
    formEyebrow: "Contact Form",
    formAriaLabel: "Toko Cat Utama contact form",
  },
  zh: {
    hero: {
      ...contactHero,
      title: "联系 Toko Cat Utama",
      subtitle: "我们的团队可协助您处理住宅、商业和项目涂装需求。",
      primaryCta: { ...contactHero.primaryCta, label: "通过 WhatsApp 聊天" },
      secondaryCta: { ...contactHero.secondaryCta, label: "查看门店位置" },
    },
    heroEyebrow: "联系我们",
    heroActionsLabel: "主要联系操作",
    info: {
      eyebrow: "联系信息",
      title: "如何联系我们",
      headOffice: {
        ...headOfficeContact,
        title: "总部办公室",
        mapTitle: "Toko Cat Utama 总部地图",
      },
      customerService: {
        ...customerServiceContact,
        title: "WhatsApp 客服",
        ctaLabel: "WhatsApp 咨询",
      },
      openingHours: localizedHours("zh"),
      hoursAriaLabel: "营业时间",
    },
    map: {
      eyebrow: "Google 地图",
      title: "总部办公室",
      contact: {
        ...headOfficeContact,
        title: "总部办公室",
        mapTitle: "Toko Cat Utama 总部地图",
      },
    },
    form: {
      title: "发送信息",
      description: "请填写简短表单作为初步记录。如需最快回复，请使用 WhatsApp。",
      fields: {
        name: "姓名",
        phone: "手机号码",
        email: "邮箱（选填）",
        message: "留言",
      },
      submitLabel: "发送信息",
    },
    formEyebrow: "联系表单",
    formAriaLabel: "Toko Cat Utama 联系表单",
  },
};
