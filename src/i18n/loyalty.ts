import {
  loyaltyApp,
  loyaltyFaqs,
  loyaltyFaqSection,
  loyaltyFinalCta,
  loyaltyHero,
  loyaltyHighlights,
  loyaltyHighlightsSection,
  loyaltyHowItWorks,
  loyaltyPeriod,
  loyaltyPointConversion,
  loyaltyProgram,
  loyaltyRegistration,
  loyaltyRewardGroups,
  loyaltyRewards,
  loyaltySteps,
} from "@/data/loyalty";
import type { Locale } from "@/types/i18n";

export type LoyaltyCopy = {
  hero: typeof loyaltyHero;
  heroEyebrow: string;
  heroActionsLabel: string;
  mascotAlt: string;
  highlightsSection: typeof loyaltyHighlightsSection;
  highlights: typeof loyaltyHighlights;
  howItWorks: typeof loyaltyHowItWorks;
  steps: typeof loyaltySteps;
  pointConversion: typeof loyaltyPointConversion;
  rewardsSection: typeof loyaltyRewards;
  rewardGroups: typeof loyaltyRewardGroups;
  pointsLabel: string;
  app: typeof loyaltyApp;
  appEyebrow: string;
  appActionsLabel: string;
  registration: typeof loyaltyRegistration;
  period: typeof loyaltyPeriod;
  faqSection: typeof loyaltyFaqSection;
  faqs: typeof loyaltyFaqs;
  finalCta: typeof loyaltyFinalCta;
};

