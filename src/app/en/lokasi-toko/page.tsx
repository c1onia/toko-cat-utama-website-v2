import type { Metadata } from "next";
import { LocationsPage } from "@/components/locations/locations-page";
import "@/styles/locations.css";

export const metadata: Metadata = {
  title: "Store Locations | Toko Cat Utama",
  description:
    "Find the nearest Toko Cat Utama branch, including address, opening hours, contact, Google Maps, and available tinting machines.",
};

export default function EnglishLocationsPage() {
  return <LocationsPage locale="en" />;
}
