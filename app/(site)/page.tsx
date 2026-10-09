import type { Metadata } from "next";
import { GameHero } from "@/components/game-hero";
import { GameNavbar } from "@/components/game-navbar";
import { HomeNewsSection } from "@/components/home-news-section";
import { HomeRankSection } from "@/components/home-rank-section.client";

export const metadata: Metadata = {
  title: "Ragnarok Infinite · Classic Revo EP. 4.0",
  description:
    "เซิร์ฟเวอร์ Ragnarok Online คลาสสิก ยุค 4.0 ระบบเสถียร ไร้บอท ไร้โปร ด้วย Gepard Shield 3.0 สนุกกับสงครามกิลด์วอร์ชิงเงินรางวัลรวมกว่า 500,000 บาท",
};

export default function HomePage() {
  return (
    <main className="motion-page bg-background text-foreground">
      {/* Fixed Centered Fantasy Navigation Bar */}
      <GameNavbar />

      {/* Hero Section */}
      <GameHero />

      {/* News & Events Preview Section */}
      <HomeNewsSection />

      {/* Leaderboard Ranking Section */}
      <HomeRankSection />
    </main>
  );
}
