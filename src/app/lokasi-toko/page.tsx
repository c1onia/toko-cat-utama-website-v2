import type { Metadata } from "next";
import { LocationsPage as LocationsPageTemplate } from "@/components/locations/locations-page";
import "@/styles/locations.css";

export const metadata: Metadata = {
  title: "Lokasi Toko | Toko Cat Utama",
  description:
    "Temukan cabang Toko Cat Utama terdekat, lihat alamat, jam operasional, kontak, Google Maps, dan mesin tinting yang tersedia.",
};

export default function LocationsPage() {
  return <LocationsPageTemplate locale="id" />;
}
