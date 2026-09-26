import type { Metadata } from "next";
import { PaintCalculatorPage as PaintCalculatorPageTemplate } from "@/components/paint-calculator/paint-calculator-page";
import "@/styles/paint-calculator.css";

export const metadata: Metadata = {
  title: "墙面漆计算器 | Toko Cat Utama",
  description: "估算单面墙或一个房间的墙面漆需求，包括门窗面积扣除。",
};

export default function ChinesePaintCalculatorPage() {
  return <PaintCalculatorPageTemplate locale="zh" />;
}
