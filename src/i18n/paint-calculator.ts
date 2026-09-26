import {
  calculationTypes,
  paintCalculatorDisclaimer,
  paintCalculatorHero,
  paintCalculatorResultScopeNotice,
  paintCalculatorScopeNotice,
  paintCalculatorSecondaryDisclaimer,
  paintClassConfigs,
  productPageCta,
} from "@/data/paintCalculator";
import type { Locale } from "@/types/i18n";
import type { PaintClassConfig } from "@/types/paintCalculator";

export type PaintCalculatorCopy = {
  hero: typeof paintCalculatorHero;
  scopeNotice: string;
  sectionAriaLabel: string;
  calculationType: {
    step: string;
    title: string;
    description: string;
    options: typeof calculationTypes;
  };
  dimensions: {
    step: string;
    title: string;
    wallDescription: string;
    roomDescription: string;
    wallLength: string;
    wallHeight: string;
    roomLength: string;
    roomWidth: string;
    roomHeight: string;
    error: string;
    meterUnit: string;
  };
  openings: {
    step: string;
    title: string;
    description: string;
    door: string;
    window: string;
    doorEmpty: string;
    windowEmpty: string;
    addPrefix: string;
    width: string;
    height: string;
    quantity: string;
    unit: string;
    remove: string;
  };
  paintClass: {
    step: string;
    title: string;
    description: string;
    configs: PaintClassConfig[];
    coverageSuffix: string;
  };
  summary: {
    eyebrow: string;
    title: string;
    grossArea: string;
    doorArea: string;
    windowArea: string;
    paintableArea: string;
    paintClass: string;
    coatAssumption: string;
    coatAssumptionValue: string;
    coverageAssumption: string;
    usageEstimate: string;
    purchaseRecommendation: string;
    equivalentPrefix: string;
    equivalentSuffix: string;
    resetLabel: string;
    resultScopeNotice: string;
    disclaimer: string;
    secondaryDisclaimer: string;
    productCta: typeof productPageCta;
  };
  packageLabels: {
    pail: string;
    gallon: string;
    zeroGallons: string;
  };
};

const englishPaintClasses: PaintClassConfig[] = [
  {
    ...paintClassConfigs[0],
    label: "Premium",
    description:
      "Common 2.5 L gallon packaging, suitable for estimating premium wall paint needs.",
  },
  {
    ...paintClassConfigs[1],
    label: "Medium",
    description:
      "Common 5 kg gallon packaging, suitable for estimating mid-range wall paint needs.",
    calculationNote: "Calculation uses a conservative assumption of 12 m² per gallon.",
  },
];

const chinesePaintClasses: PaintClassConfig[] = [
  {
    ...paintClassConfigs[0],
    label: "高端",
    description: "常见 2.5 L 加仑包装，适合估算高端墙面漆用量。",
  },
  {
    ...paintClassConfigs[1],
    label: "中端",
    description: "常见 5 kg 加仑包装，适合估算中端墙面漆用量。",
    calculationNote: "计算采用每加仑 12 m² 的保守假设。",
  },
];