export const loyaltyCopy: Record<Locale, LoyaltyCopy> = {
  id: {
    hero: loyaltyHero,
    heroEyebrow: "Program Member",
    heroActionsLabel: "Aksi Loyalty Member",
    mascotAlt: loyaltyProgram.mascot.alt,
    highlightsSection: loyaltyHighlightsSection,
    highlights: loyaltyHighlights,
    howItWorks: loyaltyHowItWorks,
    steps: loyaltySteps,
    pointConversion: loyaltyPointConversion,
    rewardsSection: loyaltyRewards,
    rewardGroups: loyaltyRewardGroups,
    pointsLabel: "poin",
    app: loyaltyApp,
    appEyebrow: "Utama Loyalty App",
    appActionsLabel: "Unduh aplikasi Utama Loyalty",
    registration: loyaltyRegistration,
    period: loyaltyPeriod,
    faqSection: loyaltyFaqSection,
    faqs: loyaltyFaqs,
    finalCta: loyaltyFinalCta,
  },
  en: {
    hero: {
      ...loyaltyHero,
      title: "Utama Loyalty Member",
      description:
        "Shop, collect points, and redeem them for attractive rewards at every Toko Cat Utama branch.",
      primaryLabel: "Join Now",
      secondaryLabel: "View Rewards",
    },
    heroEyebrow: "Member Program",
    heroActionsLabel: "Loyalty Member actions",
    mascotAlt: "Toko Cat Utama mascot for the Utama Loyalty Member program",
    highlightsSection: {
      eyebrow: "Program Benefits",
      title: "Make Every Purchase More Valuable",
    },
    highlights: loyaltyHighlights.map((item, index) => ({
      ...item,
      ...[
        {
          title: "Free Membership",
          description: "Register with no fee and no minimum first purchase.",
        },
        {
          title: "Collect Points",
          description: "Earn 1 point for every Rp100,000 purchase.",
        },
        {
          title: "Attractive Reward Options",
          description:
            "Redeem points for vouchers, merchandise, electronics, and vehicles.",
        },
        {
          title: `Available at ${loyaltyProgram.branchCount} Branches`,
          description: "The program is available across all Toko Cat Utama branches.",
        },
      ][index],
    })),
    howItWorks: {
      ...loyaltyHowItWorks,
      title: "How Loyalty Member Works",
    },
    steps: [
      {
        label: "Step 1",
        title: "Register as a Member",
        description:
          "Fill in the membership form and attach a copy of your ID or official identity card.",
      },
      {
        label: "Step 2",
        title: "Shop and Collect Points",
        description:
          "Use the same name and phone number as your registration data when making purchases.",
      },
      {
        label: "Step 3",
        title: "Redeem Points",
        description: "Choose rewards based on the number of points you have collected.",
      },
    ],
    pointConversion: {
      eyebrow: "Point Conversion",
      title: "1 Point = Rp100,000 Purchase",
      description:
        "Applies to purchases of any product at Toko Utama Group during the program period.",
    },
    rewardsSection: {
      ...loyaltyRewards,
      eyebrow: "Reward Options",
      title: "Redeem Points for Attractive Rewards",
    },
    rewardGroups: loyaltyRewardGroups.map((group, index) => ({
      ...group,
      ...[
        {
          title: "Practical Rewards",
          description: "Light rewards to start redeeming your points.",
        },
        {
          title: "Household Appliances",
          description: "Functional rewards for daily home needs.",
        },
        {
          title: "Main Rewards",
          description: "Higher-value rewards for members with more points.",
        },
      ][index],
    })),
    pointsLabel: "points",
    app: {
      ...loyaltyApp,
      title: "Access Loyalty Member Through the App",
      description:
        "Download the Utama Loyalty App to access membership services and loyalty program information.",
      links: loyaltyApp.links.map((link) => ({
        ...link,
        ariaLabel: link.label.includes("Google")
          ? "Download Utama Loyalty App on Google Play"
          : "Download Utama Loyalty App on Apple App Store",
      })),
    },
    appEyebrow: "Utama Loyalty App",
    appActionsLabel: "Download the Utama Loyalty app",
    registration: {
      ...loyaltyRegistration,
      title: "How to Register",
      rules: [
        "Fill in the UTAMA Member participation form and include a copy of your ID or official identity card.",
        "Make a transaction with no minimum purchase to start joining the program.",
        "Use the same name and phone number as your registration data for every transaction.",
      ],
      note: "Registration is available at all Toko Cat Utama branches.",
      ctaLabel: "Find the Nearest Branch",
    },
    period: {
      ...loyaltyPeriod,
      title: "Program Period",
      description: `Point earning and redemption are valid until ${loyaltyProgram.programEndDate}.`,
    },
    faqSection: {
      eyebrow: "FAQ",
      title: "Frequently Asked Questions",
    },
    faqs: [
      {
        question: "Is there a fee to become a member?",
        answer: "No. Member registration is free of charge.",
      },
      {
        question: "Is there a minimum purchase to register?",
        answer: "No. New members only need to make a transaction with no minimum purchase.",
      },
      {
        question: "How are points earned?",
        answer: "Every Rp100,000 purchase earns 1 point.",
      },
      {
        question: "Where is this program available?",
        answer: `The program is available at all ${loyaltyProgram.branchCount} Toko Cat Utama branches.`,
      },
      {
        question: "What should I use during transactions?",
        answer:
          "Use the same name and phone number as your member registration data.",
      },
      {
        question: "Until when can points be collected and redeemed?",
        answer:
          "Point earning and redemption for the current program period are valid until December 31, 2026.",
      },
    ],
    finalCta: {
      ...loyaltyFinalCta,
      title: "Start Collecting Points Today",
      description:
        "Register as an Utama Loyalty Member at the nearest branch and enjoy reward options from every transaction.",
      primaryLabel: "Find the Nearest Branch",
      secondaryLabel: "Download App",
    },
  },
  zh: {
    hero: {
      ...loyaltyHero,
      title: "Utama 会员计划",
      description:
        "购物、累积积分，并在所有 Toko Cat Utama 门店兑换多种精美礼品。",
      primaryLabel: "立即加入",
      secondaryLabel: "查看礼品",
    },
    heroEyebrow: "会员计划",
    heroActionsLabel: "会员计划操作",
    mascotAlt: "Toko Cat Utama Utama 会员计划吉祥物",
    highlightsSection: {
      eyebrow: "计划优势",
      title: "让每一次购物更有价值",
    },
    highlights: loyaltyHighlights.map((item, index) => ({
      ...item,
      ...[
        {
          title: "免费成为会员",
          description: "注册无需费用，首次交易无最低消费要求。",
        },
        {
          title: "累积积分",
          description: "每消费 Rp100,000 可获得 1 点积分。",
        },
        {
          title: "多种礼品选择",
          description: "积分可兑换购物券、周边商品、电子产品及车辆等奖品。",
        },
        {
          title: `适用于 ${loyaltyProgram.branchCount} 家分店`,
          description: "此计划适用于所有 Toko Cat Utama 分店。",
        },
      ][index],
    })),
    howItWorks: {
      ...loyaltyHowItWorks,
      title: "会员计划运作方式",
    },
    steps: [
      {
        label: "步骤 1",
        title: "注册成为会员",
        description: "填写会员参与表格，并附上身份证或有效证件复印件。",
      },
      {
        label: "步骤 2",
        title: "购物并累积积分",
        description: "交易时请使用与注册资料相同的姓名和电话号码。",
      },
      {
        label: "步骤 3",
        title: "兑换积分",
        description: "根据已累积的积分数量选择礼品。",
      },
    ],
    pointConversion: {
      eyebrow: "积分换算",
      title: "1 点积分 = Rp100,000 消费",
      description: "适用于计划期间在 Toko Utama Group 购买任何产品的交易。",
    },
    rewardsSection: {
      ...loyaltyRewards,
      eyebrow: "礼品选择",
      title: "用积分兑换精美礼品",
    },
    rewardGroups: loyaltyRewardGroups.map((group, index) => ({
      ...group,
      ...[
        {
          title: "实用礼品",
          description: "适合开始兑换积分的小型礼品。",
        },
        {
          title: "家用电器",
          description: "满足日常家庭需求的实用礼品。",
        },
        {
          title: "主要奖品",
          description: "适合积分更高会员的高价值奖品。",
        },
      ][index],
    })),
    pointsLabel: "积分",
    app: {
      ...loyaltyApp,
      title: "通过应用访问会员服务",
      description: "下载 Utama Loyalty App，查看会员服务和忠诚计划信息。",
      links: loyaltyApp.links.map((link) => ({
        ...link,
        ariaLabel: link.label.includes("Google")
          ? "在 Google Play 下载 Utama Loyalty App"
          : "在 Apple App Store 下载 Utama Loyalty App",
      })),
    },
    appEyebrow: "Utama Loyalty App",
    appActionsLabel: "下载 Utama Loyalty 应用",
    registration: {
      ...loyaltyRegistration,
      title: "注册方式",
      rules: [
        "填写 UTAMA 会员参与表，并附上身份证或有效证件复印件。",
        "完成任意金额交易即可开始参加计划。",
        "每次交易请使用与注册资料相同的姓名和电话号码。",
      ],
      note: "可在所有 Toko Cat Utama 分店注册。",
      ctaLabel: "查找最近分店",
    },
    period: {
      ...loyaltyPeriod,
      title: "计划期限",
      description: `积分获取和兑换有效期至 ${loyaltyProgram.programEndDate}。`,
    },
    faqSection: {
      eyebrow: "常见问题",
      title: "常见问题",
    },
    faqs: [
      {
        question: "成为会员需要费用吗？",
        answer: "不需要。会员注册免费。",
      },
      {
        question: "注册是否有最低消费？",
        answer: "没有。新会员只需完成一笔交易，无最低消费要求。",
      },
      {
        question: "积分如何获得？",
        answer: "每消费 Rp100,000 可获得 1 点积分。",
      },
      {
        question: "此计划适用于哪里？",
        answer: `此计划适用于所有 ${loyaltyProgram.branchCount} 家 Toko Cat Utama 分店。`,
      },
      {
        question: "交易时需要使用什么资料？",
        answer: "请使用与会员注册资料相同的姓名和电话号码。",
      },
      {
        question: "积分可以累积和兑换到什么时候？",
        answer: "当前计划期间的积分获取和兑换有效期至 2026 年 12 月 31 日。",
      },
    ],
    finalCta: {
      ...loyaltyFinalCta,
      title: "今天开始累积积分",
      description:
        "在最近的分店注册成为 Utama 会员，并通过每次交易享受多种礼品选择。",
      primaryLabel: "查找最近分店",
      secondaryLabel: "下载应用",
    },
  },
};
