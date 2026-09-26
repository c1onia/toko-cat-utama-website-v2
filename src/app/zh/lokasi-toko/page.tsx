import type { Metadata } from "next";
import { LocationsPage } from "@/components/locations/locations-page";
import "@/styles/locations.css";

export const metadata: Metadata = {
  title: "门店位置 | Toko Cat Utama",
  description: "查找最近的 Toko Cat Utama 分店，包括地址、营业时间、联系方式、Google Maps 和可用调色机。",
};

export default function ChineseLocationsPage() {
  return <LocationsPage locale="zh" />;
}
