import {
  productCategories,
  productsCta,
  productsHelp,
  productsHero,
  productsIntroduction,
} from "@/data/products";
import type { Locale } from "@/types/i18n";

export type ProductsCopy = {
  hero: typeof productsHero;
  introduction: typeof productsIntroduction;
  categories: typeof productCategories;
  help: typeof productsHelp;
  cta: typeof productsCta;
};

const categoryCopy = {
  en: {
    "cat-dekoratif": {
      title: "Decorative Paint",
      description:
        "Paint solutions for interior and exterior walls that protect surfaces while enhancing building appearance. Available in a wide range of colors, textures, and finishes.",
    },
    "cat-protective": {
      title: "Protective Paint",
      description:
        "Special coating systems to protect steel, concrete, and industrial assets from corrosion, chemicals, weather, and extreme environments.",
    },
    "marine-paint": {
      title: "Marine Paint",
      description:
        "High-performance coatings for ships, ports, and offshore structures, designed to protect against seawater, corrosion, and demanding environments.",
    },
    "floor-coating": {
      title: "Floor Coating",
      description:
        "Floor coatings that improve resistance to abrasion, impact, chemicals, and heavy traffic for factories, warehouses, commercial areas, and parking spaces.",
    },
    "automotive-paint": {
      title: "Automotive Paint",
      description:
        "Automotive paint systems for motorcycles, cars, and commercial vehicles, delivering precise color, quality finishes, and durable protection.",
    },
    waterproofing: {
      title: "Waterproofing",
      description:
        "Protection solutions to help prevent leaks and seepage on roofs, concrete decks, walls, bathrooms, and basement areas.",
    },
    "semen-instan": {
      title: "Instant Cement",
      description:
        "Ready-to-use cement products for tile installation, plastering, skim coat, lightweight brick adhesive, grout, and concrete repair.",
    },
    "perlengkapan-pengecatan": {
      title: "Painting Tools",
      description:
        "Brushes, rollers, sandpaper, masking tape, and supporting accessories to help painting work become neater, more efficient, and more professional.",
    },
  },
  zh: {
    "cat-dekoratif": {
      title: "装饰涂料",
      description:
        "适用于内外墙的涂料解决方案，在保护墙面的同时提升建筑外观，提供多种颜色、质感与表面效果选择。",
    },
    "cat-protective": {
      title: "防护涂料",
      description:
        "用于保护钢材、混凝土和工业资产的专用涂层系统，可抵御腐蚀、化学品、天气和严苛环境。",
    },
    "marine-paint": {
      title: "船舶涂料",
      description:
        "适用于船舶、港口和海上结构的高性能涂料，提供对海水、腐蚀和严苛环境的保护。",
    },
    "floor-coating": {
      title: "地坪涂料",
      description:
        "提升地面对磨损、冲击、化学品和高人流/车流的耐受性，适用于工厂、仓库、商业空间和停车区域。",
    },
    "automotive-paint": {
      title: "汽车涂料",
      description:
        "适用于摩托车、汽车和商用车辆的喷涂系统，呈现精准颜色、高品质表面效果和持久保护。",
    },
    waterproofing: {
      title: "防水材料",
      description:
        "用于屋顶、楼板、墙面、浴室和地下空间的防水保护方案，帮助减少渗漏并保护建筑结构。",
    },
    "semen-instan": {
      title: "预拌砂浆",
      description:
        "适用于瓷砖铺贴、抹灰、批荡、轻质砖粘结、填缝和混凝土修补的即用型水泥产品。",
    },
    "perlengkapan-pengecatan": {
      title: "涂装工具",
      description:
        "提供刷子、滚筒、砂纸、美纹纸及其他配套工具，帮助施工更整洁、高效和专业。",
    },
  },
};

function localizeCategories(locale: Exclude<Locale, "id">) {
  return productCategories.map((category) => ({
    ...category,
    title: categoryCopy[locale][category.slug as keyof typeof categoryCopy.en].title,
    description: categoryCopy[locale][category.slug as keyof typeof categoryCopy.en].description,
    imageAlt:
      locale === "en"
        ? `${categoryCopy.en[category.slug as keyof typeof categoryCopy.en].title} product solution`
        : `${categoryCopy.zh[category.slug as keyof typeof categoryCopy.zh].title}产品解决方案`,
    ctaLabel: locale === "en" ? "Discuss Your Needs" : "咨询您的需求",
  }));
}

export const productsCopy: Record<Locale, ProductsCopy> = {
  id: {
    hero: productsHero,
    introduction: productsIntroduction,
    categories: productCategories,
    help: productsHelp,
    cta: productsCta,
  },
  en: {
    hero: {
      ...productsHero,
      title: "Products",
      description:
        "Complete painting solutions for homes, projects, and industrial needs. Find the product category that fits your requirements.",
      imageAlt:
        "Collage of painting solutions for walls, ships, steel structures, floors, waterproofing, automotive paint, instant cement, and painting tools",
    },
    introduction: {
      title: "Solutions for Different Needs",
      description:
        "We provide painting solutions for homes, commercial buildings, industrial projects, and specialized needs such as waterproofing, protective coating, marine coating, and floor coating.",
    },
    categories: localizeCategories("en"),
    help: {
      title: "Not Sure Which Product Is Right?",
      description:
        "Every project has different needs. Our team can help choose a paint system based on surface type, environmental conditions, budget, and durability targets.",
    },
    cta: {
      ...productsCta,
      title: "Let’s Discuss Your Project",
      description:
        "Our team is ready to help choose the best solution for homes, commercial buildings, and industrial projects.",
      primaryLabel: "Discuss Your Needs",
      secondaryLabel: "Contact the Nearest Branch",
    },
  },
  zh: {
    hero: {
      ...productsHero,
      title: "产品",
      description:
        "为住宅、工程和工业需求提供完整的涂装解决方案。寻找适合您需求的产品类别。",
      imageAlt:
        "墙面、船舶、钢结构、地坪、防水、汽车涂料、预拌砂浆和涂装工具解决方案拼图",
    },
    introduction: {
      title: "满足多种需求的解决方案",
      description:
        "我们提供住宅、商业建筑、工业项目以及防水、防护涂层、船舶涂料和地坪涂料等专业需求的涂装解决方案。",
    },
    categories: localizeCategories("zh"),
    help: {
      title: "不确定哪种产品最合适？",
      description:
        "每个项目都有不同需求。我们的团队可根据表面类型、环境条件、预算和耐久目标，协助选择合适的涂装系统。",
    },
    cta: {
      ...productsCta,
      title: "让我们讨论您的项目",
      description:
        "我们的团队可协助为住宅、商业建筑和工业项目选择最合适的解决方案。",
      primaryLabel: "咨询您的需求",
      secondaryLabel: "联系最近分店",
    },
  },
};
