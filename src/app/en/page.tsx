import { HomePage } from "@/components/home/home-page";
import { homeCopy } from "@/i18n/home";

export default function EnglishHomePage() {
  return <HomePage copy={homeCopy.en} />;
}
