import { HomePage } from "@/components/home/home-page";
import { homeCopy } from "@/i18n/home";

export default function ChineseHomePage() {
  return <HomePage copy={homeCopy.zh} />;
}