export const paintCalculatorCopy: Record<Locale, PaintCalculatorCopy> = {
  id: {
    hero: paintCalculatorHero,
    scopeNotice: paintCalculatorScopeNotice,
    sectionAriaLabel: "Form kalkulator cat tembok",
    calculationType: {
      step: "1",
      title: "Pilih jenis perhitungan",
      description:
        "Tentukan apakah Anda ingin menghitung satu bidang atau seluruh dinding ruangan.",
      options: calculationTypes,
    },
    dimensions: {
      step: "2",
      title: "Masukkan ukuran",
      wallDescription: "Masukkan panjang dan tinggi bidang dinding yang akan dicat.",
      roomDescription: "Luas dinding dihitung dari keliling ruangan × tinggi ruangan.",
      wallLength: "Panjang dinding",
      wallHeight: "Tinggi dinding",
      roomLength: "Panjang ruangan",
      roomWidth: "Lebar ruangan",
      roomHeight: "Tinggi ruangan",
      error: "Nilai harus lebih dari 0.",
      meterUnit: "m",
    },
    openings: {
      step: "3",
      title: "Kurangi pintu dan jendela",
      description: "Tambahkan bukaan hanya jika area tersebut tidak perlu dicat.",
      door: "Pintu",
      window: "Jendela",
      doorEmpty: "Belum ada pintu yang dikurangi.",
      windowEmpty: "Belum ada jendela yang dikurangi.",
      addPrefix: "Tambah",
      width: "Lebar",
      height: "Tinggi",
      quantity: "Jumlah",
      unit: "unit",
      remove: "Hapus",
    },
    paintClass: {
      step: "4",
      title: "Pilih kategori cat",
      description:
        "Asumsi daya sebar sudah dihitung untuk 2 lapis pengecatan dan bukan merupakan spesifikasi merek tertentu.",
      configs: paintClassConfigs,
      coverageSuffix: "/ galon / 2 lapis",
    },
    summary: {
      eyebrow: "Hasil otomatis",
      title: "Ringkasan Perhitungan",
      grossArea: "Luas dinding awal",
      doorArea: "Luas pintu",
      windowArea: "Luas jendela",
      paintableArea: "Luas yang dicat",
      paintClass: "Kategori cat",
      coatAssumption: "Asumsi pengecatan",
      coatAssumptionValue: "2 lapis",
      coverageAssumption: "Daya sebar asumsi",
      usageEstimate: "Estimasi pemakaian",
      purchaseRecommendation: "Rekomendasi pembelian",
      equivalentPrefix: "Setara",
      equivalentSuffix: "galon, dibulatkan ke atas.",
      resetLabel: "Hitung ulang",
      resultScopeNotice: paintCalculatorResultScopeNotice,
      disclaimer: paintCalculatorDisclaimer,
      secondaryDisclaimer: paintCalculatorSecondaryDisclaimer,
      productCta: productPageCta,
    },
    packageLabels: {
      pail: "Pail",
      gallon: "Galon",
      zeroGallons: "0 Galon",
    },
  },
  en: {
    hero: {
      eyebrow: "Wall Paint Calculator",
      title: "Estimate Wall Paint Requirements",
      description:
        "Use this simple calculator to estimate wall paint needs based on wall area, door and window openings, and paint category.",
    },
    scopeNotice:
      "Currently, the Paint Calculator can only be used to calculate wall paint requirements. Calculations for other products will be available in a future update.",
    sectionAriaLabel: "Wall paint calculator form",
    calculationType: {
      step: "1",
      title: "Choose calculation type",
      description: "Choose whether to calculate one wall plane or all walls in a room.",
      options: [
        {
          ...calculationTypes[0],
          title: "1 Wall Plane",
          description: "Calculate paint requirements for one wall plane.",
        },
        {
          ...calculationTypes[1],
          title: "1 Room",
          description: "Calculate paint requirements for all walls in one room.",
        },
      ],
    },
    dimensions: {
      step: "2",
      title: "Enter dimensions",
      wallDescription: "Enter the length and height of the wall plane to be painted.",
      roomDescription: "Wall area is calculated from room perimeter × room height.",
      wallLength: "Wall length",
      wallHeight: "Wall height",
      roomLength: "Room length",
      roomWidth: "Room width",
      roomHeight: "Room height",
      error: "Value must be greater than 0.",
      meterUnit: "m",
    },
    openings: {
      step: "3",
      title: "Subtract doors and windows",
      description: "Add openings only if those areas do not need to be painted.",
      door: "Door",
      window: "Window",
      doorEmpty: "No doors have been subtracted yet.",
      windowEmpty: "No windows have been subtracted yet.",
      addPrefix: "Add",
      width: "Width",
      height: "Height",
      quantity: "Quantity",
      unit: "unit",
      remove: "Remove",
    },
    paintClass: {
      step: "4",
      title: "Choose paint category",
      description:
        "Coverage assumptions are already calculated for 2 coats and are not brand-specific specifications.",
      configs: englishPaintClasses,
      coverageSuffix: "/ gallon / 2 coats",
    },
    summary: {
      eyebrow: "Automatic result",
      title: "Calculation Summary",
      grossArea: "Initial wall area",
      doorArea: "Door area",
      windowArea: "Window area",
      paintableArea: "Paintable area",
      paintClass: "Paint category",
      coatAssumption: "Painting assumption",
      coatAssumptionValue: "2 coats",
      coverageAssumption: "Coverage assumption",
      usageEstimate: "Estimated usage",
      purchaseRecommendation: "Purchase recommendation",
      equivalentPrefix: "Equivalent to",
      equivalentSuffix: "gallons, rounded up.",
      resetLabel: "Calculate again",
      resultScopeNotice: "Currently, this calculation applies only to wall paint.",
      disclaimer:
        "The calculation result is an estimate. Actual usage may vary depending on surface condition and porosity, application method, base color, final color, and each product’s coverage.",
      secondaryDisclaimer:
        "Check the coverage information on the packaging or product data sheet before purchasing.",
      productCta: {
        ...productPageCta,
        label: "View Paint Products",
      },
    },
    packageLabels: {
      pail: "Pail",
      gallon: "Gallon",
      zeroGallons: "0 Gallons",
    },
  },
  zh: {
    hero: {
      eyebrow: "墙面漆计算器",
      title: "估算墙面漆需求量",
      description:
        "使用这个简单计算器，根据墙面面积、门窗开口和涂料类别估算墙面漆需求。",
    },
    scopeNotice:
      "目前，油漆计算器仅可用于计算墙面漆需求。其他产品的计算将在后续更新中提供。",
    sectionAriaLabel: "墙面漆计算器表单",
    calculationType: {
      step: "1",
      title: "选择计算类型",
      description: "请选择计算单面墙，或计算一个房间的所有墙面。",
      options: [
        {
          ...calculationTypes[0],
          title: "单面墙",
          description: "计算单面墙所需的油漆量。",
        },
        {
          ...calculationTypes[1],
          title: "一个房间",
          description: "计算一个房间所有墙面所需的油漆量。",
        },
      ],
    },
    dimensions: {
      step: "2",
      title: "输入尺寸",
      wallDescription: "输入要涂刷墙面的长度和高度。",
      roomDescription: "墙面面积按房间周长 × 房间高度计算。",
      wallLength: "墙面长度",
      wallHeight: "墙面高度",
      roomLength: "房间长度",
      roomWidth: "房间宽度",
      roomHeight: "房间高度",
      error: "数值必须大于 0。",
      meterUnit: "m",
    },
    openings: {
      step: "3",
      title: "扣除门窗面积",
      description: "只有不需要涂刷的区域才需要添加为开口。",
      door: "门",
      window: "窗",
      doorEmpty: "尚未扣除任何门面积。",
      windowEmpty: "尚未扣除任何窗面积。",
      addPrefix: "添加",
      width: "宽度",
      height: "高度",
      quantity: "数量",
      unit: "个",
      remove: "删除",
    },
    paintClass: {
      step: "4",
      title: "选择涂料类别",
      description: "覆盖率假设已按 2 遍涂刷计算，并非特定品牌规格。",
      configs: chinesePaintClasses,
      coverageSuffix: "/ 加仑 / 2 遍",
    },
    summary: {
      eyebrow: "自动结果",
      title: "计算摘要",
      grossArea: "初始墙面面积",
      doorArea: "门面积",
      windowArea: "窗面积",
      paintableArea: "需涂刷面积",
      paintClass: "涂料类别",
      coatAssumption: "涂刷假设",
      coatAssumptionValue: "2 遍",
      coverageAssumption: "覆盖率假设",
      usageEstimate: "预估用量",
      purchaseRecommendation: "购买建议",
      equivalentPrefix: "相当于",
      equivalentSuffix: "加仑，已向上取整。",
      resetLabel: "重新计算",
      resultScopeNotice: "目前计算仅适用于墙面漆。",
      disclaimer:
        "计算结果为估算值。实际用量可能因表面状况和吸收性、施工方式、底色、最终颜色以及各产品覆盖率而不同。",
      secondaryDisclaimer: "购买前请查看包装或产品资料表上的覆盖率信息。",
      productCta: {
        ...productPageCta,
        label: "查看涂料产品",
      },
    },
    packageLabels: {
      pail: "桶",
      gallon: "加仑",
      zeroGallons: "0 加仑",
    },
  },
};

export function getPaintClassConfig(
  configs: PaintClassConfig[],
  id: PaintClassConfig["id"],
) {
  return configs.find((config) => config.id === id) ?? configs[0];
}
