import { GameFooter } from "@/components/game-footer";
import { ScrollObserver } from "@/components/scroll-observer";

export default function SiteLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      {/* Top Scroll Progress & Viewport Intersection Motion Engine */}
      <ScrollObserver />
      <div className="flex-1">{children}</div>
      <GameFooter />
    </>
  );
}
