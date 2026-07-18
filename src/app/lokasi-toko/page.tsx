import type { Metadata } from "next";
import { LocationHero } from "@/components/locations/LocationHero";
import { LocationSearch } from "@/components/locations/LocationSearch";
import { branches } from "@/data/branches";
import "@/styles/locations.css";

export const metadata: Metadata = {
  title: "Lokasi Toko | Toko Cat Utama",
  description:
    "Temukan cabang Toko Cat Utama terdekat, lihat alamat, jam operasional, kontak, Google Maps, dan mesin tinting yang tersedia.",
};

export default function LocationsPage() {
  return (
    <main id="main-content">
      <LocationHero />
      <LocationSearch branches={branches} />
    </main>
  );
}
